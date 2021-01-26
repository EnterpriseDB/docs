import React from 'react';

const TimestampLink = ({ timestamp, githubFileLink }) => {
  if (timestamp) {
    return (
      <>
        ·
        <div className="d-inline-block mx-2">
          {githubFileLink ? (
            <a href={githubFileLink}> Modified {timestamp.split('T')[0]} </a>
          ) : (
            <span>Modified {timestamp.split('T')[0]}</span>
          )}
        </div>
      </>
    );
  } else if (githubFileLink) {
    return (
      <>
        ·
        <div className="d-inline-block mx-2">
          <a href={githubFileLink}>File History</a>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const Footer = ({ timestamp, githubFileLink }) => (
  <footer className="mt-5 opacity-6 small text-center">
    <span className="text-muted mx-2">© EDB</span>·
    <a className="text-muted mx-2" href="/">
      GDPR
    </a>
    ·
    <a className="text-muted mx-2" href="/">
      Privacy Policy
    </a>
    ·
    <a className="text-muted mx-2" href="/">
      Terms of Use
    </a>
    ·
    <a className="text-muted mx-2" href="/">
      Trademarks
    </a>
    <TimestampLink timestamp={timestamp} githubFileLink={githubFileLink} />
  </footer>
);

export default Footer;
