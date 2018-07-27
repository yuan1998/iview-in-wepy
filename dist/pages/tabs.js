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

var tabs = function (_wepy$page) {
    _inherits(tabs, _wepy$page);

    function tabs() {
        _classCallCheck(this, tabs);

        var _this = _possibleConstructorReturn(this, (tabs.__proto__ || Object.getPrototypeOf(tabs)).call(this));

        _this.config = {
            navigationBarTitleText: 'Tabs 标签页',
            usingComponents: {
                'i-tabs': '../iview/tabs/index',
                'i-tab': '../iview/tab/index',
                'i-panel': '../iview/panel/index'
            }
        };
        _this.data = {
            current: 'tab1',
            current_scroll: 'tab1'
        };
        _this.methods = {
            handleChange: function handleChange(_ref) {
                var detail = _ref.detail;

                this.current = detail.key;
            },
            handleChangeScroll: function handleChangeScroll(_ref2) {
                var detail = _ref2.detail;

                this.current_scroll = detail.key;
            }
        };
        return _this;
    }

    return tabs;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tabs , 'pages/tabs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuanMiXSwibmFtZXMiOlsidGFicyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiY3VycmVudCIsImN1cnJlbnRfc2Nyb2xsIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImRldGFpbCIsImtleSIsImhhbmRsZUNoYW5nZVNjcm9sbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBV2pCLG9CQUFlO0FBQUE7O0FBQUE7O0FBQUEsY0FWZkMsTUFVZSxHQVZOO0FBQ0xDLG9DQUF3QixVQURuQjtBQUVMQyw2QkFBa0I7QUFDZCwwQkFBVyxxQkFERztBQUVkLHlCQUFVLG9CQUZJO0FBR2QsMkJBQVk7QUFIRTtBQUZiLFNBVU07QUFBQSxjQUlmQyxJQUplLEdBSVI7QUFDSEMscUJBQVMsTUFETjtBQUVIQyw0QkFBZ0I7QUFGYixTQUpRO0FBQUEsY0FVZkMsT0FWZSxHQVVMO0FBQ05DLHdCQURNLDhCQUNvQjtBQUFBLG9CQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQ3RCLHFCQUFLSixPQUFMLEdBQWVJLE9BQU9DLEdBQXRCO0FBQ0gsYUFISztBQUtOQyw4QkFMTSxxQ0FLMEI7QUFBQSxvQkFBVkYsTUFBVSxTQUFWQSxNQUFVOztBQUM1QixxQkFBS0gsY0FBTCxHQUFzQkcsT0FBT0MsR0FBN0I7QUFDSDtBQVBLLFNBVks7QUFBQTtBQUVkOzs7RUFiNkJFLGVBQUtDLEk7O2tCQUFsQmIsSSIsImZpbGUiOiJ0YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhYnMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnVGFicyDmoIfnrb7pobUnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzIDoge1xuICAgICAgICAgICAgICAgICdpLXRhYnMnIDogJy4uL2l2aWV3L3RhYnMvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXRhYicgOiAnLi4vaXZpZXcvdGFiL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1wYW5lbCcgOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY3VycmVudDogJ3RhYjEnLFxuICAgICAgICAgICAgY3VycmVudF9zY3JvbGw6ICd0YWIxJ1xuICAgICAgICB9XG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlICh7IGRldGFpbCB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gZGV0YWlsLmtleVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlU2Nyb2xsICh7IGRldGFpbCB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3Njcm9sbCA9IGRldGFpbC5rZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=