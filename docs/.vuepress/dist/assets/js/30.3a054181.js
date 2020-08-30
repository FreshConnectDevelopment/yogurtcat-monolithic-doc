(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"更换主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更换主题"}},[t._v("#")]),t._v(" 更换主题")]),t._v(" "),e("p",[t._v("本项目基于 element-ui 默认视觉风格搭建了。如果对视觉风格有额外的要求可以按照"),e("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/custom-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方自定义主题指导"),e("OutboundLink")],1),t._v("。该方案是通过样式变量覆盖的方式。")]),t._v(" "),e("h2",{attrs:{id:"样式覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式覆盖"}},[t._v("#")]),t._v(" 样式覆盖")]),t._v(" "),e("p",[t._v("element-ui 的通用样式变量可能无法满足所有定制需求，你可以通过覆盖默认的组件样式的方式实现。\n由于 element-ui 的样式我们是在全局引入的，所以你想在某个"),e("code",[t._v("view")]),t._v("里面覆盖它的样式就不能加 scoped，但你又想只覆盖这个页面的 element 样式，你就可在它的父级加一个 class，以用命名空间来解决问题。或者使用"),e("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度作用选择器"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 你的命名空间 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".article-page")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* element-ui 元素 */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el-tag")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("一些全局的 element-ui 样式修改可以在 "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/element-ui.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/src/styles/element-ui.scss"),e("OutboundLink")],1),t._v(" 中进行设置。")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"动态换肤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态换肤"}},[t._v("#")]),t._v(" 动态换肤")]),t._v(" "),e("p",[t._v("本项目提供了两种动态换肤的功能，各有利弊，请结合个人需求自行选择。")]),t._v(" "),e("h3",{attrs:{id:"element-ui-官方文档页面-换肤方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-官方文档页面-换肤方式"}},[t._v("#")]),t._v(" element-ui 官方文档页面 换肤方式")]),t._v(" "),e("p",[t._v("element-ui 升级为 2.0 之后官方文档的右上角提供了动态换肤的功能，本项目也提供了改功能。\n代码地址："),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/ThemePicker/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/src/components/ThemePicker"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("简单说明一下它的原理：")]),t._v("\nelement-ui 2.0 版本之后所有的样式都是基于 SCSS 编写的，所有的颜色都是基于几个基础颜色"),e("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme/blob/master/element-variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("变量"),e("OutboundLink")],1),t._v("来设置的，所以就不难实现动态换肤了，只要找到那几个颜色变量修改它就可以了。\n首先我们需要拿到通过 "),e("code",[t._v("package.json")]),t._v(" 拿到 element-ui 的版本号，根据该版本号去请求相应的样式。拿到样式之后将样色，通过正则匹配和替换，将颜色变量替换成你需要的，之后动态添加 "),e("code",[t._v("style")]),t._v(" 标签来覆盖原有的 css 样式。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("这里需要获取 element-ui 的版本号，从而锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" version "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/package.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://unpkg.com/element-ui@")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/lib/theme-chalk/index.css")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCSSString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chalkHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chalk'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCSSString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("variable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/@font-face{[^}]+}/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("使用方式")])]),t._v(" "),e("p",[t._v("在项目中引入 ThemePicker 组件即可")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ThemePicker "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/ThemePicker'")]),t._v("\n")])])]),e("ul",[e("li",[t._v("优点\n"),e("ul",[e("li",[t._v("无需准备多套主题，可以自由动态换肤")])])]),t._v(" "),e("li",[t._v("缺点\n"),e("ul",[e("li",[t._v("自定义不够，只支持基础颜色的切换")])])])]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"多套主题换肤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多套主题换肤"}},[t._v("#")]),t._v(" 多套主题换肤")]),t._v(" "),e("p",[t._v("本方法就是最常见的换肤方式，本地存放多套主题，两者有不同的命名空间，如写两套主题，一套叫 "),e("code",[t._v("day-theme")]),t._v(" ，一套叫 "),e("code",[t._v("night-theme")]),t._v(" ，"),e("code",[t._v("night-theme")]),t._v(" 主题都在一个 "),e("code",[t._v(".night-theme")]),t._v(" 的命名空间下，我们动态的在 body 上 add "),e("code",[t._v(".night-theme")]),t._v(" ; remove "),e("code",[t._v(".night-theme")]),t._v("。")]),t._v(" "),e("h4",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("blockquote",[e("p",[t._v("我们这里基于官方的主题生成库 "),e("a",{attrs:{href:"https://github.com/ElementUI/element-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-theme"),e("OutboundLink")],1),t._v(" 进行了相应的改造。")])]),t._v(" "),e("p",[t._v("首先我们下载 "),e("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom-element-theme"),e("OutboundLink")],1),t._v(" 项目")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("git@github.com:PanJiaChen/custom-element-theme.git\n")])])]),e("p",[t._v("之后全局安装主题生成工具")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i element-theme -g\n")])])]),e("p",[t._v("进入项目目录 安装相关依赖")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("首先执行 "),e("code",[t._v("et -i")]),t._v(" 生成 "),e("code",[t._v("element-variables.scss")]),t._v(" 存放样式变量的文件，然后进入 "),e("code",[t._v("element-variables.scss")]),t._v(" 文件 修改你自己需要的变量，修改完成之后执行 "),e("code",[t._v("et")]),t._v(" ， 编译主题，最后执行"),e("code",[t._v("gulp")]),t._v(" 生成命名空间。所有生成文件在 "),e("code",[t._v("dist")]),t._v(" 目录下，你只需复制文件下所有内容到 "),e("code",[t._v("vue-element-admin")]),t._v(" 项目中 "),e("code",[t._v("src/assets/custom-theme")]),t._v(" 进行覆盖替换就行")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("如果需要修改打包生成样式命名空间的名字 只要修改该"),e("a",{attrs:{href:"https://github.com/PanJiaChen/custom-element-theme/blob/master/gulpfile.js#L6",target:"_blank",rel:"noopener noreferrer"}},[t._v("变量"),e("OutboundLink")],1),t._v("即可")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://wpimg.wallstcn.com/0726b472-90f4-4fe9-a665-26fb8f9795c3.gif",alt:""}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000009762198#articleHeader2",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多动态换肤文章"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);