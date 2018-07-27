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

var swipeout = function (_wepy$page) {
    _inherits(swipeout, _wepy$page);

    function swipeout() {
        _classCallCheck(this, swipeout);

        var _this = _possibleConstructorReturn(this, (swipeout.__proto__ || Object.getPrototypeOf(swipeout)).call(this));

        _this.config = {
            navigationBarTitleText: "Swiperout 滑动菜单",
            usingComponents: {
                "i-swipeout": "../iview/swipeout/index",
                "i-action-sheet": "../iview/action-sheet/index",
                "i-cell": "../iview/cell/index",
                "i-icon": "../iview/icon/index"
            }
        };
        _this.data = {
            visible2: false,
            //小程序没有refs，所以只能用动态布尔值控制关闭
            toggle: false,
            toggle2: false,
            actions2: [{
                name: '删除',
                color: '#ed3f14'
            }],
            actions: [{
                name: '喜欢',
                color: '#fff',
                fontsize: '20',
                width: 100,
                icon: 'like',
                background: '#ed3f14'
            }, {
                name: '返回',
                width: 100,
                color: '#80848f',
                fontsize: '20',
                icon: 'undo'
            }]
        };
        _this.methods = {
            handleCancel2: function handleCancel2() {
                this.visible2 = false;
                this.toggle = !this.toggle;
                console.log(this.toggle, 111111111);
            },
            handleClickItem2: function handleClickItem2() {
                var _this2 = this;

                this.actions2[0].loading = true;

                setTimeout(function () {
                    _this2.actions2[0].loading = false;
                    _this2.visible2 = false;
                    _this2.toggle = !_this2.toggle;

                    _this2.$apply();
                }, 2000);
            },
            handlerCloseButton: function handlerCloseButton() {
                this.toggle2 = !this.toggle2;
            },
            actionsTap: function actionsTap() {
                this.visible2 = true;
            }
        };
        return _this;
    }

    return swipeout;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(swipeout , 'pages/swipeout'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlb3V0LmpzIl0sIm5hbWVzIjpbInN3aXBlb3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJ2aXNpYmxlMiIsInRvZ2dsZSIsInRvZ2dsZTIiLCJhY3Rpb25zMiIsIm5hbWUiLCJjb2xvciIsImFjdGlvbnMiLCJmb250c2l6ZSIsIndpZHRoIiwiaWNvbiIsImJhY2tncm91bmQiLCJtZXRob2RzIiwiaGFuZGxlQ2FuY2VsMiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja0l0ZW0yIiwibG9hZGluZyIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJoYW5kbGVyQ2xvc2VCdXR0b24iLCJhY3Rpb25zVGFwIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7QUFvRWpCLHdCQUNBO0FBQUE7O0FBQUE7O0FBQUEsY0FwRUFDLE1Bb0VBLEdBcEVTO0FBQ0xDLG9DQUF5QixnQkFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsOEJBQWUseUJBREY7QUFFYixrQ0FBbUIsNkJBRk47QUFHYiwwQkFBVyxxQkFIRTtBQUliLDBCQUFXO0FBSkU7QUFGWixTQW9FVDtBQUFBLGNBMURBQyxJQTBEQSxHQTFETztBQUNIQyxzQkFBVSxLQURQO0FBRUg7QUFDQUMsb0JBQVMsS0FITjtBQUlIQyxxQkFBVSxLQUpQO0FBS0hDLHNCQUFVLENBQ047QUFDSUMsc0JBQU0sSUFEVjtBQUVJQyx1QkFBTztBQUZYLGFBRE0sQ0FMUDtBQVdIQyxxQkFBVSxDQUNOO0FBQ0lGLHNCQUFPLElBRFg7QUFFSUMsdUJBQVEsTUFGWjtBQUdJRSwwQkFBVyxJQUhmO0FBSUlDLHVCQUFRLEdBSlo7QUFLSUMsc0JBQU8sTUFMWDtBQU1JQyw0QkFBYTtBQU5qQixhQURNLEVBU047QUFDSU4sc0JBQU8sSUFEWDtBQUVJSSx1QkFBUSxHQUZaO0FBR0lILHVCQUFRLFNBSFo7QUFJSUUsMEJBQVcsSUFKZjtBQUtJRSxzQkFBTztBQUxYLGFBVE07QUFYUCxTQTBEUDtBQUFBLGNBM0JBRSxPQTJCQSxHQTNCVTtBQUNOQywyQkFBZSx5QkFBWTtBQUN2QixxQkFBS1osUUFBTCxHQUFnQixLQUFoQjtBQUNBLHFCQUFLQyxNQUFMLEdBQWMsQ0FBQyxLQUFLQSxNQUFwQjtBQUNBWSx3QkFBUUMsR0FBUixDQUFZLEtBQUtiLE1BQWpCLEVBQXlCLFNBQXpCO0FBQ0gsYUFMSztBQU1OYyw0QkFOTSw4QkFNYztBQUFBOztBQUNoQixxQkFBS1osUUFBTCxDQUFjLENBQWQsRUFBaUJhLE9BQWpCLEdBQTJCLElBQTNCOztBQUVBQywyQkFBVyxZQUFNO0FBQ2IsMkJBQUtkLFFBQUwsQ0FBYyxDQUFkLEVBQWlCYSxPQUFqQixHQUEyQixLQUEzQjtBQUNBLDJCQUFLaEIsUUFBTCxHQUFnQixLQUFoQjtBQUNBLDJCQUFLQyxNQUFMLEdBQWEsQ0FBQyxPQUFLQSxNQUFuQjs7QUFFQSwyQkFBS2lCLE1BQUw7QUFFSCxpQkFQRCxFQU9HLElBUEg7QUFRSCxhQWpCSztBQWtCTkMsOEJBbEJNLGdDQWtCYztBQUNoQixxQkFBS2pCLE9BQUwsR0FBZSxDQUFDLEtBQUtBLE9BQXJCO0FBQ0gsYUFwQks7QUFxQk5rQixzQkFyQk0sd0JBcUJNO0FBQ1IscUJBQUtwQixRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUF2QkssU0EyQlY7QUFBQTtBQUVDOzs7RUF2RWlDcUIsZUFBS0MsSTs7a0JBQXRCM0IsUSIsImZpbGUiOiJzd2lwZW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcbiAgICBpbXBvcnQgeyRNZXNzYWdlfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIlxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3dpcGVvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJTd2lwZXJvdXQg5ruR5Yqo6I+c5Y2VXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcImktc3dpcGVvdXRcIiA6IFwiLi4vaXZpZXcvc3dpcGVvdXQvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcImktYWN0aW9uLXNoZWV0XCIgOiBcIi4uL2l2aWV3L2FjdGlvbi1zaGVldC9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwiaS1jZWxsXCIgOiBcIi4uL2l2aWV3L2NlbGwvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcImktaWNvblwiIDogXCIuLi9pdmlldy9pY29uL2luZGV4XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgdmlzaWJsZTI6IGZhbHNlLFxuICAgICAgICAgICAgLy/lsI/nqIvluo/msqHmnIlyZWZz77yM5omA5Lul5Y+q6IO955So5Yqo5oCB5biD5bCU5YC85o6n5Yi25YWz6ZetXG4gICAgICAgICAgICB0b2dnbGUgOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZTIgOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGlvbnMyOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZWQzZjE0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhY3Rpb25zIDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6ICfllpzmrKInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udHNpemUgOiAnMjAnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbiA6ICdsaWtlJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCA6ICcjZWQzZjE0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ+i/lOWbnicsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICcjODA4NDhmJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udHNpemUgOiAnMjAnLFxuICAgICAgICAgICAgICAgICAgICBpY29uIDogJ3VuZG8nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsMjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZTIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSA9ICF0aGlzLnRvZ2dsZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZSwgMTExMTExMTExKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrSXRlbTIgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uczJbMF0ubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zMlswXS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZTIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGU9ICF0aGlzLnRvZ2dsZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFuZGxlckNsb3NlQnV0dG9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUyID0gIXRoaXMudG9nZ2xlMjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpb25zVGFwKCl7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlMiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==