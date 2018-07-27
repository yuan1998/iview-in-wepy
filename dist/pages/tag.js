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

var tag = function (_wepy$page) {
    _inherits(tag, _wepy$page);

    function tag() {
        _classCallCheck(this, tag);

        var _this = _possibleConstructorReturn(this, (tag.__proto__ || Object.getPrototypeOf(tag)).call(this));

        _this.config = {
            navigationBarTitleText: "Tag 标签",
            usingComponents: {
                'i-tag': '../iview/tag/index'

            }
        };
        _this.data = {
            oneChecked: false,
            tags: [{
                name: '标签一',
                checked: false,
                color: 'default'
            }, {
                name: '标签二',
                checked: false,
                color: 'red'
            }, {
                name: '标签三',
                checked: true,
                color: 'blue'
            }, {
                name: '标签4️',
                checked: true,
                color: 'green'
            }]
        };
        _this.methods = {
            oneChange: function oneChange(event) {
                this.oneChecked = event.detail.checked;
            },
            onChange: function onChange(event) {
                var detail = event.detail;
                this.tags[detail.name].checked = detail.checked;
            }
        };
        return _this;
    }

    return tag;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tag , 'pages/tag'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy5qcyJdLCJuYW1lcyI6WyJ0YWciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsIm9uZUNoZWNrZWQiLCJ0YWdzIiwibmFtZSIsImNoZWNrZWQiLCJjb2xvciIsIm1ldGhvZHMiLCJvbmVDaGFuZ2UiLCJldmVudCIsImRldGFpbCIsIm9uQ2hhbmdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7QUE0Q2pCLG1CQUNBO0FBQUE7O0FBQUE7O0FBQUEsY0E1Q0FDLE1BNENBLEdBNUNTO0FBQ0xDLG9DQUF5QixRQURwQjtBQUVMQyw2QkFBaUI7QUFDYix5QkFBUzs7QUFESTtBQUZaLFNBNENUO0FBQUEsY0FyQ0FDLElBcUNBLEdBckNPO0FBQ0hDLHdCQUFhLEtBRFY7QUFFSEMsa0JBQU8sQ0FDSDtBQUNJQyxzQkFBTyxLQURYO0FBRUlDLHlCQUFVLEtBRmQ7QUFHSUMsdUJBQVE7QUFIWixhQURHLEVBTUg7QUFDSUYsc0JBQU8sS0FEWDtBQUVJQyx5QkFBVSxLQUZkO0FBR0lDLHVCQUFRO0FBSFosYUFORyxFQVdIO0FBQ0lGLHNCQUFPLEtBRFg7QUFFSUMseUJBQVUsSUFGZDtBQUdJQyx1QkFBUTtBQUhaLGFBWEcsRUFnQkg7QUFDSUYsc0JBQU8sTUFEWDtBQUVJQyx5QkFBVSxJQUZkO0FBR0lDLHVCQUFRO0FBSFosYUFoQkc7QUFGSixTQXFDUDtBQUFBLGNBWEFDLE9BV0EsR0FYVTtBQUNOQyxxQkFETSxxQkFDSUMsS0FESixFQUNVO0FBQ1oscUJBQUtQLFVBQUwsR0FBa0JPLE1BQU1DLE1BQU4sQ0FBYUwsT0FBL0I7QUFDSCxhQUhLO0FBSU5NLG9CQUpNLG9CQUlHRixLQUpILEVBSVM7QUFDWCxvQkFBSUMsU0FBU0QsTUFBTUMsTUFBbkI7QUFDQSxxQkFBS1AsSUFBTCxDQUFVTyxPQUFPTixJQUFqQixFQUF1QkMsT0FBdkIsR0FBaUNLLE9BQU9MLE9BQXhDO0FBQ0g7QUFQSyxTQVdWO0FBQUE7QUFFQzs7O0VBL0M0Qk8sZUFBS0MsSTs7a0JBQWpCaEIsRyIsImZpbGUiOiJ0YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyB0YWcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJUYWcg5qCH562+XCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS10YWcnOiAnLi4vaXZpZXcvdGFnL2luZGV4JyxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgb25lQ2hlY2tlZCA6IGZhbHNlLFxuICAgICAgICAgICAgdGFncyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiAn5qCH562+5LiAJyxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ+agh+etvuS6jCcsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAncmVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ+agh+etvuS4iScsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICdibHVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogJ+agh+etvjTvuI8nLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9uZUNoYW5nZShldmVudCl7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVDaGVja2VkID0gZXZlbnQuZGV0YWlsLmNoZWNrZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZShldmVudCl7XG4gICAgICAgICAgICAgICAgbGV0IGRldGFpbCA9IGV2ZW50LmRldGFpbDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3NbZGV0YWlsLm5hbWVdLmNoZWNrZWQgPSBkZXRhaWwuY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19