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

var layout = function (_wepy$page) {
    _inherits(layout, _wepy$page);

    function layout() {
        _classCallCheck(this, layout);

        var _this = _possibleConstructorReturn(this, (layout.__proto__ || Object.getPrototypeOf(layout)).call(this));

        _this.config = {
            navigationBarTitleText: 'Layout 布局',
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-row': '../iview/row/index',
                'i-col': '../iview/col/index'
            }
        };
        _this.data = {};
        return _this;
    }

    return layout;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(layout , 'pages/layout'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7O0FBVWpCLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0FUZEMsTUFTYyxHQVRMO0FBQ0xDLG9DQUF3QixXQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwyQkFBVyxzQkFERTtBQUViLHlCQUFTLG9CQUZJO0FBR2IseUJBQVM7QUFISTtBQUZaLFNBU0s7QUFBQSxjQUlkQyxJQUpjLEdBSVAsRUFKTztBQUFBO0FBRWI7OztFQVorQkMsZUFBS0MsSTs7a0JBQXBCTixNIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheW91dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdMYXlvdXQg5biD5bGAJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLXBhbmVsJzogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1yb3cnOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1jb2wnOiAnLi4vaXZpZXcvY29sL2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7fVxuICAgIH1cbiJdfQ==