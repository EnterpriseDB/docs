import React from 'react';
import PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded$3 = ["title", "titleId"];

var SvgMoon = function SvgMoon(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};

SvgMoon.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$2 = ["title", "titleId"];

var SvgNotFound = function SvgNotFound(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};

SvgNotFound.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1 = ["title", "titleId"];

var SvgServerError = function SvgServerError(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};

SvgServerError.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded = ["title", "titleId"];

var SvgSun = function SvgSun(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};

SvgSun.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

export { SvgMoon as Moon, SvgNotFound as NotFound, SvgServerError as ServerError, SvgSun as Sun };
