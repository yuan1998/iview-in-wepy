"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divider = function (_wepy$page) {
    _inherits(divider, _wepy$page);

    function divider() {
        _classCallCheck(this, divider);

        var _this = _possibleConstructorReturn(this, (divider.__proto__ || Object.getPrototypeOf(divider)).call(this));

        _this.config = {
            navigationBarTitleText: "Divider 分隔符",
            usingComponents: {
                'i-divider': '../iview/divider/index'

            }

        };
        return _this;
    }

    return divider;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(divider , 'pages/divider'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdmlkZXIuanMiXSwibmFtZXMiOlsiZGl2aWRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQVdqQix1QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBWEFDLE1BV0EsR0FYUztBQUNMQyxvQ0FBeUIsYUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsNkJBQWM7O0FBREQ7O0FBRlosU0FXVDtBQUFBO0FBRUM7OztFQWRnQ0MsZUFBS0MsSTs7a0JBQXJCTCxPIiwiZmlsZSI6ImRpdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBkaXZpZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiRGl2aWRlciDliIbpmpTnrKZcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLWRpdmlkZXInIDogJy4uL2l2aWV3L2RpdmlkZXIvaW5kZXgnLFxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=