import React from 'react';
import { Link } from 'gatsby';
import DottedBox from './icons/dotted-box';

const IndexLinks = ({ indexLinkList }) => (
  <>
    {indexLinkList.map(section => {
      return (
        <ul key={section.sectionName} className="list-unstyled mt-0">
          <li className="mt-3 mb-2 font-weight-bold text-muted text-uppercase small">
            {section.sectionName}
          </li>
          {section.links.map(link => {
            return (
              <li key={link.title} className="ml-0">
                <Link to={link.url} className="d-block py-1 align-middle">
                  <DottedBox
                    className="opacity-2 mr-2 mt-n1"
                    width="20"
                    height="20"
                  />
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    })}
  </>
);

export default IndexLinks;
