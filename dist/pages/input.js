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

var input = function (_wepy$page) {
    _inherits(input, _wepy$page);

    function input() {
        _classCallCheck(this, input);

        var _this = _possibleConstructorReturn(this, (input.__proto__ || Object.getPrototypeOf(input)).call(this));

        _this.config = {
            navigationBarTitleText: "Input 输入框",
            usingComponents: {
                'i-input': '../iview/input/index',
                'i-panel': '../iview/panel/index'
            }
        };
        _this.data = {
            value1: '23423',
            value2: '',
            value3: '',
            value4: '输入框已禁用',
            value5: '',
            value6: '',
            value7: ''
        };
        _this.methods = {
            textChange: function textChange(event) {
                console.log('test change');
            },
            testFocus: function testFocus() {
                console.log('test focus');
            },
            testBlur: function testBlur() {
                console.log('test Blur');
            }
        };
        return _this;
    }

    return input;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(input , 'pages/input'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJ2YWx1ZTMiLCJ2YWx1ZTQiLCJ2YWx1ZTUiLCJ2YWx1ZTYiLCJ2YWx1ZTciLCJtZXRob2RzIiwidGV4dENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRlc3RGb2N1cyIsInRlc3RCbHVyIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7QUFnQ2pCLHFCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0EvQmRDLE1BK0JjLEdBL0JMO0FBQ0xDLG9DQUF3QixXQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwyQkFBVyxzQkFERTtBQUViLDJCQUFXO0FBRkU7QUFGWixTQStCSztBQUFBLGNBdkJkQyxJQXVCYyxHQXZCUDtBQUNIQyxvQkFBUSxPQURMO0FBRUhDLG9CQUFRLEVBRkw7QUFHSEMsb0JBQVEsRUFITDtBQUlIQyxvQkFBUSxRQUpMO0FBS0hDLG9CQUFRLEVBTEw7QUFNSEMsb0JBQVEsRUFOTDtBQU9IQyxvQkFBUTtBQVBMLFNBdUJPO0FBQUEsY0FiZEMsT0FhYyxHQWJKO0FBQ05DLHNCQURNLHNCQUNLQyxLQURMLEVBQ1k7QUFDZEMsd0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0gsYUFISztBQUlOQyxxQkFKTSx1QkFJTTtBQUNSRix3QkFBUUMsR0FBUixDQUFZLFlBQVo7QUFDSCxhQU5LO0FBT05FLG9CQVBNLHNCQU9LO0FBQ1BILHdCQUFRQyxHQUFSLENBQVksV0FBWjtBQUNIO0FBVEssU0FhSTtBQUFBO0FBRWI7OztFQWxDOEJHLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbnB1dCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiSW5wdXQg6L6T5YWl5qGGXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1pbnB1dCc6ICcuLi9pdmlldy9pbnB1dC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktcGFuZWwnOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHZhbHVlMTogJzIzNDIzJyxcbiAgICAgICAgICAgIHZhbHVlMjogJycsXG4gICAgICAgICAgICB2YWx1ZTM6ICcnLFxuICAgICAgICAgICAgdmFsdWU0OiAn6L6T5YWl5qGG5bey56aB55SoJyxcbiAgICAgICAgICAgIHZhbHVlNTogJycsXG4gICAgICAgICAgICB2YWx1ZTY6ICcnLFxuICAgICAgICAgICAgdmFsdWU3OiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRleHRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCBjaGFuZ2UnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXN0Rm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgZm9jdXMnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXN0Qmx1cigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCBCbHVyJyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==