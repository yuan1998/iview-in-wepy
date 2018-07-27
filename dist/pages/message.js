"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var message = function (_wepy$page) {
    _inherits(message, _wepy$page);

    function message() {
        _classCallCheck(this, message);

        var _this = _possibleConstructorReturn(this, (message.__proto__ || Object.getPrototypeOf(message)).call(this));

        _this.config = {
            navigationBarTitleText: "Message 全局提醒",
            usingComponents: {
                'i-button': '../iview/button/index',
                'i-message': '../iview/message/index'
            }
        };
        _this.methods = {
            handleDefault: function handleDefault() {
                (0, _index.$Message)({
                    content: '这是一条普通提醒'
                });
            },
            handleSuccess: function handleSuccess() {
                (0, _index.$Message)({
                    content: '这是一条成功提醒',
                    type: 'success'
                });
            },
            handleWarning: function handleWarning() {
                (0, _index.$Message)({
                    content: '这是一条警告提醒',
                    type: 'warning'
                });
            },
            handleError: function handleError() {
                (0, _index.$Message)({
                    content: '这是一条错误提醒',
                    type: 'error'
                });
            },
            handleDuration: function handleDuration() {
                (0, _index.$Message)({
                    content: '我将在 5 秒后消失',
                    duration: 5
                });
            }
        };
        return _this;
    }

    return message;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(message , 'pages/message'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJtZXRob2RzIiwiaGFuZGxlRGVmYXVsdCIsImNvbnRlbnQiLCJoYW5kbGVTdWNjZXNzIiwidHlwZSIsImhhbmRsZVdhcm5pbmciLCJoYW5kbGVFcnJvciIsImhhbmRsZUR1cmF0aW9uIiwiZHVyYXRpb24iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQXlDakIsdUJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXpDQUMsTUF5Q0EsR0F6Q1M7QUFDTEMsb0NBQXlCLGNBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFhLHVCQURBO0FBRWIsNkJBQWM7QUFGRDtBQUZaLFNBeUNUO0FBQUEsY0FqQ0FDLE9BaUNBLEdBakNVO0FBQ05DLHlCQURNLDJCQUNXO0FBQ2IscUNBQVM7QUFDTEMsNkJBQVM7QUFESixpQkFBVDtBQUdILGFBTEs7QUFNTkMseUJBTk0sMkJBTVc7QUFDYixxQ0FBUztBQUNMRCw2QkFBUyxVQURKO0FBRUxFLDBCQUFNO0FBRkQsaUJBQVQ7QUFJSCxhQVhLO0FBWU5DLHlCQVpNLDJCQVlXO0FBQ2IscUNBQVM7QUFDTEgsNkJBQVMsVUFESjtBQUVMRSwwQkFBTTtBQUZELGlCQUFUO0FBSUgsYUFqQks7QUFrQk5FLHVCQWxCTSx5QkFrQlM7QUFDWCxxQ0FBUztBQUNMSiw2QkFBUyxVQURKO0FBRUxFLDBCQUFNO0FBRkQsaUJBQVQ7QUFJSCxhQXZCSztBQXdCTkcsMEJBeEJNLDRCQXdCWTtBQUNkLHFDQUFTO0FBQ0xMLDZCQUFTLFlBREo7QUFFTE0sOEJBQVU7QUFGTCxpQkFBVDtBQUlIO0FBN0JLLFNBaUNWO0FBQUE7QUFFQzs7O0VBNUNnQ0MsZUFBS0MsSTs7a0JBQXJCZCxPIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG4gICAgaW1wb3J0IHskTWVzc2FnZX0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG1lc3NhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJNZXNzYWdlIOWFqOWxgOaPkOmGklwiLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktYnV0dG9uJyA6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLW1lc3NhZ2UnIDogJy4uL2l2aWV3L21lc3NhZ2UvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGhhbmRsZURlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+S4gOadoeaZrumAmuaPkOmGkidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVTdWNjZXNzICgpIHtcbiAgICAgICAgICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/kuIDmnaHmiJDlip/mj5DphpInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVXYXJuaW5nICgpIHtcbiAgICAgICAgICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/kuIDmnaHorablkYrmj5DphpInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVFcnJvciAoKSB7XG4gICAgICAgICAgICAgICAgJE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5p2h6ZSZ6K+v5o+Q6YaSJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUR1cmF0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmiJHlsIblnKggNSDnp5LlkI7mtojlpLEnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=