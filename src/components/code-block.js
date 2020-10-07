import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const childToString = (child) => {
  if (typeof child === 'string') {
    return child; // hit string, unroll
  } else if (child && child.props) {
    return childToString(child.props.children);
  }

  return '';
}

const popExtraNewLines = (code) => {
  while (code.length - 1 > 0 && childToString(code[code.length - 1]).trim() === '') {
    code.pop();
  }
}

const splitChildrenIntoCodeAndOutput = (rawChildren) => {
  if (!rawChildren) { return [[], []]; }

  const splitRegex = /(?:\s+|^)__OUTPUT__(?:\s+|$)/;
  const code = [];
  const output = [];

  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  let splitFound = false;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (splitFound) { // we've already split, toss it into output and move on
      output.push(childToString(child));
      continue;
    }

    const sChild = childToString(child);
    const splitChild = sChild.split(splitRegex);
    if (splitChild.length > 1) { // found split location
      code.push(splitChild[0].replace(/(\n|\r\n)*$/g, '')); // will convert token to pure text, seems to be okay in practice
      output.push(splitChild[1].replace(/^(\n|\r\n)*/g, ''));
      popExtraNewLines(code);
      splitFound = true;
    } else {
      code.push(child);
    }
  }

  return [code, output];
};

const CodePre = ({ className, content, runnable }) => {
  const codeRef = React.createRef();
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const copyClick = (e) => {
    const text = codeRef.current && codeRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 3000)
    });
    e.target.blur();
  };

  const [wrap, setWrap] = useState(false);
  const wrapClick = (e) => {
    setWrap(!wrap);
    e.target.blur();
  }

  const runClick = (e) => {
    const text = codeRef.current && codeRef.current.textContent;
    window.katacoda.write(text);
    e.target.blur();
  };

  return (
    <>
      <div className="codeblock-controls d-flex">
        <div>
          <Button size="sm" variant="link" onClick={wrapClick}>Toggle Wrap</Button>
          <Button size="sm" variant="link" onClick={copyClick}>{copyButtonText}</Button>
        </div>

        { runnable &&
          <Button
            size="sm"
            variant="outline-info"
            className="katacoda-exec-button"
            onClick={runClick}
          >
            ► Run
          </Button>
        }
      </div>

      <pre className={`${className} ${wrap && 'ws-prewrap'} m-0 br-tl-0 br-tr-0`} ref={codeRef}>
        { content }
      </pre>
    </>
  );
};

const OutputPre = ({ content }) => (
  <div className="mt-1">
    <div className="codeblock-controls pl-2 pr-2 pt-2">
      OUTPUT
    </div>
    <pre className='language-text m-0 br-tl-0 br-tr-0'>
      { content }
    </pre>
  </div>
);

const CodeBlock = ({ children, katacodaPanelData, ...otherProps }) => {
  const [codeContent, outputContent] = splitChildrenIntoCodeAndOutput(children.props.children);
  const execLanguages = katacodaPanelData ? ['shell'].concat(katacodaPanelData.codelanguages) : [];
  const language = children.props.className.replace('language-','');

  if (codeContent.length > 0) {
    return (
      <figure className='codeblock-wrapper katacoda-enabled'>
        <CodePre
          className={children.props.className}
          content={codeContent}
          runnable={execLanguages.includes(language)}
        />
        { outputContent.length > 0 && <OutputPre content={outputContent} /> }
      </figure>
    );
  } else {
    return null;
  }
}

export default CodeBlock;
