import os
import re
import sys
import datetime
import pathlib

basePath = pathlib.Path(__file__).parent.absolute()

# magic snippet for inline repl
# import code; code.interact(local=dict(globals(), **locals()))

class ToCItem:
    def __init__(self, filename, chapter):
        self.filename = filename
        self.chapter = chapter
        self.title = ""
        self.anchor = ""

def putIndexFirst(e):
    return e.filename.replace("index.mdx", "00_index.mdx")

def putIndexFirst2(e):
    return e.replace("index.mdx", "00_index.mdx")

def getFilename(file):
    return file.filename   

def filterList(filename):
    if '.png' in filename or 'images' in filename or '.DS_Store' in filename:
        return False
    else:
        return True

def getTitle(dirName):
    indexPath = dirName + '/index.mdx'
    if os.path.exists(indexPath):
        indexFile = open(indexPath, 'r')
        for line in indexFile.readlines():
            if 'title: ' in line:
                return stripQuotes(line.replace('title: ', ''))
    return None

def stripQuotes(str):
    return str.strip().strip("'").strip('"')

def getListOfFiles(dirName, parentChapter):
    # create a list of file and sub directories 
    # names in the given directory 
    listOfFiles = list(filter(filterList, os.listdir(dirName)))
    listOfFiles.sort(key=putIndexFirst2)
    allFiles = list()
    chapter = 0

    # Iterate over all the entries
    for entry in listOfFiles:
        # Create full path
        fullPath = os.path.join(dirName, entry)
        # If entry is a directory then get the list of files in this directory 
        if os.path.isdir(fullPath):
            allFiles = allFiles + getListOfFiles(fullPath, parentChapter + str(chapter) + ".")
        elif '.mdx' in entry or '.md' in entry:
            allFiles.append(ToCItem(fullPath, parentChapter + str(chapter)))
                
        chapter += 1
    return allFiles
    
def main():
    dirName = ''
    try:
        dirName = sys.argv[1]
        dirName = re.sub(r'\/$', '', dirName)
    except:
        print('directory not passed in')
        print('if running from yarn use `yarn build-pdf directory/path/here`')
        sys.exit(1)

    openPdf = False
    html = False
    try:
        html = (sys.argv[2] == '--html')
        openPdf = (sys.argv[2] == '--open')
    except:
        pass

    splitDirName = dirName.split('/')
    product = splitDirName[2]
    version = splitDirName[3]

    mdxFilePath = "{0}/{1}_v{2}_documentation.mdx".format(dirName, product, version)
    htmlFilePath = "{0}/{1}_v{2}_documentation.html".format(dirName, product, version)
    coverFilePath = "{0}/{1}_v{2}_documentation_cover.html".format(dirName, product, version)
    pdfFilePath = "{0}/{1}_v{2}_documentation.pdf".format(dirName, product, version)

    if not os.path.exists(dirName):
        raise Exception('directory does not exist')

    if os.path.exists(mdxFilePath):
        os.remove(mdxFilePath)

    # Get the list of all files in directory tree at given path
    listOfFiles = getListOfFiles(dirName, "")
    if len(listOfFiles) == 0:
        raise Exception('no files in {}'.format(dirName));
    listOfFiles.pop(0) # remove base product index page, which are empty

    toc = list()
    for elem in listOfFiles:
        g = open(elem.filename, "r")
        for line in g.readlines():
            if "title: " in line:
                elem.title = line[7:].replace('"', '').replace('\n','')
            pattern = re.compile('div id="(.*?)" class="registered_link"')

            tag = pattern.search(line)
            if tag and len(elem.anchor) == 0:
                elem.anchor = tag.group(1)

    resourceSearchPaths = { dirName }
    
    # Print the files
    with open(mdxFilePath, 'w') as fp:
        for elem in listOfFiles:
            g = open(elem.filename, "r")

            baseImagePath = os.path.split(elem.filename)[0]
            resourceSearchPaths.add(baseImagePath)

            frontmatterCount = 2
            for line in g.readlines():
                newLine = line

                if line[0:2] == "# ":
                    newLine = "##" + line
                if line[0:3] == "## ":
                    newLine = "#" + line
                if "toctree" in line:
                    frontmatterCount = 3
                if frontmatterCount == 0:
                    fp.write(newLine)
                if "title: " in line:
                    newLine = re.sub(r'\.0', '', elem.chapter) + ("&nbsp;" * 10) + stripQuotes(line[7:]) + "\n"
                    fp.write(newLine)
                if "---" in line and frontmatterCount > 0:
                    frontmatterCount -= 1
                    fp.write(newLine)
            fp.write('\n')

    title = getTitle(dirName) or product

    os.system(
    "pandoc {0} " \
    "-f gfm " \
    "--self-contained " \
    '--highlight-style tango ' \
    "--css={3}/pdf-styles.css " \
    "--resource-path={2} " \
    "-o {1}".format(mdxFilePath, htmlFilePath, ':'.join(resourceSearchPaths), basePath)
    )

    if not os.path.exists(htmlFilePath):
        os.remove(mdxFilePath)
        raise Exception("\033[91m html file failed to generate for {} \033[0m".format(mdxFilePath))

    if html:
        os.system("open " + htmlFilePath)
    else:
        os.system(
        "sed " \
        "-e 's/\[PRODUCT\]/{1}/' " \
        "-e 's/\[VERSION\]/{2}/' " \
        "scripts/pdf/cover.html " \
        "> {0}" \
        "".format(coverFilePath, title, version)
        )

        headerFooterOptions = "" \
        "--header-right [doctitle] " \
        "--header-font-name Signika " \
        "--header-font-size 8 " \
        "--header-spacing 7 " \
        "--footer-right [page] " \
        "--footer-left 'Copyright © 2009 - {0} EnterpriseDB Corporation. All rights reserved.' " \
        "--footer-font-name Signika " \
        "--footer-font-size 8 " \
        "--footer-spacing 7 ".format(datetime.datetime.now().year)

        os.system(
        "wkhtmltopdf " \
        "--log-level error " \
        "--title '{3}' " \
        "--margin-top 15mm " \
        "--margin-bottom 15mm " \
        "{0} " \
        "--footer-font-name Signika " \
        "--footer-font-size 8 " \
        "--footer-spacing 7 " \
        "--footer-left 'Copyright © 2009 - {6} EnterpriseDB Corporation. All rights reserved.' " \
        "--footer-right 'Built at {5}' " \
        "toc --xsl-style-sheet scripts/pdf/toc-style.xsl " \
        "{4} " \
        "{1} " \
        "{4} " \
        "{2} " \
        "".format(
            coverFilePath,
            htmlFilePath,
            pdfFilePath,
            title,
            headerFooterOptions,
            datetime.datetime.utcnow().isoformat()[0:-7],
            datetime.datetime.now().year
        )
        )

    if openPdf:
        os.system("open " + pdfFilePath)

    os.remove(mdxFilePath)
    if not html:
        os.remove(htmlFilePath)
        os.remove(coverFilePath)

if __name__ == '__main__':
    main()
