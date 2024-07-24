Provisional docs for the XSLT translator

**Prerequisite - xsltproc is installed on your system**

1) You will need to obtain copies of the files at

https://github.com/EnterpriseDB/2ndqpostgres/blob/2QREL_13_STABLE_dev/doc/src/sgml/release-2q13.sgml

and

https://github.com/EnterpriseDB/2ndqpostgres/blob/2QREL_14_STABLE_dev/doc/src/sgml/release-2q14.sgml

2) Replace the existing pge13.sgml and pge14.sgml files under `tools/user/pgerelnotes/` with the updated files you downloaded in the previous step.

3) set $DOCSHOME to $HOME/docs or wherever you keep your docs tree

4) Ensure that your docs is checkout into a branch where you wish to update the release notes

5) cd $DOCSHOME/tools/user/pgerelnotes/pgerel

6) Run

xsltproc --param version 13  transform.xslt pge13wrap.xml >$DOCSHOME/product_docs/docs/pge/13/release_notes/index.mdx

xsltproc --param version 14  transform.xslt pge14wrap.xml >$DOCSHOME/product_docs/docs/pge/14/release_notes/index.mdx

7) Check in the modified files.




