'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var page = function (_wepy$page) {
    _inherits(page, _wepy$page);

    function page() {
        _classCallCheck(this, page);

        var _this = _possibleConstructorReturn(this, (page.__proto__ || Object.getPrototypeOf(page)).call(this));

        _this.config = {
            navigationBarTitleText: 'Page 分页',
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-page': '../iview/page/index',
                'i-icon': '../iview/icon/index'
            }
        };
        _this.data = {
            current: 1
        };
        _this.methods = {
            handleChange: function handleChange(_ref) {
                var detail = _ref.detail;

                var type = detail.type;
                if (type === 'next') {
                    this.current = this.data.current + 1;
                } else if (type === 'prev') {
                    this.current = this.data.current - 1;
                }
            }
        };
        return _this;
    }

    return page;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(page , 'pages/page'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiXSwibmFtZXMiOlsicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiY3VycmVudCIsIm1ldGhvZHMiLCJoYW5kbGVDaGFuZ2UiLCJkZXRhaWwiLCJ0eXBlIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQVdqQixvQkFBZTtBQUFBOztBQUFBOztBQUFBLGNBVmZDLE1BVWUsR0FWTjtBQUNMQyxvQ0FBd0IsU0FEbkI7QUFFTEMsNkJBQWtCO0FBQ2QsMkJBQVksc0JBREU7QUFFZCwwQkFBVyxxQkFGRztBQUdkLDBCQUFXO0FBSEc7QUFGYixTQVVNO0FBQUEsY0FJZkMsSUFKZSxHQUlSO0FBQ0hDLHFCQUFTO0FBRE4sU0FKUTtBQUFBLGNBU2ZDLE9BVGUsR0FTTDtBQUNOQyx3QkFETSw4QkFDb0I7QUFBQSxvQkFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUN0QixvQkFBSUMsT0FBT0QsT0FBT0MsSUFBbEI7QUFDQSxvQkFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLHlCQUFLSixPQUFMLEdBQWUsS0FBS0QsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQW5DO0FBQ0gsaUJBRkQsTUFFTyxJQUFJSSxTQUFTLE1BQWIsRUFBcUI7QUFDeEIseUJBQUtKLE9BQUwsR0FBZSxLQUFLRCxJQUFMLENBQVVDLE9BQVYsR0FBb0IsQ0FBbkM7QUFDSDtBQUNKO0FBUkssU0FUSztBQUFBO0FBRWQ7OztFQWI2QkssZUFBS1YsSTs7a0JBQWxCQSxJIiwiZmlsZSI6InBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdQYWdlIOWIhumhtScsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHMgOiB7XG4gICAgICAgICAgICAgICAgJ2ktcGFuZWwnIDogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1wYWdlJyA6ICcuLi9pdmlldy9wYWdlL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1pY29uJyA6ICcuLi9pdmlldy9pY29uL2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDFcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSAoeyBkZXRhaWwgfSkge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gZGV0YWlsLnR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmRhdGEuY3VycmVudCArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kYXRhLmN1cnJlbnQgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==