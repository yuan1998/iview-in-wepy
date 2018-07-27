'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/layout', 'pages/grid', 'pages/panel', 'pages/list', 'pages/card', 'pages/button', 'pages/color', 'pages/icon', 'pages/tab-bar', 'pages/tabs', 'pages/drawer', 'pages/page', 'pages/steps', 'pages/notice-bar', 'pages/index-list', 'pages/sticky', 'pages/index-sticky', 'pages/action-sheet', 'pages/toast', 'pages/message', 'pages/spin', 'pages/swipeout', 'pages/badge', 'pages/alert', 'pages/tag', 'pages/progress', 'pages/avatar', 'pages/count-down', 'pages/divider', 'pages/collapse', 'pages/load-more', 'pages/input', 'pages/radio', 'pages/checkbox', 'pages/switch', 'pages/rate', 'pages/input-number'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    return _this;
  }

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBakRmQSxNQWlEZSxHQWpETjtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGNBRkssRUFHTCxZQUhLLEVBSUwsYUFKSyxFQUtMLFlBTEssRUFNTCxZQU5LLEVBT0wsY0FQSyxFQVFMLGFBUkssRUFTTCxZQVRLLEVBVUwsZUFWSyxFQVdMLFlBWEssRUFZTCxjQVpLLEVBYUwsWUFiSyxFQWNMLGFBZEssRUFlTCxrQkFmSyxFQWdCTCxrQkFoQkssRUFpQkwsY0FqQkssRUFrQkwsb0JBbEJLLEVBbUJMLG9CQW5CSyxFQW9CTCxhQXBCSyxFQXFCTCxlQXJCSyxFQXNCTCxZQXRCSyxFQXVCTCxnQkF2QkssRUF3QkwsYUF4QkssRUF5QkwsYUF6QkssRUEwQkwsV0ExQkssRUEyQkwsZ0JBM0JLLEVBNEJMLGNBNUJLLEVBNkJMLGtCQTdCSyxFQThCTCxlQTlCSyxFQStCTCxnQkEvQkssRUFnQ0wsaUJBaENLLEVBaUNMLGFBakNLLEVBa0NMLGFBbENLLEVBbUNMLGdCQW5DSyxFQW9DTCxjQXBDSyxFQXFDTCxZQXJDSyxFQXNDTCxvQkF0Q0ssQ0FEQTtBQXlDUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQXpDRCxLQWlETTtBQUFBO0FBRWQ7OztFQXBEMEJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvbGF5b3V0JyxcbiAgICAgICdwYWdlcy9ncmlkJyxcbiAgICAgICdwYWdlcy9wYW5lbCcsXG4gICAgICAncGFnZXMvbGlzdCcsXG4gICAgICAncGFnZXMvY2FyZCcsXG4gICAgICAncGFnZXMvYnV0dG9uJyxcbiAgICAgICdwYWdlcy9jb2xvcicsXG4gICAgICAncGFnZXMvaWNvbicsXG4gICAgICAncGFnZXMvdGFiLWJhcicsXG4gICAgICAncGFnZXMvdGFicycsXG4gICAgICAncGFnZXMvZHJhd2VyJyxcbiAgICAgICdwYWdlcy9wYWdlJyxcbiAgICAgICdwYWdlcy9zdGVwcycsXG4gICAgICAncGFnZXMvbm90aWNlLWJhcicsXG4gICAgICAncGFnZXMvaW5kZXgtbGlzdCcsXG4gICAgICAncGFnZXMvc3RpY2t5JyxcbiAgICAgICdwYWdlcy9pbmRleC1zdGlja3knLFxuICAgICAgJ3BhZ2VzL2FjdGlvbi1zaGVldCcsXG4gICAgICAncGFnZXMvdG9hc3QnLFxuICAgICAgJ3BhZ2VzL21lc3NhZ2UnLFxuICAgICAgJ3BhZ2VzL3NwaW4nLFxuICAgICAgJ3BhZ2VzL3N3aXBlb3V0JyxcbiAgICAgICdwYWdlcy9iYWRnZScsXG4gICAgICAncGFnZXMvYWxlcnQnLFxuICAgICAgJ3BhZ2VzL3RhZycsXG4gICAgICAncGFnZXMvcHJvZ3Jlc3MnLFxuICAgICAgJ3BhZ2VzL2F2YXRhcicsXG4gICAgICAncGFnZXMvY291bnQtZG93bicsXG4gICAgICAncGFnZXMvZGl2aWRlcicsXG4gICAgICAncGFnZXMvY29sbGFwc2UnLFxuICAgICAgJ3BhZ2VzL2xvYWQtbW9yZScsXG4gICAgICAncGFnZXMvaW5wdXQnLFxuICAgICAgJ3BhZ2VzL3JhZGlvJyxcbiAgICAgICdwYWdlcy9jaGVja2JveCcsXG4gICAgICAncGFnZXMvc3dpdGNoJyxcbiAgICAgICdwYWdlcy9yYXRlJyxcbiAgICAgICdwYWdlcy9pbnB1dC1udW1iZXInLFxuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgfVxuXG59XG4iXX0=