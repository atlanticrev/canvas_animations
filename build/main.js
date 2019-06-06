/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./figures/Circle.js":
/*!***************************!*\
  !*** ./figures/Circle.js ***!
  \***************************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.js");


function Circle(x, y, radius, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = color; // Определяю начальный радиус кружка для того,
  // чтобы уменьшить текущий радиус до его первоначального
  // значения, когда курсор покидает окрестность кружка

  this.initialRadius = radius;
}

Circle.prototype.draw = function () {
  _index__WEBPACK_IMPORTED_MODULE_0__["context"].beginPath();
  _index__WEBPACK_IMPORTED_MODULE_0__["context"].arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  _index__WEBPACK_IMPORTED_MODULE_0__["context"].fillStyle = this.color;
  _index__WEBPACK_IMPORTED_MODULE_0__["context"].fill();
  _index__WEBPACK_IMPORTED_MODULE_0__["context"].closePath();
};

Circle.prototype.update = function () {
  // x + radius - левая граница окружности, x - radius правая граница окружности
  if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
    // Меняю направление скорости, если окружность доходит до края справа или слева
    this.dx = -this.dx;
  }

  if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
    // Меняю направление скорости, если окружность доходит до края сверху или снизу
    this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;
  this.draw();
};



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony import */ var _figures_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures/Circle */ "./figures/Circle.js");
// import { circleFactory } from "./circleFactory";

/*******************
 ***  Definitions
 *******************/

var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouse = {
  x: undefined,
  y: undefined
};
window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
/*******************
 ***	Drawing
 *******************/
// let circles = circleFactory(150);

var circle;
init();

function init() {
  // circles = circleFactory(150);
  circle = new _figures_Circle__WEBPACK_IMPORTED_MODULE_0__["Circle"](canvas.width / 2, canvas.height / 2, 30, 0, 5, '#304360');
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, window.innerWidth, window.innerHeight); // circles.forEach(function (circle) {
  //   let dr = 2;
  //
  //   // Использую Math.hypot для нахождения расстояния между точками
  //
  //   if ( Math.hypot( mouse.x - circle.x, mouse.y - circle.y ) < circle.radius ) {
  //
  //     console.log(Math.hypot( mouse.x - circle.x, mouse.y - circle.y ), circle.radius);
  //
  //     // Ограничиваем то, во сколько раз увеличится кружок
  //
  //     if ( circle.radius <= circle.initialRadius * 3 ) {
  //       circle.radius += dr;
  //     }
  //
  //   } else if ( circle.radius > circle.initialRadius ) {
  //
  //     circle.radius -= dr;
  //   }
  //
  //   circle.update();
  // });

  circle.update();
}

animate();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map