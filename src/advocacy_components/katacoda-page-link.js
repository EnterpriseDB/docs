import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon';

const KatacodaPageLink = ({ scenarioId }) => (
  <div className="d-flex align-items-center mt-5 mb-5">
    <Link to={scenarioId} className="mr-5" target="_blank">
      <Button variant='info' className="text-left" style={{minWidth: '180px'}}>
        <div>Interactive Tutorial</div>
        <div className='font-weight-bold' style={{fontSize: '1.2rem'}}>Launch Now</div>
      </Button>
    </Link>
    <div className="d-flex align-items-center">
      <Icon
        iconName={iconNames.CONSOLE}
        className="fill-orange ny-n1"
        width={20}
        circle={true}
        circleDiameter={45}
        circleClassName="bg-blue-10"
      />
      <div className="ml-2">
        Clicking <span className='font-weight-bold'>Launch Now</span> will
        take you to the tutorial page
      </div>
    </div>
  </div>
);

export default KatacodaPageLink;
