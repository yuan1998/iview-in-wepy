"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _city = require('./../utils/city.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var indexList = function (_wepy$page) {
    _inherits(indexList, _wepy$page);

    _createClass(indexList, [{
        key: "onPageScroll",


        //页面滚动执行方式
        value: function onPageScroll(event) {
            this.scrollTop = event.scrollTop;
            console.log('this.scrollTop');
            this.$apply();
        }
    }]);

    function indexList() {
        _classCallCheck(this, indexList);

        var _this = _possibleConstructorReturn(this, (indexList.__proto__ || Object.getPrototypeOf(indexList)).call(this));

        _this.config = {
            navigationBarTitleText: "Index 索引选择器",
            usingComponents: {
                'i-sticky-item': '../iview/sticky-item/index',
                'i-sticky': '../iview/sticky/index'
            }
        };
        _this.data = {
            scrollTop: 0,
            cities: []
        };
        _this.methods = {
            onChange: function onChange(event) {
                console.log(event.detail, 'click right menu callback data');
            }
        };
        return _this;
    }

    _createClass(indexList, [{
        key: "onReady",
        value: function onReady() {
            var storeCity = new Array(26);
            var words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            words.forEach(function (item, index) {
                storeCity[index] = {
                    key: item,
                    list: []
                };
            });
            _city.cities.forEach(function (item) {
                var firstName = item.pinyin.substring(0, 1);
                var index = words.indexOf(firstName);
                storeCity[index].list.push({
                    name: item.name,
                    key: firstName
                });
            });
            this.cities = storeCity;
        }
    }]);

    return indexList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indexList , 'pages/index-sticky'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LXN0aWNreS5qcyJdLCJuYW1lcyI6WyJpbmRleExpc3QiLCJldmVudCIsInNjcm9sbFRvcCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImNpdGllcyIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImRldGFpbCIsInN0b3JlQ2l0eSIsIkFycmF5Iiwid29yZHMiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4Iiwia2V5IiwibGlzdCIsImZpcnN0TmFtZSIsInBpbnlpbiIsInN1YnN0cmluZyIsImluZGV4T2YiLCJwdXNoIiwibmFtZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7O0FBb0JqQjtxQ0FDYUMsSyxFQUFNO0FBQ2YsaUJBQUtDLFNBQUwsR0FBaUJELE1BQU1DLFNBQXZCO0FBQ0FDLG9CQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDQSxpQkFBS0MsTUFBTDtBQUNIOzs7QUFFRCx5QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBM0JBQyxNQTJCQSxHQTNCUztBQUNMQyxvQ0FBeUIsYUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsaUNBQWtCLDRCQURMO0FBRWIsNEJBQWE7QUFGQTtBQUZaLFNBMkJUO0FBQUEsY0FuQkFDLElBbUJBLEdBbkJPO0FBQ0hQLHVCQUFZLENBRFQ7QUFFSFEsb0JBQVM7QUFGTixTQW1CUDtBQUFBLGNBZEFDLE9BY0EsR0FkVTtBQUNOQyxvQkFETSxvQkFDR1gsS0FESCxFQUNTO0FBQ1hFLHdCQUFRQyxHQUFSLENBQVlILE1BQU1ZLE1BQWxCLEVBQXlCLGdDQUF6QjtBQUNIO0FBSEssU0FjVjtBQUFBO0FBRUM7Ozs7a0NBRVU7QUFDUCxnQkFBSUMsWUFBWSxJQUFJQyxLQUFKLENBQVUsRUFBVixDQUFoQjtBQUNBLGdCQUFNQyxRQUFRLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxHQUFULEVBQWEsR0FBYixFQUFpQixHQUFqQixFQUFxQixHQUFyQixFQUF5QixHQUF6QixFQUE2QixHQUE3QixFQUFpQyxHQUFqQyxFQUFxQyxHQUFyQyxFQUF5QyxHQUF6QyxFQUE2QyxHQUE3QyxFQUFpRCxHQUFqRCxFQUFxRCxHQUFyRCxFQUF5RCxHQUF6RCxFQUE2RCxHQUE3RCxFQUFpRSxHQUFqRSxFQUFxRSxHQUFyRSxFQUF5RSxHQUF6RSxFQUE2RSxHQUE3RSxFQUFpRixHQUFqRixFQUFxRixHQUFyRixFQUF5RixHQUF6RixFQUE2RixHQUE3RixFQUFpRyxHQUFqRyxFQUFxRyxHQUFyRyxDQUFkO0FBQ0FBLGtCQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWM7QUFDeEJMLDBCQUFVSyxLQUFWLElBQW1CO0FBQ2ZDLHlCQUFNRixJQURTO0FBRWZHLDBCQUFPO0FBRlEsaUJBQW5CO0FBSUgsYUFMRDtBQU1BWCx5QkFBT08sT0FBUCxDQUFlLFVBQUNDLElBQUQsRUFBUTtBQUNuQixvQkFBSUksWUFBWUosS0FBS0ssTUFBTCxDQUFZQyxTQUFaLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQWhCO0FBQ0Esb0JBQUlMLFFBQVFILE1BQU1TLE9BQU4sQ0FBZUgsU0FBZixDQUFaO0FBQ0FSLDBCQUFVSyxLQUFWLEVBQWlCRSxJQUFqQixDQUFzQkssSUFBdEIsQ0FBMkI7QUFDdkJDLDBCQUFPVCxLQUFLUyxJQURXO0FBRXZCUCx5QkFBTUU7QUFGaUIsaUJBQTNCO0FBSUgsYUFQRDtBQVFBLGlCQUFLWixNQUFMLEdBQWNJLFNBQWQ7QUFDSDs7OztFQWxEa0NjLGVBQUtDLEk7O2tCQUF2QjdCLFMiLCJmaWxlIjoiaW5kZXgtc3RpY2t5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIlxuICAgIGltcG9ydCB7Y2l0aWVzfSBmcm9tIFwiLi4vdXRpbHMvY2l0eVwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXhMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dCA6IFwiSW5kZXgg57Si5byV6YCJ5oup5ZmoXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAnaS1zdGlja3ktaXRlbScgOiAnLi4vaXZpZXcvc3RpY2t5LWl0ZW0vaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLXN0aWNreScgOiAnLi4vaXZpZXcvc3RpY2t5L2luZGV4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzY3JvbGxUb3AgOiAwLFxuICAgICAgICAgICAgY2l0aWVzIDogW11cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvbkNoYW5nZShldmVudCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsLCdjbGljayByaWdodCBtZW51IGNhbGxiYWNrIGRhdGEnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8v6aG16Z2i5rua5Yqo5omn6KGM5pa55byPXG4gICAgICAgIG9uUGFnZVNjcm9sbChldmVudCl7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IGV2ZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnNjcm9sbFRvcCcpO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuXG4gICAgICAgIG9uUmVhZHkgKCkge1xuICAgICAgICAgICAgbGV0IHN0b3JlQ2l0eSA9IG5ldyBBcnJheSgyNik7XG4gICAgICAgICAgICBjb25zdCB3b3JkcyA9IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl1cbiAgICAgICAgICAgIHdvcmRzLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XG4gICAgICAgICAgICAgICAgc3RvcmVDaXR5W2luZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5IDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNpdGllcy5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBpdGVtLnBpbnlpbi5zdWJzdHJpbmcoMCwxKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB3b3Jkcy5pbmRleE9mKCBmaXJzdE5hbWUgKTtcbiAgICAgICAgICAgICAgICBzdG9yZUNpdHlbaW5kZXhdLmxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGtleSA6IGZpcnN0TmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2l0aWVzID0gc3RvcmVDaXR5O1xuICAgICAgICB9XG4gICAgfVxuIl19