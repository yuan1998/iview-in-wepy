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

var checkbox = function (_wepy$page) {
    _inherits(checkbox, _wepy$page);

    function checkbox() {
        _classCallCheck(this, checkbox);

        var _this = _possibleConstructorReturn(this, (checkbox.__proto__ || Object.getPrototypeOf(checkbox)).call(this));

        _this.config = {
            navigationBarTitleText: "Checkbox 多选框",
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-checkbox': '../iview/checkbox/index',
                'i-checkbox-group': '../iview/checkbox-group/index',
                'i-button': '../iview/button/index'

            }
        };
        _this.data = {
            fruit: [{
                id: 1,
                name: '香蕉'
            }, {
                id: 2,
                name: '苹果'
            }, {
                id: 3,
                name: '西瓜'
            }, {
                id: 4,
                name: '葡萄'
            }],
            current: ['苹果', '葡萄'],
            position: 'left',
            animal: '熊猫',
            checked: false,
            disabled: false
        };
        _this.methods = {
            handleFruitChange: function handleFruitChange(_ref) {
                var _ref$detail = _ref.detail,
                    detail = _ref$detail === undefined ? {} : _ref$detail;

                var index = this.data.current.indexOf(detail.value);
                index === -1 ? this.current.push(detail.value) : this.current.splice(index, 1);
            },
            handleClick: function handleClick() {
                this.position = this.position.indexOf('left') !== -1 ? 'right' : 'left';
            },
            handleDisabled: function handleDisabled() {
                this.disabled = !this.disabled;
            },
            handleAnimalChange: function handleAnimalChange(_ref2) {
                var _ref2$detail = _ref2.detail,
                    detail = _ref2$detail === undefined ? {} : _ref2$detail;

                this.checked = detail.current;
            }
        };
        return _this;
    }

    return checkbox;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(checkbox , 'pages/checkbox'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbImNoZWNrYm94IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJmcnVpdCIsImlkIiwibmFtZSIsImN1cnJlbnQiLCJwb3NpdGlvbiIsImFuaW1hbCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJoYW5kbGVGcnVpdENoYW5nZSIsImRldGFpbCIsImluZGV4IiwiaW5kZXhPZiIsInZhbHVlIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRGlzYWJsZWQiLCJoYW5kbGVBbmltYWxDaGFuZ2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQW1EakIsd0JBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQW5EQUMsTUFtREEsR0FuRFM7QUFDTEMsb0NBQXlCLGNBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDJCQUFZLHNCQURDO0FBRWIsOEJBQWUseUJBRkY7QUFHYixvQ0FBcUIsK0JBSFI7QUFJYiw0QkFBYTs7QUFKQTtBQUZaLFNBbURUO0FBQUEsY0F4Q0FDLElBd0NBLEdBeENPO0FBQ0hDLG1CQUFPLENBQUM7QUFDSkMsb0JBQUksQ0FEQTtBQUVKQyxzQkFBTTtBQUZGLGFBQUQsRUFHSjtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHNCQUFNO0FBRlAsYUFISSxFQU1KO0FBQ0NELG9CQUFJLENBREw7QUFFQ0Msc0JBQU07QUFGUCxhQU5JLEVBU0o7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyxzQkFBTTtBQUZQLGFBVEksQ0FESjtBQWNIQyxxQkFBUyxDQUFDLElBQUQsRUFBTyxJQUFQLENBZE47QUFlSEMsc0JBQVUsTUFmUDtBQWdCSEMsb0JBQVEsSUFoQkw7QUFpQkhDLHFCQUFTLEtBakJOO0FBa0JIQyxzQkFBVTtBQWxCUCxTQXdDUDtBQUFBLGNBakJBQyxPQWlCQSxHQWpCVTtBQUNOQyw2QkFETSxtQ0FDNkI7QUFBQSx1Q0FBZkMsTUFBZTtBQUFBLG9CQUFmQSxNQUFlLCtCQUFOLEVBQU07O0FBQy9CLG9CQUFNQyxRQUFRLEtBQUtaLElBQUwsQ0FBVUksT0FBVixDQUFrQlMsT0FBbEIsQ0FBMEJGLE9BQU9HLEtBQWpDLENBQWQ7QUFDQUYsMEJBQVUsQ0FBQyxDQUFYLEdBQWUsS0FBS1IsT0FBTCxDQUFhVyxJQUFiLENBQWtCSixPQUFPRyxLQUF6QixDQUFmLEdBQWlELEtBQUtWLE9BQUwsQ0FBYVksTUFBYixDQUFvQkosS0FBcEIsRUFBMkIsQ0FBM0IsQ0FBakQ7QUFDSCxhQUpLO0FBS05LLHVCQUxNLHlCQUtRO0FBQ1YscUJBQUtaLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjUSxPQUFkLENBQXNCLE1BQXRCLE1BQWtDLENBQUMsQ0FBbkMsR0FBdUMsT0FBdkMsR0FBaUQsTUFBakU7QUFDSCxhQVBLO0FBUU5LLDBCQVJNLDRCQVFXO0FBQ2IscUJBQUtWLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNILGFBVks7QUFXTlcsOEJBWE0scUNBVzhCO0FBQUEseUNBQWZSLE1BQWU7QUFBQSxvQkFBZkEsTUFBZSxnQ0FBTixFQUFNOztBQUNoQyxxQkFBS0osT0FBTCxHQUFlSSxPQUFPUCxPQUF0QjtBQUNIO0FBYkssU0FpQlY7QUFBQTtBQUVDOzs7RUF0RGlDZ0IsZUFBS0MsSTs7a0JBQXRCekIsUSIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrYm94IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiQ2hlY2tib3gg5aSa6YCJ5qGGXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1wYW5lbCcgOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLWNoZWNrYm94JyA6ICcuLi9pdmlldy9jaGVja2JveC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2hlY2tib3gtZ3JvdXAnIDogJy4uL2l2aWV3L2NoZWNrYm94LWdyb3VwL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1idXR0b24nIDogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBmcnVpdDogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6aaZ6JWJJyxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Iu55p6cJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfopb/nk5wnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+iRoeiQhCcsXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IFsn6Iu55p6cJywgJ+iRoeiQhCddLFxuICAgICAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgICAgIGFuaW1hbDogJ+eGiueMqycsXG4gICAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlRnJ1aXRDaGFuZ2UoeyBkZXRhaWwgPSB7fSB9KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEuY3VycmVudC5pbmRleE9mKGRldGFpbC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IC0xID8gdGhpcy5jdXJyZW50LnB1c2goZGV0YWlsLnZhbHVlKSA6IHRoaXMuY3VycmVudC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZURpc2FibGVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVBbmltYWxDaGFuZ2UoeyBkZXRhaWwgPSB7fSB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=