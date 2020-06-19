import React from 'react';
import IconType from './iconType';
import iconNames from './iconNames';

function Icon({ circle, circleClassName, circleDiameter, ...rest }) {
  if (circle && circleDiameter) {
    return (
      <div
        className={`hpx-${circleDiameter} wpx-${circleDiameter} rounded-circle
        mx-auto d-flex justify-content-center align-items-center ${circleClassName}`}
      >
        {IconType(rest)}
      </div>
    );
  } else {
    return IconType(rest);
  }
}

Icon.defaultProps = {
  className: 'dottedbox',
  circleClassName: '',
  circleDiameter: 100,
  circle: false,
  width: 100,
  height: 100,
};

export {
  iconNames,
};

export default Icon;
