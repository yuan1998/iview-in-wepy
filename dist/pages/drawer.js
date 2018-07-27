'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drawer = function (_wepy$page) {
    _inherits(drawer, _wepy$page);

    function drawer() {
        _classCallCheck(this, drawer);

        var _this = _possibleConstructorReturn(this, (drawer.__proto__ || Object.getPrototypeOf(drawer)).call(this));

        _this.config = {
            navigationBarTitleText: 'Drawer 抽屉',
            usingComponents: {
                'i-drawer': '../iview/drawer/index',
                'i-button': '../iview/button/index'
            }
        };
        _this.data = {
            showLeft1: false,
            showLeft2: false,
            showRight1: false,
            showRight2: false
        };
        _this.methods = {
            toggleLeft1: function toggleLeft1() {
                this.showLeft1 = !this.data.showLeft1;
            },
            toggleLeft2: function toggleLeft2() {
                this.showLeft2 = !this.data.showLeft2;
            },
            toggleRight1: function toggleRight1() {
                this.showRight1 = !this.data.showRight1;
            },
            toggleRight2: function toggleRight2() {
                this.showRight2 = !this.data.showRight2;
            }
        };
        return _this;
    }

    return drawer;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(drawer , 'pages/drawer'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInNob3dMZWZ0MSIsInNob3dMZWZ0MiIsInNob3dSaWdodDEiLCJzaG93UmlnaHQyIiwibWV0aG9kcyIsInRvZ2dsZUxlZnQxIiwidG9nZ2xlTGVmdDIiLCJ0b2dnbGVSaWdodDEiLCJ0b2dnbGVSaWdodDIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQVVqQixzQkFBZTtBQUFBOztBQUFBOztBQUFBLGNBVGZDLE1BU2UsR0FUTjtBQUNMQyxvQ0FBd0IsV0FEbkI7QUFFTEMsNkJBQWtCO0FBQ2QsNEJBQWEsdUJBREM7QUFFZCw0QkFBYTtBQUZDO0FBRmIsU0FTTTtBQUFBLGNBS2ZDLElBTGUsR0FLUjtBQUNIQyx1QkFBVyxLQURSO0FBRUhDLHVCQUFXLEtBRlI7QUFHSEMsd0JBQVksS0FIVDtBQUlIQyx3QkFBWTtBQUpULFNBTFE7QUFBQSxjQWFmQyxPQWJlLEdBYUw7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVixxQkFBS0wsU0FBTCxHQUFpQixDQUFDLEtBQUtELElBQUwsQ0FBVUMsU0FBNUI7QUFDSCxhQUhLO0FBSU5NLHVCQUpNLHlCQUlRO0FBQ1YscUJBQUtMLFNBQUwsR0FBaUIsQ0FBQyxLQUFLRixJQUFMLENBQVVFLFNBQTVCO0FBQ0gsYUFOSztBQU9OTSx3QkFQTSwwQkFPUztBQUNYLHFCQUFLTCxVQUFMLEdBQWtCLENBQUMsS0FBS0gsSUFBTCxDQUFVRyxVQUE3QjtBQUNILGFBVEs7QUFVTk0sd0JBVk0sMEJBVVM7QUFDWCxxQkFBS0wsVUFBTCxHQUFrQixDQUFDLEtBQUtKLElBQUwsQ0FBVUksVUFBN0I7QUFDSDtBQVpLLFNBYks7QUFBQTtBQUVkOzs7RUFaK0JNLGVBQUtDLEk7O2tCQUFwQmYsTSIsImZpbGUiOiJkcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhd2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0RyYXdlciDmir3lsYknLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzIDoge1xuICAgICAgICAgICAgICAgICdpLWRyYXdlcicgOiAnLi4vaXZpZXcvZHJhd2VyL2luZGV4JyxcbiAgICAgICAgICAgICAgICAnaS1idXR0b24nIDogJy4uL2l2aWV3L2J1dHRvbi9pbmRleCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93TGVmdDE6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0xlZnQyOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dSaWdodDE6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1JpZ2h0MjogZmFsc2UsXG4gICAgICAgIH1cblxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b2dnbGVMZWZ0MSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMZWZ0MSA9ICF0aGlzLmRhdGEuc2hvd0xlZnQxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUxlZnQyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xlZnQyID0gIXRoaXMuZGF0YS5zaG93TGVmdDI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlUmlnaHQxKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JpZ2h0MSA9ICF0aGlzLmRhdGEuc2hvd1JpZ2h0MTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVSaWdodDIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmlnaHQyID0gIXRoaXMuZGF0YS5zaG93UmlnaHQyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4iXX0=