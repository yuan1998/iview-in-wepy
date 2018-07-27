'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var steps = function (_wepy$page) {
    _inherits(steps, _wepy$page);

    function steps() {
        _classCallCheck(this, steps);

        var _this = _possibleConstructorReturn(this, (steps.__proto__ || Object.getPrototypeOf(steps)).call(this));

        _this.config = {
            navigationBarTitleText: 'Steps 步骤',
            usingComponents: {
                'i-step': '../iview/step/index',
                'i-steps': '../iview/steps/index',
                'i-button': '../iview/button/index'
            }
        };
        _this.data = {
            firstCurrent: 0,
            iconCurrent: 0,
            current: 2,
            verticalCurrent: 2
        };
        _this.methods = {
            handleClick: function handleClick(name, len) {
                var addCurrent = this[name] + 1;
                var current = addCurrent > len ? 0 : addCurrent;
                this[name] = current;
            }
        };
        return _this;
    }

    _createClass(steps, [{
        key: 'statusTitle',
        value: function statusTitle(max, sel, cur) {
            console.log(1);
            cur = this[cur];
            if (sel === cur) {
                return '进行中';
            } else if (sel < cur) {
                return '已完成';
            }

            return '错误';
        }
    }]);

    return steps;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(steps , 'pages/steps'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBzLmpzIl0sIm5hbWVzIjpbInN0ZXBzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJmaXJzdEN1cnJlbnQiLCJpY29uQ3VycmVudCIsImN1cnJlbnQiLCJ2ZXJ0aWNhbEN1cnJlbnQiLCJtZXRob2RzIiwiaGFuZGxlQ2xpY2siLCJuYW1lIiwibGVuIiwiYWRkQ3VycmVudCIsIm1heCIsInNlbCIsImN1ciIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVzQkEsSzs7O0FBVWxCLHFCQUFlO0FBQUE7O0FBQUE7O0FBQUEsY0FUZkMsTUFTZSxHQVROO0FBQ0xDLG9DQUF5QixVQURwQjtBQUVMQyw2QkFBaUI7QUFDYiwwQkFBVyxxQkFERTtBQUViLDJCQUFZLHNCQUZDO0FBR2IsNEJBQWE7QUFIQTtBQUZaLFNBU007QUFBQSxjQUlmQyxJQUplLEdBSVI7QUFDSEMsMEJBQWUsQ0FEWjtBQUVIQyx5QkFBYyxDQUZYO0FBR0hDLHFCQUFVLENBSFA7QUFJSEMsNkJBQWtCO0FBSmYsU0FKUTtBQUFBLGNBYWZDLE9BYmUsR0FhTDtBQUNOQyx1QkFETSx1QkFDTUMsSUFETixFQUNhQyxHQURiLEVBQ2lCO0FBQ25CLG9CQUFJQyxhQUFhLEtBQUtGLElBQUwsSUFBYSxDQUE5QjtBQUNBLG9CQUFJSixVQUFVTSxhQUFhRCxHQUFiLEdBQW1CLENBQW5CLEdBQXVCQyxVQUFyQztBQUNBLHFCQUFLRixJQUFMLElBQWFKLE9BQWI7QUFDSDtBQUxLLFNBYks7QUFBQTtBQUVkOzs7O29DQXNCWU8sRyxFQUFNQyxHLEVBQU1DLEcsRUFBTTtBQUMzQkMsb0JBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0FGLGtCQUFNLEtBQUtBLEdBQUwsQ0FBTjtBQUNBLGdCQUFHRCxRQUFRQyxHQUFYLEVBQWlCO0FBQ2IsdUJBQU8sS0FBUDtBQUNILGFBRkQsTUFFTSxJQUFJRCxNQUFNQyxHQUFWLEVBQWU7QUFDakIsdUJBQU8sS0FBUDtBQUNIOztBQUVELG1CQUFPLElBQVA7QUFDSDs7OztFQTVDK0JHLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgIGNsYXNzIHN0ZXBzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6ICdTdGVwcyDmraXpqqQnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktc3RlcCcgOiAnLi4vaXZpZXcvc3RlcC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktc3RlcHMnIDogJy4uL2l2aWV3L3N0ZXBzL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1idXR0b24nIDogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGZpcnN0Q3VycmVudCA6IDAsXG4gICAgICAgICAgICBpY29uQ3VycmVudCA6IDAsXG4gICAgICAgICAgICBjdXJyZW50IDogMixcbiAgICAgICAgICAgIHZlcnRpY2FsQ3VycmVudCA6IDJcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2sobmFtZSAsIGxlbil7XG4gICAgICAgICAgICAgICAgbGV0IGFkZEN1cnJlbnQgPSB0aGlzW25hbWVdICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGFkZEN1cnJlbnQgPiBsZW4gPyAwIDogYWRkQ3VycmVudDtcbiAgICAgICAgICAgICAgICB0aGlzW25hbWVdID0gY3VycmVudDtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICB9XG5cblxuICAgICAgICBzdGF0dXNUaXRsZSAobWF4ICwgc2VsICwgY3VyICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICAgICAgICBjdXIgPSB0aGlzW2N1cl07XG4gICAgICAgICAgICBpZihzZWwgPT09IGN1ciApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ+i/m+ihjOS4rSc7XG4gICAgICAgICAgICB9ZWxzZSBpZiAoc2VsIDwgY3VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICflt7LlrozmiJAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJ+mUmeivryc7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=