"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var collapse = function (_wepy$page) {
    _inherits(collapse, _wepy$page);

    _createClass(collapse, [{
        key: "onShow",
        value: function onShow() {
            var _this2 = this;

            setTimeout(function (_) {
                _this2.name = 'name2';
                _this2.$apply();
            }, 3000);
        }
    }]);

    function collapse() {
        _classCallCheck(this, collapse);

        var _this = _possibleConstructorReturn(this, (collapse.__proto__ || Object.getPrototypeOf(collapse)).call(this));

        _this.config = {
            navigationBarTitleText: "Collapse 折叠面板",
            usingComponents: {
                'i-collapse': '../iview/collapse/index',
                'i-collapse-item': '../iview/collapse-item/index'

            }
        };
        _this.data = {
            name: 'name1'
        };
        return _this;
    }

    return collapse;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(collapse , 'pages/collapse'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNlLmpzIl0sIm5hbWVzIjpbImNvbGxhcHNlIiwic2V0VGltZW91dCIsIm5hbWUiLCIkYXBwbHkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7OztpQ0FjUDtBQUFBOztBQUNOQyx1QkFBVyxhQUFLO0FBQ1osdUJBQUtDLElBQUwsR0FBVSxPQUFWO0FBQ0EsdUJBQUtDLE1BQUw7QUFDSCxhQUhELEVBR0UsSUFIRjtBQUlIOzs7QUFFRCx3QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBckJBQyxNQXFCQSxHQXJCUztBQUNMQyxvQ0FBeUIsZUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsOEJBQWUseUJBREY7QUFFYixtQ0FBb0I7O0FBRlA7QUFGWixTQXFCVDtBQUFBLGNBWkFDLElBWUEsR0FaTztBQUNITCxrQkFBTTtBQURILFNBWVA7QUFBQTtBQUVDOzs7RUF4QmlDTSxlQUFLQyxJOztrQkFBdEJULFEiLCJmaWxlIjoiY29sbGFwc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjb2xsYXBzZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiBcIkNvbGxhcHNlIOaKmOWPoOmdouadv1wiLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktY29sbGFwc2UnIDogJy4uL2l2aWV3L2NvbGxhcHNlL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1jb2xsYXBzZS1pdGVtJyA6ICcuLi9pdmlldy9jb2xsYXBzZS1pdGVtL2luZGV4JyxcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lMSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZT0nbmFtZTInO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LDMwMDApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==