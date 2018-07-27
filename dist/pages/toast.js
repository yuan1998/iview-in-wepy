"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toast = function (_wepy$page) {
    _inherits(toast, _wepy$page);

    function toast() {
        _classCallCheck(this, toast);

        var _this = _possibleConstructorReturn(this, (toast.__proto__ || Object.getPrototypeOf(toast)).call(this));

        _this.config = {
            navigationBarTitleText: "Toast 轻提示",
            usingComponents: {
                'i-button': '../iview/button/index',
                'i-toast': '../iview/toast/index'

            }
        };
        _this.methods = {
            handleText: function handleText() {
                (0, _index.$Toast)({
                    content: '这是文本提示'
                });
            },
            handleSuccess: function handleSuccess() {
                (0, _index.$Toast)({
                    content: '成功的提示',
                    type: 'success'
                });
            },
            handleWarning: function handleWarning() {
                (0, _index.$Toast)({
                    content: '警告的提示',
                    type: 'warning'
                });
            },
            handleError: function handleError() {
                (0, _index.$Toast)({
                    content: '错误的提示',
                    type: 'error'
                });
            },
            handleLoading: function handleLoading() {
                (0, _index.$Toast)({
                    content: '加载中',
                    type: 'loading',
                    duration: 0,
                    maskCloseable: false,
                    mask: false
                });
            },
            handleIcon: function handleIcon() {
                (0, _index.$Toast)({
                    content: '使用内置的图标',
                    icon: 'praise'
                });
            },
            handleImage: function handleImage() {
                (0, _index.$Toast)({
                    content: '使用自定义图片',
                    image: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
                });
            },
            handleMask: function handleMask() {
                (0, _index.$Toast)({
                    content: '5秒后自动关闭',
                    icon: 'prompt',
                    duration: 0,
                    mask: false
                });
                setTimeout(function () {
                    _index.$Toast.hide();
                }, 5000);
            },
            handleClose: function handleClose() {
                console.log(123);
                _index.$Toast.hide();
            }
        };
        return _this;
    }

    return toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(toast , 'pages/toast'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbInRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJoYW5kbGVUZXh0IiwiY29udGVudCIsImhhbmRsZVN1Y2Nlc3MiLCJ0eXBlIiwiaGFuZGxlV2FybmluZyIsImhhbmRsZUVycm9yIiwiaGFuZGxlTG9hZGluZyIsImR1cmF0aW9uIiwibWFza0Nsb3NlYWJsZSIsIm1hc2siLCJoYW5kbGVJY29uIiwiaWNvbiIsImhhbmRsZUltYWdlIiwiaW1hZ2UiLCJoYW5kbGVNYXNrIiwic2V0VGltZW91dCIsIiRUb2FzdCIsImhpZGUiLCJoYW5kbGVDbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLEs7OztBQXdFakIscUJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXhFQUMsTUF3RUEsR0F4RVM7QUFDTEMsb0NBQXlCLFdBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFhLHVCQURBO0FBRWIsMkJBQVk7O0FBRkM7QUFGWixTQXdFVDtBQUFBLGNBL0RBQyxPQStEQSxHQS9EVTtBQUNOQyxzQkFETSx3QkFDUTtBQUNWLG1DQUFPO0FBQ0hDLDZCQUFTO0FBRE4saUJBQVA7QUFHSCxhQUxLO0FBTU5DLHlCQU5NLDJCQU1XO0FBQ2IsbUNBQU87QUFDSEQsNkJBQVMsT0FETjtBQUVIRSwwQkFBTTtBQUZILGlCQUFQO0FBSUgsYUFYSztBQVlOQyx5QkFaTSwyQkFZVztBQUNiLG1DQUFPO0FBQ0hILDZCQUFTLE9BRE47QUFFSEUsMEJBQU07QUFGSCxpQkFBUDtBQUlILGFBakJLO0FBa0JORSx1QkFsQk0seUJBa0JTO0FBQ1gsbUNBQU87QUFDSEosNkJBQVMsT0FETjtBQUVIRSwwQkFBTTtBQUZILGlCQUFQO0FBSUgsYUF2Qks7QUF3Qk5HLHlCQXhCTSwyQkF3Qlc7QUFDYixtQ0FBTztBQUNITCw2QkFBUyxLQUROO0FBRUhFLDBCQUFNLFNBRkg7QUFHSEksOEJBQVUsQ0FIUDtBQUlIQyxtQ0FBYyxLQUpYO0FBS0hDLDBCQUFNO0FBTEgsaUJBQVA7QUFPSCxhQWhDSztBQWlDTkMsc0JBakNNLHdCQWlDUTtBQUNWLG1DQUFPO0FBQ0hULDZCQUFTLFNBRE47QUFFSFUsMEJBQU07QUFGSCxpQkFBUDtBQUlILGFBdENLO0FBdUNOQyx1QkF2Q00seUJBdUNTO0FBQ1gsbUNBQU87QUFDSFgsNkJBQVMsU0FETjtBQUVIWSwyQkFBTztBQUZKLGlCQUFQO0FBSUgsYUE1Q0s7QUE2Q05DLHNCQTdDTSx3QkE2Q1E7QUFDVixtQ0FBTztBQUNIYiw2QkFBUyxTQUROO0FBRUhVLDBCQUFNLFFBRkg7QUFHSEosOEJBQVUsQ0FIUDtBQUlIRSwwQkFBTTtBQUpILGlCQUFQO0FBTUFNLDJCQUFXLFlBQU07QUFDYkMsa0NBQU9DLElBQVA7QUFDSCxpQkFGRCxFQUVHLElBRkg7QUFHSCxhQXZESztBQXdETkMsdUJBeERNLHlCQXdEUztBQUNYQyx3QkFBUUMsR0FBUixDQUFZLEdBQVo7QUFDQUosOEJBQU9DLElBQVA7QUFDSDtBQTNESyxTQStEVjtBQUFBO0FBRUM7OztFQTNFOEJJLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG4gICAgaW1wb3J0IHsgJFRvYXN0fSBmcm9tICcuLi91dGlscy9pbmRleCdcblxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdG9hc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJUb2FzdCDovbvmj5DnpLpcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLWJ1dHRvbicgOiAnLi4vaXZpZXcvYnV0dG9uL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS10b2FzdCcgOiAnLi4vaXZpZXcvdG9hc3QvaW5kZXgnLFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlVGV4dCAoKSB7XG4gICAgICAgICAgICAgICAgJFRvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+aWh+acrOaPkOekuidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVTdWNjZXNzICgpIHtcbiAgICAgICAgICAgICAgICAkVG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5oiQ5Yqf55qE5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlV2FybmluZyAoKSB7XG4gICAgICAgICAgICAgICAgJFRvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+itpuWRiueahOaPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUVycm9yICgpIHtcbiAgICAgICAgICAgICAgICAkVG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn6ZSZ6K+v55qE5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcgKCkge1xuICAgICAgICAgICAgICAgICRUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliqDovb3kuK0nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXNrQ2xvc2VhYmxlOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUljb24gKCkge1xuICAgICAgICAgICAgICAgICRUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkvb/nlKjlhoXnva7nmoTlm77moIcnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAncHJhaXNlJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUltYWdlICgpIHtcbiAgICAgICAgICAgICAgICAkVG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn5L2/55So6Ieq5a6a5LmJ5Zu+54mHJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2kubG9saS5uZXQvMjAxNy8wOC8yMS81OTlhNTIxNDcyNDI0LmpwZydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVNYXNrICgpIHtcbiAgICAgICAgICAgICAgICAkVG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnNeenkuWQjuiHquWKqOWFs+mXrScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdwcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWFzazogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJFRvYXN0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVDbG9zZSAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMTIzKTtcbiAgICAgICAgICAgICAgICAkVG9hc3QuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=