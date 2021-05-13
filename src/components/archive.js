import React from 'react';
import { Link } from './';
import Icon from './icon';

export default function Archive({ title, href, ...props }) {
  return (
    <Link to={href} title={title} className="small" {...props}>
      <PdfIcon /> {title}
    </Link>
  );
}

const PdfIcon = ({ className }) => (
  <Icon
    iconName="PDF"
    className={`fill-orange position-relative top-minus-2 ${className}`}
    width="16"
    height="auto"
  />
);
