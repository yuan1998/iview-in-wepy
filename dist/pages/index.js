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

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'iView in Wepy',
            usingComponents: {
                'i-cell': '../iview/cell/index',
                'i-panel': '../iview/panel/index',
                'i-cell-group': '../iview/cell-group/index'
            }
        }, _this.data = {
            testTitle: 'Test',
            content: [{
                title: '布局',
                cells: [{
                    title: 'Layout 栅格布局',
                    isLink: true,
                    pageName: 'layout'
                }, {
                    title: 'Grid 宫格',
                    isLink: true,
                    pageName: 'grid'
                }, {
                    title: 'Panel 面板',
                    isLink: true,
                    pageName: 'panel'
                }, {
                    title: 'List 列表',
                    isLink: true,
                    pageName: 'list'
                }, {
                    title: 'Card 卡片',
                    isLink: true,
                    pageName: 'card'
                }]
            }, {
                title: '基础组件',
                cells: [{
                    title: 'Button 按钮',
                    pageName: 'button',
                    isLink: true
                }, {
                    title: 'Color 色彩',
                    pageName: 'color',
                    isLink: true
                }, {
                    title: 'Icon 图标',
                    pageName: 'icon',
                    isLink: true
                }]
            }, {
                title: '导航',
                cells: [{
                    title: 'TabBar 标签栏',
                    pageName: 'tab-bar',
                    isLink: true
                }, {
                    title: 'Tabs 标签页',
                    pageName: 'tabs',
                    isLink: true
                }, {
                    title: 'Drawer 抽屉',
                    pageName: 'drawer',
                    isLink: true
                }, {
                    title: 'Page 分页',
                    pageName: 'page',
                    isLink: true
                }, {
                    title: 'Steps 步骤条',
                    pageName: 'steps',
                    isLink: true
                }, {
                    title: 'NoticeBar 通告栏',
                    pageName: 'notice-bar',
                    isLink: true
                }, {
                    title: 'Index 索引选择器',
                    pageName: 'index-list',
                    isLink: true
                }, {
                    title: 'Sticky 吸顶容器',
                    pageName: 'sticky',
                    isLink: true
                }, {
                    title: 'Sticky Index',
                    pageName: 'index-sticky',
                    isLink: true
                }]
            }, {
                title: '操作反馈',
                cells: [{
                    title: 'ActionSheet 动作面板',
                    pageName: 'action-sheet',
                    isLink: true
                }, {
                    title: 'Toast 轻提示',
                    pageName: 'toast',
                    isLink: true
                }, {
                    title: 'Modal 对话框',
                    pageName: 'modal',
                    isLink: true
                }, {
                    title: 'Message 全局提醒',
                    pageName: 'message',
                    isLink: true
                }, {
                    title: 'Spin 加载中',
                    pageName: 'spin',
                    isLink: true
                }, {
                    title: 'Swipeout 滑动菜单',
                    pageName: 'swipeout',
                    isLink: true
                }]
            }, {
                title: '视图',
                cells: [{
                    title: 'Badge 徽章',
                    pageName: 'badge',
                    isLink: true
                }, {
                    title: 'Alert 警告提示',
                    pageName: 'alert',
                    isLink: true
                }, {
                    title: 'Tag 标签',
                    pageName: 'tag',
                    isLink: true
                }, {
                    title: 'Progress 进度条',
                    pageName: 'progress',
                    isLink: true
                }, {
                    title: 'Avatar 头像',
                    pageName: 'avatar',
                    isLink: true
                }, {
                    title: 'CountDown 倒计时',
                    pageName: 'count-down',
                    isLink: true
                }, {
                    title: 'Divider 分隔符',
                    pageName: 'divider',
                    isLink: true
                }, {
                    title: 'Collapse 折叠面板',
                    pageName: 'collapse',
                    isLink: true
                }, {
                    title: 'LoadMore 页底提示',
                    pageName: 'load-more',
                    isLink: true
                }]
            }, {
                title: '表单',
                cells: [{
                    title: 'Input 输入框',
                    pageName: 'input',
                    isLink: true
                }, {
                    title: 'Radio 单选',
                    pageName: 'radio',
                    isLink: true
                }, {
                    title: 'Checkbox 复选',
                    pageName: 'checkbox',
                    isLink: true
                }, {
                    title: 'Switch 开关',
                    pageName: 'switch',
                    isLink: true
                }, {
                    title: 'Rate 评分',
                    pageName: 'rate',
                    isLink: true
                }, {
                    title: 'InputNumber 数字输入框',
                    pageName: 'input-number',
                    isLink: true
                }]
            }]
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJ0ZXN0VGl0bGUiLCJjb250ZW50IiwidGl0bGUiLCJjZWxscyIsImlzTGluayIsInBhZ2VOYW1lIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsZUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsMEJBQVcscUJBREU7QUFFYiwyQkFBWSxzQkFGQztBQUdiLGdDQUFpQjtBQUhKO0FBRlosUyxRQVNUQyxJLEdBQU87QUFDSEMsdUJBQVksTUFEVDtBQUVIQyxxQkFBVSxDQUNOO0FBQ0lDLHVCQUFRLElBRFo7QUFFSUMsdUJBQVEsQ0FDSjtBQUNJRCwyQkFBUSxhQURaO0FBRUlFLDRCQUFTLElBRmI7QUFHSUMsOEJBQVc7QUFIZixpQkFESSxFQU1KO0FBQ0lILDJCQUFRLFNBRFo7QUFFSUUsNEJBQVMsSUFGYjtBQUdJQyw4QkFBVztBQUhmLGlCQU5JLEVBV0o7QUFDSUgsMkJBQVEsVUFEWjtBQUVJRSw0QkFBUyxJQUZiO0FBR0lDLDhCQUFXO0FBSGYsaUJBWEksRUFnQko7QUFDSUgsMkJBQVEsU0FEWjtBQUVJRSw0QkFBUyxJQUZiO0FBR0lDLDhCQUFXO0FBSGYsaUJBaEJJLEVBcUJKO0FBQ0lILDJCQUFRLFNBRFo7QUFFSUUsNEJBQVMsSUFGYjtBQUdJQyw4QkFBVTtBQUhkLGlCQXJCSTtBQUZaLGFBRE0sRUFpQ047QUFDSUgsdUJBQU8sTUFEWDtBQUVJQyx1QkFBUSxDQUNKO0FBQ0lELDJCQUFNLFdBRFY7QUFFSUcsOEJBQVMsUUFGYjtBQUdJRCw0QkFBTztBQUhYLGlCQURJLEVBTUo7QUFDSUYsMkJBQU0sVUFEVjtBQUVJRyw4QkFBUyxPQUZiO0FBR0lELDRCQUFPO0FBSFgsaUJBTkksRUFXSjtBQUNJRiwyQkFBTSxTQURWO0FBRUlHLDhCQUFTLE1BRmI7QUFHSUQsNEJBQU87QUFIWCxpQkFYSTtBQUZaLGFBakNNLEVBc0ROO0FBQ0lGLHVCQUFPLElBRFg7QUFFSUMsdUJBQVEsQ0FDSjtBQUNJRCwyQkFBUSxZQURaO0FBRUlHLDhCQUFXLFNBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFESSxFQU1KO0FBQ0lGLDJCQUFRLFVBRFo7QUFFSUcsOEJBQVcsTUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQU5JLEVBV0o7QUFDSUYsMkJBQVEsV0FEWjtBQUVJRyw4QkFBVyxRQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBWEksRUFnQko7QUFDSUYsMkJBQVEsU0FEWjtBQUVJRyw4QkFBVyxNQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBaEJJLEVBcUJKO0FBQ0lGLDJCQUFRLFdBRFo7QUFFSUcsOEJBQVcsT0FGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQXJCSSxFQTBCSjtBQUNJRiwyQkFBUSxlQURaO0FBRUlHLDhCQUFXLFlBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkExQkksRUErQko7QUFDSUYsMkJBQVEsYUFEWjtBQUVJRyw4QkFBVyxZQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBL0JJLEVBb0NKO0FBQ0lGLDJCQUFRLGFBRFo7QUFFSUcsOEJBQVcsUUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQXBDSSxFQXlDSjtBQUNJRiwyQkFBUSxjQURaO0FBRUlHLDhCQUFXLGNBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkF6Q0k7QUFGWixhQXRETSxFQTBHTjtBQUNJRix1QkFBTyxNQURYO0FBRUlDLHVCQUFRLENBQ0o7QUFDSUQsMkJBQVEsa0JBRFo7QUFFSUcsOEJBQVcsY0FGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQURJLEVBTUo7QUFDSUYsMkJBQVEsV0FEWjtBQUVJRyw4QkFBVyxPQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBTkksRUFXSjtBQUNJRiwyQkFBUSxXQURaO0FBRUlHLDhCQUFXLE9BRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFYSSxFQWdCSjtBQUNJRiwyQkFBUSxjQURaO0FBRUlHLDhCQUFXLFNBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFoQkksRUFxQko7QUFDSUYsMkJBQVEsVUFEWjtBQUVJRyw4QkFBVyxNQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBckJJLEVBMEJKO0FBQ0lGLDJCQUFRLGVBRFo7QUFFSUcsOEJBQVcsVUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQTFCSTtBQUZaLGFBMUdNLEVBK0lOO0FBQ0lGLHVCQUFPLElBRFg7QUFFSUMsdUJBQVEsQ0FDSjtBQUNJRCwyQkFBUSxVQURaO0FBRUlHLDhCQUFXLE9BRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFESSxFQU1KO0FBQ0lGLDJCQUFRLFlBRFo7QUFFSUcsOEJBQVcsT0FGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQU5JLEVBV0o7QUFDSUYsMkJBQVEsUUFEWjtBQUVJRyw4QkFBVyxLQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBWEksRUFnQko7QUFDSUYsMkJBQVEsY0FEWjtBQUVJRyw4QkFBVyxVQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBaEJJLEVBcUJKO0FBQ0lGLDJCQUFRLFdBRFo7QUFFSUcsOEJBQVcsUUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQXJCSSxFQTBCSjtBQUNJRiwyQkFBUSxlQURaO0FBRUlHLDhCQUFXLFlBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkExQkksRUErQko7QUFDSUYsMkJBQVEsYUFEWjtBQUVJRyw4QkFBVyxTQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBL0JJLEVBb0NKO0FBQ0lGLDJCQUFRLGVBRFo7QUFFSUcsOEJBQVcsVUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQXBDSSxFQXlDSjtBQUNJRiwyQkFBUSxlQURaO0FBRUlHLDhCQUFXLFdBRmY7QUFHSUQsNEJBQVE7QUFIWixpQkF6Q0k7QUFGWixhQS9JTSxFQW9NTjtBQUNJRix1QkFBTyxJQURYO0FBRUlDLHVCQUFRLENBQ0o7QUFDSUQsMkJBQVEsV0FEWjtBQUVJRyw4QkFBVyxPQUZmO0FBR0lELDRCQUFRO0FBSFosaUJBREksRUFNSjtBQUNJRiwyQkFBUSxVQURaO0FBRUlHLDhCQUFXLE9BRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFOSSxFQVdKO0FBQ0lGLDJCQUFRLGFBRFo7QUFFSUcsOEJBQVcsVUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQVhJLEVBZ0JKO0FBQ0lGLDJCQUFRLFdBRFo7QUFFSUcsOEJBQVcsUUFGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQWhCSSxFQXFCSjtBQUNJRiwyQkFBUSxTQURaO0FBRUlHLDhCQUFXLE1BRmY7QUFHSUQsNEJBQVE7QUFIWixpQkFyQkksRUEwQko7QUFDSUYsMkJBQVEsbUJBRFo7QUFFSUcsOEJBQVcsY0FGZjtBQUdJRCw0QkFBUTtBQUhaLGlCQTFCSTtBQUZaLGFBcE1NO0FBRlAsUzs7OztFQVZ3QkUsZUFBS0MsSTs7a0JBQW5CWixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ2lWaWV3IGluIFdlcHknLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktY2VsbCcgOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktcGFuZWwnIDogJy4uL2l2aWV3L3BhbmVsL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1jZWxsLWdyb3VwJyA6ICcuLi9pdmlldy9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB0ZXN0VGl0bGUgOiAnVGVzdCcsXG4gICAgICAgICAgICBjb250ZW50IDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAn5biD5bGAJyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbHMgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnTGF5b3V0IOagheagvOW4g+WxgCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdsYXlvdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ0dyaWQg5a6r5qC8JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmsgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ2dyaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1BhbmVsIOmdouadvycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdwYW5lbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnTGlzdCDliJfooagnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluayA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnQ2FyZCDljaHniYcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluayA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOidjYXJkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WfuuehgOe7hOS7ticsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOidCdXR0b24g5oyJ6ZKuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTonYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6J0NvbG9yIOiJsuW9qScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU6J2NvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6J0ljb24g5Zu+5qCHJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTonaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflr7zoiKonLFxuICAgICAgICAgICAgICAgICAgICBjZWxscyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdUYWJCYXIg5qCH562+5qCPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICd0YWItYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnVGFicyDmoIfnrb7pobUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ3RhYnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdEcmF3ZXIg5oq95bGJJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdkcmF3ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdQYWdlIOWIhumhtScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAncGFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1N0ZXBzIOatpemqpOadoScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnc3RlcHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdOb3RpY2VCYXIg6YCa5ZGK5qCPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdub3RpY2UtYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnSW5kZXgg57Si5byV6YCJ5oup5ZmoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdpbmRleC1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnU3RpY2t5IOWQuOmhtuWuueWZqCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnc3RpY2t5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnU3RpY2t5IEluZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdpbmRleC1zdGlja3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmk43kvZzlj43ppognLFxuICAgICAgICAgICAgICAgICAgICBjZWxscyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdBY3Rpb25TaGVldCDliqjkvZzpnaLmnb8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ2FjdGlvbi1zaGVldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1RvYXN0IOi9u+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAndG9hc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdNb2RhbCDlr7nor53moYYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ21vZGFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnTWVzc2FnZSDlhajlsYDmj5DphpInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ21lc3NhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdTcGluIOWKoOi9veS4rScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnc3BpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1N3aXBlb3V0IOa7keWKqOiPnOWNlScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnc3dpcGVvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfop4blm74nLFxuICAgICAgICAgICAgICAgICAgICBjZWxscyA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdCYWRnZSDlvr3nq6AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ2JhZGdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnQWxlcnQg6K2m5ZGK5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdhbGVydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1RhZyDmoIfnrb4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ3RhZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1Byb2dyZXNzIOi/m+W6puadoScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAncHJvZ3Jlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdBdmF0YXIg5aS05YOPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdhdmF0YXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdDb3VudERvd24g5YCS6K6h5pe2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdjb3VudC1kb3duJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnRGl2aWRlciDliIbpmpTnrKYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ2RpdmlkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdDb2xsYXBzZSDmipjlj6DpnaLmnb8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ2NvbGxhcHNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnTG9hZE1vcmUg6aG15bqV5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdsb2FkLW1vcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ihqOWNlScsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxzIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ0lucHV0IOi+k+WFpeahhicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWUgOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdSYWRpbyDljZXpgIknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ3JhZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnQ2hlY2tib3gg5aSN6YCJJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1N3aXRjaCDlvIDlhbMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lIDogJ3N3aXRjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMaW5rOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ1JhdGUg6K+E5YiGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdyYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbms6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnSW5wdXROdW1iZXIg5pWw5a2X6L6T5YWl5qGGJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZSA6ICdpbnB1dC1udW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGluazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuXG5cblxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cblxuICAgIH1cbiJdfQ==