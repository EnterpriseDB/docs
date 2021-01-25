import React from 'react';
import { Link } from 'gatsby';

const TimestampLink = ({ timestamp, githubFileLink }) => {
  if (timestamp) {
    return (
      <div>
        {githubFileLink ? (
          <a href={githubFileLink}> Modified {timestamp.split('T')[0]} </a>
        ) : (
          <span>Modified {timestamp.split('T')[0]}</span>
        )}
      </div>
    );
  } else if (githubFileLink) {
    return (
      <div>
        <a href={githubFileLink}>File History</a>
      </div>
    );
  } else {
    return null;
  }
};

const Footer = ({ timestamp, githubFileLink }) => (
  <footer className="mt-5 opacity-6 small d-flex justify-content-between">
    <div>
      <span className="text-muted mx-2">© EDB</span>·
      <Link className="text-muted mx-2" to="https://www.enterprisedb.com/gdpr">
        GDPR
      </Link>
      ·
      <Link className="text-muted mx-2" to="https://www.enterprisedb.com/privacy-policy">
        Privacy Policy
      </Link>
      ·
      <Link className="text-muted mx-2" to="https://www.enterprisedb.com/terms-use">
        Terms of Use
      </Link>
      ·
      <Link className="text-muted mx-2" to="https://www.enterprisedb.com/trademarks">
        Trademarks
      </Link>
    </div>

    <TimestampLink timestamp={timestamp} githubFileLink={githubFileLink} />
  </footer>
);

export default Footer;
