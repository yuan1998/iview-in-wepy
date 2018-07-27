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

var button = function (_wepy$page) {
    _inherits(button, _wepy$page);

    function button() {
        _classCallCheck(this, button);

        var _this = _possibleConstructorReturn(this, (button.__proto__ || Object.getPrototypeOf(button)).call(this));

        _this.config = {
            navigationBarTitleText: 'Button 按钮',
            usingComponents: {
                'i-button': '../iview/button/index',
                'i-panel': '../iview/panel/index'
            }
        };
        _this.data = {
            loading: true
        };
        _this.methods = {
            handleClick: function handleClick(e) {
                console.log(e);
            },
            handleLoading: function handleLoading() {
                this.loading = !this.loading;
            }
        };
        return _this;
    }

    return button;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(button , 'pages/button'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJidXR0b24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImxvYWRpbmciLCJtZXRob2RzIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvYWRpbmciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQXdCakIsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxjQXZCZkMsTUF1QmUsR0F2Qk47QUFDTEMsb0NBQXdCLFdBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLHVCQURDO0FBRWIsMkJBQVc7QUFGRTtBQUZaLFNBdUJNO0FBQUEsY0FmZkMsSUFlZSxHQWZSO0FBQ0hDLHFCQUFVO0FBRFAsU0FlUTtBQUFBLGNBWGZDLE9BV2UsR0FYTDtBQUNOQyx1QkFETSx1QkFDT0MsQ0FEUCxFQUNVO0FBQ1pDLHdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDSCxhQUhLO0FBS05HLHlCQUxNLDJCQUtXO0FBQ2IscUJBQUtOLE9BQUwsR0FBZSxDQUFDLEtBQUtBLE9BQXJCO0FBRUg7QUFSSyxTQVdLO0FBQUE7QUFFZDs7O0VBMUIrQk8sZUFBS0MsSTs7a0JBQXBCYixNIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBidXR0b24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQnV0dG9uIOaMiemSricsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1idXR0b24nOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1wYW5lbCc6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbG9hZGluZyA6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBoYW5kbGVDbGljayAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gIXRoaXMubG9hZGluZztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==