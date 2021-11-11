(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{269:function(e,t,n){"use strict";n.r(t);var r=n(31),c=(n(78),n(22),n(268)),o=[{name:"EVMOS",symbol:"PHOTON",rpc:"http://arsiamons.rpc.evmos.org:8545",explorer:"https://evm.evmos.org/",eip1556:!1,tokens:[{name:"PHOTON",address:""}]},{name:"AURORA",symbol:"ETH",rpc:"https://testnet.aurora.dev",explorer:"https://explorer.testnet.aurora.dev/",eip1556:!1,tokens:[{name:"ETH",address:""}]},{name:"NEON",symbol:"NEON",rpc:"https://proxy.devnet.neonlabs.org/solana",explorer:"https://neon-labs.org/",eip1556:!1,tokens:[{name:"NEON",address:""}]},{name:"GOERLI",symbol:"ETH",rpc:"https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",explorer:"https://goerli.etherscan.io/",eip1556:!0,tokens:[{name:"ETH",address:""}]}],l=Object(c.a)({setup:function(){},data:function(){return{chains:o,selectedChain0:o[3],selectChainName0:o[3].name,selectChainToken0:o[3].tokens[0],selectChainTokenName0:o[3].tokens[0].name,account0:"0x0",balance0:"0.0",selectedChain1:o[0],selectChainName1:o[0].name,selectChainToken1:o[0].tokens[0],selectChainTokenName1:o[0].tokens[0].name,account1:"0x0",balance1:"0.0",loading:!1}},methods:{onSelectChain:function(slot,e){0===slot?(e.name===this.selectChainName1&&(this.selectedChain1=this.selectedChain0,this.selectChainName1=this.selectChainName0),this.selectedChain0=e,this.selectChainName0=e.name):1===slot&&(e.name===this.selectChainName0&&(this.selectedChain0=this.selectedChain1,this.selectChainName0=this.selectChainName1),this.selectedChain1=e,this.selectChainName1=e.name),this.account0="0x0",this.balance0="0.0",this.account1="0x0",this.balance1="0.0"},getAccount:function(slot){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ethereum){t.next=9;break}return e.loading=!0,t.next=4,ethereum.request({method:"eth_requestAccounts"});case 4:return n=t.sent,0===slot?e.account0=n[0]:1===slot&&(e.account1=n[0]),t.next=8,e.getBalance(slot);case 8:e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},getBalance:function(slot){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ethereum||!ethers){t.next=17;break}if(e.loading=!0,0!==slot||!ethers.ethers.utils.isAddress(e.account0)){t.next=10;break}return n=new ethers.ethers.providers.JsonRpcProvider(e.selectedChain0.rpc),t.next=6,n.getBalance(e.account0);case 6:r=t.sent,e.balance0=ethers.utils.formatEther(r),t.next=16;break;case 10:if(1!==slot||!ethers.ethers.utils.isAddress(e.account1)){t.next=16;break}return c=new ethers.ethers.providers.JsonRpcProvider(e.selectedChain1.rpc),t.next=14,c.getBalance(e.account1);case 14:o=t.sent,e.balance1=ethers.utils.formatEther(o);case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t)})))()}}}),d=n(73),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[n("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css",rel:"stylesheet"}}),e._v(" "),n("script",{attrs:{src:"https://cdn.ethers.io/lib/ethers-5.0.umd.min.js",type:"text/javascript"}}),e._v(" "),n("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[n("div",{staticClass:"mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[n("h2",{staticClass:"text-2xl leading-7 font-semibold"},[e._v("\n        Bridge\n      ")]),e._v(" "),n("div",{staticClass:"mt-4 pt-4"},[n("p",{staticClass:"text-gray-800"},[e._v("\n          From\n        ")]),e._v(" "),n("b-input-group",{staticClass:"my-2",scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-dropdown",{attrs:{text:e.selectChainName0,disabled:e.loading,variant:"success"}},e._l(e.chains,(function(t){return n("b-dropdown-item",{key:t.name,on:{click:function(n){return e.onSelectChain(0,t)}}},[e._v(e._s(t.name))])})),1)]},proxy:!0},{key:"append",fn:function(){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:e.loading},on:{click:function(){return e.getAccount(0)}}},[e._v("Get Account")])]},proxy:!0}])},[e._v(" "),n("b-form-input",{attrs:{readonly:""},model:{value:e.account0,callback:function(t){e.account0=t},expression:"account0"}})],1),e._v(" "),n("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-dropdown",{attrs:{text:e.selectChainTokenName0,disabled:e.loading,variant:"success"}},e._l(e.selectedChain0.tokens,(function(t){return n("b-dropdown-item",{key:t.name},[e._v(e._s(t.name))])})),1)]},proxy:!0},{key:"append",fn:function(){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:e.loading},on:{click:function(){return e.getBalance(0)}}},[e._v("Get Balance")])]},proxy:!0}])},[e._v(" "),n("b-form-input",{attrs:{disabled:e.loading,type:"number"},model:{value:e.balance0,callback:function(t){e.balance0=t},expression:"balance0"}})],1)],1),e._v(" "),n("div",{staticClass:"mt-4 pt-4 border-t border-dashed"},[n("p",{staticClass:"text-gray-800"},[e._v("\n          To\n        ")]),e._v(" "),n("b-input-group",{staticClass:"mb-2",scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-dropdown",{attrs:{text:e.selectChainName1,disabled:e.loading,variant:"success"}},e._l(e.chains,(function(t){return n("b-dropdown-item",{key:t.name,attrs:{disabled:e.loading},on:{click:function(n){return e.onSelectChain(1,t)}}},[e._v(e._s(t.name))])})),1)]},proxy:!0},{key:"append",fn:function(){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:e.loading},on:{click:function(){return e.getAccount(1)}}},[e._v("Get Account")])]},proxy:!0}])},[e._v(" "),n("b-form-input",{attrs:{disabled:e.loading},model:{value:e.account1,callback:function(t){e.account1=t},expression:"account1"}})],1),e._v(" "),n("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[n("b-dropdown",{attrs:{text:e.selectChainTokenName1,disabled:e.loading,variant:"success"}},e._l(e.selectedChain1.tokens,(function(t){return n("b-dropdown-item",{key:t.name},[e._v(e._s(t.name))])})),1)]},proxy:!0},{key:"append",fn:function(){return[n("b-button",{attrs:{size:"sm",variant:"outline-primary",disabled:e.loading},on:{click:function(){return e.getBalance(1)}}},[e._v("Get Balance")])]},proxy:!0}])},[e._v(" "),n("b-form-input",{attrs:{disabled:e.loading,type:"number"},model:{value:e.balance1,callback:function(t){e.balance1=t},expression:"balance1"}})],1)],1),e._v(" "),n("div",{staticClass:"mt-4 pt-4 border-t border-dashed"},[n("b-button",{attrs:{block:"",variant:"danger"}},[e._v("Transfer")])],1)])])])}),[],!1,null,null,null);t.default=component.exports},272:function(e,t,n){"use strict";n.r(t);var r=n(9).default.extend({}),c=n(73),component=Object(c.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("Bridge")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Bridge:n(269).default})}}]);