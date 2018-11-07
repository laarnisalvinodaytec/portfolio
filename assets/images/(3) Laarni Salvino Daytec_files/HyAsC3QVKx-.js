if (self.CavalryLogger) { CavalryLogger.start_js(["tp+hm"]); }

__d("BlueBarFocusListener",["CSS","Deferred","Event","TimeSlice","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g="f_key",h="f_click",i=null,j=function(){i=null};function k(a){b("CSS").removeClass(a,g),b("CSS").removeClass(a,h)}var l=b("TimeSlice").guard(function(a){i&&i.reject(),i=new(b("Deferred"))(),b("promiseDone")(i.getPromise().then(function(c){k(a),b("CSS").addClass(a,c)}),j,j)},"BlueBarFocusListener focusIn",{propagationType:b("TimeSlice").PropagationType.ORPHAN});function m(){i&&i.resolve(g)}function n(a){i&&i.reject(),b("CSS").removeClass(a,g),b("CSS").addClass(a,h)}function o(a){return function(event){a(event.getTarget())}}a={listen:function(a){if(!a)return;b("Event").listen(a,"focusout",o(k));b("Event").listen(a,"focusin",o(l));b("Event").listen(a,"click",o(n));b("Event").listen(a,"keyup",m)}};e.exports=a}),null);
__d("NotificationComponentsBootloader",["Promise","JSResource"],(function(a,b,c,d,e,f){"use strict";var g=[b("JSResource")("NotificationJewelList.react").__setRef("NotificationComponentsBootloader"),b("JSResource")("NotificationAsyncWrapper").__setRef("NotificationComponentsBootloader"),b("JSResource")("NotificationSeenState").__setRef("NotificationComponentsBootloader"),b("JSResource")("NotificationStore").__setRef("NotificationComponentsBootloader"),b("JSResource")("NotificationUpdates").__setRef("NotificationComponentsBootloader"),b("JSResource")("NotificationJewelController").__setRef("NotificationComponentsBootloader")];function a(a){var c=a===!0?[b("JSResource")("BizNotificationJewelBodyContainer.react").__setRef("NotificationComponentsBootloader")]:[b("JSResource")("NotificationList.react").__setRef("NotificationComponentsBootloader")];return new(b("Promise"))(function(a){b("JSResource").loadAll(c.concat(g),function(b,c,d){a([b,c,d])})})}e.exports={load:a}}),null);
__d("BanzaiLooper",["Banzai"],(function(a,b,c,d,e,f){var g={retry:!0};function h(a,c){b("Banzai").post("banzai_looper:"+a,c,g)}a={labelBinaryClassificationExample:function(a){h("binary_classification_example",babelHelpers["extends"]({operation:"label"},a))}};e.exports=a}),null);
__d("NotificationJewelPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NotificationJewelPerformanceLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setBadgeCurrentCount=function(a){this.$1.badge_current_count=a;return this};a.prototype.setBadgeInitialCount=function(a){this.$1.badge_initial_count=a;return this};a.prototype.setClientSessionID=function(a){this.$1.client_session_id=a;return this};a.prototype.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};a.prototype.setEagerLoadTriggerAndDelay=function(a){this.$1.eager_load_trigger_and_delay=a;return this};a.prototype.setEventName=function(a){this.$1.event_name=a;return this};a.prototype.setJewelName=function(a){this.$1.jewel_name=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={badge_current_count:!0,badge_initial_count:!0,client_session_id:!0,client_timestamp:!0,eager_load_trigger_and_delay:!0,event_name:!0,jewel_name:!0,vc:!0};e.exports=a}),null);
__d("JewelLogger",["BanzaiLooper","FeedQuickLogModule","NotificationJewelPerformanceTypedLogger","NotificationListConfig","QuickPerformanceLogger","gkx","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("BanzaiLooper").labelBinaryClassificationExample,i=b("NotificationListConfig").sessionID,j=b("gkx")("678513"),k=!1;a=babelHelpers.inherits(l,b("NotificationJewelPerformanceTypedLogger"));g=a&&a.prototype;function l(a){g.constructor.call(this),l.$JewelTypedLoggerWithSession1[a]||(l.$JewelTypedLoggerWithSession1[a]={}),this.$JewelTypedLoggerWithSession2=a}l.prototype.setEventName=function(a){this.$JewelTypedLoggerWithSession3=a;return g.setEventName.call(this,a)};l.prototype.log=function(){l.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]||(l.$JewelTypedLoggerWithSession1[this.$JewelTypedLoggerWithSession2][this.$JewelTypedLoggerWithSession3]=!0,this.setClientSessionID(i),this.setJewelName(this.$JewelTypedLoggerWithSession2),g.log.call(this))};l.$JewelTypedLoggerWithSession1={};function m(a){a.jewelName==="notifications"&&a.eventName==="list_populated"&&q(a.timestamp),new l(a.jewelName).setEventName(a.eventName).setClientTimestamp(a.timestamp).log()}function n(a){var b=a.trigger,c=a.eagerLoadDelayInMs,d=babelHelpers.objectWithoutProperties(a,["trigger","eagerLoadDelayInMs"]);b=b+":"+c;new l(a.jewelName).setEventName(d.eventName).setClientTimestamp(d.timestamp).setEagerLoadTriggerAndDelay(b).log()}function o(a){j&&!k&&(b("QuickPerformanceLogger").markerStart(b("FeedQuickLogModule").NOTIFICATION_INTERACTION_WWW,0,a),k=!0)}function p(a){j&&k&&b("QuickPerformanceLogger").annotateMarkerIntArray(b("FeedQuickLogModule").NOTIFICATION_INTERACTION_WWW,"JEWEL_CLICK_COUNT",[a])}function q(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").NOTIFICATION_INTERACTION_WWW,"SUCCESS",0,a),k=!1)}function r(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").NOTIFICATION_INTERACTION_WWW,"CANCEL",0,a),k=!1)}function s(a){j&&k&&(b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").NOTIFICATION_INTERACTION_WWW,"FAIL",0,a),k=!1)}c={logDataEagerLoad:function(a){a.eventName==="data_eager_load_trigger"?n(a):m(a)},logJsBootload:function(a){a.eventName==="js_bootload_trigger"?n(a):m(a)},logJewelCancel:function(){r(b("performanceNow")())},logJewelFail:function(){s(b("performanceNow")())},logJewelClick:function(a){a.jewelName==="notifications"&&(b("gkx")("678282")||a.clickCount===1)&&(o(a.timestamp),p(a.clickCount)),a.clickCount===1&&(new l(a.jewelName).setEventName("first_jewel_click").setClientTimestamp(a.timestamp).setBadgeInitialCount(a.badgeInitialCount).setBadgeCurrentCount(a.badgeCurrentCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"positive"}))},logJewelInitialize:function(a){new l(a.jewelName).setEventName("jewel_initialize").setBadgeInitialCount(a.badgeInitialCount).log(),a.jewelName==="notifications"&&h({trace:i,loopName:"notifications_jewel_click",label:"tentatively_negative"})},logJewelListComponentEvent:m};e.exports=c}),null);
__d("NotificationEndpointState",["BusinessUserConf","KeyedCallbackManager","RangedCallbackManager","flatMapArray","objectValues","stableStringify"],(function(a,b,c,d,e,f){__p&&__p();var g={AdsUnifiedNavNotificationsPayloadPagelet:"AdsUnifiedNavNotificationsPayloadPagelet",BusinessManagerNotificationsPayloadPagelet:"BusinessManagerNotificationsPayloadPagelet",WebNotificationsPayloadPagelet:"WebNotificationsPayloadPagelet","/notifications/client/ads_unified_nav/":"AdsUnifiedNavNotificationsPayloadPagelet","/notifications/client/business_manager/":"BusinessManagerNotificationsPayloadPagelet","/ajax/notifications/client/get.php":b("BusinessUserConf").businessUserID?"BusinessManagerNotificationsPayloadPagelet":"WebNotificationsPayloadPagelet"};h.getInstance=function(a){"use strict";var b=a.classification!=null?a.classification:"_",c=a.readness!=null?a.readness:"_";b="(c)"+b+"(s)"+c;c=h.$1[a.endpointControllerName];c==null&&(h.$1[a.endpointControllerName]=c={});c[b]==null&&(c[b]=new h(a));return c[b]};h.getAllInstances=function(a){"use strict";a!=null?a=[a]:a=Object.keys(h.$1);return b("flatMapArray")(a,function(a){a=h.$1[a];if(a==null)return[];else return b("objectValues")(a)})};function h(a){__p&&__p();var c=a.businessUserID,d=a.classification,e=a.endpointControllerName;a=a.readness;this.notifications=new(b("KeyedCallbackManager"))();this.businessUserID=c!=null?c:b("BusinessUserConf").businessUserID;this.classification=d;this.endpointControllerName=e;this.readness=a;c=function(a){a=this.notifications.getResource(a);return a.creation_time};this.order=new(b("RangedCallbackManager"))(c.bind(this),function(a,b){return b-a});this.graphQLPageInfo=null}h.prototype.getConfig=function(){"use strict";return{businessUserID:this.businessUserID,classification:this.classification,endpointControllerName:this.endpointControllerName,readness:this.readness}};h.prototype.getHash=function(){"use strict";return b("stableStringify")(this.getConfig())};h.prototype.getRequestParams=function(a){"use strict";a=Math.max(0,a-this.order.getAllResources().length);return{businessUserID:this.businessUserID,classification:this.classification!=null?this.classification.toLowerCase():undefined,cursor:this.graphQLPageInfo&&this.graphQLPageInfo.end_cursor,filter:this.readness==null?undefined:this.readness==="SEEN_AND_READ"?"read":"unread",readness:this.readness,length:a}};h.prototype.getStreamingTransportPageletName=function(){"use strict";return g[this.endpointControllerName]||this.endpointControllerName};h.$1={};e.exports=h}),null);
__d("NotificationEagerLoader",["invariant","Promise","Arbiter","AsyncRequest","BigPipe","JewelLogger","NotificationComponentsBootloader","NotificationDataFetchConfig","NotificationEndpointState","NotificationListConfig","once","performanceAbsoluteNow","performanceNowNoFallback"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("JewelLogger").logDataEagerLoad,i=b("JewelLogger").logJsBootload,j=b("NotificationDataFetchConfig").dataEagerFetchTrigger,k=b("NotificationListConfig").jsBootloadTrigger,l=b("NotificationListConfig").numNotificationsPerPage;l=j!=="none"?l:0;var m={hasData:l>0,targetNumToLoad:l,endpointState:a(),payloadPromise:null};function a(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"};return b("NotificationEndpointState").getInstance(a)}function c(a){if(!b("performanceNowNoFallback"))return b("NotificationComponentsBootloader").load().then(function(){});else{i({jewelName:"notifications",eventName:"js_bootload_trigger",trigger:k,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0});i({jewelName:"notifications",eventName:"js_bootload_start",timestamp:b("performanceNowNoFallback")()});return b("NotificationComponentsBootloader").load().then(function(){i({jewelName:"notifications",eventName:"js_bootload_end",timestamp:b("performanceNowNoFallback")()})})}}function d(a){__p&&__p();b("performanceNowNoFallback")&&(h({jewelName:"notifications",eventName:"data_eager_load_trigger",trigger:j,timestamp:b("performanceNowNoFallback")()-a,eagerLoadDelayInMs:0}),h({jewelName:"notifications",eventName:"data_eager_load_start",timestamp:b("performanceNowNoFallback")()}));a=m.targetNumToLoad;var c=m.endpointState;a=c.getRequestParams(a);var d;switch(c.endpointControllerName){case"WebNotificationsPayloadPagelet":d="/ajax/notifications/client/get.php";break;case"AdsUnifiedNavNotificationsPayloadPagelet":d="/notifications/client/ads_unified_nav/";break;case"BusinessManagerNotificationsPayloadPagelet":d="/notifications/client/business_manager/";break}d!=null||g(0,5504,c.endpointControllerName);c=new(b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).setData(a);a=c.exec().then(function(a){b("performanceNowNoFallback")&&h({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:b("performanceNowNoFallback")()});return a.getPayload()});m.hasData||g(0,5505);return a}function f(a){__p&&__p();return new(b("Promise"))(function(c,d){__p&&__p();b("Arbiter").subscribeOnce(b("BigPipe").Events.init,b("once")(function(e,f){__p&&__p();e=f.arbiter;if(!e){d("No arbiter from BigPipe init event");return}e.subscribeOnce(b("BigPipe").Events.displayed,b("once")(function(e,f){e=f.ts;f=b("performanceAbsoluteNow")()-e;a(f).then(function(a){return c(a)})["catch"](function(a){return d(a)})}))}))})}k==="bigpipe_display_done"&&f(c);j==="bigpipe_display_done"&&(m.payloadPromise=f(d));e.exports={eagerlyLoadedData:m}}),null);
__d("NotificationJewelHeaderController",["DOM","Event","NotificationSeenState","NotificationUpdates","NotificationUserActions"],(function(a,b,c,d,e,f){function a(a,c,d){"use strict";b("Event").listen(a,"click",function(){b("NotificationUserActions").markAllNotificationsAsRead(d)}),b("NotificationUpdates").subscribe("read-state-updated",function(){c&&b("DOM").setContent(c,b("NotificationSeenState").getUnreadCount())})}e.exports=a}),null);
__d("NotificationJewelListController",["AdsInterfacesNavTools","FBAMetaMegaMenuLogger","NotificationComponentsBootloader","NotificationListConfig","React","ReactDOM","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationListConfig").numNotificationsPerPage,h=null,i=null,j=null;function a(a,b){"use strict";this.$1=!1,this.$2=!1,this.$3=!1,this.$4=a,this.$5=b}a.prototype.open=function(){"use strict";this.$1=!0,this.$6()};a.prototype.pause=function(){"use strict";this.$2=!0,this.$5.pageType===b("AdsInterfacesNavTools").ANALYTICS&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2),this.$6()};a.prototype.unpause=function(){"use strict";this.$2=!1,this.$5.pageType===b("AdsInterfacesNavTools").ANALYTICS&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationBellToggle(this.$2),this.$6()};a.prototype.setFlyoutOpenState=function(a){"use strict";this.$3=a,this.$6()};a.prototype.$6=function(){"use strict";!h||!i?b("promiseDone")(b("NotificationComponentsBootloader").load(this.$5.isBizsite),function(a){var b=a[0],c=a[1];a=a[2];h=b;i=c;j=a;this.$7()}.bind(this)):this.$7()};a.prototype.$7=function(){"use strict";if(!h||!i||!j)return;b("ReactDOM").render(b("React").createElement(j,null,b("React").createElement(h,{hasEverBeenOpened:this.$1,paused:this.$2,hasBizNotifsM2:this.$5.hasBizNotifsM2,isFlyoutOpened:this.$3,tracking:this.$5.tracking,shortenTimestamp:this.$5.shortenTimestamp,businessID:this.$5.businessID,defaultTab:this.$5.defaultTab,maxHeight:this.$5.maxHeight,useChevron:this.$5.useChevron,chevronType:this.$5.chevronType,numPerPage:g,listRenderer:i,upsell:this.$5.upsell||null,endpoint:this.$5.endpoint,sourceView:this.$5.sourceView,settingsUri:this.$5.settingsUri,onClick:function(a){this.$5.pageType===b("AdsInterfacesNavTools").ANALYTICS&&b("FBAMetaMegaMenuLogger").logMegaMenuNotificationClick(a)}.bind(this)})),this.$4)};e.exports=a}),null);
__d("JewelBadgeCountRecorder",["invariant","Arbiter","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=Object.create(null);a={onCountUpdated:function(a,c){h[c.jewel]==null&&(h[c.jewel]=[]);a=h[c.jewel];a.push({timestamp:b("performanceNow")(),count:c.count});a.length>1e3&&a.shift()},getCountAtTimestamp:function(a,b){var c=h[a];c!=null||g(0,2483,a,JSON.stringify(h));c.length>0||g(0,2484,a);a=c.find(function(a,d){var e=c[d+1];return d===0&&b<a.timestamp||b>a.timestamp&&(e==null||b<e.timestamp)});a||g(0,2485);return a.count}};b("Arbiter").subscribe("jewel/count-updated",a.onCountUpdated);e.exports=a}),null);
__d("CrossWindowEventEmitter",["CacheStorage","EventEmitter","FBJSON"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(a){g.constructor.call(this),this.$CrossWindowEventEmitter2=a,this.$CrossWindowEventEmitter1=new(b("CacheStorage"))("localstorage",a+":"),this.$CrossWindowEventEmitter1.addValueChangeCallback(function(a,c,d){var event=a.split(":")[1];try{c=b("FBJSON").parse(d)}catch(a){c=undefined}if(c&&c.__v){(a=g.emit).call.apply(a,[this,event].concat(c.__v))}}.bind(this))}a.prototype.emit=function(a){var b;for(var c=arguments.length,d=new Array(c>1?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];this.emitRemote.apply(this,[a].concat(d));(b=g.emit).call.apply(b,[this,a].concat(d))};a.prototype.emitRemote=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$CrossWindowEventEmitter1.set(a,c)};e.exports=a}),null);
__d("FriendingSurfaceVisitationTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FriendingSurfaceVisitationLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppVersion=function(a){this.$1.app_version=a;return this};a.prototype.setBadgeCount=function(a){this.$1.badge_count=a;return this};a.prototype.setClientTimestamp=function(a){this.$1.client_timestamp=a;return this};a.prototype.setRawRefTab=function(a){this.$1.raw_ref_tab=a;return this};a.prototype.setRawTab=function(a){this.$1.raw_tab=a;return this};a.prototype.setRefPage=function(a){this.$1.ref_page=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTargetProfileID=function(a){this.$1.target_profile_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={app_version:!0,badge_count:!0,client_timestamp:!0,raw_ref_tab:!0,raw_tab:!0,ref_page:!0,surface:!0,target_profile_id:!0,vc:!0};e.exports=a}),null);
__d("JewelCountSideLoader",["invariant","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();var h={},i={},j={};a={queueInstances:function(a,b,c){h[a]={badge:b,root:c}},updateCountAndQueueArgs:function(a,c,d){__p&&__p();var e=i[a];if(e){e.updateCountAndArgs(d,c);return}e=h[a];e||g(0,1889);j[a]={count:c,args:d};b("CSS").conditionClass(e.root,"hasNew",!!c);e.badge.setLegacyContent(c);return},getOverwritesForJewel:function(a){if(j[a.name])return j[a.name];i[a.name]=a;return null}};e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("normalizedEventTimestamp",["performance"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(a!=null)if(b("performance")&&b("performance").timing&&b("performance").timing.navigationStart&&a>b("performance").timing.navigationStart)return a-=b("performance").timing.navigationStart;else return a;else if(b("performance").now)return b("performance").now();return null}e.exports=a}),null);
__d("reportData",["Banzai","SessionName","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g={retry:!0};function a(a,c){c===void 0&&(c={});c={ft:c.ft||{},gt:c.gt||{}};var d="-",e="r",f=b("ifRequired")("URI",function(a){return a.getRequestURI(!0,!0).getUnqualifiedURI().toString()},function(){return location.pathname+location.search+location.hash});a=[b("SessionName").getName(),Date.now(),"act",Date.now(),0,d,a,d,d,e,f,c,0,0,0,0];b("Banzai").post("eagle_eye_event",a,g)}e.exports=a}),null);
__d("JewelBase",["csx","invariant","Promise","Arbiter","ArbiterMixin","CrossWindowEventEmitter","CSS","DOM","Event","FriendingSurfaceVisitationTypedLogger","FunnelLogger","HTML","JewelBadgeCountRecorder","JewelCountSideLoader","JewelLogger","Keys","NotificationJewelFunnelLoggingConstants","Run","TabIsolation","TimeSlice","Toggler","TooltipData","firstClickTimestamp","killswitch","mixin","normalizedEventTimestamp","performanceNow","promiseDone","reportData"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j=b("JewelLogger").logJewelCancel,k=b("JewelLogger").logJewelClick,l=b("JewelLogger").logJewelInitialize,m=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,n=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,o=new(b("CrossWindowEventEmitter"))("JewelBase"),p={};c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));i=c&&c.prototype;function a(a,c){"use strict";__p&&__p();i.constructor.call(this);this.name=c.name;this.label=c.label;this.clickCount=0;this.root=a;this.badge=c.badge;this.countNew=0;this.initialCount=c.count||0;this.escHandler=null;this.bootload_module=c.bootload_module;this.bootload_args=c.bootload_args;this.bootload_eager_modules=c.bootload_eager_modules;this.bootload_conf=c.bootload_conf;this.bootloading=null;this.togglerInstance=b("Toggler").getInstance(a).setSticky(!1);this.businessID=c.businessID;this.loggerRef=c.loggerRef;l({jewelName:this.name,badgeInitialCount:this.initialCount});b("JewelBadgeCountRecorder").onCountUpdated("jewel/initial-count",{jewel:this.name,count:this.initialCount});this.bootload_conf&&this.bootload_conf.eagerLoadingOnInteraction?this.$JewelBase3():b("Run").onAfterLoad(function(){return this.$JewelBase4()}.bind(this));this.bootload_conf&&this.bootload_conf.eagerLoadingOnInteraction&&this.$JewelBase5();c.keepOpenForSnowlift&&this.togglerInstance.setPrePageTransitionCallback(this.$JewelBase6.bind(this));p[this.name]=this;this.$JewelBase7();a=this.getFlyout();a||h(0,5194);var d=new(b("TabIsolation"))(a);b("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")?b("Toggler").createInstance(a).setSticky(!1):b("Toggler").createInstance(this.root).setSticky(!1);this.$JewelBase8();b("Toggler").listen("show",this.root,function(a){b("FunnelLogger").appendAction(n,m.OPEN_JEWEL),this.$JewelBase9(),this.inform("user-open"),this.hasNew()&&this.markSeen(),this.reset(),b("Arbiter").inform("layer_shown",{type:"Jewel"}),d.enable(),this.setupEvents(),this.$JewelBase10(),this.bootload_conf&&this.bootload_conf.eagerLoadingOnInteraction?this.$JewelBase11():b("promiseDone")(this.$JewelBase4().then(function(){return this.inform("opened")}.bind(this)))}.bind(this));b("Toggler").listen("hide",this.root,function(a,c){j(),b("FunnelLogger").appendAction(n,m.CLOSE_JEWEL),b("FunnelLogger").endFunnel(n),this.hasNew()&&this.markSeen(),this.reset(),this.inform("closed"),b("Arbiter").inform("layer_hidden",{type:"Jewel"}),d.disable(),this.removeEvents(),this.$JewelBase8()}.bind(this));b("Arbiter").subscribe("jewel/count-updated",function(a,b){b.jewel==this.name&&this.update(b)}.bind(this));b("Arbiter").subscribe("jewel/hide",function(a,b){this.hide()}.bind(this));o.addListener("count-updated",function(a){a.jewel==this.name&&this.update(a)}.bind(this))}a.prototype.getRoot=function(){"use strict";return this.root};a.prototype.hide=function(){"use strict";this.isOpen()&&b("Toggler").hide(this.root)};a.prototype.getFlyout=function(){"use strict";this.$JewelBase1==null&&(this.$JewelBase1=b("DOM").find(this.root,".__tw"));return this.$JewelBase1};a.prototype.hasNew=function(){"use strict";return b("CSS").hasClass(this.root,"hasNew")};a.prototype.isOpen=function(){"use strict";return b("CSS").hasClass(this.root,"openToggler")};a.prototype.reset=function(){"use strict";b("FunnelLogger").appendAction(n,m.CLEAR_BADGE_COUNT),b("CSS").removeClass(this.root,"hasNew")};a.prototype.setContent=function(a){"use strict";var c=b("DOM").find(this.root,"ul.jewelItemList");b("DOM").setContent(c,b("HTML")(a))};a.prototype.update=function(a){"use strict";a.animation&&this.badge.setAnimation&&this.badge.setAnimation(a.animation);this.countNew=a.count;typeof this.countNew==="number"&&this.countNew<0&&(this.countNew=0);this.badge.setLegacyContent(this.countNew);var c=isNaN(this.countNew)||this.countNew>0;b("CSS").conditionClass(this.root,"hasNew",c);this.updatedOnce=!0;this.inform("updated",a,"state")};a.prototype.setupEvents=function(){"use strict";this.escHandler=b("Event").listen(document.documentElement,"keydown",function(a){a.keyCode===b("Keys").ESC&&this.hide()}.bind(this))};a.prototype.removeEvents=function(){"use strict";this.escHandler&&(this.escHandler.remove(),this.escHandler=null)};a.prototype.markSeen=function(){"use strict";var a=function(){b("Arbiter").inform("jewel/count-updated",{jewel:this.name,count:0},"state"),o.emitRemote("count-updated",{jewel:this.name,count:0}),this.inform("marked-seen")}.bind(this);b("TimeSlice").guard(a,"JewelOpen markSeen",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype.getButton=function(){"use strict";this.$JewelBase2==null&&(this.$JewelBase2=b("DOM").find(this.root,"a.jewelButton"));return this.$JewelBase2};a.prototype.$JewelBase8=function(){"use strict";var a=this.getButton();b("TooltipData").set(a,this.label);a.setAttribute("data-tooltip-delay","500")};a.prototype.$JewelBase10=function(){"use strict";b("TooltipData").remove(this.getButton())};a.prototype.$JewelBase6=function(a,b){"use strict";!this.$JewelBase12(b.from)&&!this.$JewelBase12(b.to)&&(this.togglerInstance&&this.togglerInstance.hide())};a.prototype.$JewelBase12=function(a){"use strict";return a&&Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")};a.prototype.$JewelBase9=function(){"use strict";this.clickCount++;var a=this.getButton(),c=b("performanceNow")();this.clickCount===1&&(c=b("firstClickTimestamp").get(a));c&&(c=b("normalizedEventTimestamp")(c),c&&k({jewelName:this.name,timestamp:c,badgeCurrentCount:b("JewelBadgeCountRecorder").getCountAtTimestamp(this.name,c),badgeInitialCount:this.initialCount,clickCount:this.clickCount}));b("reportData")("jewel_click",{gt:babelHelpers["extends"]({count:this.countNew,initial:this.initialCount,jewel:this.name},this.businessID?{biz_id:this.businessID}:{},this.loggerRef?{ref:this.loggerRef}:{})});this.name==="requests"&&new(b("FriendingSurfaceVisitationTypedLogger"))().setSurface("jewel").setBadgeCount(this.countNew).log()};a.prototype.$JewelBase4=function(){"use strict";if(!this.bootload_module)return b("Promise").resolve();this.bootloading||(this.bootloading=new(b("Promise"))(function(a,b){this.bootload_module.load().then(function(b){new b(this,this.bootload_args),a()}.bind(this))["catch"](b)}.bind(this)));return this.bootloading};a.prototype.$JewelBase3=function(){"use strict";this.bootload_eager_modules?this.bootload_eager_modules.loadModules(this):b("Run").onAfterLoad(function(){return this.$JewelBase4()}.bind(this))};a.prototype.$JewelBase5=function(){"use strict";this.bootload_eager_modules&&this.bootload_eager_modules.mount(this)};a.prototype.$JewelBase11=function(){"use strict";this.bootload_eager_modules?this.bootload_eager_modules.load(this):b("promiseDone")(this.$JewelBase4().then(function(){return this.inform("opened")}.bind(this)))};a.prototype.$JewelBase7=function(){"use strict";if(this.bootloading)return;var a=b("JewelCountSideLoader").getOverwritesForJewel(this);if(!a)return;this.updateCountAndArgs(a.args,a.count)};a.prototype.updateCountAndArgs=function(a,c){"use strict";for(var d in a)a[d]&&(this.bootload_args[d]=a[d]);c&&b("Arbiter").inform("jewel/count-updated",{jewel:this.name,count:c},"state")};e.exports=a}),null);
__d("ModalMask",["DOM"],(function(a,b,c,d,e,f){var g=null,h=0;a={show:function(){h++,g||(g=b("DOM").create("div",{id:"modalMaskOverlay"}),b("DOM").appendContent(document.body,g))},hide:function(){h&&(h--,!h&&g&&(b("DOM").remove(g),g=null))},getNode:function(){return g}};e.exports=a}),null);
__d("BlueBarCreateMenuTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:BlueBarCreateMenuLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEntrypointStyle=function(a){this.$1.entrypoint_style=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setHasUserCreatedPriorToStartDate=function(a){this.$1.has_user_created_prior_to_start_date=a;return this};a.prototype.setMenuElement=function(a){this.$1.menu_element=a;return this};a.prototype.setMenuStyle=function(a){this.$1.menu_style=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={entrypoint_style:!0,event:!0,has_user_created_prior_to_start_date:!0,menu_element:!0,menu_style:!0,vc:!0};e.exports=a}),null);
__d("CreateMenuEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",IMPRESSION:"impression"})}),null);
__d("CreationMenuElements",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT:"creation_hub_entrypoint",GROUP:"creation_hub_create_group",EVENT:"creation_hub_create_event",PAGE:"creation_hub_create_page",FUNDRAISER:"creation_hub_create_fundraiser",ADVERTISEMENT:"creation_hub_create_advertisement",POST:"creation_hub_create_post",PHOTO_OR_VIDEO:"creation_hub_create_photo_or_video",MARKETPLACE_LISTING:"creation_hub_create_marketplace_listing"})}),null);
__d("BlueBarCreateMenuLogger",["BlueBarCreateMenuTypedLogger","CreateMenuEvents","CreationMenuElements","PopoverAsyncMenu"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initModal:function(a,c,d,e){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(b("CreationMenuElements").ENTRYPOINT).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").CLICK).log();for(var f=0;f<a.length;f++)a[f]&&(function(){var g=a[f],h=g.name;g=g.element;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").IMPRESSION).log();g.addEventListener("click",function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(h).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").CLICK).log()})})()},initDropdown:function(a,c,d,e){__p&&__p();a.onShow=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(b("CreationMenuElements").ENTRYPOINT).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").CLICK).log(),a.forEachItem(function(a){if(!a._data.ctor.displayName.includes("MenuStaticItem")){a=a._data.id;new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(a).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").IMPRESSION).log()}})},a.forEachItem(function(a){if(!a._data.ctor.displayName.includes("MenuStaticItem")){var f=a._data.id;a._onclickHandler=function(){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(f).setMenuStyle(c).setEntrypointStyle(d).setHasUserCreatedPriorToStartDate(e).setEvent(b("CreateMenuEvents").CLICK).log()}}})},logEntrypointImpression:function(a,c,d){new(b("BlueBarCreateMenuTypedLogger"))().setMenuElement(b("CreationMenuElements").ENTRYPOINT).setMenuStyle(a).setEntrypointStyle(c).setHasUserCreatedPriorToStartDate(d).setEvent(b("CreateMenuEvents").IMPRESSION).log()}};e.exports=a}),null);
__d("WebBrowserDimensionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCpuCoresCount=function(a){this.$1.cpu_cores_count=a;return this};a.prototype.setPixelRatio=function(a){this.$1.pixel_ratio=a;return this};a.prototype.setScreenX=function(a){this.$1.screen_x=a;return this};a.prototype.setScreenY=function(a){this.$1.screen_y=a;return this};a.prototype.setViewportX=function(a){this.$1.viewport_x=a;return this};a.prototype.setViewportY=function(a){this.$1.viewport_y=a;return this};c={cpu_cores_count:!0,pixel_ratio:!0,screen_x:!0,screen_y:!0,viewport_x:!0,viewport_y:!0};e.exports=a}),null);
__d("BrowserDimensionsLogger",["WebBrowserDimensionsTypedLogger","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null;a={init:function(){var a=this.getInitialViewportDimensions();a=new(b("WebBrowserDimensionsTypedLogger"))().setPixelRatio(window.devicePixelRatio||1).setScreenX(window.screen.width).setScreenY(window.screen.height).setViewportX(a.width).setViewportY(a.height);window.navigator&&window.navigator.hardwareConcurrency&&a.setCpuCoresCount(window.navigator.hardwareConcurrency);a.log()},getInitialViewportDimensions:function(){g===null&&(g=b("getViewportDimensions")());return g}};e.exports=a}),null);
__d("BootloadOnInteraction",["Event","JSResource","emptyFunction"],(function(a,b,c,d,e,f){a={mount:function(a,c,d,e){d===void 0&&(d=b("emptyFunction"));e===void 0&&(e=b("emptyFunction"));var f=[b("Event").listen(a,"mouseover",g),b("Event").listen(a,"focus",g)];function g(){f.forEach(function(a){return a.remove()}),e(),b("JSResource").loadAll(c,d)}}};e.exports=a}),null);
__d("MercuryJewelBootloadModules",["BootloadOnInteraction","JSResource","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=[b("JSResource")("MercuryJewel").__setRef("MercuryJewelBootloadModules"),b("JSResource")("MercuryThreadInformer").__setRef("MercuryJewelBootloadModules"),b("JSResource")("MessengerState.bs").__setRef("MercuryJewelBootloadModules"),b("JSResource")("Toggler").__setRef("MercuryJewelBootloadModules"),b("JSResource")("MessengerGraphQLThreadlistFetcher.bs").__setRef("MercuryJewelBootloadModules"),b("JSResource")("MercuryServerRequests").__setRef("MercuryJewelBootloadModules"),b("JSResource")("MercuryJewelUnreadCount.bs").__setRef("MercuryJewelBootloadModules")];function i(a,b){g=g||new a(b,b.bootload_args)}function j(a,b){i(a,b),b.inform("opened")}a={mount:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=a.getButton();b("BootloadOnInteraction").mount(d,h,function(b){j(b,a)},function(){c()})},load:function(a){b("JSResource").loadAll(h,function(b){j(b,a)})},loadModules:function(a){b("JSResource").loadAll(h,function(b){i(b,a)})}};e.exports=a}),null);
__d("ViewasChromeBar",["csx","cx","Arbiter","AsyncRequest","CSS","DOM","Event","Focus","ModalMask","PageTransitionsRegistrar","Parent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="ViewasChromeBar/initialized",j=null,k=!1;function l(a){b("Arbiter").subscribe(i,a)}function m(a){b("CSS").addClass(a,"_7g7");a=b("DOM").find(a,"._7g0");b("Focus").set(b("DOM").find(a,".textInput"))}a={initChromeBar:function(a){if(k)return;j=a;k=!0;b("Arbiter").inform(i,null,"state")},update:function(a,c){l(function(){b("DOM").setContent(j,a),c&&new(b("AsyncRequest"))("/ajax/privacy/glasgow/viewas_bar_flyout_open").send()})},registerSpecificModeOnClick:function(a){b("Event").listen(a,"click",function(){var c=b("Parent").bySelector(a,"._7f-");c instanceof HTMLElement&&m(c)})},registerFlyoutModalMask:function(){b("ModalMask").show(),b("PageTransitionsRegistrar").registerHandler(b("ModalMask").hide,10)}};e.exports=a}),null);