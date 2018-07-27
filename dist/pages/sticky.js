"use strict";

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

var sticky = function (_wepy$page) {
    _inherits(sticky, _wepy$page);

    _createClass(sticky, [{
        key: "onPageScroll",


        //页面滚动执行方式
        value: function onPageScroll(event) {
            this.scrollTop = event.scrollTop;
            this.$apply();
        }
    }]);

    function sticky() {
        _classCallCheck(this, sticky);

        var _this = _possibleConstructorReturn(this, (sticky.__proto__ || Object.getPrototypeOf(sticky)).call(this));

        _this.config = {
            navigationBarTitleText: "Sticky 吸顶容器",
            usingComponents: {
                'i-sticky-item': '../iview/sticky-item/index',
                'i-sticky': '../iview/sticky/index'
            }
        };
        _this.data = {
            scrollTop: 0
        };
        _this.methods = {
            onChange: function onChange(event) {
                console.log(event.detail, 'click right menu callback data');
            }
        };
        return _this;
    }

    return sticky;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(sticky , 'pages/sticky'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreS5qcyJdLCJuYW1lcyI6WyJzdGlja3kiLCJldmVudCIsInNjcm9sbFRvcCIsIiRhcHBseSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7O0FBbUJqQjtxQ0FDYUMsSyxFQUFNO0FBQ2YsaUJBQUtDLFNBQUwsR0FBaUJELE1BQU1DLFNBQXZCO0FBQ0EsaUJBQUtDLE1BQUw7QUFDSDs7O0FBRUQsc0JBQ0E7QUFBQTs7QUFBQTs7QUFBQSxjQXpCQUMsTUF5QkEsR0F6QlM7QUFDTEMsb0NBQXlCLGFBRHBCO0FBRUxDLDZCQUFpQjtBQUNiLGlDQUFrQiw0QkFETDtBQUViLDRCQUFhO0FBRkE7QUFGWixTQXlCVDtBQUFBLGNBakJBQyxJQWlCQSxHQWpCTztBQUNITCx1QkFBWTtBQURULFNBaUJQO0FBQUEsY0FiQU0sT0FhQSxHQWJVO0FBQ05DLG9CQURNLG9CQUNHUixLQURILEVBQ1M7QUFDWFMsd0JBQVFDLEdBQVIsQ0FBWVYsTUFBTVcsTUFBbEIsRUFBeUIsZ0NBQXpCO0FBQ0g7QUFISyxTQWFWO0FBQUE7QUFFQzs7O0VBNUIrQkMsZUFBS0MsSTs7a0JBQXBCZCxNIiwiZmlsZSI6InN0aWNreS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0aWNreSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiBcIlN0aWNreSDlkLjpobblrrnlmahcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLXN0aWNreS1pdGVtJyA6ICcuLi9pdmlldy9zdGlja3ktaXRlbS9pbmRleCcsXG4gICAgICAgICAgICAgICAgJ2ktc3RpY2t5JyA6ICcuLi9pdmlldy9zdGlja3kvaW5kZXgnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNjcm9sbFRvcCA6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvbkNoYW5nZShldmVudCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLCdjbGljayByaWdodCBtZW51IGNhbGxiYWNrIGRhdGEnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8v6aG16Z2i5rua5Yqo5omn6KGM5pa55byPXG4gICAgICAgIG9uUGFnZVNjcm9sbChldmVudCl7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IGV2ZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvciAoKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=