if (self.CavalryLogger) { CavalryLogger.start_js(["tUSaX"]); }

__d("ChatSidebarActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AFTER_DOM_LOAD:null,INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null})}),null);
__d("ChatSidebarPresencePrivacyActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PRIVACY_CHANGED:null,USER_PRESENCE_CHANGED:null});e.exports=a}),null);
__d("ChatSidebarRecentCallsActions",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({RECENT_CALLS_UPDATED:null});e.exports=a}),null);
__d("SidebarType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"})}),null);
__d("ChatSidebarActions",["ChatDispatcher","ChatSidebarActionTypes","ChatSidebarPresencePrivacyActions","ChatSidebarRecentCallsActions","SidebarType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").INIT})},afterDomLoad:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").AFTER_DOM_LOAD})},loaded:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").LOADED})},disable:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!1,sidebarType:b("SidebarType").BUDDYLIST})},enable:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SET_ENABLED,enabled:!0,sidebarType:a})},show:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarActionTypes").SHOW,sidebarType:a})},userPresenceChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED})},privacyChanged:function(){b("ChatDispatcher").dispatch({type:b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED})},recentCallsUpdated:function(a){b("ChatDispatcher").dispatch({type:b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,calls:a})}};e.exports=a}),null);
__d("ChatSidebarDropdownConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SOUND:"sound",ADVANCED_SETTINGS:"advanced_settings",BLOCK_SETTINGS:"block_settings",TURN_OFF_DIALOG:"turn_off_dialog",CLOSE_ALL_TABS:"close_all_tabs",LOWER_ALL_TABS:"lower_all_tabs",TOGGLE_DISCOVER_BOTS:"toggle_discover_bots",SIDEBAR:"sidebar",HIDE_GROUPS:"hide_groups",ONLINE:"online",VIDEOCALL_ON:"videoon",VIDEOCALL_OFF:"videooff",PAUSE:"pause",SHOW_APPS:"show_apps",HIDE_APPS:"hide_apps",HIDE_MARKETPLACE:"hide_marketplace",SHOW_TICKER:"show_ticker",HIDE_TICKER:"hide_ticker",HIDE_ADMINED_PAGES:"hide_admined_pages",HIDE_BUSINESSES:"hide_businesses",EMOJI_SETTINGS:"emoji_settings",TURN_OFF_CHAT_TABS:"turn_off_chat_tabs"});e.exports=a}),null);
__d("FBRTCDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Dispatcher_DEPRECATED"))()}),null);
__d("FBRTCStore",["FBRTCDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("FBRTCDispatcher"))}a.prototype.__emitChange=function(){this.__emitter.emit(this.__changeEvent)};a.__moduleID=e.id;e.exports=a}),null);
__d("FBRTCCallBlockingStore",["Arbiter","AsyncRequest","ChannelConstants","FBRTCDispatcher","FBRTCStore","clearTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=!1,i=0,j=null,k="call_block_setting_changed";g=babelHelpers.inherits(a,b("FBRTCStore"));g&&g.prototype;a.prototype.init=function(a){this.$FBRTCCallBlockingStore1(a),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"),this.$FBRTCCallBlockingStore2.bind(this))};a.prototype.__onDispatch=function(a){if(a.type!==k)return;this.$FBRTCCallBlockingStore1(a.data)};a.prototype.$FBRTCCallBlockingStore1=function(a){switch(a){case 0:h=!1;this.$FBRTCCallBlockingStore3();break;case-1:h=!0;this.$FBRTCCallBlockingStore3();break;default:h=!0,this.$FBRTCCallBlockingStore4(a)}this.__emitChange()};a.prototype.$FBRTCCallBlockingStore4=function(a){j===null&&(j=b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this),a*1e3))};a.prototype.getBlockingStatus=function(){return h};a.prototype.turnOnVideoCalling=function(){new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send()};a.prototype.turnOffVideoCalling=function(a){i=a,new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:a}).send()};a.prototype.$FBRTCCallBlockingStore3=function(){j&&(b("clearTimeout")(j),j=null)};a.prototype.$FBRTCCallBlockingStore5=function(){b("FBRTCDispatcher").dispatch({type:k,data:0})};a.prototype.$FBRTCCallBlockingStore6=function(){b("FBRTCDispatcher").dispatch({type:k,data:i})};a.prototype.$FBRTCCallBlockingStore2=function(a,c){b("FBRTCDispatcher").dispatch({type:k,data:c.obj.value})};function a(){g.apply(this,arguments)}e.exports=new a()}),null);
__d("ChatOptions",["Arbiter","ArbiterMixin","Bootloader","ChannelConstants","ChatSidebarActions","ChatSidebarDropdownConstants","FBRTCCallBlockingStore","JSLogger","PresenceUtil","SidebarType","mixin","ChatOptionsInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("JSLogger").create("chat_options"),i={};(function(){__p&&__p();var a=b("ChatOptionsInitialData");for(var c in a){var d=a[c];switch(c){case"call_blocked_until":b("FBRTCCallBlockingStore").init(d);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:d!==-1&&(i[c]=!!d);break;default:i[c]=!!d}}})();g=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g&&g.prototype;a.prototype.getSetting=function(a){"use strict";return i[a]};a.prototype.setSetting=function(a,c,d){"use strict";__p&&__p();if(a==="sidebar_mode"){b("Bootloader").loadModules(["ChatSidebarVisibility"],function(a){return a.shouldShowSidebarIgnoreEnabled(null,function(a,d){c?b("ChatSidebarActions").enable(a?b("SidebarType").SIDEBAR:b("SidebarType").BUDDYLIST):b("ChatSidebarActions").disable()})},"ChatOptions");return}if(this.getSetting(a)==c)return;d&&(d="from_"+d,h.log(d,{name:a,new_value:c,old_value:this.getSetting(a)}));i[a]=!!c;b("Arbiter").inform("chat/option-changed",{name:a,value:c})};function a(){"use strict";g.apply(this,arguments)}b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"),function(a,c){a=c.obj;if(a.window_id===b("PresenceUtil").getSessionID())return;j.setSetting(a.setting,!!a.value,"channel")});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_options=i});var j=new a();e.exports=j}),null);
__d("ChatPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatPerfLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDuration=function(a){this.$1.duration=a;return this};a.prototype.setEndpoint=function(a){this.$1.endpoint=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setTabsOpen=function(a){this.$1.tabs_open=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={duration:!0,endpoint:!0,event:!0,tabs_open:!0,time:!0,weight:!0};e.exports=a}),null);
__d("ChatPerfInstrumentation",["Promise","BaseEventEmitter","ChatPerfEvent","ChatPerfTypedLogger","FantaConst","PresenceState","WorkModeConfig","emptyFunction","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("WorkModeConfig").is_work_user;c=a?b("FantaConst").cookieIDs.WORK_COOKIE_ID:b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID;d=b("PresenceState").getInitial();var g=d&&d[c]?d[c].length:0,h;f={_startTime:Number,_sidebarStartTime:Number,init:function(){this._startTime=b("performanceAbsoluteNow")();return new(b("Promise"))(function(a){return a()})},initDivebar:function(){this._sidebarStartTime=b("performanceAbsoluteNow")()},_log:function(event,a){a=b("performanceAbsoluteNow")()-(a||this._startTime);h&&h.emit(event,a);var c=new(b("ChatPerfTypedLogger"))();c.setEvent(event).setDuration(a);c.setTabsOpen(g);c.log()},addPerfTimingsListener:function(event,a){h||(h=new(b("BaseEventEmitter"))());return h.once(event,a)},logInitStores:function(){this.logInitStores=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_STORES)},logInitData:function(){this.logInitData=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_DATA)},logInitUI:function(){this.logInitUI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_UI)},logInitSound:function(){this.logInitSound=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_INIT_SOUND)},logDisplayDone:function(){this.logDisplayDone=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_DISPLAY_DONE)},logTTI:function(){this.logTTI=b("emptyFunction"),this._log(b("ChatPerfEvent").TTI)},logCHAT_CONVERSATION_TTI:function(){this.logCHAT_CONVERSATION_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").CHAT_CONVERSATION_TTI)},logSIDEBAR_FROM_CLIENT_TTI:function(){this.logSIDEBAR_FROM_CLIENT_TTI=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime)},logSIDEBAR_DISPLAY_DONE:function(){this.logSIDEBAR_DISPLAY_DONE=b("emptyFunction"),this._log(b("ChatPerfEvent").SIDEBAR_DISPLAY_DONE,this._sidebarStartTime)}};e.exports=f}),null);