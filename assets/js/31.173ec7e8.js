(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{218:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"admonition note"},[s("p",{staticClass:"admonition-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("View on stackoverflow: "),s("a",{attrs:{href:"https://stackoverflow.com/questions/16056135/how-to-use-openssl-to-encrypt-decrypt-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link"),s("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"openssl-encrypt-decrypt-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openssl-encrypt-decrypt-files","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenSSL encrypt/decrypt files.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_1-to-encrypt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-to-encrypt","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. To encrypt")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("openssl enc -aes-256-cbc -in un_encrypted.data -out encrypted.data\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_2-to-decrypt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-to-decrypt","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. To decrypt")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("//with password prompt\nopenssl enc -d -aes-256-cbc -in encrypted.data -out un_encrypted.data\n\n//without password prompt\nopenssl enc -d -aes-256-cbc -in encrypted.data -out un_encrypted.data -k "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("MyPassword"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\ne.g. openssl enc -d -aes-256-cbc -in encrypted.data -out un_encrypted.data -k 123456789\n")])])])}],!1,null,null,null);e.default=n.exports}}]);