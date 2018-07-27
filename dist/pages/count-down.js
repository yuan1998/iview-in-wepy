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

var countDown = function (_wepy$page) {
    _inherits(countDown, _wepy$page);

    _createClass(countDown, [{
        key: "onLoad",
        value: function onLoad() {
            var time = new Date().getTime();
            this.targetTime = time + 6430000;
            this.targetTime1 = time + 86430000;
            this.targetTime2 = time + 10000;
        }
    }, {
        key: "onUnload",
        value: function onUnload() {
            this.clearTime = true;
        }
    }]);

    function countDown() {
        _classCallCheck(this, countDown);

        var _this = _possibleConstructorReturn(this, (countDown.__proto__ || Object.getPrototypeOf(countDown)).call(this));

        _this.config = {
            navigationBarTitleText: "CountDown 倒计时",
            usingComponents: {
                'i-count-down': '../iview/count-down/index'

            }
        };
        _this.data = {
            targetTime: 0,
            targetTime1: 0,
            targetTime2: 0,
            myFormat: ['时', '分', '秒'],
            myFormat1: ['天', '时', '分', '秒'],
            status: '进行中...',
            clearTimer: false
        };
        _this.methods = {
            myLinsterner: function myLinsterner() {
                this.status = '结束';
            }
        };
        return _this;
    }

    return countDown;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(countDown , 'pages/count-down'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50LWRvd24uanMiXSwibmFtZXMiOlsiY291bnREb3duIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGFyZ2V0VGltZSIsInRhcmdldFRpbWUxIiwidGFyZ2V0VGltZTIiLCJjbGVhclRpbWUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsIm15Rm9ybWF0IiwibXlGb3JtYXQxIiwic3RhdHVzIiwiY2xlYXJUaW1lciIsIm1ldGhvZHMiLCJteUxpbnN0ZXJuZXIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7aUNBMkJSO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVg7QUFDQSxpQkFBTUMsVUFBTixHQUFtQkgsT0FBTyxPQUExQjtBQUNBLGlCQUFNSSxXQUFOLEdBQW9CSixPQUFPLFFBQTNCO0FBQ0EsaUJBQU1LLFdBQU4sR0FBb0JMLE9BQU8sS0FBM0I7QUFDSDs7O21DQUVVO0FBQ1AsaUJBQUtNLFNBQUwsR0FBaUIsSUFBakI7QUFDSDs7O0FBRUQseUJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXRDQUMsTUFzQ0EsR0F0Q1M7QUFDTEMsb0NBQXlCLGVBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLGdDQUFpQjs7QUFESjtBQUZaLFNBc0NUO0FBQUEsY0E3QkFDLElBNkJBLEdBN0JPO0FBQ0hQLHdCQUFZLENBRFQ7QUFFSEMseUJBQWEsQ0FGVjtBQUdIQyx5QkFBYSxDQUhWO0FBSUhNLHNCQUFVLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBSlA7QUFLSEMsdUJBQVcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FMUjtBQU1IQyxvQkFBUSxRQU5MO0FBT0hDLHdCQUFZO0FBUFQsU0E2QlA7QUFBQSxjQW5CQUMsT0FtQkEsR0FuQlU7QUFDTkMsd0JBRE0sMEJBQ1M7QUFDWCxxQkFBS0gsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQUhLLFNBbUJWO0FBQUE7QUFFQzs7O0VBekNrQ0ksZUFBS0MsSTs7a0JBQXZCbkIsUyIsImZpbGUiOiJjb3VudC1kb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIlxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY291bnREb3duIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiQ291bnREb3duIOWAkuiuoeaXtlwiLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktY291bnQtZG93bicgOiAnLi4vaXZpZXcvY291bnQtZG93bi9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHRhcmdldFRpbWU6IDAsXG4gICAgICAgICAgICB0YXJnZXRUaW1lMTogMCxcbiAgICAgICAgICAgIHRhcmdldFRpbWUyOiAwLFxuICAgICAgICAgICAgbXlGb3JtYXQ6IFsn5pe2JywgJ+WIhicsICfnp5InXSxcbiAgICAgICAgICAgIG15Rm9ybWF0MTogWyflpKknLCAn5pe2JywgJ+WIhicsICfnp5InXSxcbiAgICAgICAgICAgIHN0YXR1czogJ+i/m+ihjOS4rS4uLicsXG4gICAgICAgICAgICBjbGVhclRpbWVyOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG15TGluc3Rlcm5lcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICfnu5PmnZ8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy4gdGFyZ2V0VGltZSA9IHRpbWUgKyA2NDMwMDAwO1xuICAgICAgICAgICAgdGhpcy4gdGFyZ2V0VGltZTEgPSB0aW1lICsgODY0MzAwMDA7XG4gICAgICAgICAgICB0aGlzLiB0YXJnZXRUaW1lMiA9IHRpbWUgKyAxMDAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uVW5sb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclRpbWUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19