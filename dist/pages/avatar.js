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

var avatar = function (_wepy$page) {
    _inherits(avatar, _wepy$page);

    function avatar() {
        _classCallCheck(this, avatar);

        var _this = _possibleConstructorReturn(this, (avatar.__proto__ || Object.getPrototypeOf(avatar)).call(this));

        _this.config = {
            navigationBarTitleText: "Avatar 头像",
            usingComponents: {
                'i-row': '../iview/row/index',
                'i-col': '../iview/col/index',
                'i-avatar': '../iview/avatar/index',
                'i-panel': '../iview/panel/index'

            }
        };
        return _this;
    }

    return avatar;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(avatar , 'pages/avatar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5qcyJdLCJuYW1lcyI6WyJhdmF0YXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFZakIsc0JBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQVpBQyxNQVlBLEdBWlM7QUFDTEMsb0NBQXlCLFdBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLHlCQUFVLG9CQURHO0FBRWIseUJBQVUsb0JBRkc7QUFHYiw0QkFBYSx1QkFIQTtBQUliLDJCQUFZOztBQUpDO0FBRlosU0FZVDtBQUFBO0FBRUM7OztFQWYrQkMsZUFBS0MsSTs7a0JBQXBCTCxNIiwiZmlsZSI6ImF2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGF2YXRhciBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiBcIkF2YXRhciDlpLTlg49cIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLXJvdycgOiAnLi4vaXZpZXcvcm93L2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1jb2wnIDogJy4uL2l2aWV3L2NvbC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktYXZhdGFyJyA6ICcuLi9pdmlldy9hdmF0YXIvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXBhbmVsJyA6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19