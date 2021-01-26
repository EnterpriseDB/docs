import React from 'react';
import { Link } from 'gatsby';

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
    <Link className="text-muted mx-2" to="/">
      GDPR
    </Link>
    ·
    <Link className="text-muted mx-2" to="/">
      Privacy Policy
    </Link>
    ·
    <Link className="text-muted mx-2" to="/">
      Terms of Use
    </Link>
    ·
    <Link className="text-muted mx-2" to="/">
      Trademarks
    </Link>
    <TimestampLink timestamp={timestamp} githubFileLink={githubFileLink} />
  </footer>
);

export default Footer;
