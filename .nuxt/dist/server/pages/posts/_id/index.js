exports.ids = [7];
exports.modules = {

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1f022270", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5dcb8d3e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5dcb8d3e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5dcb8d3e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5dcb8d3e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5dcb8d3e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".single-post-page[data-v-5dcb8d3e]{padding:30px;text-align:center;box-sizing:border-box}.post[data-v-5dcb8d3e]{width:100%}@media(min-width:768px){.post[data-v-5dcb8d3e]{width:600px;margin:auto}}.post-title[data-v-5dcb8d3e]{margin:0}.post-details[data-v-5dcb8d3e]{padding:10px;box-sizing:border-box;border-bottom:3px solid #ccc;display:flex;justify-content:center;align-items:center;flex-direction:column}@media(min-width:768px){.post-details[data-v-5dcb8d3e]{flex-direction:row}}.post-detail[data-v-5dcb8d3e]{color:#585858;margin:0 10px}.post-feedback a[data-v-5dcb8d3e]{color:red;text-decoration:none}.post-feedback a[data-v-5dcb8d3e]:active,.post-feedback a[data-v-5dcb8d3e]:hover{color:salmon}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id/index.vue?vue&type=template&id=5dcb8d3e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"single-post-page"},[_vm._ssrNode("<section class=\"post\" data-v-5dcb8d3e><h1 data-v-5dcb8d3e>"+_vm._ssrEscape(_vm._s(_vm.loadedPost.title))+"</h1> <div class=\"post-details\" data-v-5dcb8d3e><div data-v-5dcb8d3e>"+_vm._ssrEscape("Last updated on "+_vm._s(_vm._f("date")(_vm.loadedPost.updatedDate)))+"</div> <div data-v-5dcb8d3e>"+_vm._ssrEscape("Written by "+_vm._s(_vm.loadedPost.author))+"</div></div> <p data-v-5dcb8d3e>"+_vm._ssrEscape(_vm._s(_vm.loadedPost.content))+"</p></section> <section class=\"post-feedback\" data-v-5dcb8d3e><p data-v-5dcb8d3e>Let me know what you think about the post, send a mail to <a href=\"mailto:d.a.lukashenko@gmail.com\" data-v-5dcb8d3e>d.a.lukashenko@gmail.com</a></p></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_id/index.vue?vue&type=template&id=5dcb8d3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  asyncData(context) {
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      };
    }

    return context.app.$axios.$get('posts/' + context.params.id + '.json').then(data => {
      return {
        loadedPost: data
      };
    }).catch(e => context.error(e));
  }

});
// CONCATENATED MODULE: ./pages/posts/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/posts/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5dcb8d3e",
  "2d96316e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map