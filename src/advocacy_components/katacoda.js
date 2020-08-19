import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Katacoda = ({account, 
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

        const [shownClass, setShownClass] = useState(clickToShowText ? 'd-none' : '');
        const scenarioId = account ? [account, scenario].join('/') : scenario;

        // no space reserved when using bottom panel
        if ( panel ) height = '0';

        const toggleKata = () => {
            if ( panel && shownClass )
            {

                // fixes two issues with Katacoda: 
                // 1. KC likes to wire up <code> instead of <pre>, which plays hell with syntax highlighting
                // 2. KC doesn't like to wire up anything that doesn't have its favorite attributes, 
                //    which just makes using data awkward

                WireCodeToKatacoda(codelanguages.split(",").map(l => "pre.language-" + l).join(","));

                function WireCodeToKatacoda(selector) {
                    var codeBlocks = document.querySelectorAll(selector);
                    for (const c of codeBlocks) {
                        if (c.style.cursor === "pointer") continue;
                        c.style.cursor = "pointer";
                        c.addEventListener("click", 
                            (e) => window.katacoda.write(e.target.closest(selector).textContent), false);
                    }
                }

                // adapted from Katacoda src to patch over http->https redirect issues
                // when testing locally - remove once Katacoda has this fixed
                window.katacoda.write = window.katacoda.writeToTerminal = function (cmd) {
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
                };

                // last hack: make room for the panel! This... Really needs a better idea.
                document.querySelector("main").style.marginBottom="40%";

                window.katacoda.init();
            }
            setShownClass(shownClass ? '' : 'd-none');
        };

    return <>
        <Helmet>
            <script src="https://katacoda.com/embed.js" />
        </Helmet>
        <button type="button" onClick={toggleKata} className="btn btn-secondary">{shownClass ? clickToShowText : 'Close live demo'}</button>
        <div className={`alert alert-info col-auto ${shownClass}`} role="alert">(Click code blocks to execute in terminal)</div>
        <div id={`katacoda-scenario-${account}-${scenario}`}
                data-katacoda-id={scenarioId}
                {...kataArgs}
                style={{height: height}}
                className={[className, shownClass].join(' ')}></div>
    </>
};
  
export default Katacoda;
