import React from "react";
import { Helmet } from "react-helmet";

const KatacodaPageEmbed = ({ account, scenario }) => {
  const scenarioId = account ? [account, scenario].join("/") : scenario;

  return (
    <>
      <Helmet>
        <script src="https://katacoda.com/embed.js" />
      </Helmet>

      <div
        data-katacoda-id={scenarioId}
        data-katacoda-color="e94621"
        className="katacoda-page-embed"
      />
    </>
  );
};

export default KatacodaPageEmbed;
