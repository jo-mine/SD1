(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=c(n(0)),u=(c(n(1)),n(7)),l=n(2);c(n(22));function c(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={count:0},n.countUp=n.countUp.bind(n),n.countClear=n.countClear.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"renderToolbar",value:function(){return r.default.createElement(u.Toolbar,null,r.default.createElement("div",{className:"center"},"Onsen UI"))}},{key:"countUp",value:function(e){this.state.count.toString().length>=9?l.notification.alert("９桁以上だと入力できない旨のアラートを表示する"):this.setState({count:10*this.state.count+e})}},{key:"countClear",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return r.default.createElement(u.Page,{renderToolbar:this.renderToolbar},r.default.createElement("div",null,"Hello World!"),r.default.createElement("div",null,"クリックされた回数=",this.state.count),r.default.createElement("p",null,r.default.createElement(u.Button,{onClick:function(){return e.countUp(0)}},"0"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(1)}},"1"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(2)}},"2"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(3)}},"3"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(4)}},"4"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(5)}},"5"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(6)}},"6"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(7)}},"7"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(8)}},"8"),r.default.createElement(u.Button,{onClick:function(){return e.countUp(9)}},"9"),r.default.createElement(u.Button,{onClick:this.countClear},"C")))}}]),t}(r.default.Component);t.default=a},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(0)),u=(l(n(1)),n(7));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement(u.Card,null,r.default.createElement("p",null,this.props.text))}}]),t}(r.default.Component);t.default=c},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n(10);var o=n(12),r=a(n(0)),u=a(n(1)),l=a(n(2)),c=a(n(18));function a(e){return e&&e.__esModule?e:{default:e}}n(23),n(24),l.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var i=document.getElementById("app");u.default.render(r.default.createElement(o.AppContainer,null,r.default.createElement(c.default,null)),i)}},[[8,1,2]]]);