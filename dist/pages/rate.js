"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rate = function (_wepy$page) {
    _inherits(rate, _wepy$page);

    function rate() {
        _classCallCheck(this, rate);

        var _this = _possibleConstructorReturn(this, (rate.__proto__ || Object.getPrototypeOf(rate)).call(this));

        _this.config = {
            navigationBarTitleText: "Rate 评分",
            usingComponents: _defineProperty({
                'i-cell-group': '../iview/cell-group/index',
                'i-rate': '../iview/rate/index',
                'i-cell': '../iview/cell/index'
            }, "i-cell", '../iview/cell/index')
        };
        _this.data = {
            starIndex1: 0,
            starIndex2: 0,
            starIndex3: 0,
            starIndex4: 4,
            starIndex5: 5
        };
        _this.methods = {
            onChange1: function onChange1(e) {
                var index = e.detail.index;
                this.starIndex1 = index;
            },
            onChange2: function onChange2(e) {
                var index = e.detail.index;
                this.starIndex2 = index;
            },
            onChange3: function onChange3(e) {
                var index = e.detail.index;
                this.starIndex3 = index;
            },
            onChange5: function onChange5(e) {
                var index = e.detail.index;
                this.starIndex5 = index;
            }
        };
        return _this;
    }

    return rate;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(rate , 'pages/rate'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUuanMiXSwibmFtZXMiOlsicmF0ZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhckluZGV4MSIsInN0YXJJbmRleDIiLCJzdGFySW5kZXgzIiwic3RhckluZGV4NCIsInN0YXJJbmRleDUiLCJtZXRob2RzIiwib25DaGFuZ2UxIiwiZSIsImluZGV4IiwiZGV0YWlsIiwib25DaGFuZ2UyIiwib25DaGFuZ2UzIiwib25DaGFuZ2U1Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7OztBQXdDakIsb0JBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXhDQUMsTUF3Q0EsR0F4Q1M7QUFDTEMsb0NBQXlCLFNBRHBCO0FBRUxDO0FBQ0ksZ0NBQWlCLDJCQURyQjtBQUVJLDBCQUFXLHFCQUZmO0FBR0ksMEJBQVc7QUFIZix5QkFJZSxxQkFKZjtBQUZLLFNBd0NUO0FBQUEsY0E5QkFDLElBOEJBLEdBOUJPO0FBQ0hDLHdCQUFhLENBRFY7QUFFSEMsd0JBQWEsQ0FGVjtBQUdIQyx3QkFBYSxDQUhWO0FBSUhDLHdCQUFhLENBSlY7QUFLSEMsd0JBQWE7QUFMVixTQThCUDtBQUFBLGNBckJBQyxPQXFCQSxHQXJCVTtBQUNOQyxxQkFETSxxQkFDSUMsQ0FESixFQUNNO0FBQ1Isb0JBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxxQkFBS1IsVUFBTCxHQUFrQlEsS0FBbEI7QUFFSCxhQUxLO0FBTU5FLHFCQU5NLHFCQU1JSCxDQU5KLEVBTU07QUFDUixvQkFBTUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUF2QjtBQUNBLHFCQUFLUCxVQUFMLEdBQWtCTyxLQUFsQjtBQUNILGFBVEs7QUFVTkcscUJBVk0scUJBVUlKLENBVkosRUFVTTtBQUNSLG9CQUFNQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXZCO0FBQ0EscUJBQUtOLFVBQUwsR0FBa0JNLEtBQWxCO0FBQ0gsYUFiSztBQWNOSSxxQkFkTSxxQkFjSUwsQ0FkSixFQWNNO0FBQ1Isb0JBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxxQkFBS0osVUFBTCxHQUFrQkksS0FBbEI7QUFDSDtBQWpCSyxTQXFCVjtBQUFBO0FBRUM7OztFQTNDNkJLLGVBQUtDLEk7O2tCQUFsQm5CLEkiLCJmaWxlIjoicmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhdGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJSYXRlIOivhOWIhlwiLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ2ktY2VsbC1ncm91cCcgOiAnLi4vaXZpZXcvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktcmF0ZScgOiAnLi4vaXZpZXcvcmF0ZS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2VsbCcgOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktY2VsbCcgOiAnLi4vaXZpZXcvY2VsbC9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhckluZGV4MSA6IDAsXG4gICAgICAgICAgICBzdGFySW5kZXgyIDogMCxcbiAgICAgICAgICAgIHN0YXJJbmRleDMgOiAwLFxuICAgICAgICAgICAgc3RhckluZGV4NCA6IDQsXG4gICAgICAgICAgICBzdGFySW5kZXg1IDogNVxuICAgICAgICB9XG5cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb25DaGFuZ2UxKGUpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWwuaW5kZXg7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFySW5kZXgxID0gaW5kZXg7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZTIoZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmRldGFpbC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJJbmRleDIgPSBpbmRleDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZTMoZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmRldGFpbC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJJbmRleDMgPSBpbmRleDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZTUoZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLmRldGFpbC5pbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJJbmRleDUgPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG4gICAgfVxuIl19