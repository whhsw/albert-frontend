(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1240:function(e,t){},1241:function(e,t){},1244:function(e,t){},1245:function(e,t){},1248:function(e,t){},1249:function(e,t){},1252:function(e,t){},1253:function(e,t){},1260:function(e,t){},1261:function(e,t){},1263:function(e,t){},1265:function(e,t){},1266:function(e,t){},1269:function(e,t){},1270:function(e,t){},1272:function(e,t){},1277:function(e,t){},1279:function(e,t){},1280:function(e,t){},1282:function(e,t){},1284:function(e,t){},1285:function(e,t){},1685:function(e,t,n){"use strict";n.r(t);var o=n(25),r=(n(107),n(138),n(1200)),c=n.n(r),M={props:{userMessage:{type:String,default:"null"}},data:function(){return{web3:null,MetaMaskId:"1",netID:"1",MetaMaskAddress:"",Web3Interval:null,AccountInterval:null,NetworkInterval:null,stateLog:null,isComplete:!1,type:"INIT",MetamaskMsg:{LOAD_MATAMASK_WALLET_ERROR:"Loading metamask error, please try later",EMPTY_METAMASK_ACCOUNT:"Please log in to your metamask to continue with this app.",NETWORK_ERROR:"The connection is abnormal, please try again",METAMASK_NOT_INSTALL:"Please install metamask for this application",METAMASK_TEST_NET:"Currently not in the main network.",METAMASK_MAIN_NET:"Currently Main network",USER_DENIED_ACCOUNT_AUTHORIZATION:"User denied account authorization"}}},methods:{checkWeb3:function(){void 0===window.web3&&(this.web3=null,this.Log(this.MetamaskMsg.METAMASK_NOT_INSTALL,"NO_INSTALL_METAMASK"))},checkAccounts:function(){var e=this;null!==this.web3&&this.web3.eth.getAccounts((function(t,n){return console.log(),null!=t?e.Log(e.MetamaskMsg.NETWORK_ERROR,"NETWORK_ERROR"):0===n.length?(e.MetaMaskAddress="",void e.Log(e.MetamaskMsg.EMPTY_METAMASK_ACCOUNT,"NO_LOGIN")):void(e.MetaMaskAddress=n[0])}))},checkNetWork:function(){var e=this;this.web3.version.getNetwork((function(t,n){return null!=t?e.Log(e.MetamaskMsg.NETWORK_ERROR,"NETWORK_ERROR"):(e.netID=n,""!==e.MetaMaskAddress&&"1"===n?e.Log(e.MetamaskMsg.METAMASK_TEST_NET,"MAINNET"):""!==e.MetaMaskAddress&&"3"===n?e.Log(e.MetamaskMsg.METAMASK_TEST_NET,"ROPSTEN"):""!==e.MetaMaskAddress&&"42"===n?e.Log(e.MetamaskMsg.METAMASK_TEST_NET,"LOVAN"):""!==e.MetaMaskAddress&&"4"===n?e.Log(e.MetamaskMsg.METAMASK_TEST_NET,"RINKEBY"):void(""!==e.MetaMaskAddress&&e.Log(e.MetamaskMsg.METAMASK_MAIN_NET,"MAINNET")))}))},Log:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t;if(n!==this.type){var o="null"===this.userMessage?e:this.userMessage;this.type=t,this.$emit("onComplete",{web3:this.web3,type:t,metaMaskAddress:this.MetaMaskAddress,message:o,netID:this.netID})}},web3TimerCheck:function(e){var t=this;this.web3=e,this.checkAccounts(),this.checkNetWork(),this.Web3Interval=setInterval((function(){return t.checkWeb3()}),1e3),this.AccountInterval=setInterval((function(){return t.checkAccounts()}),1e3),this.NetworkInterval=setInterval((function(){return t.checkNetWork()}),1e3)}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("aaaaa"),!window.ethereum){t.next=15;break}return n=window.ethereum,window.web3=new c.a(n),t.prev=4,t.next=7,n.enable();case 7:e.web3TimerCheck(window.web3),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),e.Log(e.MetamaskMsg.USER_DENIED_ACCOUNT_AUTHORIZATION,"USER_DENIED_ACCOUNT_AUTHORIZATION");case 13:t.next=16;break;case 15:window.web3?(window.web3=new c.a(window.web3.currentProvider),e.web3TimerCheck(window.web3)):(e.web3=null,e.Log(e.MetamaskMsg.METAMASK_NOT_INSTALL,"NO_INSTALL_METAMASK"),console.error("Non-Ethereum browser detected. You should consider trying MetaMask!"));case 16:case"end":return t.stop()}}),t,null,[[4,10]])})))()}},l=M,A=n(81),component=Object(A.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"metamask-info"},[n("button",{on:{click:e.connectWalletPressed}},[e._v(e._s(e.walletMsg))]),e._v("\n  Status: "+e._s(e.status)+"\n\n  "),e.isInjected?n("p",{attrs:{id:"has-metamask"}},[n("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),e._v(" Metamask installed")]):n("p",{attrs:{id:"no-metamask"}},[n("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v(" Metamask not found")]),e._v(" "),n("p",[e._v("Network: "+e._s(e.network))]),e._v(" "),n("p",[e._v("Account: "+e._s(e.coinbase))]),e._v(" "),n("p",[e._v("Balance: "+e._s(e.balance)+" Wei // "+e._s(e.ethBalance)+" Eth")]),e._v("\n  type: "+e._s(e.type)+",\n  MetaMaskAddress: "+e._s(e.MetaMaskAddress)+"\n\n")])}),[],!1,null,null,null);t.default=component.exports}}]);