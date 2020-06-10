import React from 'react';
import { Helmet } from 'react-helmet';

const Katacoda = ({account, 
        scenario, 
        "data-katacoda-layout": layout, 
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
    return <>
        <Helmet>
            <script src="https://katacoda.com/embed.js" />
        </Helmet>
        <div id={`katacoda-scenario-${account}-${scenario}`}
            data-katacoda-id={`${account}/${scenario}`}
            {...kataArgs}
            style={{height: height}}
            className={className}></div>
    </>
};
  
export default Katacoda;
