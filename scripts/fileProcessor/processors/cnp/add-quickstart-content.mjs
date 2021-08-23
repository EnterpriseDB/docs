const additionalContent = `<!-- section below inserted by fileProcessor/processors/add-quickstart-content.js - changes made here will be lost -->

!!! Tip "Live demonstration"
    Don't want to install anything locally just yet? Try a demonstration directly in your browser:

    [Cloud Native PostgreSQL Operator Interactive Quickstart](interactive_demo)

<!-- end inserted section -->`;

const paragraphDelimiter = "\n\n";

export const process = (filename, content) => {
  const paragraphs = content.split(paragraphDelimiter);
  paragraphs.splice(2, 0, additionalContent);

  return {
    newFilename: filename,
    newContent: paragraphs.join(paragraphDelimiter),
  };
};
