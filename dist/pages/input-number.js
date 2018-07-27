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

var inputNumber = function (_wepy$page) {
    _inherits(inputNumber, _wepy$page);

    function inputNumber() {
        _classCallCheck(this, inputNumber);

        var _this = _possibleConstructorReturn(this, (inputNumber.__proto__ || Object.getPrototypeOf(inputNumber)).call(this));

        _this.config = {
            navigationBarTitleText: "InputNumber 数字输入框",
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-input-number': '../iview/input-number/index'

            }
        };
        _this.data = {
            value1: 1,
            value2: 0.1
        };
        _this.methods = {
            handleChange1: function handleChange1(_ref) {
                var detail = _ref.detail;

                this.value1 = detail.value;
            },
            handleChange2: function handleChange2(_ref2) {
                var detail = _ref2.detail;

                this.value2 = detail.value;
            }
        };
        return _this;
    }

    return inputNumber;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(inputNumber , 'pages/input-number'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW51bWJlci5qcyJdLCJuYW1lcyI6WyJpbnB1dE51bWJlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwidmFsdWUxIiwidmFsdWUyIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZTEiLCJkZXRhaWwiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZTIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQTJCakIsMkJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQTNCQUMsTUEyQkEsR0EzQlM7QUFDTEMsb0NBQXlCLG1CQURwQjtBQUVMQyw2QkFBaUI7QUFDYiwyQkFBWSxzQkFEQztBQUViLGtDQUFtQjs7QUFGTjtBQUZaLFNBMkJUO0FBQUEsY0FqQkFDLElBaUJBLEdBakJPO0FBQ0hDLG9CQUFRLENBREw7QUFFSEMsb0JBQVE7QUFGTCxTQWlCUDtBQUFBLGNBWEFDLE9BV0EsR0FYVTtBQUNOQyx5QkFETSwrQkFDcUI7QUFBQSxvQkFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUN2QixxQkFBS0osTUFBTCxHQUFjSSxPQUFPQyxLQUFyQjtBQUNILGFBSEs7QUFLTkMseUJBTE0sZ0NBS3FCO0FBQUEsb0JBQVZGLE1BQVUsU0FBVkEsTUFBVTs7QUFDdkIscUJBQUtILE1BQUwsR0FBY0csT0FBT0MsS0FBckI7QUFDSDtBQVBLLFNBV1Y7QUFBQTtBQUVDOzs7RUE5Qm9DRSxlQUFLQyxJOztrQkFBekJiLFciLCJmaWxlIjoiaW5wdXQtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIlxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5wdXROdW1iZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJJbnB1dE51bWJlciDmlbDlrZfovpPlhaXmoYZcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLXBhbmVsJyA6ICcuLi9pdmlldy9wYW5lbC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktaW5wdXQtbnVtYmVyJyA6ICcuLi9pdmlldy9pbnB1dC1udW1iZXIvaW5kZXgnLFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB2YWx1ZTE6IDEsXG4gICAgICAgICAgICB2YWx1ZTI6IDAuMVxuICAgICAgICB9XG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlMSAoeyBkZXRhaWwgfSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUxID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlMiAoeyBkZXRhaWwgfSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUyID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19