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

var spin = function (_wepy$page) {
    _inherits(spin, _wepy$page);

    function spin() {
        _classCallCheck(this, spin);

        var _this = _possibleConstructorReturn(this, (spin.__proto__ || Object.getPrototypeOf(spin)).call(this));

        _this.config = {
            navigationBarTitleText: "Spin 加载中",
            usingComponents: {
                "i-switch": '../iview/switch/index',
                "i-spin": '../iview/spin/index',
                "i-grid": '../iview/grid/index',
                "i-grid-item": '../iview/grid-item/index',
                "i-panel": '../iview/panel/index',
                "i-icon": '../iview/icon/index'

            }
        };
        _this.data = {
            spinShow: true,
            switch: false
        };
        _this.methods = {
            onSwitchChange: function onSwitchChange(_ref) {
                var detail = _ref.detail;

                var value = detail.value;
                this.switch = value;
                this.spinShow = !value;
            }
        };
        return _this;
    }

    return spin;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(spin , 'pages/spin'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW4uanMiXSwibmFtZXMiOlsic3BpbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3BpblNob3ciLCJzd2l0Y2giLCJtZXRob2RzIiwib25Td2l0Y2hDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7O0FBMkJqQixvQkFDQTtBQUFBOztBQUFBOztBQUFBLGNBM0JBQyxNQTJCQSxHQTNCUztBQUNMQyxvQ0FBeUIsVUFEcEI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQWEsdUJBREE7QUFFYiwwQkFBVyxxQkFGRTtBQUdiLDBCQUFXLHFCQUhFO0FBSWIsK0JBQWdCLDBCQUpIO0FBS2IsMkJBQVksc0JBTEM7QUFNYiwwQkFBVzs7QUFORTtBQUZaLFNBMkJUO0FBQUEsY0FkQUMsSUFjQSxHQWRPO0FBQ0hDLHNCQUFVLElBRFA7QUFFSEMsb0JBQVE7QUFGTCxTQWNQO0FBQUEsY0FUQUMsT0FTQSxHQVRVO0FBQ05DLDBCQURNLGdDQUNzQjtBQUFBLG9CQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQ3hCLG9CQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLHFCQUFLSixNQUFMLEdBQWNJLEtBQWQ7QUFDQSxxQkFBS0wsUUFBTCxHQUFnQixDQUFDSyxLQUFqQjtBQUNIO0FBTEssU0FTVjtBQUFBO0FBRUM7OztFQTlCNkJDLGVBQUtDLEk7O2tCQUFsQlosSSIsImZpbGUiOiJzcGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIlxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3BpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQgOiBcIlNwaW4g5Yqg6L295LitXCIsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcImktc3dpdGNoXCIgOiAnLi4vaXZpZXcvc3dpdGNoL2luZGV4JyxcbiAgICAgICAgICAgICAgICBcImktc3BpblwiIDogJy4uL2l2aWV3L3NwaW4vaW5kZXgnLFxuICAgICAgICAgICAgICAgIFwiaS1ncmlkXCIgOiAnLi4vaXZpZXcvZ3JpZC9pbmRleCcsXG4gICAgICAgICAgICAgICAgXCJpLWdyaWQtaXRlbVwiIDogJy4uL2l2aWV3L2dyaWQtaXRlbS9pbmRleCcsXG4gICAgICAgICAgICAgICAgXCJpLXBhbmVsXCIgOiAnLi4vaXZpZXcvcGFuZWwvaW5kZXgnLFxuICAgICAgICAgICAgICAgIFwiaS1pY29uXCIgOiAnLi4vaXZpZXcvaWNvbi9pbmRleCcsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzcGluU2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIHN3aXRjaDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvblN3aXRjaENoYW5nZSAoeyBkZXRhaWwgfSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluU2hvdyA9ICF2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==