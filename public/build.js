/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*Ejercicio 1: Hola mundo*/

	/*class World {
	  constructor(message, name) {
	    this.message = message;
	    this.name = name;
	  }
	 
	  print() {
	    $('.title').append(`${this.message} ${this.name}`);
	  }
	}

	const name = "Lemontech";
	const world = new World("Hola", name);

	world.print();*/

	/*Ejercicio 2: Buscar hijos. Retornar el primer elemento.*/

	var Selector = function () {
	  function Selector(parent) {
	    _classCallCheck(this, Selector);

	    this.parent = parent;
	    this.children = $(this.parent).children();
	  }

	  _createClass(Selector, [{
	    key: "print",
	    value: function print() {
	      console.log(this.children);
	    }
	  }]);

	  return Selector;
	}();

	var selector = new Selector("span");
	selector.print();

	var FancySelector = function (_Selector) {
	  _inherits(FancySelector, _Selector);

	  function FancySelector() {
	    _classCallCheck(this, FancySelector);

	    return _possibleConstructorReturn(this, (FancySelector.__proto__ || Object.getPrototypeOf(FancySelector)).apply(this, arguments));
	  }

	  _createClass(FancySelector, [{
	    key: "print",
	    value: function print() {
	      console.log(this.children.first());
	    }
	  }]);

	  return FancySelector;
	}(Selector);

	var fancySelector = new FancySelector('span');
	fancySelector.print();

/***/ }
/******/ ]);