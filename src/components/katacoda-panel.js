import React, { useState, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon';

const KatacodaPanelToggleClosed = ({ onClick }) => (
  <div className="d-flex align-items-center mt-5 mb-5">
    <div className="mr-5">
      <Button
        onClick={onClick}
        variant="info"
        className="katacoda-start-button"
      >
        <div>Interactive Tutorial</div>
        <div className="font-weight-bold cta">Start Now</div>
      </Button>
    </div>
    <div className="d-flex align-items-center">
      <Icon
        iconName={iconNames.CONSOLE}
        className="fill-orange ny-n1"
        width={20}
        circle={true}
        circleDiameter={45}
        circleClassName="bg-blue-10"
      />
      <div className="ml-2">
        Clicking <span className="font-weight-bold">Start Now</span> will load
        an interactive terminal in this window
      </div>
    </div>
  </div>
);

const KatacodaPanelToggleOpenInstruction = ({ children, className = '' }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Icon
      iconName={iconNames.CHEVRON_RIGHT}
      width={13}
      circle={true}
      circleDiameter={25}
      circleClassName="bg-blue-10 mr-3"
      circleAutoMargin={false}
    />
    {children}
  </div>
);

const KatacodaPanelToggleOpen = ({ onClick }) => (
  <div className="d-flex align-items-center mt-5 mb-5">
    <div className="mr-5">
      <Button
        onClick={onClick}
        variant="outline-info"
        className="katacoda-start-button"
      >
        <div>Interactive Tutorial</div>
        <div className="font-weight-bold cta">Enabled</div>
      </Button>
    </div>
    <div className="d-flex flex-column">
      <KatacodaPanelToggleOpenInstruction className="py-1">
        Follow along with the steps below
      </KatacodaPanelToggleOpenInstruction>
      <KatacodaPanelToggleOpenInstruction>
        Click
        <Button
          size="sm"
          variant="outline-info"
          className="mx-2 katacoda-exec-button d-inline"
        >
          ► Run
        </Button>
        to execute a code block in your terminal
      </KatacodaPanelToggleOpenInstruction>
    </div>
  </div>
);

/*
  Full set of katacoda options

  "data-katacoda-ui"
  "data-katacoda-ondemand"
  "data-katacoda-layout"
  "data-katacoda-port"
  "data-katacoda-lang"
  "data-katacoda-token"
  "data-katacoda-userid"
  "data-katacoda-filename"
  "data-katacoda-command"
  "data-katacoda-runinbackground"
  "data-katacoda-prompt"
  "data-katacoda-color"
  "data-katacoda-secondary"
  "data-katacoda-background"
  "data-katacoda-hideintro"
  "data-katacoda-hidefinish"
  "data-katacoda-hidetitle"
  "data-katacoda-hidesidebar"
  "data-katacoda-hideprogress"
  "data-katacoda-font"
  "data-katacoda-fontheader"
  "data-katacoda-startscenariobuttontext"
  "data-katacoda-ctaurl"
  "data-katacoda-ctatext"
  "data-katacoda-externalcss"
  "data-katacoda-hideiframebuttons"
*/

const KatacodaPanel = ({ katacodaPanelData }) => {
  if (!katacodaPanelData) {
    throw new Error('katacodaPanel frontmatter missing!');
  }
  const account = katacodaPanelData.account;
  const scenario = katacodaPanelData.scenario;
  const command = katacodaPanelData.initializeCommand;

  const [isShown, setShown] = useState(false);
  const scenarioId = account ? [account, scenario].join('/') : scenario;
  const panelElementId = `katacoda-scenario-${account}-${scenario}`;

  const toggleKata = () => {
    setShown(!isShown);
    if (!isShown) {
      window.katacoda.init();
      window.katacoda.write = katacodaHttpsWriter;
    }
  };

  useAdjustLayoutCloseDetection(isShown, panelElementId, setShown);

  return (
    <>
      <Helmet>
        <script
          src="https://katacoda.com/embed.js"
          data-katacoda-ondemand="true"
        />
      </Helmet>

      {isShown ? (
        <KatacodaPanelToggleOpen onClick={toggleKata} />
      ) : (
        <KatacodaPanelToggleClosed onClick={toggleKata} />
      )}

      <div
        id={panelElementId}
        className={`katacoda-panel${isShown ? '' : ' d-none'}`}
        data-katacoda-id={scenarioId}
        data-katacoda-ui="panel"
        data-katacoda-command={command}
        data-katacoda-color="e94621"
        data-katacoda-ondemand="true"
      />
    </>
  );
};

const useAdjustLayoutCloseDetection = (isShown, panelElementId, setShown) => {
  useLayoutEffect(() => {
    if (isShown) {
      // make room for the panel!
      document.documentElement.classList.add('katacoda-panel-active');

      // detect when katacoda is closed via the internal button
      const handler = (e) => {
        if (
          e.data.type === 'close-panel' &&
          (e.data.data || { target: null }).target === panelElementId
        ) {
          setShown(false);
        }
      };
      window.addEventListener('message', handler);

      return () => {
        document.documentElement.classList.remove('katacoda-panel-active');
        window.removeEventListener('message', handler);
      };
    }
  }, [isShown, panelElementId, setShown]);
};

// adapted from Katacoda src to patch over http to https redirect issues
// when testing locally - remove once Katacoda has this fixed
const katacodaHttpsWriter = (cmd) => {
  let target = document.querySelectorAll('[data-katacoda-env]');
  if (target.length === 0)
    target = document.querySelectorAll('[data-katacoda-id]');
  if (target.length === 0) {
    if (console && console.error) console.error('No katacoda elements found');
    return;
  }

  const p = document.getElementById(target[0].getAttribute('id'));
  const iframe = p.getElementsByTagName('iframe')[0];
  if (!iframe) return;

  iframe.contentWindow.postMessage(
    { cmd: 'writeTerm', data: cmd },
    `https://${new URL(iframe.src).host}`,
  );
};

export default KatacodaPanel;
