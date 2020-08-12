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
        className='katacoda-embed'}) => {

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
                // allow Katacoda to recognize its commands
                for (var e of document.querySelectorAll("code.language-shell")) 
                    e.dataset.lang = "shell";
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
