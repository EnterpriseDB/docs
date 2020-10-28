import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ timestamp, githubFileLink }) => (
  <footer className="mt-5 opacity-6 small d-flex justify-content-between">
    <div>
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
    </div>

    { timestamp && 
      <div>
        { githubFileLink ?
          <a href={githubFileLink}> Modified { timestamp.split('T')[0] } </a> :
          <span>Modified { timestamp.split('T')[0] }</span>
        }
      </div>
    }
  </footer>
);

export default Footer;
