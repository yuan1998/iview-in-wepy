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

var loadMore = function (_wepy$page) {
    _inherits(loadMore, _wepy$page);

    function loadMore() {
        _classCallCheck(this, loadMore);

        var _this = _possibleConstructorReturn(this, (loadMore.__proto__ || Object.getPrototypeOf(loadMore)).call(this));

        _this.config = {
            navigationBarTitleText: "LoadMore 页底提示",
            usingComponents: {
                'i-load-more': '../iview/load-more/index'

            }
        };
        return _this;
    }

    return loadMore;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(loadMore , 'pages/load-more'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWQtbW9yZS5qcyJdLCJuYW1lcyI6WyJsb2FkTW9yZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQVNqQix3QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBVEFDLE1BU0EsR0FUUztBQUNMQyxvQ0FBeUIsZUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWdCOztBQURIO0FBRlosU0FTVDtBQUFBO0FBRUM7OztFQVppQ0MsZUFBS0MsSTs7a0JBQXRCTCxRIiwiZmlsZSI6ImxvYWQtbW9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvYWRNb3JlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiTG9hZE1vcmUg6aG15bqV5o+Q56S6XCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1sb2FkLW1vcmUnIDogJy4uL2l2aWV3L2xvYWQtbW9yZS9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==