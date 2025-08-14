import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { useLocation } from "@gatsbyjs/reach-router";

const childToString = (child) => {
  if (typeof child === "string") {
    return child; // hit string, unroll
  } else if (child && child.props && child.props.children?.map) {
    return child.props.children.map((c) => childToString(c)).join("");
  } else if (child && child.props) {
    return childToString(child.props.children);
  } else console.warn("Unexpected child type in CodeBlock:", child);

  return "";
};

const popExtraNewLines = (code) => {
  if (typeof code[0] === "string") code[0] = code[0].replace(/^\n+/, "");
  if (typeof code[code.length - 1] === "string")
    code[code.length - 1] = code[code.length - 1].replace(/\n+$/, "");
  while (
    code.length > 0 &&
    childToString(code[code.length - 1]).replace(/\n+$/, "") === ""
  ) {
    code.pop();
  }
  while (code.length > 0 && childToString(code[0]).replace(/^\n+/, "") === "") {
    code.shift();
  }
};

const splitChildrenIntoCodeAndOutput = (rawChildren, urlpath) => {
  if (!rawChildren) {
    return [[], []];
  }

  // Simplified regex to split on the __OUTPUT__ marker
  const splitRegex = /(?:\n|^)[ \t\f\v]*__OUTPUT__[ \t\f\v]*(?:\n|$)/;
  const code = [];
  const output = [];

  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  let splitFound = false;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (splitFound) {
      // we've already split, toss it into output and move on
      output.push(childToString(child));
      // warn if we do find another __OUTPUT__ marker - this is likely a mistake
      if (splitRegex.test(output.at(-1)))
        console.warn(
          urlpath +
            ": Found another __OUTPUT__ marker after the first one, this is likely a mistake.",
        );
      continue;
    }

    const sChild = childToString(child);
    const splitChild = sChild.split(splitRegex);
    if (splitChild.length > 1) {
      // found split location
      code.push(splitChild[0].replace(/(\n|\r\n)*$/g, "")); // will convert token to pure text, seems to be okay in practice
      output.push(splitChild[1].replace(/^(\n|\r\n)*/g, ""));
      popExtraNewLines(code);
      splitFound = true;
    } else {
      code.push(child);
    }
  }

  popExtraNewLines(code);

  return [code, output];
};

const unwrappedstring = "→ Wrap";
const wrappedstring = "↩ Unwrap";

const CodePre = ({ className, content, runnable, startWrapped }) => {
  const codeRef = React.createRef();
  const [wrapButtonText, setWrapButtonText] = useState(
    !startWrapped ? unwrappedstring : wrappedstring,
  );
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const copyClick = (e) => {
    const text = codeRef.current && codeRef.current.textContent;
    navigator.clipboard.writeText(text).then(() => {
      setCopyButtonText("Copied!");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 3000);
    });
    e.target.blur();
  };

  const [wrap, setWrap] = useState(startWrapped);

  const wrapClick = (e) => {
    setWrap(!wrap);
    if (!wrap) {
      setWrapButtonText(wrappedstring);
    } else {
      setWrapButtonText(unwrappedstring);
    }
    e.target.blur();
  };

  const [canRun, setCanRun] = useState(true);
  const runClick = (e) => {
    const text = codeRef.current && codeRef.current.textContent;
    window.katacoda.write(text);
    setCanRun(false);
    setTimeout(() => {
      setCanRun(true);
    }, 3000);
    e.target.blur();
  };

  return (
    <>
      <div className="codeblock-controls d-flex">
        <div>
          <OverlayTrigger
            delay={{ hide: 450, show: 300 }}
            overlay={(props) => <Tooltip {...props}>Toggle wrapping</Tooltip>}
            placement="bottom"
          >
            <Button size="sm" variant="link" onClick={wrapClick}>
              {wrapButtonText}
            </Button>
          </OverlayTrigger>
          <Button size="sm" variant="link" onClick={copyClick}>
            {copyButtonText}
          </Button>
        </div>

        {runnable && (
          <Button
            size="sm"
            variant="outline-info"
            className="katacoda-exec-button"
            onClick={runClick}
            disabled={!canRun}
          >
            ► Run
          </Button>
        )}
      </div>

      <pre
        className={`${className} ${wrap && "ws-prewrap"} m-0 br-tl-0 br-tr-0`}
        ref={codeRef}
      >
        {content}
      </pre>
    </>
  );
};

const OutputPre = ({ content }) => (
  <div className="mt-1 output-block">
    <div className="codeblock-controls output-label ps-2 pe-2 pt-2">Output</div>
    <pre className="language-text m-0 br-tl-0 br-tr-0">{content}</pre>
  </div>
);

const CodeBlock = ({ children, codeLanguages, ...otherProps }) => {
  const location = useLocation();
  const childIsComponent = !!children.props; // true in normal usage, false if raw <pre> tags are used

  const [codeContent, outputContent] = childIsComponent
    ? splitChildrenIntoCodeAndOutput(children.props.children, location.pathname)
    : [children, ""];

  const startWrapped = false;

  const language = childIsComponent
    ? (children.props.className || "").replace("language-", "")
    : "text";

  const execLanguages = codeLanguages
    ? ["shell"].concat(codeLanguages?.split(",")?.map((l) => l.trim()))
    : [];

  return (
    <figure className="codeblock-wrapper katacoda-enabled">
      <CodePre
        className={`language-${language}`}
        content={codeContent}
        runnable={execLanguages.includes(language)}
        startWrapped={startWrapped}
      />
      {outputContent.length > 0 && <OutputPre content={outputContent} />}
    </figure>
  );
};

export default CodeBlock;
