import React from 'react';
import { Helmet } from "react-helmet"

const Katacoda = ({account, scenario, highlightColor="e94621", className='katacoda-embed'}) => (
    <>
        <Helmet>
            <script src="https://katacoda.com/embed.js" />
        </Helmet>
        <div id={`katacoda-scenario-${account}-${scenario}`}
            data-katacoda-id={`${account}/${scenario}`}
            data-katacoda-color={highlightColor}
            className={className}></div>
    </>
);
  
export default Katacoda;
