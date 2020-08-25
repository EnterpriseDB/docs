import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';

const Katacoda = ({
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
        <button type="button" onClick={toggleKata} className="btn btn-secondary">{isShown ? 'Close live demo' :  clickToShowText}</button>
        <div className={`alert alert-info col-auto${isShown && panel ? '' : ' d-none'}`} role="alert">(Click code blocks to execute in terminal)</div>
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
export default Katacoda;
