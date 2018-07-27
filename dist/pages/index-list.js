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

    function indexList() {
        _classCallCheck(this, indexList);

        var _this = _possibleConstructorReturn(this, (indexList.__proto__ || Object.getPrototypeOf(indexList)).call(this));

        _this.config = {
            navigationBarTitleText: "Index 索引选择器",
            usingComponents: {
                'i-index-item': '../iview/index-item/index',
                'i-index': '../iview/index/index'

            }
        };
        _this.data = {
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indexList , 'pages/index-list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LWxpc3QuanMiXSwibmFtZXMiOlsiaW5kZXhMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjaXRpZXMiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJzdG9yZUNpdHkiLCJBcnJheSIsIndvcmRzIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImtleSIsImxpc3QiLCJmaXJzdE5hbWUiLCJwaW55aW4iLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicHVzaCIsIm5hbWUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBb0JqQix5QkFDQTtBQUFBOztBQUFBOztBQUFBLGNBcEJBQyxNQW9CQSxHQXBCUztBQUNMQyxvQ0FBeUIsYUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsZ0NBQWlCLDJCQURKO0FBRWIsMkJBQVk7O0FBRkM7QUFGWixTQW9CVDtBQUFBLGNBWEFDLElBV0EsR0FYTztBQUNIQyxvQkFBUztBQUROLFNBV1A7QUFBQSxjQVBBQyxPQU9BLEdBUFU7QUFDTkMsb0JBRE0sb0JBQ0dDLEtBREgsRUFDUztBQUNYQyx3QkFBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFsQixFQUF5QixnQ0FBekI7QUFDSDtBQUhLLFNBT1Y7QUFBQTtBQUVDOzs7O2tDQUVVO0FBQ1AsZ0JBQUlDLFlBQVksSUFBSUMsS0FBSixDQUFVLEVBQVYsQ0FBaEI7QUFDQSxnQkFBTUMsUUFBUSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsQ0FBZDtBQUNBQSxrQkFBTUMsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFjO0FBQ3hCTCwwQkFBVUssS0FBVixJQUFtQjtBQUNmQyx5QkFBTUYsSUFEUztBQUVmRywwQkFBTztBQUZRLGlCQUFuQjtBQUlILGFBTEQ7QUFNQWQseUJBQU9VLE9BQVAsQ0FBZSxVQUFDQyxJQUFELEVBQVE7QUFDbkIsb0JBQUlJLFlBQVlKLEtBQUtLLE1BQUwsQ0FBWUMsU0FBWixDQUFzQixDQUF0QixFQUF3QixDQUF4QixDQUFoQjtBQUNBLG9CQUFJTCxRQUFRSCxNQUFNUyxPQUFOLENBQWVILFNBQWYsQ0FBWjtBQUNBUiwwQkFBVUssS0FBVixFQUFpQkUsSUFBakIsQ0FBc0JLLElBQXRCLENBQTJCO0FBQ3ZCQywwQkFBT1QsS0FBS1MsSUFEVztBQUV2QlAseUJBQU1FO0FBRmlCLGlCQUEzQjtBQUlILGFBUEQ7QUFRQSxpQkFBS2YsTUFBTCxHQUFjTyxTQUFkO0FBQ0g7Ozs7RUEzQ2tDYyxlQUFLQyxJOztrQkFBdkIzQixTIiwiZmlsZSI6ImluZGV4LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiXG4gICAgaW1wb3J0IHtjaXRpZXN9IGZyb20gXCIuLi91dGlscy9jaXR5XCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IDogXCJJbmRleCDntKLlvJXpgInmi6nlmahcIixcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICdpLWluZGV4LWl0ZW0nIDogJy4uL2l2aWV3L2luZGV4LWl0ZW0vaW5kZXgnLFxuICAgICAgICAgICAgICAgICdpLWluZGV4JyA6ICcuLi9pdmlldy9pbmRleC9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjaXRpZXMgOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwsJ2NsaWNrIHJpZ2h0IG1lbnUgY2FsbGJhY2sgZGF0YScpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3RydWN0b3IgKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgb25SZWFkeSAoKSB7XG4gICAgICAgICAgICBsZXQgc3RvcmVDaXR5ID0gbmV3IEFycmF5KDI2KTtcbiAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXVxuICAgICAgICAgICAgd29yZHMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgICAgICBzdG9yZUNpdHlbaW5kZXhdID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXkgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBsaXN0IDogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2l0aWVzLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGl0ZW0ucGlueWluLnN1YnN0cmluZygwLDEpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHdvcmRzLmluZGV4T2YoIGZpcnN0TmFtZSApO1xuICAgICAgICAgICAgICAgIHN0b3JlQ2l0eVtpbmRleF0ubGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAga2V5IDogZmlyc3ROYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jaXRpZXMgPSBzdG9yZUNpdHk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=