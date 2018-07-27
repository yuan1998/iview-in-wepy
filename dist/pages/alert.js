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

var alert = function (_wepy$page) {
    _inherits(alert, _wepy$page);

    function alert() {
        _classCallCheck(this, alert);

        var _this = _possibleConstructorReturn(this, (alert.__proto__ || Object.getPrototypeOf(alert)).call(this));

        _this.config = {
            navigationBarTitleText: "Alert 警告提示",
            usingComponents: {
                'i-alert': '../iview/alert/index'
            }
        };
        _this.methods = {
            handleClick: function handleClick() {
                console.log('alert-close');
            }
        };
        return _this;
    }

    return alert;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(alert , 'pages/alert'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmpzIl0sIm5hbWVzIjpbImFsZXJ0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQWNqQixxQkFDQTtBQUFBOztBQUFBOztBQUFBLGNBZEFDLE1BY0EsR0FkUztBQUNMQyxvQ0FBeUIsWUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsMkJBQVk7QUFEQztBQUZaLFNBY1Q7QUFBQSxjQVBBQyxPQU9BLEdBUFU7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVkMsd0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFISyxTQU9WO0FBQUE7QUFFQzs7O0VBakI4QkMsZUFBS0MsSTs7a0JBQW5CVCxLIiwiZmlsZSI6ImFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIlxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWxlcnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJBbGVydCDorablkYrmj5DnpLpcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLWFsZXJ0JyA6ICcuLi9pdmlldy9hbGVydC9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FsZXJ0LWNsb3NlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=