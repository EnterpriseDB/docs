import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon';

const KatacodaPanelToggleClosed = ({ onClick }) => (
  <div className="d-flex align-items-center mt-5 mb-5">
    <div className="mr-5">
      <Button onClick={onClick} variant='info' className="text-left" style={{minWidth: '180px'}}>
        <div>Interactive Tutorial</div>
        <div className='font-weight-bold' style={{fontSize: '1.2rem'}}>Start Now</div>
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
        Clicking <span className='font-weight-bold'>Start Now</span> will
        load an interactive terminal in this window
      </div>
    </div>
  </div>
);

const KatacodaPanelToggleOpenInstruction = ({ children, className="" }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Icon
      iconName={iconNames.CHEVRON_RIGHT}
      width={13}
      circle={true}
      circleDiameter={25}
      circleClassName="bg-blue-10 mr-3"
      circleAutoMargin={false}
    />
    { children }
  </div>
)

const KatacodaPanelToggleOpen = ({ onClick }) => (
  <div className="d-flex align-items-center mt-5 mb-5">
    <div className="mr-5">
      <Button onClick={onClick} variant='outline-info' className="text-left" style={{minWidth: '180px'}}>
        <div>Interactive Tutorial</div>
        <div className='font-weight-bold' style={{fontSize: '1.2rem'}}>Enabled</div>
      </Button>
    </div>
    <div className="d-flex flex-column">
      <KatacodaPanelToggleOpenInstruction className="py-1">
        Follow along with the steps below
      </KatacodaPanelToggleOpenInstruction>
      <KatacodaPanelToggleOpenInstruction>
        Click
        <Button size="sm" variant="outline-info" className="mx-2 katacoda-exec-button d-inline">► Run</Button>
        to execute a code block in your terminal
      </KatacodaPanelToggleOpenInstruction>
    </div>
  </div>
);

const KatacodaPanel = ({
    account,
    scenario,
    clickToShowText = '',
    panel = false,
    layout = undefined,
    port = undefined,
    lang = undefined,
    token = undefined,
    userid = undefined,
    filename = undefined,
    command = undefined,
    runinbackground = undefined,
    prompt = undefined,
    color = "e94621",
    secondary = undefined,
    background = undefined,
    hideintro = undefined,
    hidefinish = undefined,
    hidetitle = undefined,
    hidesidebar = undefined,
    hideprogress = undefined,
    font = undefined,
    fontheader = undefined,
    startscenariobuttontext = undefined,
    ctaurl = undefined,
    ctatext = undefined,
    externalcss = undefined,
    hideiframebuttons = undefined,
    height='600px',
    className='katacoda-embed',
    codelanguages='shell'}) => {

    const kataArgs =
    {
        "data-katacoda-ui": panel ? 'panel' : undefined,
        "data-katacoda-ondemand": panel && clickToShowText ? 'true' : undefined,
        "data-katacoda-layout": layout,
        "data-katacoda-port": port,
        "data-katacoda-lang": lang,
        "data-katacoda-token": token,
        "data-katacoda-userid": userid,
        "data-katacoda-filename": filename,
        "data-katacoda-command": command,
        "data-katacoda-runinbackground": runinbackground,
        "data-katacoda-prompt": prompt,
        "data-katacoda-color": color,
        "data-katacoda-secondary": secondary,
        "data-katacoda-background": background,
        "data-katacoda-hideintro": hideintro,
        "data-katacoda-hidefinish": hidefinish,
        "data-katacoda-hidetitle": hidetitle,
        "data-katacoda-hidesidebar": hidesidebar,
        "data-katacoda-hideprogress": hideprogress,
        "data-katacoda-font": font,
        "data-katacoda-fontheader": fontheader,
        "data-katacoda-startscenariobuttontext": startscenariobuttontext,
        "data-katacoda-ctaurl": ctaurl,
        "data-katacoda-ctatext": ctatext,
        "data-katacoda-externalcss": externalcss,
        "data-katacoda-hideiframebuttons": hideiframebuttons
    };

    const [isShown, setShown] = useState(!clickToShowText);
    const scenarioId = account ? [account, scenario].join('/') : scenario;
    const panelElementId = `katacoda-scenario-${account}-${scenario}`;
    const codeBlocksSelector = codelanguages.split(",").map(l => "pre.language-" + l).join(",");

    // no space reserved when using bottom panel
    if ( panel ) height = '0';

    const toggleKata = () => {
        setShown(!isShown);
        if (panel && !isShown) {
            window.katacoda.init();
            window.katacoda.write = KatacodaHttpsWrite;
        }
    };

    CodeTriggersKatacoda(codeBlocksSelector, panel && isShown);

    useLayoutEffect(() => {
        if (panel && isShown)
        {
            // make room for the panel!
            document.documentElement.classList.add("katacoda-panel-active");
            // detect when katacoda is closed via the internal button
            const handler = (e) => {
                if (e.data.type === "close-panel" && e.data.data && e.data.data.target
                    && e.data.data.target === panelElementId )
                {
                    setShown(false);
                }
            };
            window.addEventListener("message", handler);
            return () => {
                document.documentElement.classList.remove("katacoda-panel-active");
                window.removeEventListener("message", handler);
            };
        }
    }, [panel, isShown, panelElementId, setShown]);

    return <>
        <Helmet>
            <script src="https://katacoda.com/embed.js" />
        </Helmet>

        { (isShown && panel) ?
            <KatacodaPanelToggleOpen onClick={toggleKata} /> :
            <KatacodaPanelToggleClosed onClick={toggleKata} />
        }

        <div id={panelElementId}
                data-katacoda-id={scenarioId}
                {...kataArgs}
                style={{height: height}}
                className={`${className}${isShown ? '' : ' d-none'}`}></div>
    </>
};

// fixes two issues with Katacoda:
// 1. KC likes to wire up <code> instead of <pre>, which plays hell with syntax highlighting
// 2. KC doesn't like to wire up anything that doesn't have its favorite attributes,
//    which just makes using data awkward
function CodeTriggersKatacoda(codeSelector, isShown)
{
    useEffect(() => {
        if (!isShown) return;

        const callback = (e) =>
        {
            const matched = e.target.closest(codeSelector);
            if (matched) window.katacoda.write(matched.textContent);
        };

        const codeBlocks = document.querySelectorAll(codeSelector);
        window.addEventListener("click", callback);
        for (const c of codeBlocks) {
            if (c.classList.contains("katacoda-exec")) continue;
            c.classList.add("katacoda-exec");
        }
        return () => {
            for (const c of codeBlocks)
                c.classList.remove("katacoda-exec");
            window.removeEventListener("click", callback);
        };
    });
}

// adapted from Katacoda src to patch over http to https redirect issues
// when testing locally - remove once Katacoda has this fixed
function KatacodaHttpsWrite(cmd) {
    var target = document.querySelectorAll("[data-katacoda-env]");
    if (target.length === 0)
        target = document.querySelectorAll("[data-katacoda-id]");
    if (target.length === 0) {
        if (console && console.error) console.error("No katacoda elements found");
        return;
    }
    var p = document.getElementById(target[0].getAttribute("id"));
    var iframe = p.getElementsByTagName("iframe")[0];
    if (!iframe) return;
    var host = (new URL(iframe.src)).host;
    iframe.contentWindow.postMessage(
        { cmd: "writeTerm", data: cmd },
        "https://" + host
    );
}
export default KatacodaPanel;
