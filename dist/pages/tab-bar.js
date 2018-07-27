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

var tabbar = function (_wepy$page) {
    _inherits(tabbar, _wepy$page);

    function tabbar() {
        _classCallCheck(this, tabbar);

        var _this = _possibleConstructorReturn(this, (tabbar.__proto__ || Object.getPrototypeOf(tabbar)).call(this));

        _this.config = {
            navigationBarTitleText: 'TabBar 标签栏',
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-tab-bar': '../iview/tab-bar/index',
                'i-tab-bar-item': '../iview/tab-bar-item/index'
            }
        };
        _this.data = {
            current: 'homepage'
        };
        _this.methods = {
            handleChange: function handleChange(_ref) {
                var detail = _ref.detail;

                this.current = detail.key;
            }
        };
        return _this;
    }

    return tabbar;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tabbar , 'pages/tab-bar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1iYXIuanMiXSwibmFtZXMiOlsidGFiYmFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50IiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImRldGFpbCIsImtleSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBcUJqQixzQkFBZTtBQUFBOztBQUFBOztBQUFBLGNBcEJmQyxNQW9CZSxHQXBCTjtBQUNMQyxvQ0FBd0IsWUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMkJBQVksc0JBREM7QUFFYiw2QkFBYyx3QkFGRDtBQUdiLGtDQUFtQjtBQUhOO0FBRlosU0FvQk07QUFBQSxjQVhmQyxJQVdlLEdBWFI7QUFDSEMscUJBQVM7QUFETixTQVdRO0FBQUEsY0FQZkMsT0FPZSxHQVBMO0FBQ05DLHdCQURNLDhCQUNvQjtBQUFBLG9CQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQ3RCLHFCQUFLSCxPQUFMLEdBQWVHLE9BQU9DLEdBQXRCO0FBQ0g7QUFISyxTQU9LO0FBQUE7QUFFZDs7O0VBdkIrQkMsZUFBS0MsSTs7a0JBQXBCWCxNIiwiZmlsZSI6InRhYi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFiYmFyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1RhYkJhciDmoIfnrb7moI8nLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktcGFuZWwnIDogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS10YWItYmFyJyA6ICcuLi9pdmlldy90YWItYmFyL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS10YWItYmFyLWl0ZW0nIDogJy4uL2l2aWV3L3RhYi1iYXItaXRlbS9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY3VycmVudDogJ2hvbWVwYWdlJyxcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2UgKHsgZGV0YWlsIH0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBkZXRhaWwua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=