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

var badge = function (_wepy$page) {
    _inherits(badge, _wepy$page);

    function badge() {
        _classCallCheck(this, badge);

        var _this = _possibleConstructorReturn(this, (badge.__proto__ || Object.getPrototypeOf(badge)).call(this));

        _this.config = {
            navigationBarTitleText: "Badge 徽章",
            usingComponents: {
                'i-badge': '../iview/badge/index'

            }
        };
        return _this;
    }

    return badge;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(badge , 'pages/badge'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLmpzIl0sIm5hbWVzIjpbImJhZGdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7O0FBU2pCLHFCQUNBO0FBQUE7O0FBQUE7O0FBQUEsY0FUQUMsTUFTQSxHQVRTO0FBQ0xDLG9DQUF5QixVQURwQjtBQUVMQyw2QkFBaUI7QUFDYiwyQkFBVzs7QUFERTtBQUZaLFNBU1Q7QUFBQTtBQUVDOzs7RUFaOEJDLGVBQUtDLEk7O2tCQUFuQkwsSyIsImZpbGUiOiJiYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhZGdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiQmFkZ2Ug5b6956ugXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1iYWRnZSc6ICcuLi9pdmlldy9iYWRnZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=