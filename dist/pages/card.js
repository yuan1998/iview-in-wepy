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

var card = function (_wepy$page) {
    _inherits(card, _wepy$page);

    function card() {
        _classCallCheck(this, card);

        var _this = _possibleConstructorReturn(this, (card.__proto__ || Object.getPrototypeOf(card)).call(this));

        _this.config = {
            navigationBarTitleText: 'Card 卡片',
            usingComponents: {
                'i-card': '../iview/card/index'
            }
        };
        _this.data = {
            text: '卡片标题'
        };
        return _this;
    }

    return card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiY2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwidGV4dCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBWWpCLG9CQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0FYZEMsTUFXYyxHQVhMO0FBQ0xDLG9DQUF3QixTQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVTtBQURHO0FBRlosU0FXSztBQUFBLGNBSmRDLElBSWMsR0FKUDtBQUNIQyxrQkFBTTtBQURILFNBSU87QUFBQTtBQUViOzs7RUFkNkJDLGVBQUtDLEk7O2tCQUFsQlAsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQ2FyZCDljaHniYcnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktY2FyZCc6ICcuLi9pdmlldy9jYXJkL2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiAn5Y2h54mH5qCH6aKYJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4iXX0=