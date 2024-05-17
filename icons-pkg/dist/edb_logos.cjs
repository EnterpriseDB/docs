'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

var _excluded$h = ["title", "titleId"];
var SvgEdbLandscapeBlack = function SvgEdbLandscapeBlack(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$h);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbLandscapeBlack.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$g = ["title", "titleId"];
var SvgEdbLandscapeColorWhite = function SvgEdbLandscapeColorWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$g);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbLandscapeColorWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$f = ["title", "titleId"];
var SvgEdbLandscapeWhite = function SvgEdbLandscapeWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$f);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbLandscapeWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$e = ["title", "titleId"];
var SvgEdbPortraitBlack = function SvgEdbPortraitBlack(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$e);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPortraitBlack.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$d = ["title", "titleId"];
var SvgEdbPortraitColorGrey = function SvgEdbPortraitColorGrey(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$d);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPortraitColorGrey.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$c = ["title", "titleId"];
var SvgEdbPortraitColorWhite = function SvgEdbPortraitColorWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$c);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPortraitColorWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$b = ["title", "titleId"];
var SvgEdbPortraitWhite = function SvgEdbPortraitWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$b);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPortraitWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$a = ["title", "titleId"];
var SvgEdbPostgresBlack = function SvgEdbPostgresBlack(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$a);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPostgresBlack.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$9 = ["title", "titleId"];
var SvgEdbPostgresColorGrey = function SvgEdbPostgresColorGrey(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$9);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPostgresColorGrey.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$8 = ["title", "titleId"];
var SvgEdbPostgresColorWhite = function SvgEdbPostgresColorWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$8);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPostgresColorWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$7 = ["title", "titleId"];
var SvgEdbPostgresWhite = function SvgEdbPostgresWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$7);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbPostgresWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$6 = ["title", "titleId"];
var SvgEdbTaglineBlack = function SvgEdbTaglineBlack(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$6);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbTaglineBlack.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$5 = ["title", "titleId"];
var SvgEdbTaglineColorGrey = function SvgEdbTaglineColorGrey(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$5);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbTaglineColorGrey.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$4 = ["title", "titleId"];
var SvgEdbTaglineColorWhite = function SvgEdbTaglineColorWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbTaglineColorWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$3 = ["title", "titleId"];
var SvgEdbTaglineWhite = function SvgEdbTaglineWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$3);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgEdbTaglineWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$2 = ["title", "titleId"];
var SvgLoopBlack = function SvgLoopBlack(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgLoopBlack.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded$1 = ["title", "titleId"];
var SvgLoopColor = function SvgLoopColor(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgLoopColor.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

var _excluded = ["title", "titleId"];
var SvgLoopWhite = function SvgLoopWhite(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M6.594 2A4.574 4.574 0 002 6.406V7h2v-.5A2.592 2.592 0 016.594 4H7V2zM9 2v2h2V2zm4 0v2h2V2zm4 0v2h.5A2.592 2.592 0 0120 6.594V7h2v-.406c0-2.48-1.93-4.496-4.406-4.594zM2 9v2h2V9zm18 0v2h2V9zM2 13v2h2v-2zm18 0v2h2v-2zM2 17v.594A4.574 4.574 0 006.594 22H7v-2h-.406A2.592 2.592 0 014 17.5V17zm18 0v.406A2.592 2.592 0 0117.5 20H17v2h.594A4.574 4.574 0 0022 17.406V17zM9 20v2h2v-2zm4 0v2h2v-2z"
  }));
};
SvgLoopWhite.propTypes = {
  title: PropTypes__default['default'].string,
  titleId: PropTypes__default['default'].string
};

exports.EdbLandscapeBlack = SvgEdbLandscapeBlack;
exports.EdbLandscapeColorWhite = SvgEdbLandscapeColorWhite;
exports.EdbLandscapeWhite = SvgEdbLandscapeWhite;
exports.EdbPortraitBlack = SvgEdbPortraitBlack;
exports.EdbPortraitColorGrey = SvgEdbPortraitColorGrey;
exports.EdbPortraitColorWhite = SvgEdbPortraitColorWhite;
exports.EdbPortraitWhite = SvgEdbPortraitWhite;
exports.EdbPostgresBlack = SvgEdbPostgresBlack;
exports.EdbPostgresColorGrey = SvgEdbPostgresColorGrey;
exports.EdbPostgresColorWhite = SvgEdbPostgresColorWhite;
exports.EdbPostgresWhite = SvgEdbPostgresWhite;
exports.EdbTaglineBlack = SvgEdbTaglineBlack;
exports.EdbTaglineColorGrey = SvgEdbTaglineColorGrey;
exports.EdbTaglineColorWhite = SvgEdbTaglineColorWhite;
exports.EdbTaglineWhite = SvgEdbTaglineWhite;
exports.LoopBlack = SvgLoopBlack;
exports.LoopColor = SvgLoopColor;
exports.LoopWhite = SvgLoopWhite;
