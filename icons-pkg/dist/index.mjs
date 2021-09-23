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

var _excluded$2c = ["title", "titleId"];

var SvgAlert = function SvgAlert(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2c);

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

SvgAlert.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$2b = ["title", "titleId"];

var SvgAnnounce = function SvgAnnounce(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2b);

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

SvgAnnounce.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$2a = ["title", "titleId"];

var SvgArrowLeft = function SvgArrowLeft(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2a);

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

SvgArrowLeft.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$29 = ["title", "titleId"];

var SvgArrowRight = function SvgArrowRight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$29);

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

SvgArrowRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$28 = ["title", "titleId"];

var SvgBarman = function SvgBarman(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$28);

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

SvgBarman.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$27 = ["title", "titleId"];

var SvgBigData = function SvgBigData(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$27);

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

SvgBigData.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$26 = ["title", "titleId"];

var SvgBrainCircuit = function SvgBrainCircuit(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$26);

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

SvgBrainCircuit.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$25 = ["title", "titleId"];

var SvgBriefcase = function SvgBriefcase(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$25);

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

SvgBriefcase.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$24 = ["title", "titleId"];

var SvgBusinessman = function SvgBusinessman(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$24);

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

SvgBusinessman.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$23 = ["title", "titleId"];

var SvgBusinesswoman = function SvgBusinesswoman(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$23);

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

SvgBusinesswoman.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$22 = ["title", "titleId"];

var SvgCaseStudy = function SvgCaseStudy(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$22);

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

SvgCaseStudy.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$21 = ["title", "titleId"];

var SvgCertificate = function SvgCertificate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$21);

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

SvgCertificate.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$20 = ["title", "titleId"];

var SvgChange = function SvgChange(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$20);

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

SvgChange.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1$ = ["title", "titleId"];

var SvgChecklist = function SvgChecklist(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1$);

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

SvgChecklist.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1_ = ["title", "titleId"];

var SvgCheckmark = function SvgCheckmark(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1_);

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

SvgCheckmark.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1Z = ["title", "titleId"];

var SvgChevronDown = function SvgChevronDown(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1Z);

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

SvgChevronDown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1Y = ["title", "titleId"];

var SvgChevronRight = function SvgChevronRight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1Y);

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

SvgChevronRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1X = ["title", "titleId"];

var SvgClose = function SvgClose(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1X);

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

SvgClose.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1W = ["title", "titleId"];

var SvgCloudChecked = function SvgCloudChecked(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1W);

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

SvgCloudChecked.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1V = ["title", "titleId"];

var SvgCloudDb = function SvgCloudDb(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1V);

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

SvgCloudDb.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1U = ["title", "titleId"];

var SvgCloudDba = function SvgCloudDba(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1U);

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

SvgCloudDba.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1T = ["title", "titleId"];

var SvgCloudPrivate = function SvgCloudPrivate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1T);

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

SvgCloudPrivate.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1S = ["title", "titleId"];

var SvgCloudPublic = function SvgCloudPublic(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1S);

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

SvgCloudPublic.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1R = ["title", "titleId"];

var SvgCodeWriting = function SvgCodeWriting(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1R);

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

SvgCodeWriting.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1Q = ["title", "titleId"];

var SvgCoffee = function SvgCoffee(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1Q);

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

SvgCoffee.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1P = ["title", "titleId"];

var SvgConfigManagement = function SvgConfigManagement(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1P);

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

SvgConfigManagement.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1O = ["title", "titleId"];

var SvgConflict = function SvgConflict(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1O);

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

SvgConflict.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1N = ["title", "titleId"];

var SvgConnect = function SvgConnect(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1N);

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

SvgConnect.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1M = ["title", "titleId"];

var SvgConsole = function SvgConsole(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1M);

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

SvgConsole.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1L = ["title", "titleId"];

var SvgContact = function SvgContact(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1L);

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

SvgContact.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1K = ["title", "titleId"];

var SvgContainer = function SvgContainer(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1K);

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

SvgContainer.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1J = ["title", "titleId"];

var SvgControl = function SvgControl(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1J);

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

SvgControl.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1I = ["title", "titleId"];

var SvgConvert = function SvgConvert(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1I);

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

SvgConvert.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1H = ["title", "titleId"];

var SvgCrown = function SvgCrown(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1H);

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

SvgCrown.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1G = ["title", "titleId"];

var SvgCubes = function SvgCubes(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1G);

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

SvgCubes.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1F = ["title", "titleId"];

var SvgCycle = function SvgCycle(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1F);

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

SvgCycle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1E = ["title", "titleId"];

var SvgDataTransfer = function SvgDataTransfer(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1E);

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

SvgDataTransfer.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1D = ["title", "titleId"];

var SvgDatabaseAdmin = function SvgDatabaseAdmin(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1D);

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

SvgDatabaseAdmin.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1C = ["title", "titleId"];

var SvgDatabaseBackup = function SvgDatabaseBackup(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1C);

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

SvgDatabaseBackup.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1B = ["title", "titleId"];

var SvgDatabase = function SvgDatabase(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1B);

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

SvgDatabase.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1A = ["title", "titleId"];

var SvgDeliverLove = function SvgDeliverLove(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1A);

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

SvgDeliverLove.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1z = ["title", "titleId"];

var SvgDesign = function SvgDesign(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1z);

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

SvgDesign.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1y = ["title", "titleId"];

var SvgDeveloper = function SvgDeveloper(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1y);

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

SvgDeveloper.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1x = ["title", "titleId"];

var SvgDiploma = function SvgDiploma(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1x);

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

SvgDiploma.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1w = ["title", "titleId"];

var SvgDockerContainer = function SvgDockerContainer(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1w);

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

SvgDockerContainer.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1v = ["title", "titleId"];

var SvgDocs = function SvgDocs(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1v);

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

SvgDocs.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1u = ["title", "titleId"];

var SvgDottedBox = function SvgDottedBox(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1u);

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

SvgDottedBox.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1t = ["title", "titleId"];

var SvgDownload = function SvgDownload(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1t);

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

SvgDownload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1s = ["title", "titleId"];

var SvgDrives = function SvgDrives(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1s);

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

SvgDrives.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1r = ["title", "titleId"];

var SvgDuplicate = function SvgDuplicate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1r);

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

SvgDuplicate.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1q = ["title", "titleId"];

var SvgEarth = function SvgEarth(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1q);

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

SvgEarth.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1p = ["title", "titleId"];

var SvgEasy = function SvgEasy(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1p);

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

SvgEasy.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1o = ["title", "titleId"];

var SvgEdbArk = function SvgEdbArk(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1o);

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

SvgEdbArk.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1n = ["title", "titleId"];

var SvgEdbBart = function SvgEdbBart(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1n);

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

SvgEdbBart.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1m = ["title", "titleId"];

var SvgEdbDashboard = function SvgEdbDashboard(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1m);

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

SvgEdbDashboard.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1l = ["title", "titleId"];

var SvgEdbEfm = function SvgEdbEfm(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1l);

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

SvgEdbEfm.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1k = ["title", "titleId"];

var SvgEdbEpas = function SvgEdbEpas(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1k);

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

SvgEdbEpas.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1j = ["title", "titleId"];

var SvgEdbKubernetes = function SvgEdbKubernetes(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1j);

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

SvgEdbKubernetes.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1i = ["title", "titleId"];

var SvgEdbMigrationPortal = function SvgEdbMigrationPortal(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1i);

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

SvgEdbMigrationPortal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1h = ["title", "titleId"];

var SvgEdbMigrationToolkit = function SvgEdbMigrationToolkit(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1h);

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

SvgEdbMigrationToolkit.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1g = ["title", "titleId"];

var SvgEdbPem = function SvgEdbPem(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1g);

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

SvgEdbPem.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1f = ["title", "titleId"];

var SvgEdbReplicate = function SvgEdbReplicate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1f);

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

SvgEdbReplicate.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1e = ["title", "titleId"];

var SvgEdbReplication = function SvgEdbReplication(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1e);

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

SvgEdbReplication.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1d = ["title", "titleId"];

var SvgEdbSymbol = function SvgEdbSymbol(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1d);

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

SvgEdbSymbol.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1c = ["title", "titleId"];

var SvgEllipsis = function SvgEllipsis(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1c);

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

SvgEllipsis.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1b = ["title", "titleId"];

var SvgEnergy = function SvgEnergy(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1b);

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

SvgEnergy.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1a = ["title", "titleId"];

var SvgEnterprise = function SvgEnterprise(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1a);

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

SvgEnterprise.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$19 = ["title", "titleId"];

var SvgExport = function SvgExport(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$19);

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

SvgExport.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$18 = ["title", "titleId"];

var SvgExternalLink = function SvgExternalLink(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$18);

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

SvgExternalLink.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$17 = ["title", "titleId"];

var SvgFile = function SvgFile(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$17);

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

SvgFile.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$16 = ["title", "titleId"];

var SvgGlobe = function SvgGlobe(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$16);

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

SvgGlobe.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$15 = ["title", "titleId"];

var SvgGui = function SvgGui(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$15);

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

SvgGui.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$14 = ["title", "titleId"];

var SvgHamburger = function SvgHamburger(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$14);

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

SvgHamburger.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$13 = ["title", "titleId"];

var SvgHandshake = function SvgHandshake(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$13);

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

SvgHandshake.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$12 = ["title", "titleId"];

var SvgHardToFind = function SvgHardToFind(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$12);

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

SvgHardToFind.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$11 = ["title", "titleId"];

var SvgHighAvailability = function SvgHighAvailability(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$11);

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

SvgHighAvailability.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$10 = ["title", "titleId"];

var SvgHorizontalNameTag = function SvgHorizontalNameTag(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$10);

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

SvgHorizontalNameTag.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$$ = ["title", "titleId"];

var SvgHorizontal = function SvgHorizontal(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$$);

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

SvgHorizontal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$_ = ["title", "titleId"];

var SvgIdeaSharing = function SvgIdeaSharing(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$_);

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

SvgIdeaSharing.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$Z = ["title", "titleId"];

var SvgImprove = function SvgImprove(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$Z);

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

SvgImprove.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$Y = ["title", "titleId"];

var SvgInfo = function SvgInfo(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$Y);

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

SvgInfo.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$X = ["title", "titleId"];

var SvgInstall = function SvgInstall(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$X);

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

SvgInstall.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$W = ["title", "titleId"];

var SvgInstances = function SvgInstances(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$W);

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

SvgInstances.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$V = ["title", "titleId"];

var SvgKnight = function SvgKnight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$V);

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

SvgKnight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$U = ["title", "titleId"];

var SvgLaptopConfig = function SvgLaptopConfig(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$U);

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

SvgLaptopConfig.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$T = ["title", "titleId"];

var SvgLeader = function SvgLeader(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$T);

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

SvgLeader.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$S = ["title", "titleId"];

var SvgLearning = function SvgLearning(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$S);

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

SvgLearning.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$R = ["title", "titleId"];

var SvgManagedOperations = function SvgManagedOperations(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$R);

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

SvgManagedOperations.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$Q = ["title", "titleId"];

var SvgMigrate = function SvgMigrate(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$Q);

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

SvgMigrate.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$P = ["title", "titleId"];

var SvgMission = function SvgMission(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$P);

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

SvgMission.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$O = ["title", "titleId"];

var SvgModule = function SvgModule(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$O);

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

SvgModule.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$N = ["title", "titleId"];

var SvgMoreTeam = function SvgMoreTeam(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$N);

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

SvgMoreTeam.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$M = ["title", "titleId"];

var SvgNameTag = function SvgNameTag(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$M);

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

SvgNameTag.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$L = ["title", "titleId"];

var SvgNetwork = function SvgNetwork(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$L);

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

SvgNetwork.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$K = ["title", "titleId"];

var SvgNetwork2 = function SvgNetwork2(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$K);

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

SvgNetwork2.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$J = ["title", "titleId"];

var SvgNewWindow = function SvgNewWindow(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$J);

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

SvgNewWindow.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$I = ["title", "titleId"];

var SvgNews = function SvgNews(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$I);

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

SvgNews.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$H = ["title", "titleId"];

var SvgOptions = function SvgOptions(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$H);

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

SvgOptions.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$G = ["title", "titleId"];

var SvgPandas = function SvgPandas(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$G);

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

SvgPandas.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$F = ["title", "titleId"];

var SvgPartner = function SvgPartner(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$F);

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

SvgPartner.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$E = ["title", "titleId"];

var SvgPdf = function SvgPdf(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$E);

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

SvgPdf.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$D = ["title", "titleId"];

var SvgPeople = function SvgPeople(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$D);

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

SvgPeople.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$C = ["title", "titleId"];

var SvgPiggyBank = function SvgPiggyBank(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$C);

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

SvgPiggyBank.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$B = ["title", "titleId"];

var SvgPlaceholder = function SvgPlaceholder(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$B);

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

SvgPlaceholder.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$A = ["title", "titleId"];

var SvgPlanner = function SvgPlanner(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$A);

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

SvgPlanner.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$z = ["title", "titleId"];

var SvgPlayCircle = function SvgPlayCircle(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$z);

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

SvgPlayCircle.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$y = ["title", "titleId"];

var SvgPreferences = function SvgPreferences(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$y);

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

SvgPreferences.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$x = ["title", "titleId"];

var SvgPresentation = function SvgPresentation(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$x);

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

SvgPresentation.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$w = ["title", "titleId"];

var SvgProcessImprovement = function SvgProcessImprovement(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$w);

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

SvgProcessImprovement.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$v = ["title", "titleId"];

var SvgPulse = function SvgPulse(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$v);

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

SvgPulse.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$u = ["title", "titleId"];

var SvgQuoteLeft = function SvgQuoteLeft(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$u);

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

SvgQuoteLeft.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$t = ["title", "titleId"];

var SvgQuoteRight = function SvgQuoteRight(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$t);

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

SvgQuoteRight.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$s = ["title", "titleId"];

var SvgRemoteDba = function SvgRemoteDba(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$s);

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

SvgRemoteDba.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$r = ["title", "titleId"];

var SvgReplication = function SvgReplication(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$r);

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

SvgReplication.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$q = ["title", "titleId"];

var SvgRocket = function SvgRocket(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$q);

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

SvgRocket.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$p = ["title", "titleId"];

var SvgRss = function SvgRss(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$p);

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

SvgRss.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$o = ["title", "titleId"];

var SvgSearch = function SvgSearch(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$o);

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

SvgSearch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$n = ["title", "titleId"];

var SvgSecurityConfig = function SvgSecurityConfig(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$n);

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

SvgSecurityConfig.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$m = ["title", "titleId"];

var SvgSecurity = function SvgSecurity(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$m);

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

SvgSecurity.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$l = ["title", "titleId"];

var SvgSpeed = function SvgSpeed(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$l);

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

SvgSpeed.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$k = ["title", "titleId"];

var SvgSpinner = function SvgSpinner(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$k);

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

SvgSpinner.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$j = ["title", "titleId"];

var SvgSql = function SvgSql(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$j);

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

SvgSql.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$i = ["title", "titleId"];

var SvgStack = function SvgStack(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$i);

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

SvgStack.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$h = ["title", "titleId"];

var SvgStar = function SvgStar(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$h);

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

SvgStar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$g = ["title", "titleId"];

var SvgStopwatch = function SvgStopwatch(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$g);

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

SvgStopwatch.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$f = ["title", "titleId"];

var SvgStore = function SvgStore(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$f);

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

SvgStore.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$e = ["title", "titleId"];

var SvgSubset = function SvgSubset(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$e);

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

SvgSubset.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$d = ["title", "titleId"];

var SvgSupportPortal = function SvgSupportPortal(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$d);

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

SvgSupportPortal.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$c = ["title", "titleId"];

var SvgSupport = function SvgSupport(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$c);

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

SvgSupport.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$b = ["title", "titleId"];

var SvgSynchronize = function SvgSynchronize(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$b);

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

SvgSynchronize.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$a = ["title", "titleId"];

var SvgTenYears = function SvgTenYears(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$a);

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

SvgTenYears.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$9 = ["title", "titleId"];

var SvgTicketStar = function SvgTicketStar(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$9);

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

SvgTicketStar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$8 = ["title", "titleId"];

var SvgTicket = function SvgTicket(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$8);

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

SvgTicket.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$7 = ["title", "titleId"];

var SvgTools = function SvgTools(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$7);

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

SvgTools.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$6 = ["title", "titleId"];

var SvgTraining = function SvgTraining(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$6);

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

SvgTraining.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$5 = ["title", "titleId"];

var SvgTreehouse = function SvgTreehouse(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$5);

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

SvgTreehouse.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$4 = ["title", "titleId"];

var SvgTutorial = function SvgTutorial(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$4);

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

SvgTutorial.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$3 = ["title", "titleId"];

var SvgUnlock = function SvgUnlock(_ref) {
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

SvgUnlock.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$2 = ["title", "titleId"];

var SvgVenn = function SvgVenn(_ref) {
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

SvgVenn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded$1 = ["title", "titleId"];

var SvgWebSecurity = function SvgWebSecurity(_ref) {
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

SvgWebSecurity.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

var _excluded = ["title", "titleId"];

var SvgWebinar = function SvgWebinar(_ref) {
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

SvgWebinar.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string
};

export { SvgAlert as Alert, SvgAnnounce as Announce, SvgArrowLeft as ArrowLeft, SvgArrowRight as ArrowRight, SvgBarman as Barman, SvgBigData as BigData, SvgBrainCircuit as BrainCircuit, SvgBriefcase as Briefcase, SvgBusinessman as Businessman, SvgBusinesswoman as Businesswoman, SvgCaseStudy as CaseStudy, SvgCertificate as Certificate, SvgChange as Change, SvgChecklist as Checklist, SvgCheckmark as Checkmark, SvgChevronDown as ChevronDown, SvgChevronRight as ChevronRight, SvgClose as Close, SvgCloudChecked as CloudChecked, SvgCloudDb as CloudDb, SvgCloudDba as CloudDba, SvgCloudPrivate as CloudPrivate, SvgCloudPublic as CloudPublic, SvgCodeWriting as CodeWriting, SvgCoffee as Coffee, SvgConfigManagement as ConfigManagement, SvgConflict as Conflict, SvgConnect as Connect, SvgConsole as Console, SvgContact as Contact, SvgContainer as Container, SvgControl as Control, SvgConvert as Convert, SvgCrown as Crown, SvgCubes as Cubes, SvgCycle as Cycle, SvgDataTransfer as DataTransfer, SvgDatabase as Database, SvgDatabaseAdmin as DatabaseAdmin, SvgDatabaseBackup as DatabaseBackup, SvgDeliverLove as DeliverLove, SvgDesign as Design, SvgDeveloper as Developer, SvgDiploma as Diploma, SvgDockerContainer as DockerContainer, SvgDocs as Docs, SvgDottedBox as DottedBox, SvgDownload as Download, SvgDrives as Drives, SvgDuplicate as Duplicate, SvgEarth as Earth, SvgEasy as Easy, SvgEdbArk as EdbArk, SvgEdbBart as EdbBart, SvgEdbDashboard as EdbDashboard, SvgEdbEfm as EdbEfm, SvgEdbEpas as EdbEpas, SvgEdbKubernetes as EdbKubernetes, SvgEdbMigrationPortal as EdbMigrationPortal, SvgEdbMigrationToolkit as EdbMigrationToolkit, SvgEdbPem as EdbPem, SvgEdbReplicate as EdbReplicate, SvgEdbReplication as EdbReplication, SvgEdbSymbol as EdbSymbol, SvgEllipsis as Ellipsis, SvgEnergy as Energy, SvgEnterprise as Enterprise, SvgExport as Export, SvgExternalLink as ExternalLink, SvgFile as File, SvgGlobe as Globe, SvgGui as Gui, SvgHamburger as Hamburger, SvgHandshake as Handshake, SvgHardToFind as HardToFind, SvgHighAvailability as HighAvailability, SvgHorizontal as Horizontal, SvgHorizontalNameTag as HorizontalNameTag, SvgIdeaSharing as IdeaSharing, SvgImprove as Improve, SvgInfo as Info, SvgInstall as Install, SvgInstances as Instances, SvgKnight as Knight, SvgLaptopConfig as LaptopConfig, SvgLeader as Leader, SvgLearning as Learning, SvgManagedOperations as ManagedOperations, SvgMigrate as Migrate, SvgMission as Mission, SvgModule as Module, SvgMoreTeam as MoreTeam, SvgNameTag as NameTag, SvgNetwork as Network, SvgNetwork2 as Network2, SvgNewWindow as NewWindow, SvgNews as News, SvgOptions as Options, SvgPandas as Pandas, SvgPartner as Partner, SvgPdf as Pdf, SvgPeople as People, SvgPiggyBank as PiggyBank, SvgPlaceholder as Placeholder, SvgPlanner as Planner, SvgPlayCircle as PlayCircle, SvgPreferences as Preferences, SvgPresentation as Presentation, SvgProcessImprovement as ProcessImprovement, SvgPulse as Pulse, SvgQuoteLeft as QuoteLeft, SvgQuoteRight as QuoteRight, SvgRemoteDba as RemoteDba, SvgReplication as Replication, SvgRocket as Rocket, SvgRss as Rss, SvgSearch as Search, SvgSecurity as Security, SvgSecurityConfig as SecurityConfig, SvgSpeed as Speed, SvgSpinner as Spinner, SvgSql as Sql, SvgStack as Stack, SvgStar as Star, SvgStopwatch as Stopwatch, SvgStore as Store, SvgSubset as Subset, SvgSupport as Support, SvgSupportPortal as SupportPortal, SvgSynchronize as Synchronize, SvgTenYears as TenYears, SvgTicket as Ticket, SvgTicketStar as TicketStar, SvgTools as Tools, SvgTraining as Training, SvgTreehouse as Treehouse, SvgTutorial as Tutorial, SvgUnlock as Unlock, SvgVenn as Venn, SvgWebSecurity as WebSecurity, SvgWebinar as Webinar };
