(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyLibrary = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WPFrame = function (_React$Component) {
    _inherits(WPFrame, _React$Component);

    function WPFrame(props) {
        _classCallCheck(this, WPFrame);

        return _possibleConstructorReturn(this, (WPFrame.__proto__ || Object.getPrototypeOf(WPFrame)).call(this, props));
    }

    _createClass(WPFrame, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                hasMore = _props.hasMore,
                link = _props.link,
                hasTopLine = _props.hasTopLine;


            return React.createElement(
                "div",
                { className: "acs-webpartframe" + (hasTopLine ? " acs-webpartframe-topline" : "") },
                React.createElement(
                    "a",
                    { className: "acs-webpartframe-header", href: link, target: title === "News & Announcements" ? '_blank' : '' },
                    React.createElement("span", { className: "acs-header-icon" }),
                    React.createElement(
                        "span",
                        { className: "acs-header-title" },
                        title,
                        " "
                    ),
                    React.createElement(
                        "span",
                        { className: "acs-header-more" },
                        hasMore ? "More" : ""
                    )
                ),
                this.props.children
            );
        }
    }]);

    return WPFrame;
}(React.Component);

exports.default = WPFrame;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var titleDescriptionPanel = function (_React$Component) {
    _inherits(titleDescriptionPanel, _React$Component);

    function titleDescriptionPanel(props) {
        _classCallCheck(this, titleDescriptionPanel);

        return _possibleConstructorReturn(this, (titleDescriptionPanel.__proto__ || Object.getPrototypeOf(titleDescriptionPanel)).call(this, props));
    }

    _createClass(titleDescriptionPanel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                description = _props.description,
                itemhref = _props.itemhref;

            return React.createElement(
                'div',
                { className: 'acs-titledescriptionpanel-wrap' },
                React.createElement(
                    'a',
                    { href: itemhref },
                    React.createElement(
                        'span',
                        { className: 'acs-titledescriptionpanel-title' },
                        title
                    ),
                    React.createElement(
                        'span',
                        { className: 'acs-titledescriptionpanel-description' },
                        description
                    )
                )
            );
        }
    }]);

    return titleDescriptionPanel;
}(React.Component);

exports.default = titleDescriptionPanel;

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _event = require('../widget/event.jsx');

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // const React = require('react');
// const ReactDom = require('react-dom');


var Events = function (_React$Component) {
    _inherits(Events, _React$Component);

    function Events(props) {
        _classCallCheck(this, Events);

        return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));
    }

    _createClass(Events, [{
        key: 'render',
        value: function render() {
            var Events = [];
            this.props.NewInformation.map(function (item, ind) {
                Events.push(React.createElement(_event2.default, { key: 'Event' + ind, title: item.title, month: item.month, day: item.day, href: item.href, time: item.time, location: item.location }));
            });
            return React.createElement(
                'div',
                null,
                Events
            );
        }
    }]);

    return Events;
}(React.Component);

var SliderEvents = function (_React$Component2) {
    _inherits(SliderEvents, _React$Component2);

    function SliderEvents(props) {
        _classCallCheck(this, SliderEvents);

        return _possibleConstructorReturn(this, (SliderEvents.__proto__ || Object.getPrototypeOf(SliderEvents)).call(this, props));
    }

    _createClass(SliderEvents, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                inputDate = _props.inputDate,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal;

            var count = inputDate.length;
            var width = 100 / count + '%';

            var SliderEvents = [];
            inputDate.map(function (item, ind) {
                SliderEvents.push(React.createElement(
                    'li',
                    { key: 'Events' + ind, className: 'acs-slider-pic', style: { width: width } },
                    React.createElement(Events, { NewInformation: item })
                ));
            });

            return (
                //<div>
                //<div className="acs-corporate-events">
                //    <span className="acs-eventPic"></span><span className="acs-eventTitle">CORPORATE EVENTS</span><a href="https://www.baidu.com/s" className="acs-more">MORE</a>
                //</div>
                React.createElement(
                    'ul',
                    { style: {
                            left: -100 * nowLocal + "%",
                            transitionDuration: speed + "ms",
                            width: count * 100 + "%"
                        } },
                    SliderEvents
                )
                //</div>

            );
        }
    }]);

    return SliderEvents;
}(React.Component);

exports.default = SliderEvents;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../widget/event.jsx":11}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderArrows = function (_React$Component) {
    _inherits(SliderArrows, _React$Component);

    function SliderArrows(props) {
        _classCallCheck(this, SliderArrows);

        return _possibleConstructorReturn(this, (SliderArrows.__proto__ || Object.getPrototypeOf(SliderArrows)).call(this, props));
    }

    _createClass(SliderArrows, [{
        key: "handleArrowClick",
        value: function handleArrowClick(option) {
            this.props.turn(option);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-slider-arrow-wrap" },
                React.createElement(
                    "span",
                    { className: "acs-slider-arrow-left", onClick: this.handleArrowClick.bind(this, -1) },
                    " "
                ),
                this.props.children ? this.props.children : '',
                React.createElement("span", { className: "acs-slider-arrow-right", onClick: this.handleArrowClick.bind(this, 1) })
            );
        }
    }]);

    return SliderArrows;
}(React.Component);

exports.default = SliderArrows;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderDots = function (_React$Component) {
    _inherits(SliderDots, _React$Component);

    function SliderDots(props) {
        _classCallCheck(this, SliderDots);

        return _possibleConstructorReturn(this, (SliderDots.__proto__ || Object.getPrototypeOf(SliderDots)).call(this, props));
    }

    _createClass(SliderDots, [{
        key: "handleDotClick",
        value: function handleDotClick(i) {
            var option = i - this.props.nowLocal;
            this.props.turn(option);
        }
    }, {
        key: "render",
        value: function render() {
            var dotNodes = [];
            var _props = this.props,
                count = _props.count,
                nowLocal = _props.nowLocal;


            for (var i = 1; i < count + 1; i++) {
                dotNodes[i] = React.createElement("span", {
                    key: 'dot' + i,
                    className: "acs-slider-dot" + (i === this.props.nowLocal ? " acs-slider-dot-selected" : ""),
                    onClick: this.handleDotClick.bind(this, i) });
            }
            return React.createElement(
                "div",
                { className: "acs-slider-dots" },
                dotNodes
            );
        }
    }]);

    return SliderDots;
}(React.Component);

exports.default = SliderDots;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderDots = require('./sliderDots.jsx');

var _sliderDots2 = _interopRequireDefault(_sliderDots);

var _sliderArrows = require('./sliderArrows.jsx');

var _sliderArrows2 = _interopRequireDefault(_sliderArrows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderFrame = function (_React$Component) {
    _inherits(SliderFrame, _React$Component);

    function SliderFrame(props) {
        _classCallCheck(this, SliderFrame);

        var _this = _possibleConstructorReturn(this, (SliderFrame.__proto__ || Object.getPrototypeOf(SliderFrame)).call(this, props));

        _this.state = {
            nowLocal: 1,
            speed: -1
        };
        return _this;
    }

    _createClass(SliderFrame, [{
        key: 'turn',
        value: function turn(n) {
            var _n = this.state.nowLocal + n;
            this.setState({ nowLocal: _n });
        }
    }, {
        key: 'goPlay',
        value: function goPlay() {
            var _this2 = this;

            if (this.props.autoplay || this.props.autoplay === 'True' || this.props.autoplay === 'true') {
                this.autoPlayFlag = setInterval(function () {
                    _this2.turn(1);
                }, this.props.delay);
            }
        }
    }, {
        key: 'pausePlay',
        value: function pausePlay() {
            clearInterval(this.autoPlayFlag);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.goPlay();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {

            if (this.state.nowLocal == this.props.itemCount + 1) {
                alert("jump to 1");
                this.setState({ nowLocal: 1 });
            } else if (this.state.nowLocal == 0) {
                alert("jump to end");
                this.setState({ nowLocal: this.props.itemCount });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            x;
        }
    }]);

    return SliderFrame;
}(React.Component);

exports.default = SliderFrame;


SliderFrame.defaultProps = {
    speed: 1000,
    delay: 2000,
    pause: true,
    autoplay: false,
    dots: true,
    arrows: true,
    itemCount: 0
};
SliderFrame.autoPlayFlag = null;

},{"./sliderArrows.jsx":4,"./sliderDots.jsx":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderDots = require('./sliderDots.jsx');

var _sliderDots2 = _interopRequireDefault(_sliderDots);

var _sliderArrows = require('./sliderArrows.jsx');

var _sliderArrows2 = _interopRequireDefault(_sliderArrows);

var _sliderFrame = require('./sliderFrame.jsx');

var _sliderFrame2 = _interopRequireDefault(_sliderFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderFrameArrowOnBottom = function (_SliderFrame) {
    _inherits(SliderFrameArrowOnBottom, _SliderFrame);

    function SliderFrameArrowOnBottom(props) {
        _classCallCheck(this, SliderFrameArrowOnBottom);

        return _possibleConstructorReturn(this, (SliderFrameArrowOnBottom.__proto__ || Object.getPrototypeOf(SliderFrameArrowOnBottom)).call(this, props));
    }

    _createClass(SliderFrameArrowOnBottom, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var showArrows = this.props.arrows && this.props.itemCount > 1;
            var showDots = this.props.dots && this.props.itemCount > 1;
            var dotsNode = React.createElement(_sliderDots2.default, { turn: this.turn.bind(this), count: this.props.itemCount, nowLocal: this.state.nowLocal });

            var arrowsAndDotsNode = '';
            if (showArrows && showDots) {
                arrowsAndDotsNode = React.createElement(
                    _sliderArrows2.default,
                    { turn: this.turn.bind(this) },
                    dotsNode
                );
            } else if (showArrows && !showDots) {
                arrowsAndDotsNode = React.createElement(_sliderArrows2.default, { turn: this.turn.bind(this) });
            } else if (!showArrows && showDots) {
                arrowsAndDotsNode = { dotsNode: dotsNode };
            }

            var children = React.Children.map(this.props.children, function (item, i) {
                return React.cloneElement(item, {
                    left: _this2.props.left,
                    speed: _this2.props.speed,
                    nowLocal: _this2.state.nowLocal,
                    autoplay: _this2.props.autoplay
                });
            });

            return React.createElement(
                'div',
                {
                    className: 'acs-sliderframe',
                    onMouseOver: this.props.pause ? this.pausePlay.bind(this) : null, onMouseOut: this.props.pause ? this.goPlay.bind(this) : null },
                children,
                arrowsAndDotsNode
            );
        }
    }]);

    return SliderFrameArrowOnBottom;
}(_sliderFrame2.default);

exports.default = SliderFrameArrowOnBottom;

},{"./sliderArrows.jsx":4,"./sliderDots.jsx":5,"./sliderFrame.jsx":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderLinks = function (_React$Component) {
    _inherits(SliderLinks, _React$Component);

    function SliderLinks(props) {
        _classCallCheck(this, SliderLinks);

        return _possibleConstructorReturn(this, (SliderLinks.__proto__ || Object.getPrototypeOf(SliderLinks)).call(this, props));
    }

    _createClass(SliderLinks, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal;

            var count = items.length;
            var width = 100 / count + '%';

            var itemCollection = this.props.items.map(function (items, idc) {
                var itemNodes = items.map(function (item, idn) {
                    return React.createElement(
                        'a',
                        { key: 'link' + idn, href: item.itemhref, className: 'acs-link-bgcolor', target: '_blank', title: item.title },
                        React.createElement('span', { className: 'acs-linkitem-icon' }),
                        React.createElement(
                            'span',
                            { className: 'acs-linkitem-title' },
                            item.title
                        )
                    );
                });
                return React.createElement(
                    'li',
                    { key: 'coll' + idc, style: { width: width } },
                    itemNodes
                );
            });

            return React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "ms",
                        width: count * 100 + "%"
                    } },
                itemCollection
            );
        }
    }]);

    return SliderLinks;
}(React.Component);

exports.default = SliderLinks;

},{}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewItem = function (_Component) {
    _inherits(NewItem, _Component);

    function NewItem(props) {
        _classCallCheck(this, NewItem);

        return _possibleConstructorReturn(this, (NewItem.__proto__ || Object.getPrototypeOf(NewItem)).call(this, props));
    }

    _createClass(NewItem, [{
        key: 'render',
        value: function render() {
            var height = 100 / this.props.maxCount + '%';

            return _react2.default.createElement(
                'div',
                null,
                this.props.children.map(function (item, idx) {
                    return _react2.default.createElement(
                        'div',
                        { key: 'news' + idx, style: { height: height } },
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement('img', { src: item.src })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement(
                                'a',
                                { href: item.href, title: item.value },
                                item.value
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'newContent' },
                            _react2.default.createElement('div', { className: 'acs-pic-clock' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                item.date
                            )
                        )
                    );
                })
            );
        }
    }]);

    return NewItem;
}(_react.Component);

var News = function (_Component2) {
    _inherits(News, _Component2);

    function News(props) {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal,
                maxCount = _props.maxCount;

            var count = items.length;
            var width = 100 / items.length + '%';

            var itemNodes = this.props.items.map(function (item, idx) {
                return _react2.default.createElement(
                    'li',
                    { style: { width: width } },
                    _react2.default.createElement(NewItem, { children: item.props.children, key: idx, maxCount: maxCount })
                );
            });

            return _react2.default.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "ms",
                        width: count * 100 + "%"
                    } },
                itemNodes
            );
        }
    }]);

    return News;
}(_react.Component);

exports.default = News;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _titleDescriptionPanel = require('../common/titleDescriptionPanel.jsx');

var _titleDescriptionPanel2 = _interopRequireDefault(_titleDescriptionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderPics = function (_React$Component) {
    _inherits(SliderPics, _React$Component);

    function SliderPics(props) {
        _classCallCheck(this, SliderPics);

        return _possibleConstructorReturn(this, (SliderPics.__proto__ || Object.getPrototypeOf(SliderPics)).call(this, props));
    }

    _createClass(SliderPics, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                items = _props.items,
                left = _props.left,
                speed = _props.speed,
                nowLocal = _props.nowLocal,
                jump = _props.jump;

            var count = items.length + 2;
            //let width = 100 / count + '%';
            var start = React.createElement(
                'li',
                { key: 'pic-start', className: 'acs-slider-pic', style: { width: '730px' } },
                React.createElement(
                    'a',
                    { href: this.props.items[this.props.items.length - 1].itemhref },
                    React.createElement('img', { src: this.props.items[this.props.items.length - 1].src })
                )
            );

            var end = React.createElement(
                'li',
                { key: 'pic-end', className: 'acs-slider-pic', style: { width: '730px' } },
                React.createElement(
                    'a',
                    { href: this.props.items[0].itemhref },
                    React.createElement('img', { src: this.props.items[0].src })
                )
            );

            var itemNodes = this.props.items.map(function (item, idx) {
                if (idx == nowLocal) {
                    return React.createElement(
                        'li',
                        { key: 'pic' + idx, className: 'acs-slider-pic', style: { width: '730px' } },
                        React.createElement(
                            'a',
                            { href: item.itemhref },
                            React.createElement('img', { src: item.src })
                        )
                    );
                } else {
                    return React.createElement(
                        'li',
                        { key: 'pic' + idx, className: 'acs-slider-pic', style: { width: '730px' } },
                        React.createElement(
                            'a',
                            { href: item.itemhref },
                            React.createElement('img', { src: item.src })
                        )
                    );
                }
            });

            return React.createElement(
                'ul',
                { style: {
                        left: -100 * nowLocal + "%",
                        transitionDuration: speed + "ms",
                        width: count * 100 + "%"
                    } },
                start,
                itemNodes,
                end
            );
        }
    }]);

    return SliderPics;
}(React.Component);

exports.default = SliderPics;

},{"../common/titleDescriptionPanel.jsx":2}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_React$Component) {
    _inherits(Event, _React$Component);

    function Event(props) {
        _classCallCheck(this, Event);

        return _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));
    }

    _createClass(Event, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "acs-evnet-container" },
                React.createElement(
                    "div",
                    { className: "acs-event-timePic" },
                    React.createElement(
                        "div",
                        { className: "acs-month" },
                        React.createElement(
                            "span",
                            null,
                            this.props.month
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-date" },
                        React.createElement(
                            "span",
                            null,
                            this.props.day
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "acs-timeDes" },
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-title" },
                        React.createElement(
                            "a",
                            { className: "acs-title", title: this.props.title, href: this.props.href },
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-time" },
                        React.createElement("div", { className: "acs-pic-clock" }),
                        React.createElement(
                            "span",
                            { className: "acs-event-time" },
                            this.props.time
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "acs-timeDes-location" },
                        React.createElement("div", { className: "acs-pic-location" }),
                        React.createElement(
                            "span",
                            { className: "acs-event-location" },
                            this.props.location
                        )
                    )
                )
            );
        }
    }]);

    return Event;
}(React.Component);

exports.default = Event;

},{}],12:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _slideEvents = require('../../components/slider/slideEvents.jsx');

var _slideEvents2 = _interopRequireDefault(_slideEvents);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eventRender(config) {
    var NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Anniversary Celebration', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }, { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    var data = NewInformation;
    var param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        var maxCount = 3;
        for (var i = 0, len = data.length; i < len; i += maxCount) {
            var cell = Math.ceil(data.length / maxCount);
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('eventSlider')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: true,
                    link: param.moreurl,
                    hasTopLine: true
                },
                React.createElement(
                    _sliderFrameArrowOnBottom2.default,
                    {
                        itemCount: itemNodes.length,
                        speed: param.speed,
                        delay: param.delay,
                        pause: param.pause,
                        autoplay: param.autoplay,
                        dots: param.dots,
                        arrows: param.arrows
                    },
                    React.createElement(_slideEvents2.default, { inputDate: itemNodes })
                )
            ), document.getElementById('eventSlider'));
        }
    };

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            cache: false,
            async: false,
            success: function success(dataInput) {
                var month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    var date = dataInput.d.results[i].EventDate ? new Date(dataInput.d.results[i].EventDate) : '';
                    var day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
                    var hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
                    var minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
                    var pmOrAm = date.getHours() >= 12 ? "PM" : "AM";
                    data.push({
                        'href': param.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'month': date === '' ? '' : month[date.getMonth()],
                        'day': day,
                        'time': hour + ":" + minute + " " + pmOrAm,
                        'location': dataInput.d.results[i].Location,
                        'title': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.eventRender = eventRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/slideEvents.jsx":3,"../../components/slider/sliderFrameArrowOnBottom.jsx":7}],13:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _sliderLinks = require('../../components/slider/sliderLinks.jsx');

var _sliderLinks2 = _interopRequireDefault(_sliderLinks);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linksRender(config) {
    var data = [{ 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' }, { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' }, { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' }, { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' }, { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'App' }, { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }];
    var param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: 'frequently accessed links', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        var maxCount = 9;
        for (var i = 0, len = data.length; i < len; i += maxCount) {
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('acclinks')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: false,
                    link: param.moreurl,
                    hasTopLine: false
                },
                React.createElement(
                    _sliderFrameArrowOnBottom2.default,
                    {
                        itemCount: itemNodes.length,
                        speed: param.speed,
                        delay: param.delay,
                        pause: param.pause,
                        autoplay: param.autoplay,
                        dots: param.dots,
                        arrows: param.arrows
                    },
                    React.createElement(_sliderLinks2.default, { items: itemNodes })
                )
            ), document.getElementById('acclinks'));
            AIC.wordLimit('.acs-linkitem-title', 2);
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            cache: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'itemhref': dataInput.d.results[i].ACSUrl ? dataInput.d.results[i].ACSUrl.Url : '',
                        'title': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.linksRender = linksRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/sliderFrameArrowOnBottom.jsx":7,"../../components/slider/sliderLinks.jsx":8}],14:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _webPartFrame = require('../../components/Common/webPartFrame.jsx');

var _webPartFrame2 = _interopRequireDefault(_webPartFrame);

var _sliderNews = require('../../components/slider/sliderNews.jsx');

var _sliderNews2 = _interopRequireDefault(_sliderNews);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newsRender(config) {
    var data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }, { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

    var maxCount = 3;
    var param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '', defaultPicUrl: '' };

    function renderUI(data, param) {
        var itemNodes = [];

        for (var i = 0, len = data.length; i < len; i += maxCount) {
            var cell = Math.ceil(data.length / maxCount);
            itemNodes.push(React.createElement(_sliderNews2.default, { children: data.slice(i, i + maxCount), count: cell, idx: i }));
        }

        if (document.getElementById('news')) {
            (0, _reactDom.render)(React.createElement(
                _webPartFrame2.default,
                {
                    title: param.webparttitle,
                    hasMore: true,
                    link: param.listurl,
                    hasTopLine: true
                },
                React.createElement(
                    _sliderFrameArrowOnBottom2.default,
                    {
                        itemCount: itemNodes.length,
                        speed: param.speed,
                        delay: param.delay,
                        pause: param.pause,
                        autoplay: param.autoplay,
                        dots: param.dots,
                        arrows: param.arrows
                    },
                    React.createElement(_sliderNews2.default, { items: itemNodes, maxCount: maxCount })
                )
            ), document.getElementById('news'));
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            cache: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    var date = new Date(dataInput.d.results[i].ACSPublishedDate);
                    var year = date.getFullYear();
                    var month = monthTransform(date.getMonth());
                    var day = date.getDate();
                    var hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
                    var minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
                    var pmOrAm = date.getHours() >= 12 ? "PM" : "AM";
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl ? dataInput.d.results[i].ACSImageUrl : param.defaultPicUrl,
                        'date': day + " " + month + "," + year + " " + hour + ":" + minute + " " + pmOrAm,
                        'href': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'value': dataInput.d.results[i].Title
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {}
        });
    }

    function monthTransform(data) {
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var tempdata = month[data];
        return tempdata;
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.defaultPicUrl = config.defaultPicUrl ? config.defaultPicUrl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.newsRender = newsRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/Common/webPartFrame.jsx":1,"../../components/slider/sliderFrameArrowOnBottom.jsx":7,"../../components/slider/sliderNews.jsx":9}],15:[function(require,module,exports){
(function (global){
'use strict';

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _sliderFrameArrowOnBottom = require('../../components/slider/sliderFrameArrowOnBottom.jsx');

var _sliderFrameArrowOnBottom2 = _interopRequireDefault(_sliderFrameArrowOnBottom);

var _sliderPics = require('../../components/slider/sliderPics.jsx');

var _sliderPics2 = _interopRequireDefault(_sliderPics);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sliderRender(config) {

    var data = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' }, { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' }, { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }, { 'src': '../../components/img/image4.jpg', 'alt': 'image4', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }, { 'src': '../../components/img/image5.jpg', 'alt': 'image5', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }, { 'src': '../../components/img/image6.jpg', 'alt': 'image6', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

    var param = { url: '', speed: 2000, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '' };

    function renderUI(data, param) {
        if (document.getElementById('slider')) {
            (0, _reactDom.render)(React.createElement(
                _sliderFrameArrowOnBottom2.default,
                {
                    itemCount: data.length,
                    speed: param.speed,
                    delay: param.delay,
                    pause: param.pause,
                    autoplay: param.autoplay,
                    dots: param.dots,
                    arrows: param.arrows
                },
                React.createElement(_sliderPics2.default, { items: data })
            ), document.getElementById('slider'));
            //AIC.wordLimit('.acs-titledescriptionpanel-description', 2);
        }
    }

    function loadData(param) {
        _jquery2.default.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose"
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            cache: false,
            success: function success(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl,
                        'alt': dataInput.d.results[i].Title,
                        'itemhref': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'title': dataInput.d.results[i].Title,
                        'description': dataInput.d.results[i].ACSDescription
                    });
                }
                renderUI(data, this.config);
            },
            error: function error(data) {
                debugger;
            }
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 2000;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        loadData(param);
    } else {
        renderUI(data, param);
    }
}

global.sliderRender = sliderRender;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../components/slider/sliderFrameArrowOnBottom.jsx":7,"../../components/slider/sliderPics.jsx":10}]},{},[13,15,14,12])(15)
});