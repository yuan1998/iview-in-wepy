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

var radio = function (_wepy$page) {
    _inherits(radio, _wepy$page);

    function radio() {
        _classCallCheck(this, radio);

        var _this = _possibleConstructorReturn(this, (radio.__proto__ || Object.getPrototypeOf(radio)).call(this));

        _this.config = {
            navigationBarTitleText: "Radio 单选",
            usingComponents: {
                'i-panel': '../iview/panel/index',
                'i-radio': '../iview/radio/index',
                'i-button': '../iview/button/index',
                'i-radio-group': '../iview/radio-group/index'
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
            current: '苹果',
            position: 'left',
            animal: '熊猫',
            checked: false,
            disabled: false
        };
        _this.methods = {
            handleFruitChange: function handleFruitChange(_ref) {
                var _ref$detail = _ref.detail,
                    detail = _ref$detail === undefined ? {} : _ref$detail;

                this.current = detail.value;
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

    return radio;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(radio , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbInJhZGlvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJmcnVpdCIsImlkIiwibmFtZSIsImN1cnJlbnQiLCJwb3NpdGlvbiIsImFuaW1hbCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm1ldGhvZHMiLCJoYW5kbGVGcnVpdENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJpbmRleE9mIiwiaGFuZGxlRGlzYWJsZWQiLCJoYW5kbGVBbmltYWxDaGFuZ2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQWlEakIscUJBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQWpEQUMsTUFpREEsR0FqRFM7QUFDTEMsb0NBQXlCLFVBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLDJCQUFZLHNCQURDO0FBRWIsMkJBQVksc0JBRkM7QUFHYiw0QkFBYSx1QkFIQTtBQUliLGlDQUFrQjtBQUpMO0FBRlosU0FpRFQ7QUFBQSxjQXRDQUMsSUFzQ0EsR0F0Q087QUFDSEMsbUJBQU8sQ0FBQztBQUNKQyxvQkFBSSxDQURBO0FBRUpDLHNCQUFNO0FBRkYsYUFBRCxFQUdKO0FBQ0NELG9CQUFJLENBREw7QUFFQ0Msc0JBQU07QUFGUCxhQUhJLEVBTUo7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyxzQkFBTTtBQUZQLGFBTkksRUFTSjtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHNCQUFNO0FBRlAsYUFUSSxDQURKO0FBY0hDLHFCQUFTLElBZE47QUFlSEMsc0JBQVUsTUFmUDtBQWdCSEMsb0JBQVEsSUFoQkw7QUFpQkhDLHFCQUFTLEtBakJOO0FBa0JIQyxzQkFBVTtBQWxCUCxTQXNDUDtBQUFBLGNBaEJBQyxPQWdCQSxHQWhCVTtBQUNOQyw2QkFETSxtQ0FDNkI7QUFBQSx1Q0FBZkMsTUFBZTtBQUFBLG9CQUFmQSxNQUFlLCtCQUFOLEVBQU07O0FBQy9CLHFCQUFLUCxPQUFMLEdBQWVPLE9BQU9DLEtBQXRCO0FBQ0gsYUFISztBQUlOQyx1QkFKTSx5QkFJUTtBQUNWLHFCQUFLUixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY1MsT0FBZCxDQUFzQixNQUF0QixNQUFrQyxDQUFDLENBQW5DLEdBQXVDLE9BQXZDLEdBQWlELE1BQWpFO0FBQ0gsYUFOSztBQU9OQywwQkFQTSw0QkFPVztBQUNiLHFCQUFLUCxRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBdEI7QUFDSCxhQVRLO0FBVU5RLDhCQVZNLHFDQVU4QjtBQUFBLHlDQUFmTCxNQUFlO0FBQUEsb0JBQWZBLE1BQWUsZ0NBQU4sRUFBTTs7QUFDaEMscUJBQUtKLE9BQUwsR0FBZUksT0FBT1AsT0FBdEI7QUFDSDtBQVpLLFNBZ0JWO0FBQUE7QUFFQzs7O0VBcEQ4QmEsZUFBS0MsSTs7a0JBQW5CdEIsSyIsImZpbGUiOiJyYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhZGlvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiUmFkaW8g5Y2V6YCJXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1wYW5lbCcgOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXJhZGlvJyA6ICcuLi9pdmlldy9yYWRpby9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktYnV0dG9uJyA6ICcuLi9pdmlldy9idXR0b24vaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXJhZGlvLWdyb3VwJyA6ICcuLi9pdmlldy9yYWRpby1ncm91cC9pbmRleCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGZydWl0OiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfpppnolYknLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfoi7nmnpwnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+ilv+eTnCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICBuYW1lOiAn6JGh6JCEJyxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY3VycmVudDogJ+iLueaenCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgYW5pbWFsOiAn54aK54yrJyxcbiAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9XG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlRnJ1aXRDaGFuZ2UoeyBkZXRhaWwgPSB7fSB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZURpc2FibGVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVBbmltYWxDaGFuZ2UoeyBkZXRhaWwgPSB7fSB9KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZGV0YWlsLmN1cnJlbnQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=