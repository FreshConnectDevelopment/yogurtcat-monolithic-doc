(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks"}},[t._v("#")]),t._v(" Git Hooks")]),t._v(" "),a("p",[t._v("具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("Lint")]),t._v(" 会有什么好处呢？在我看来至少具有如下 3 点：")]),t._v(" "),a("ul",[a("li",[t._v("更少的 Bug")]),t._v(" "),a("li",[t._v("更高的开发效率，Lint 很容易发现低级的、显而易见的错误")]),t._v(" "),a("li",[t._v("更高的可读性")])]),t._v(" "),a("p",[t._v("很多时候我们"),a("code",[t._v("lint")]),t._v("的校验是放在持续集成阶段，大概流程如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("代码提交 --\x3e 跑 CI 发现问题(远程) --\x3e 本地修复问题 --\x3e 重新提交 --\x3e 通过检查(远程)")])]),t._v(" "),a("p",[t._v("但这样有一个问题，我们的 "),a("code",[t._v("CI")]),t._v("(持续集成) 往往不是仅仅只做 "),a("code",[t._v("Lint")]),t._v("工作，它还有会有很多其它的任务（如打包文件，静态资源上传 CDN 等），这样就导致特别的浪费时间，往往可能需要几分钟之后你才会发现问题，或者有的时候你根本就没有发现你的 "),a("code",[t._v("CI")]),t._v(" 没有跑通过。")]),t._v(" "),a("p",[t._v("常见的流程：本地写好了代码，提交，开始跑 lint，发现不通过，本地修改代码，再提交，再等待 CI 的结果，若还有问题再重复之前的操作。")]),t._v(" "),a("h2",{attrs:{id:"husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[t._v("#")]),t._v(" husky")]),t._v(" "),a("p",[t._v("最有效的解决方案就是将 "),a("code",[t._v("Lint")]),t._v(" 校验放到本地，常见做法是使用 "),a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),a("OutboundLink")],1),t._v(" 或者 "),a("a",{attrs:{href:"https://github.com/observing/pre-commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("pre-commit"),a("OutboundLink")],1),t._v(" 在本地提交之前先做一次 "),a("code",[t._v("Lint")]),t._v("校验。")]),t._v(" "),a("blockquote",[a("p",[t._v("当然如果你创建项目的时候使用了 "),a("code",[t._v("vue-cli@3")]),t._v("，你也可以使用它内置的 "),a("a",{attrs:{href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"}},[t._v("yorkie"),a("OutboundLink")],1),t._v("，它是基于"),a("code",[t._v("husky")]),t._v("的，但稍微改了一下接口。不过这里我们还是选用 "),a("code",[t._v("husky")]),t._v("作为例子。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意：我们之后的例子都是1.3.1+ 版本！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky -D -S\n")])])]),a("p",[t._v("然后修改 "),a("code",[t._v("package.json")]),t._v("，增加配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --ext .js,.vue src"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("最后尝试 "),a("code",[t._v("Git")]),t._v(" 提交，你就会很快收到反馈：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit -m "Keep calm and commit"\n')])])]),a("p",[t._v("但这样会有一个问题，就是这次提交，我可能只修改了一个文件，比如我就修改了 "),a("code",[t._v("foo.js")]),t._v(" 的内容，但它依然会校验所有"),a("code",[t._v("src")]),t._v(" 下面的"),a("code",[t._v(".js")]),t._v("文件，非常的不友好。导致的问题就是：每次我提交我写的代码，还先要帮人的代码问题解决了才能顺利提交，而且当项目大了之后，检查速度也会变得越来约慢了。")]),t._v(" "),a("h2",{attrs:{id:"lint-staged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lint-staged"}},[t._v("#")]),t._v(" lint-staged")]),t._v(" "),a("p",[t._v("解决上面的痛点就需要使用 "),a("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),a("OutboundLink")],1),t._v(" 了。它只会校验检查你提交或者说你修改的部分内容。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lint-staged -D -S\n")])])]),a("p",[t._v("然后，修改 package.json 配置：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src/**/*.{js,vue}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上配置，每次它只会在你本地 "),a("code",[t._v("commit")]),t._v(" 之前，校验你提交的内容是否符合你本地配置的 "),a("code",[t._v("eslint")]),t._v("规则(这个见文档 "),a("RouterLink",{attrs:{to:"/front/guide/eslint.html"}},[t._v("ESLint")]),t._v(" )，如果符合规则，则会提交成功。如果不符合它会自动执行 "),a("code",[t._v("eslint --fix")]),t._v(" 尝试帮你自动修复，如果修复成功则会帮你把修复好的代码提交，如果失败，则会提示你错误，让你修好这个错误之后才能允许你提交代码。")],1),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("最佳的 "),a("code",[t._v("lint")]),t._v(" 规范流程就是推荐团队成员先在自己的编辑器中配置 "),a("code",[t._v("eslint")]),t._v("，在 webpack 中配置并开启 "),a("code",[t._v("eslint-loader")]),t._v(" 错误提示，这样平时写的时候编辑器就能帮你修正一些简单的格式错误，同时提醒你有哪些不符合 "),a("code",[t._v("lint")]),t._v(" 规范的的地方，并在命令行中提示你错误。这方面详细的内容见 "),a("RouterLink",{attrs:{to:"/front/guide/eslint.html"}},[t._v("ESLint")]),t._v("。")],1),t._v(" "),a("p",[t._v("但这并不是强制的，有些团队成员或者说刚来的实习生没有在编辑器中配置或者无视命令行中提示的错误，这时候就需要配置"),a("code",[t._v("pre-commit")]),t._v(" 这种强制性校验的东西，保证所有提交到远程仓库的内容都是符合团队规范的。")])])}),[],!1,null,null,null);s.default=n.exports}}]);