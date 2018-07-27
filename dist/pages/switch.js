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

var _switch = function (_wepy$page) {
    _inherits(_switch, _wepy$page);

    function _switch() {
        _classCallCheck(this, _switch);

        var _this = _possibleConstructorReturn(this, (_switch.__proto__ || Object.getPrototypeOf(_switch)).call(this));

        _this.config = {
            navigationBarTitleText: "Switch 开关",
            usingComponents: {
                'i-switch': '../iview/switch/index',
                'i-cell': '../iview/cell/index',
                'i-cell-group': '../iview/cell-group/index',
                'i-icon': '../iview/icon/index'
            }
        };
        _this.data = {
            switch1: false
        };
        _this.methods = {
            change: function change(event) {
                this.switch1 = event.detail.value;
            }
        };
        return _this;
    }

    return _switch;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_switch , 'pages/switch'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC5qcyJdLCJuYW1lcyI6WyJfc3dpdGNoIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzd2l0Y2gxIiwibWV0aG9kcyIsImNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwidmFsdWUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQXVCakIsdUJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXZCQUMsTUF1QkEsR0F2QlM7QUFDTEMsb0NBQXlCLFdBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFhLHVCQURBO0FBRWIsMEJBQVcscUJBRkU7QUFHYixnQ0FBaUIsMkJBSEo7QUFJYiwwQkFBVztBQUpFO0FBRlosU0F1QlQ7QUFBQSxjQVpBQyxJQVlBLEdBWk87QUFDSEMscUJBQVU7QUFEUCxTQVlQO0FBQUEsY0FQQUMsT0FPQSxHQVBVO0FBQ05DLGtCQURNLGtCQUNDQyxLQURELEVBQ087QUFDVCxxQkFBS0gsT0FBTCxHQUFlRyxNQUFNQyxNQUFOLENBQWFDLEtBQTVCO0FBQ0g7QUFISyxTQU9WO0FBQUE7QUFFQzs7O0VBMUJnQ0MsZUFBS0MsSTs7a0JBQXJCWixPIiwiZmlsZSI6InN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIF9zd2l0Y2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJTd2l0Y2gg5byA5YWzXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1zd2l0Y2gnIDogJy4uL2l2aWV3L3N3aXRjaC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2VsbCcgOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2VsbC1ncm91cCcgOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktaWNvbicgOiAnLi4vaXZpZXcvaWNvbi9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzd2l0Y2gxIDogZmFsc2VcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGNoYW5nZShldmVudCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2gxID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19