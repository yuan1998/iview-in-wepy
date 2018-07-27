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

var progress = function (_wepy$page) {
    _inherits(progress, _wepy$page);

    function progress() {
        _classCallCheck(this, progress);

        var _this = _possibleConstructorReturn(this, (progress.__proto__ || Object.getPrototypeOf(progress)).call(this));

        _this.config = {
            navigationBarTitleText: "Progress 进度条",
            usingComponents: {
                'i-button': '../iview/button/index',
                'i-progress': '../iview/progress/index'

            }
        };
        _this.data = {
            percent: 0,
            status: 'normal'
        };
        _this.methods = {
            handleAdd: function handleAdd() {
                if (this.percent === 100) return;

                this.percent += 10;

                if (this.percent === 100) {
                    this.status = 'success';
                }
            },
            handleReduce: function handleReduce() {
                if (this.percent === 0) return;

                this.percent -= 10;
                this.status = 'normal';
            }
        };
        return _this;
    }

    return progress;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(progress , 'pages/progress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmpzIl0sIm5hbWVzIjpbInByb2dyZXNzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwZXJjZW50Iiwic3RhdHVzIiwibWV0aG9kcyIsImhhbmRsZUFkZCIsImhhbmRsZVJlZHVjZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBa0NqQix3QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBbENBQyxNQWtDQSxHQWxDUztBQUNMQyxvQ0FBeUIsY0FEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQWEsdUJBREE7QUFFYiw4QkFBZTs7QUFGRjtBQUZaLFNBa0NUO0FBQUEsY0F6QkFDLElBeUJBLEdBekJPO0FBQ0hDLHFCQUFTLENBRE47QUFFSEMsb0JBQVE7QUFGTCxTQXlCUDtBQUFBLGNBbkJBQyxPQW1CQSxHQW5CVTtBQUNOQyxxQkFETSx1QkFDTztBQUNULG9CQUFJLEtBQUtILE9BQUwsS0FBaUIsR0FBckIsRUFBMEI7O0FBRTFCLHFCQUFLQSxPQUFMLElBQWdCLEVBQWhCOztBQUVBLG9CQUFJLEtBQUtBLE9BQUwsS0FBaUIsR0FBckIsRUFBMEI7QUFDdEIseUJBQUtDLE1BQUwsR0FBYyxTQUFkO0FBQ0g7QUFDSixhQVRLO0FBVU5HLHdCQVZNLDBCQVVVO0FBQ1osb0JBQUksS0FBS0osT0FBTCxLQUFpQixDQUFyQixFQUF3Qjs7QUFFeEIscUJBQUtBLE9BQUwsSUFBZSxFQUFmO0FBQ0EscUJBQUtDLE1BQUwsR0FBYyxRQUFkO0FBQ0g7QUFmSyxTQW1CVjtBQUFBO0FBRUM7OztFQXJDaUNJLGVBQUtDLEk7O2tCQUF0QlgsUSIsImZpbGUiOiJwcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2dyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiUHJvZ3Jlc3Mg6L+b5bqm5p2hXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1idXR0b24nIDogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktcHJvZ3Jlc3MnIDogJy4uL2l2aWV3L3Byb2dyZXNzL2luZGV4JyxcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICAgICAgICBzdGF0dXM6ICdub3JtYWwnXG4gICAgICAgIH1cblxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBoYW5kbGVBZGQgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPT09IDEwMCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50ICs9IDEwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYW5kbGVSZWR1Y2UgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPT09IDApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudCAtPTEwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ25vcm1hbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=