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

var grid = function (_wepy$page) {
    _inherits(grid, _wepy$page);

    function grid() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, grid);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = grid.__proto__ || Object.getPrototypeOf(grid)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Grid 宫格',
            usingComponents: {
                'i-icon': '../iview/icon/index',
                'i-grid-label': '../iview/grid-label/index',
                'i-grid-icon': '../iview/grid-icon/index',
                'i-grid-item': '../iview/grid-item/index',
                'i-grid': '../iview/grid/index',
                'i-row': '../iview/row/index'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return grid;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(grid , 'pages/grid'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQuanMiXSwibmFtZXMiOlsiZ3JpZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixTQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVSxxQkFERztBQUViLGdDQUFnQiwyQkFGSDtBQUdiLCtCQUFlLDBCQUhGO0FBSWIsK0JBQWUsMEJBSkY7QUFLYiwwQkFBVSxxQkFMRztBQU1iLHlCQUFTO0FBTkk7QUFGWixTOzs7O0VBRHFCQyxlQUFLQyxJOztrQkFBbEJMLEkiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBncmlkIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0dyaWQg5a6r5qC8JyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLWljb24nOiAnLi4vaXZpZXcvaWNvbi9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktZ3JpZC1sYWJlbCc6ICcuLi9pdmlldy9ncmlkLWxhYmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1ncmlkLWljb24nOiAnLi4vaXZpZXcvZ3JpZC1pY29uL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1ncmlkLWl0ZW0nOiAnLi4vaXZpZXcvZ3JpZC1pdGVtL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1ncmlkJzogJy4uL2l2aWV3L2dyaWQvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXJvdyc6ICcuLi9pdmlldy9yb3cvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19