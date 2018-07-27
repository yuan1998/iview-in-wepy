"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var col = function (_wepy$component) {
    _inherits(col, _wepy$component);

    function col() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, col);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = col.__proto__ || Object.getPrototypeOf(col)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            span: {
                type: Number,
                default: 0
            },
            offset: {
                type: Number,
                default: 0
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return col;
}(_wepy2.default.component);

exports.default = col;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbC5qcyJdLCJuYW1lcyI6WyJjb2wiLCJwcm9wcyIsInNwYW4iLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIm9mZnNldCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztvTEFDakJDLEssR0FBUTtBQUNKQyxrQkFBTztBQUNIQyxzQkFBTUMsTUFESDtBQUVIQyx5QkFBUztBQUZOLGFBREg7QUFLSkMsb0JBQVE7QUFDSkgsc0JBQU1DLE1BREY7QUFFSkMseUJBQVE7QUFGSjtBQUxKLFM7Ozs7RUFEcUJFLGVBQUtDLFM7O2tCQUFqQlIsRyIsImZpbGUiOiJjb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjb2wgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgc3BhbiA6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIgLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19