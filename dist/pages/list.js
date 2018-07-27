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

var list = function (_wepy$page) {
    _inherits(list, _wepy$page);

    function list() {
        _classCallCheck(this, list);

        var _this = _possibleConstructorReturn(this, (list.__proto__ || Object.getPrototypeOf(list)).call(this));

        _this.config = {
            navigationBarTitleText: 'List 列表',
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-cell': '../iview/cell/index',
                'i-switch': '../iview/switch/index',
                'i-icon': '../iview/icon/index',
                'i-cell-group': '../iview/cell-group/index'
            }
        };
        _this.data = {
            switch1: true
        };
        _this.methods = {
            onChange: function onChange(event) {
                var detail = event.detail;
                this.switch1 = detail.value;
                console.log(this.switch1);
            }
        };
        return _this;
    }

    return list;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(list , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsibGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3dpdGNoMSIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFZakIsb0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxjQVhkQyxNQVdjLEdBWEw7QUFDTEMsb0NBQXlCLFNBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDJCQUFZLHNCQURDO0FBRWIsMEJBQVcscUJBRkU7QUFHYiw0QkFBYSx1QkFIQTtBQUliLDBCQUFXLHFCQUpFO0FBS2IsZ0NBQWlCO0FBTEo7QUFGWixTQVdLO0FBQUEsY0FJZEMsSUFKYyxHQUlQO0FBQ0hDLHFCQUFVO0FBRFAsU0FKTztBQUFBLGNBUWRDLE9BUmMsR0FRSjtBQUNOQyxvQkFETSxvQkFDR0MsS0FESCxFQUNTO0FBQ1gsb0JBQUlDLFNBQVNELE1BQU1DLE1BQW5CO0FBQ0EscUJBQUtKLE9BQUwsR0FBZUksT0FBT0MsS0FBdEI7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLUCxPQUFqQjtBQUNIO0FBTEssU0FSSTtBQUFBO0FBRWI7OztFQWQ2QlEsZUFBS0MsSTs7a0JBQWxCZCxJIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiAnTGlzdCDliJfooagnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktcGFuZWwnIDogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1jZWxsJyA6ICcuLi9pdmlldy9jZWxsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1zd2l0Y2gnIDogJy4uL2l2aWV3L3N3aXRjaC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktaWNvbicgOiAnLi4vaXZpZXcvaWNvbi9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2VsbC1ncm91cCcgOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3dpdGNoMSA6IHRydWUsXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb25DaGFuZ2UoZXZlbnQpe1xuICAgICAgICAgICAgICAgIGxldCBkZXRhaWwgPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2gxID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuIl19