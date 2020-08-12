import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="mt-5 opacity-6 small">
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
  </footer>
);

export default Footer;
