"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRequiredIf = require("react-required-if");

var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _buttonIcon = require("../icon/button-icon");

var _buttonIcon2 = _interopRequireDefault(_buttonIcon);

var _checkProps = require("./check-props");

var _checkProps2 = _interopRequireDefault(_checkProps);

var _docs = require("./docs.json");

var _docs2 = _interopRequireDefault(_docs);

var _tooltip = require("../tooltip");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultProps = {
  assistiveText: {
    icon: ''
  },
  disabled: false,
  hint: false,
  iconSize: 'medium',
  responsive: false,
  type: 'button',
  variant: 'neutral'
};
/**
 * The Button component is the Lightning Design System Button component. The Button should be used for label buttons, icon buttons, or buttons that have both labels and icons.
 * Either a <code>label</code> or <code>assistiveText.icon</code> is required; see the Prop Details table below.
 * For buttons that maintain selected/unselected states, use the <a href="#/button-stateful">ButtonStateful</a> component.
 */

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "getClassName", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _classNames;

        var isIcon = _this.props.variant === 'icon';
        var iconVariant = _this.props.iconVariant;
        var iconMore = iconVariant === 'more';
        var iconBorder = iconVariant === 'border';
        var iconGlobalHeader = iconVariant === 'global-header';
        var showButtonVariant = _this.props.variant !== 'base' && !iconVariant && !_this.props.inverse && _this.props.variant !== 'link' || iconVariant === 'bare';
        var plainInverseBtn = _this.props.inverse && !isIcon;
        var plainInverseIcon = _this.props.inverse && isIcon && !iconMore && !iconBorder;
        var moreInverseIcon = _this.props.inverse && iconMore;
        var borderInverseIcon = _this.props.inverse && iconBorder; // After hijacking `iconVariant` to let `Button` know it's in the header, we reset to container style for the actual button CSS.

        if (iconVariant === 'global-header') {
          iconVariant = 'container';
        }

        return (0, _classnames2.default)((_classNames = {
          'slds-button': _this.props.variant !== 'link'
        }, _defineProperty(_classNames, "slds-button_".concat(_this.props.variant), showButtonVariant), _defineProperty(_classNames, 'slds-button_inverse', plainInverseBtn), _defineProperty(_classNames, 'slds-button_icon-inverse', plainInverseIcon || moreInverseIcon), _defineProperty(_classNames, 'slds-button_icon-border-inverse', borderInverseIcon), _defineProperty(_classNames, "slds-button_icon-".concat(iconVariant), iconVariant && !borderInverseIcon), _defineProperty(_classNames, 'slds-global-header__button_icon', iconGlobalHeader), _defineProperty(_classNames, "slds-button_icon-".concat(_this.props.iconSize), iconVariant && _this.props.iconSize !== 'medium'), _defineProperty(_classNames, 'slds-button_reset', _this.props.variant === 'link'), _defineProperty(_classNames, 'slds-text-link', _this.props.variant === 'link'), _classNames), _this.props.className);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event, {});
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderIcon", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(name) {
        var iconSize = _this.props.iconSize === '' || _this.props.iconVariant ? null : _this.props.iconSize;
        return _react2.default.createElement(_buttonIcon2.default, {
          category: _this.props.iconCategory || 'utility' // BREAKING CHANGE we will introduce in 1.0. For the moment, set default prop here if none specified.
          ,
          className: (0, _classnames2.default)({
            'slds-global-header__icon': _this.props.iconVariant === 'global-header'
          }, _this.props.iconClassName),
          hint: _this.props.hint,
          inverse: _this.props.inverse,
          name: name,
          path: _this.props.iconPath,
          position: _this.props.iconPosition,
          size: iconSize
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderLabel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var iconOnly = _this.props.iconName || _this.props.iconPath;
        var assistiveTextIcon = typeof _this.props.assistiveText === 'string' ? _this.props.assistiveText : _objectSpread({}, defaultProps.assistiveText, _this.props.assistiveText).icon;
        return iconOnly && assistiveTextIcon ? _react2.default.createElement("span", {
          className: "slds-assistive-text"
        }, assistiveTextIcon) : _this.props.label;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderButton", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _react2.default.createElement("button", {
          "aria-controls": _this.props['aria-controls'],
          "aria-describedby": _this.props['aria-describedby'],
          "aria-expanded": _this.props['aria-expanded'],
          "aria-haspopup": _this.props['aria-haspopup'],
          className: _this.getClassName(),
          disabled: _this.props.disabled,
          id: _this.props.id,
          onBlur: _this.props.onBlur,
          onClick: _this.handleClick,
          onFocus: _this.props.onFocus,
          onKeyDown: _this.props.onKeyDown,
          onKeyPress: _this.props.onKeyPress,
          onKeyUp: _this.props.onKeyUp,
          onMouseDown: _this.props.onMouseDown,
          onMouseEnter: _this.props.onMouseEnter,
          onMouseLeave: _this.props.onMouseLeave,
          ref: function ref(component) {
            if (_this.props.buttonRef) {
              _this.props.buttonRef(component);
            }
          },
          tabIndex: _this.props.tabIndex,
          title: _this.props.title,
          type: _this.props.type,
          style: _this.props.style
        }, _this.props.iconPosition === 'right' ? _this.renderLabel() : null, _this.props.iconName || _this.props.iconPath ? _this.renderIcon(_this.props.iconName) : null, _this.props.iconVariant === 'more' ? _react2.default.createElement(_buttonIcon2.default, {
          category: "utility",
          name: "down",
          size: "x-small",
          className: _this.props.iconClassName
        }) : null, _this.props.iconPosition === 'left' || !_this.props.iconPosition ? _this.renderLabel() : null, _this.props.children // eslint-disable-line react/prop-types
        );
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderTooltip", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _react2.default.createElement(_tooltip2.default, {
          content: _this.props.tooltip
        }, _this.renderButton);
      }
    }), _temp));
  }

  _createClass(Button, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // `checkProps` issues warnings to developers about properties (similar to React's built in development tools)
      (0, _checkProps2.default)(_constants.BUTTON, this.props, _docs2.default);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.tooltip ? this.renderTooltip() : this.renderButton();
    }
  }]);

  return Button;
}(_react2.default.Component);

Object.defineProperty(Button, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _constants.BUTTON
});
Object.defineProperty(Button, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    /**
     * Used if the Button triggers a tooltip. The value should match the `id` of the element with `role="tooltip"`.
     */
    'aria-describedby': _propTypes2.default.string,

    /**
     * Establishes a relationship between an interactive parent element and a child element to indicate which child element a parent element affects. Frequently used in cases where buttons or tabs are associated with exposing expandable regions.
     */
    'aria-controls': _propTypes2.default.string,

    /**
     * Used if the Button triggers a menu or popup. Bool indicates if the menu or popup is open or closed.
     */
    'aria-expanded': _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),

    /**
     * True if Button triggers a menu or popup to open/close.
     */
    'aria-haspopup': _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),

    /**
     * **Assistive text for accessibility.**
     * This object is merged with the default props object on every render.
     * * `icon`: Text that is visually hidden but read aloud by screenreaders to tell the user what the icon means. If the button has an icon and a visible label, you can omit the <code>assistiveText.icon</code> prop and use the <code>label</code> prop.
     */
    assistiveText: _propTypes2.default.shape({
      icon: _propTypes2.default.string
    }),

    /**
     * Callback that passes in the DOM reference of the `<button>` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    buttonRef: _propTypes2.default.func,

    /**
     * CSS classes to be added to button.
     */
    className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),

    /**
     * Disables the button and adds disabled styling.
     */
    disabled: _propTypes2.default.bool,

    /**
     * Associates an icon button with another element on the page by changes the color of the SVG. Please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#hint">Lightning Design System Buttons > Hint</a>.
     */
    hint: _propTypes2.default.bool,

    /**
     * Name of the icon category. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon categories.
     */
    iconCategory: (0, _reactRequiredIf2.default)(_propTypes2.default.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']), function (props) {
      return !!props.iconName;
    }),

    /**
     * CSS classes to be added to icon.
     */
    iconClassName: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),

    /**
     * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
     */
    iconName: _propTypes2.default.string,

    /**
     * Path to the icon. This will override any global icon settings.
     */
    iconPath: _propTypes2.default.string,

    /**
     * If omitted, icon position is centered.
     */
    iconPosition: _propTypes2.default.oneOf(['left', 'right']),

    /**
     * Determines the size of the icon.
     */
    iconSize: _propTypes2.default.oneOf(['x-small', 'small', 'medium', 'large']),

    /**
     * For icon variants, please reference <a href="http://www.lightningdesignsystem.com/components/buttons/#icon">Lightning Design System Icons</a>.
     */
    iconVariant: _propTypes2.default.oneOf(['bare', 'container', 'border', 'border-filled', 'more', 'global-header']),

    /**
     * Id string applied to button node.
     */
    id: _propTypes2.default.string,

    /**
     * If true, button/icon is white. Meant for buttons or utility icons on dark backgrounds.
     */
    inverse: _propTypes2.default.bool,

    /**
     * Visible label on the button. If the button is an icon button with no label, you must use the <code>assistiveText.icon</code> prop.
     */
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),

    /**
     * Triggered when focus is removed.
     */
    onBlur: _propTypes2.default.func,

    /**
     * Triggered when the button is clicked.
     */
    onClick: _propTypes2.default.func,

    /**
     * Triggered when component is focused.
     */
    onFocus: _propTypes2.default.func,

    /**
     * Triggered when a key is pressed down
     */
    onKeyDown: _propTypes2.default.func,

    /**
     * Triggered when a key is pressed and released
     */
    onKeyPress: _propTypes2.default.func,

    /**
     * Triggered when a key is released
     */
    onKeyUp: _propTypes2.default.func,

    /**
     * Triggered when a mouse button is pressed down
     */
    onMouseDown: _propTypes2.default.func,

    /**
     * Triggered when a mouse arrow hovers
     */
    onMouseEnter: _propTypes2.default.func,

    /**
     * Triggered when a mouse arrow no longer hovers
     */
    onMouseLeave: _propTypes2.default.func,

    /**
     * If true, button scales to 100% width on small form factors.
     */
    responsive: _propTypes2.default.bool,

    /**
     * Write <code>"-1"</code> if you don't want the user to tab to the button.
     */
    tabIndex: _propTypes2.default.string,

    /**
     * Button type
     */
    type: _propTypes2.default.oneOf(['reset', 'submit', 'button']),

    /**
     * HTML title attribute
     */
    title: _propTypes2.default.string,

    /**
     * [Deprecated] Tooltip on button. Button should be a child of `Tooltip` instead.
     */
    tooltip: _propTypes2.default.node,

    /**
     * Different types of buttons
     */
    variant: _propTypes2.default.oneOf(['base', 'link', 'neutral', 'brand', 'destructive', 'success', 'icon']),

    /**
     * Custom styles to be passed to the component
     */
    style: _propTypes2.default.object
  }
});
Object.defineProperty(Button, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: defaultProps
});
exports.default = Button;