"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.1.9_webpack@5.104.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.1.9_webpack@5.104.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/pages/index/content.ts");
/* harmony import */ var _sections_CapabilitySection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/CapabilitySection */ "./src/pages/index/sections/CapabilitySection.tsx");
/* harmony import */ var _sections_HeroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/HeroSection */ "./src/pages/index/sections/HeroSection.tsx");
/* harmony import */ var _sections_HighlightsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/HighlightsSection */ "./src/pages/index/sections/HighlightsSection.tsx");
/* harmony import */ var _sections_ResourcesSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/ResourcesSection */ "./src/pages/index/sections/ResourcesSection.tsx");
/* harmony import */ var _sections_StatsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/StatsSection */ "./src/pages/index/sections/StatsSection.tsx");
/* harmony import */ var _sections_TokensSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/TokensSection */ "./src/pages/index/sections/TokensSection.tsx");
/* harmony import */ var _sections_WorkflowSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/WorkflowSection */ "./src/pages/index/sections/WorkflowSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












function Index() {
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLoad)(() => {
    console.log('Page loaded.');
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "min-h-screen bg-slate-950 px-[48rpx] pb-[96rpx] pt-[64rpx] text-slate-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "i-mdi-home"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_HeroSection__WEBPACK_IMPORTED_MODULE_4__.HeroSection, {
      quickActions: _content__WEBPACK_IMPORTED_MODULE_2__.quickActions
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_HighlightsSection__WEBPACK_IMPORTED_MODULE_5__.HighlightsSection, {
      highlights: _content__WEBPACK_IMPORTED_MODULE_2__.highlights
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_WorkflowSection__WEBPACK_IMPORTED_MODULE_9__.WorkflowSection, {
      steps: _content__WEBPACK_IMPORTED_MODULE_2__.workflow
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_StatsSection__WEBPACK_IMPORTED_MODULE_7__.StatsSection, {
      stats: _content__WEBPACK_IMPORTED_MODULE_2__.stats
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_CapabilitySection__WEBPACK_IMPORTED_MODULE_3__.CapabilitySection, {
      capabilities: _content__WEBPACK_IMPORTED_MODULE_2__.capabilities
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_TokensSection__WEBPACK_IMPORTED_MODULE_8__.TokensSection, {
      tokens: _content__WEBPACK_IMPORTED_MODULE_2__.tokens,
      releaseHighlights: _content__WEBPACK_IMPORTED_MODULE_2__.releaseHighlights
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sections_ResourcesSection__WEBPACK_IMPORTED_MODULE_6__.ResourcesSection, {
      resources: _content__WEBPACK_IMPORTED_MODULE_2__.resources
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/content.ts":
/*!************************************!*\
  !*** ./src/pages/index/content.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capabilities: function() { return /* binding */ capabilities; },
/* harmony export */   highlights: function() { return /* binding */ highlights; },
/* harmony export */   quickActions: function() { return /* binding */ quickActions; },
/* harmony export */   releaseHighlights: function() { return /* binding */ releaseHighlights; },
/* harmony export */   resources: function() { return /* binding */ resources; },
/* harmony export */   stats: function() { return /* binding */ stats; },
/* harmony export */   tokens: function() { return /* binding */ tokens; },
/* harmony export */   workflow: function() { return /* binding */ workflow; }
/* harmony export */ });
const highlights = [{
  title: 'Tailwind CSS v4 Ready',
  description: 'tailwindcss@4 的零配置调色、全新语义 token 以及更轻量的构建流程已经全部打包在脚手架中，随时开箱即用。'
}, {
  title: '跨端体验一致',
  description: 'Weapp + H5 + RN 同步使用原子类，和设计稿保持 1:1 的 spacing 与字体系统，提升交付效率。'
}, {
  title: '组件驱动思维',
  description: '配合 Taro Hooks 与抽象 UI Section，可以快速积累可复用的模板，持续演进产品体验。'
}, {
  title: '设计到代码一体化',
  description: '借助设计 token 与 CSS 变量映射，视觉迭代不再需要重写样式，直接修改 token 即可全局生效。'
}];
const workflow = [{
  label: '初始化项目',
  detail: 'pnpm dlx @tarojs/cli init my-app',
  tip: '选择 weapp-tailwindcss 模板即可获得 v4 支持'
}, {
  label: '编码与调试',
  detail: 'pnpm dev:weapp | pnpm dev:h5',
  tip: 'JIT 实时刷新风格，调试体验接近 Web'
}, {
  label: '持续交付',
  detail: 'pnpm build && pnpm test',
  tip: '结合 CI 可自动生成按需产物与依赖上报'
}, {
  label: '设计联动',
  detail: 'figma token → tailwind preset',
  tip: '通过 design token 流水线统一栅格、颜色与圆角'
}];
const stats = [{
  value: '240ms',
  description: '平均样式生成耗时'
}, {
  value: '120+',
  description: '预置语义颜色 token'
}, {
  value: '98%',
  description: '跨端视觉一致性'
}, {
  value: '0 config',
  description: 'Tailwind 默认配置项'
}, {
  value: '24rpx grid',
  description: '默认步进与间距体系'
}, {
  value: 'A11y ready',
  description: '语义颜色保证对比度'
}];
const quickActions = ['pnpm dev', 'pnpm build', 'pnpm preview', 'pnpm test', 'pnpm lint'];
const resources = [{
  title: '入门指南',
  body: '从环境搭建、Tailwind 设计体系到部署上线，一篇文档搞定。'
}, {
  title: '组件示例',
  body: '常见卡片、布局、图表全部由原子类驱动，可直接复制粘贴。'
}, {
  title: '设计 Token 管理',
  body: '演示如何把品牌色、圆角、阴影映射到 tailwindcss@4 的自定义属性。'
}, {
  title: '跨端规范',
  body: '收录 Weapp/H5 差异化样式示例，并提供推荐的原子类组合。'
}];
const capabilities = [{
  title: '体验驱动',
  badges: ['JIT', 'Dark mode', 'Layered Gradient'],
  points: ['通过 v4 原生的 @theme token，在同一套代码下支持亮暗双模式。', '细粒度渐变和 blur 特效可直接映射到小程序，适合沉浸式首页。', '统一的 spacing/typography 刻度帮助保持设计一致性。'],
  footer: 'Tailwind v4 把设计 token 变成一等公民，真实提升跨端一致性。'
}, {
  title: '工程效率',
  badges: ['Preset', 'CLI', 'CI-ready'],
  points: ['tailwindcss CLI + watch 支持 rpx 单位，无需额外配置文件。', '在 CI 中通过 `pnpm dlx tailwindcss -i src/app.css -o dist/index.css` 即可完成产物生成。', '多端样式隔离策略示例：H5 专属 hover 动效与 Weapp 保守降级。'],
  footer: '工程链路开箱即用，适合快速搭建 MVP 与持续优化。'
}, {
  title: '可复用的 UI Section',
  badges: ['Composition', 'Slot', 'Token aware'],
  points: ['每个区块都可独立传入数据，复用到其他页面或营销落地页。', '支持通过 props 注入品牌色 token，形成多主题变体。', '演示如何把列表、时间轴与指标卡片封装成可迭代的 Section。'],
  footer: '抽象 Section 让产品体验的演进更加平滑。'
}];
const tokens = [{
  title: 'Surface / Depth',
  sample: 'bg-slate-950/90 backdrop-blur-lg ring-1 ring-white/10',
  detail: '通过半透明背景与 ring 营造层次感，适合展示高价值信息的卡片。'
}, {
  title: 'Accent / Glow',
  sample: 'bg-gradient-to-r from-emerald-500/15 via-cyan-400/10 to-indigo-500/15 shadow-[0_24rpx_64rpx_rgba(16,185,129,0.24)]',
  detail: '高饱和度渐变与柔和阴影的组合，突出 Tailwind 的品牌氛围。'
}, {
  title: 'Typography Rhythm',
  sample: 'tracking-[6rpx] leading-[1.4] text-[30rpx]',
  detail: '保持舒适的字符间距和行高，针对中文与数字混排优化可读性。'
}, {
  title: 'Grid & Spacing',
  sample: 'grid grid-cols-2 gap-[28rpx] px-[32rpx] py-[28rpx]',
  detail: '使用固定步进 rpx 刻度，保证设计稿与真机 1:1 匹配。'
}];
const releaseHighlights = [{
  version: 'tailwindcss@4.0',
  summary: '零配置的 CSS 变量主题化能力 + 更轻的 CLI 构建体验。',
  bullets: ['内置 @theme token 与语义化颜色，减少自定义配置文件。', '即时生成器缩短增量构建时间，适合频繁调试。', '新增 utilities 支持 `:where` 选择器，优化样式优先级。']
}, {
  version: 'taro-webpack-tailwindcss-v4 模板',
  summary: '跨端样式与脚手架整合，专为多端一致性设计。',
  bullets: ['Weapp/H5 共用原子类，附带 hover/active 的优雅降级示例。', '内置 lint + test 配置，帮助快速接入 CI/CD。', '提供 Section 级别的 UI 模版，便于复制扩散到其他页面。']
}];

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@4.1.9_webpack@5.104.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.1.9_webpack@5.104.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {})
if (_node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_1_9_webpack_5_104_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/index/sections/CapabilitySection.tsx":
/*!********************************************************!*\
  !*** ./src/pages/index/sections/CapabilitySection.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapabilitySection: function() { return /* binding */ CapabilitySection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function CapabilitySection({
  capabilities
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[80rpx] space-y-[28rpx]",
    children: capabilities.map(capability => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "rounded-[36rpx] border border-white/10 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 p-[40rpx] shadow-[0_30rpx_70rpx_rgba(15,118,110,0.25)]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "flex flex-wrap items-center gap-[12rpx]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "text-[34rpx] font-semibold text-white",
          children: capability.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "flex flex-wrap gap-[8rpx]",
          children: capability.badges.map(badge => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
            className: "rounded-full bg-white/10 px-[16rpx] py-[8rpx] text-[22rpx] text-emerald-100 ring-1 ring-white/10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
              children: badge
            })
          }, badge))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "mt-[20rpx] space-y-[16rpx]",
        children: capability.points.map(point => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "flex items-start gap-[12rpx] rounded-[20rpx] bg-white/5 px-[16rpx] py-[12rpx] text-[28rpx] leading-relaxed text-slate-100 ring-1 ring-white/5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
            className: "mt-[10rpx] h-[12rpx] w-[12rpx] rounded-full bg-emerald-300 shadow-[0_0_0_6rpx_rgba(16,185,129,0.2)]"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
            className: "flex-1",
            children: point
          })]
        }, point))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "mt-[20rpx] block text-[26rpx] text-emerald-100",
        children: capability.footer
      })]
    }, capability.title))
  });
}

/***/ }),

/***/ "./src/pages/index/sections/HeroSection.tsx":
/*!**************************************************!*\
  !*** ./src/pages/index/sections/HeroSection.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HeroSection({
  quickActions
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "rounded-[48rpx] border border-white/10 bg-gradient-to-b from-emerald-400/15 via-teal-400/5 to-slate-900 p-[64rpx] shadow-[0_60rpx_120rpx_rgba(20,184,166,0.25)]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "flex items-center gap-[16rpx]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-full bg-emerald-400/15 px-[24rpx] py-[12rpx] text-[26rpx] text-emerald-100 ring-1 ring-emerald-300/40",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "font-semibold tracking-[4rpx]",
          children: "Tailwind 4 \u2022 Multi-end"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-full bg-white/10 px-[20rpx] py-[10rpx] text-[24rpx] text-white/80",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "Design token + CSS \u53D8\u91CF\u4E00\u4F53\u5316"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[32rpx] text-[72rpx] font-semibold leading-tight text-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: "\u6253\u9020\u8DE8\u7AEF\u4F53\u9A8C\u4E00\u81F4\u7684 Taro \u4EA7\u54C1\u4E3B\u9875"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[24rpx] text-[30rpx] leading-relaxed text-slate-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        children: "\u901A\u8FC7 tailwindcss@4 \u7684\u539F\u5B50\u5316\u8BED\u6CD5\uFF0C\u5373\u53EF\u5728\u5C0F\u7A0B\u5E8F\u3001H5\u3001\u751A\u81F3\u591A\u7AEF\u5BB9\u5668\u4E2D\u7EF4\u6301\u4E00\u81F4\u7684\u5E03\u5C40\u3001\u95F4\u8DDD\u4E0E\u4EA4\u4E92\u52A8\u6548\u3002 \u4E0B\u9762\u7684\u793A\u4F8B\u5C55\u793A\u4E86\u51E0\u79CD\u5E38\u7528\u4FE1\u606F\u6A21\u5757\uFF0C\u5E2E\u52A9\u4F60\u5FEB\u901F\u642D\u5EFA\u9996\u9875\u4E0E\u8425\u9500\u843D\u5730\u9875\u3002"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[36rpx] grid grid-cols-2 gap-[20rpx] rounded-[32rpx] bg-white/5 p-[24rpx] backdrop-blur-md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-[24rpx] bg-gradient-to-r from-white/10 to-white/5 p-[20rpx]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "text-[28rpx] font-semibold text-emerald-200",
          children: "\u66F4\u8F7B\u7684 CLI"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "mt-[8rpx] block text-[26rpx] text-slate-200",
          children: "\u65E0\u914D\u7F6E\u5373\u53EF\u751F\u6210\u6837\u5F0F\uFF0CJIT \u79D2\u7EA7\u54CD\u5E94\u3002"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-[24rpx] border border-white/10 bg-slate-950/50 p-[20rpx] shadow-inner shadow-black/30",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "text-[28rpx] font-semibold text-emerald-200",
          children: "\u7EDF\u4E00\u8BBE\u8BA1 token"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "mt-[8rpx] block text-[26rpx] text-slate-200",
          children: "\u989C\u8272\u3001\u5706\u89D2\u3001\u9634\u5F71\u5168\u90E8\u62BD\u8C61\u4E3A CSS \u53D8\u91CF\u3002"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[48rpx] flex flex-wrap gap-[24rpx]",
      children: quickActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-full border border-emerald-300/60 bg-emerald-400/10 px-[48rpx] py-[18rpx] text-[28rpx] font-medium text-emerald-100",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "font-mono tracking-[4rpx]",
          children: action
        })
      }, action))
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/sections/HighlightsSection.tsx":
/*!********************************************************!*\
  !*** ./src/pages/index/sections/HighlightsSection.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightsSection: function() { return /* binding */ HighlightsSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HighlightsSection({
  highlights
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[72rpx] grid grid-cols-1 gap-[32rpx]",
    children: highlights.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "rounded-[36rpx] border border-white/10 bg-white/5 p-[48rpx] shadow-xl shadow-black/30 backdrop-blur",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "text-[36rpx] font-semibold text-white",
        children: item.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "mt-[16rpx] block text-[30rpx] leading-relaxed text-slate-200",
        children: item.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "mt-[20rpx] inline-flex items-center gap-[12rpx] rounded-full bg-emerald-400/10 px-[20rpx] py-[10rpx] text-[24rpx] text-emerald-100 ring-1 ring-emerald-300/40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "h-[12rpx] w-[12rpx] rounded-full bg-emerald-300 shadow-[0_0_0_6rpx_rgba(16,185,129,0.25)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "\u8DE8\u7AEF\u539F\u5B50\u7C7B\u4E00\u81F4\u6027"
        })]
      })]
    }, item.title))
  });
}

/***/ }),

/***/ "./src/pages/index/sections/ResourcesSection.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/index/sections/ResourcesSection.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesSection: function() { return /* binding */ ResourcesSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ResourcesSection({
  resources
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[84rpx] space-y-[28rpx]",
    children: resources.map(resource => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "rounded-[36rpx] border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-[40rpx]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "text-[34rpx] font-semibold text-white",
        children: resource.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "mt-[12rpx] block text-[28rpx] leading-relaxed text-slate-200",
        children: resource.body
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "mt-[14rpx] inline-flex items-center gap-[10rpx] rounded-full bg-white/10 px-[18rpx] py-[10rpx] text-[24rpx] text-emerald-100 ring-1 ring-white/10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "h-[10rpx] w-[10rpx] rounded-full bg-emerald-300"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "\u5373\u7528\u5373\u8D70\u7684\u6A21\u5757\u5316\u8D44\u6E90"
        })]
      })]
    }, resource.title))
  });
}

/***/ }),

/***/ "./src/pages/index/sections/StatsSection.tsx":
/*!***************************************************!*\
  !*** ./src/pages/index/sections/StatsSection.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsSection: function() { return /* binding */ StatsSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function StatsSection({
  stats
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[80rpx] grid grid-cols-2 gap-[24rpx]",
    children: stats.map(stat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "rounded-[32rpx] border border-white/5 bg-slate-900/60 p-[32rpx] text-center shadow-inner shadow-black/40 ring-1 ring-white/5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "text-[44rpx] font-semibold text-emerald-200",
        children: stat.value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "mt-[8rpx] block text-[26rpx] text-slate-300",
        children: stat.description
      })]
    }, stat.value))
  });
}

/***/ }),

/***/ "./src/pages/index/sections/TokensSection.tsx":
/*!****************************************************!*\
  !*** ./src/pages/index/sections/TokensSection.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokensSection: function() { return /* binding */ TokensSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TokensSection({
  tokens,
  releaseHighlights
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[84rpx] rounded-[36rpx] border border-white/10 bg-slate-900/80 p-[40rpx]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "flex items-center justify-between gap-[12rpx]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "text-[38rpx] font-semibold text-white",
        children: "Tailwind v4 \u8BBE\u8BA1 Token \u9762\u677F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-full bg-emerald-400/15 px-[20rpx] py-[10rpx] text-[24rpx] text-emerald-100 ring-1 ring-emerald-300/40",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          children: "\u539F\u5B50\u7C7B\u5B9E\u65F6\u9884\u89C8"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[28rpx] grid grid-cols-1 gap-[20rpx]",
      children: tokens.map(token => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-[28rpx] border border-white/10 bg-white/5 p-[28rpx] shadow-inner shadow-black/30",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "text-[30rpx] font-semibold text-emerald-200",
          children: token.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "mt-[8rpx] block text-[26rpx] text-slate-100",
          children: token.detail
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "mt-[12rpx] rounded-[20rpx] bg-slate-950/60 px-[20rpx] py-[14rpx] text-[24rpx] text-emerald-100 ring-1 ring-white/5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
            className: "font-mono",
            children: token.sample
          })
        })]
      }, token.title))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[32rpx] rounded-[28rpx] border border-white/10 bg-gradient-to-r from-emerald-500/10 via-teal-400/10 to-cyan-500/10 p-[28rpx] shadow-[0_30rpx_80rpx_rgba(6,182,212,0.2)]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
        className: "text-[32rpx] font-semibold text-white",
        children: "Release \u77AC\u95F4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "mt-[16rpx] grid grid-cols-1 gap-[16rpx]",
        children: releaseHighlights.map(release => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "rounded-[20rpx] bg-white/10 p-[20rpx] ring-1 ring-white/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
            className: "text-[28rpx] font-semibold text-emerald-100",
            children: release.version
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
            className: "mt-[8rpx] block text-[26rpx] text-slate-100",
            children: release.summary
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
            className: "mt-[12rpx] space-y-[8rpx]",
            children: release.bullets.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
              className: "flex items-start gap-[10rpx] text-[24rpx] text-slate-200",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
                className: "mt-[10rpx] h-[8rpx] w-[8rpx] rounded-full bg-emerald-300"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
                className: "flex-1 leading-relaxed",
                children: item
              })]
            }, item))
          })]
        }, release.version))
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/sections/WorkflowSection.tsx":
/*!******************************************************!*\
  !*** ./src/pages/index/sections/WorkflowSection.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkflowSection: function() { return /* binding */ WorkflowSection; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.9_@tarojs+service@4.1.9_@tarojs+shared@4.1.9/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WorkflowSection({
  steps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
    className: "mt-[80rpx] rounded-[40rpx] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-[48rpx] shadow-[0_50rpx_80rpx_rgba(0,0,0,0.35)]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
      className: "text-[40rpx] font-semibold text-white",
      children: "\u4EA7\u54C1\u8FED\u4EE3\u8DEF\u7EBF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
      className: "mt-[8rpx] block text-[26rpx] text-slate-300",
      children: "\u4ECE\u521D\u59CB\u5316\u5230\u6301\u7EED\u4EA4\u4ED8\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u4FDD\u6301\u8BBE\u8BA1\u4E0E\u5DE5\u7A0B\u534F\u540C\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
      className: "mt-[32rpx] space-y-[32rpx]",
      children: steps.map(step => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
        className: "rounded-[28rpx] bg-white/5 p-[32rpx] ring-1 ring-white/10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
            className: "text-[32rpx] font-semibold text-emerald-200",
            children: step.label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.View, {
            className: "rounded-full bg-emerald-400/10 px-[20rpx] py-[10rpx] text-[24rpx] text-emerald-100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
              children: "Tailwind v4"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "mt-[12rpx] block font-mono text-[28rpx] text-white",
          children: step.detail
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__.Text, {
          className: "mt-[8rpx] block text-[26rpx] text-slate-300",
          children: step.tip
        })]
      }, step.label))
    })]
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map