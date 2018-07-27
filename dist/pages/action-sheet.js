"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../utils/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionSheet = function (_wepy$page) {
    _inherits(actionSheet, _wepy$page);

    _createClass(actionSheet, [{
        key: "onShareAppMessage",
        value: function onShareAppMessage() {
            return {
                title: 'iView Weapp',
                imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
            };
        }
    }]);

    function actionSheet() {
        _classCallCheck(this, actionSheet);

        var _this = _possibleConstructorReturn(this, (actionSheet.__proto__ || Object.getPrototypeOf(actionSheet)).call(this));

        _this.config = {
            navigationBarTitleText: "ActionSheet 动作面板",
            usingComponents: {
                'i-message': '../iview/message/index',
                'i-button': '../iview/button/index',
                'i-action-sheet': '../iview/action-sheet/index'
            }
        };
        _this.data = {
            visible1: false,
            visible2: false,
            actions1: [{
                name: '选项1'
            }, {
                name: '选项2'
            }, {
                name: '去分享',
                icon: 'share',
                openType: 'share'
            }],
            actions2: [{
                name: '删除',
                color: '#ed3f14'
            }]
        };
        _this.methods = {
            handleOpen1: function handleOpen1() {
                this.visible1 = true;
            },
            handleCancel1: function handleCancel1() {
                this.visible1 = false;
            },
            handleOpen2: function handleOpen2() {
                this.visible2 = true;
            },
            handleCancel2: function handleCancel2() {
                this.visible2 = false;
            },
            handleClickItem1: function handleClickItem1(_ref) {
                var detail = _ref.detail;

                var index = detail.index + 1;

                (0, _index.$Message)({
                    content: '点击了选项' + index
                });
            },
            handleClickItem2: function handleClickItem2() {
                var _this2 = this;

                this.actions2[0].loading = true;

                setTimeout(function () {
                    _this2.actions2[0].loading = false;
                    _this2.visible2 = false;
                    _this2.$apply();

                    (0, _index.$Message)({
                        content: '删除成功！',
                        type: 'success'
                    });
                }, 2000);
            }
        };
        return _this;
    }

    return actionSheet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(actionSheet , 'pages/action-sheet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1zaGVldC5qcyJdLCJuYW1lcyI6WyJhY3Rpb25TaGVldCIsInRpdGxlIiwiaW1hZ2VVcmwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInZpc2libGUxIiwidmlzaWJsZTIiLCJhY3Rpb25zMSIsIm5hbWUiLCJpY29uIiwib3BlblR5cGUiLCJhY3Rpb25zMiIsImNvbG9yIiwibWV0aG9kcyIsImhhbmRsZU9wZW4xIiwiaGFuZGxlQ2FuY2VsMSIsImhhbmRsZU9wZW4yIiwiaGFuZGxlQ2FuY2VsMiIsImhhbmRsZUNsaWNrSXRlbTEiLCJkZXRhaWwiLCJpbmRleCIsImNvbnRlbnQiLCJoYW5kbGVDbGlja0l0ZW0yIiwibG9hZGluZyIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJ0eXBlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLFc7Ozs7OzRDQThFRztBQUNoQixtQkFBTztBQUNIQyx1QkFBTyxhQURKO0FBRUhDLDBCQUFVO0FBRlAsYUFBUDtBQUlIOzs7QUFJRCwyQkFDQTtBQUFBOztBQUFBOztBQUFBLGNBdkZBQyxNQXVGQSxHQXZGUztBQUNMQyxvQ0FBeUIsa0JBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDZCQUFjLHdCQUREO0FBRWIsNEJBQWEsdUJBRkE7QUFHYixrQ0FBbUI7QUFITjtBQUZaLFNBdUZUO0FBQUEsY0E3RUFDLElBNkVBLEdBN0VPO0FBQ0hDLHNCQUFVLEtBRFA7QUFFSEMsc0JBQVUsS0FGUDtBQUdIQyxzQkFBVSxDQUNOO0FBQ0lDLHNCQUFNO0FBRFYsYUFETSxFQUlOO0FBQ0lBLHNCQUFNO0FBRFYsYUFKTSxFQU9OO0FBQ0lBLHNCQUFNLEtBRFY7QUFFSUMsc0JBQU0sT0FGVjtBQUdJQywwQkFBVTtBQUhkLGFBUE0sQ0FIUDtBQWdCSEMsc0JBQVUsQ0FDTjtBQUNJSCxzQkFBTSxJQURWO0FBRUlJLHVCQUFPO0FBRlgsYUFETTtBQWhCUCxTQTZFUDtBQUFBLGNBckRBQyxPQXFEQSxHQXJEVTtBQUVOQyx1QkFGTSx5QkFFUztBQUNYLHFCQUFLVCxRQUFMLEdBQWUsSUFBZjtBQUNILGFBSks7QUFNTlUseUJBTk0sMkJBTVc7QUFDYixxQkFBS1YsUUFBTCxHQUFlLEtBQWY7QUFDSCxhQVJLO0FBVU5XLHVCQVZNLHlCQVVTO0FBQ1gscUJBQUtWLFFBQUwsR0FBZSxJQUFmO0FBQ0gsYUFaSztBQWNOVyx5QkFkTSwyQkFjVztBQUNiLHFCQUFLWCxRQUFMLEdBQWUsS0FBZjtBQUNILGFBaEJLO0FBa0JOWSw0QkFsQk0sa0NBa0J3QjtBQUFBLG9CQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQzFCLG9CQUFJQyxRQUFRRCxPQUFPQyxLQUFQLEdBQWUsQ0FBM0I7O0FBRUEscUNBQVM7QUFDTEMsNkJBQVMsVUFBVUQ7QUFEZCxpQkFBVDtBQUdILGFBeEJLO0FBMEJORSw0QkExQk0sOEJBMEJjO0FBQUE7O0FBQ2hCLHFCQUFLWCxRQUFMLENBQWMsQ0FBZCxFQUFpQlksT0FBakIsR0FBMkIsSUFBM0I7O0FBRUFDLDJCQUFXLFlBQU07QUFDYiwyQkFBS2IsUUFBTCxDQUFjLENBQWQsRUFBaUJZLE9BQWpCLEdBQTJCLEtBQTNCO0FBQ0EsMkJBQUtqQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsMkJBQUttQixNQUFMOztBQUVBLHlDQUFTO0FBQ0xKLGlDQUFTLE9BREo7QUFFTEssOEJBQU07QUFGRCxxQkFBVDtBQUtILGlCQVZELEVBVUcsSUFWSDtBQVdIO0FBeENLLFNBcURWO0FBQUE7QUFFQzs7O0VBMUZvQ0MsZUFBS0MsSTs7a0JBQXpCOUIsVyIsImZpbGUiOiJhY3Rpb24tc2hlZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG4gICAgaW1wb3J0IHsgJE1lc3NhZ2V9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhY3Rpb25TaGVldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiBcIkFjdGlvblNoZWV0IOWKqOS9nOmdouadv1wiLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktbWVzc2FnZScgOiAnLi4vaXZpZXcvbWVzc2FnZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktYnV0dG9uJyA6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLWFjdGlvbi1zaGVldCcgOiAnLi4vaXZpZXcvYWN0aW9uLXNoZWV0L2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHZpc2libGUxOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGUyOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGlvbnMxOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn6YCJ6aG5MScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfpgInpobkyJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Y675YiG5LqrJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3NoYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgb3BlblR5cGU6ICdzaGFyZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYWN0aW9uczI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNlZDNmMTQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcblxuICAgICAgICAgICAgaGFuZGxlT3BlbjEgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZTE9IHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVDYW5jZWwxICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUxPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhhbmRsZU9wZW4yICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUyPSB0cnVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsMiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlMj0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoYW5kbGVDbGlja0l0ZW0xICh7IGRldGFpbCB9KSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZGV0YWlsLmluZGV4ICsgMTtcblxuICAgICAgICAgICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+eCueWHu+S6humAiemhuScgKyBpbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGFuZGxlQ2xpY2tJdGVtMiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zMlswXS5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMyWzBdLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdpVmlldyBXZWFwcCcsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2ZpbGUuaXZpZXd1aS5jb20vaXZpZXctd2VhcHAtbG9nby5wbmcnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==