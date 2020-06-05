import React from 'react';
import { Helmet } from "react-helmet"

const Katacoda = ({account, scenario, highlightColor="e94621"}) => (
    <>
        <Helmet>
            <script src="https://katacoda.com/embed.js" />
        </Helmet>
        <div id={`katacoda-scenario-${account}-${scenario}`}
            data-katacoda-id={`${account}/${scenario}`}
            data-katacoda-color={highlightColor}
            style={{height: '600px', paddingTop: '20px'}}></div>
    </>
);
  
export default Katacoda;
