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

var noticeBar = function (_wepy$page) {
    _inherits(noticeBar, _wepy$page);

    function noticeBar() {
        _classCallCheck(this, noticeBar);

        var _this = _possibleConstructorReturn(this, (noticeBar.__proto__ || Object.getPrototypeOf(noticeBar)).call(this));

        _this.config = {
            navigationBarTitleText: "NoticeBar 通告栏",
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-notice-bar': '../iview/notice-bar/index'
            }
        };
        return _this;
    }

    return noticeBar;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(noticeBar , 'pages/notice-bar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS1iYXIuanMiXSwibmFtZXMiOlsibm90aWNlQmFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBU2pCLHlCQUNBO0FBQUE7O0FBQUE7O0FBQUEsY0FUQUMsTUFTQSxHQVRTO0FBQ0xDLG9DQUF5QixlQURwQjtBQUVMQyw2QkFBaUI7QUFDYiwyQkFBWSxzQkFEQztBQUViLGdDQUFpQjtBQUZKO0FBRlosU0FTVDtBQUFBO0FBRUM7OztFQVprQ0MsZUFBS0MsSTs7a0JBQXZCTCxTIiwiZmlsZSI6Im5vdGljZS1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBub3RpY2VCYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJOb3RpY2VCYXIg6YCa5ZGK5qCPXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1wYW5lbCcgOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLW5vdGljZS1iYXInIDogJy4uL2l2aWV3L25vdGljZS1iYXIvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19