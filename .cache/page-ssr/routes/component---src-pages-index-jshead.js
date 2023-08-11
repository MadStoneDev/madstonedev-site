"use strict";
exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const headingStyle = {
  textShadow: "-1px -1px 0 #fff 1px -1px 0 #fff -1px 1px 0 #fff 1px 1px 0 #fff"
};
const links = [{
  text: "LFU Companion",
  url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
  description: "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  color: "#E95800"
}, {
  text: "Lingualize",
  url: "https://www.gatsbyjs.com/docs/how-to/",
  description: "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
  color: "#1099A8"
}];
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "h-screen bg-stone-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "min-h-fit"
  }, links.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-5xl font-black leading-loose",
    style: headingStyle
  }, item.text)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map