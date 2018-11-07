if (self.CavalryLogger) { CavalryLogger.start_js(["VCreo"]); }

__d("AdsTransparencyReportAdEntity",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_ARCHIVE_REDIRECT:"ad_archive_redirect",AD_USEFUL:"ad_useful",ADSCRIBE:"adscribe",DEPRECATED_HIDE:"deprecated_hide",HIDE_AD:"hide_ad",HIDE_AD_REASON:"hide_ad_reason",HIDE_ADVERTISER:"hide_advertiser",HIDE_PRODUCT:"hide_product",REPORT_AD_NUX:"report_ad_nux",WAIST_DIALOG:"waist_dialog",REPORT_AD:"report_ad",REPORT_AD_REASON:"report_ad_reason",TOMBSTONE:"tombstone",SAVE_AD:"save_ad",UNDO_HIDE_AD:"undo_hide_ad",UNDO_HIDE_PRODUCT:"undo_hide_product",UNDO_HIDE_ADVERTISER:"undo_hide_advertiser",UNDO_REPORT_AD:"undo_report_ad",XOUT_MENU:"xout_menu"})}),null);
__d("AdsTransparencyReportAdEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BACKEND_AD_XOUT_EVENT_WRITE:"backend_ad_xout_event_write",BACKEND_ASSOC_WRITE:"backend_assoc_write",BACKEND_UNDO_AD_XOUT_EVENT_WRITE:"backend_undo_ad_xout_event_write",BACKEND_UNDO_ASSOC_WRITE:"backend_undo_assoc_write",CLICK:"click",IMPRESSION:"impression",INFO:"info",INVALIDATION:"invalidation"})}),null);
__d("AdsTransparencyReportAdTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:AdsTransparencyReportAdLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:AdsTransparencyReportAdLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AdsTransparencyReportAdLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAdID=function(a){this.$1.ad_id=a;return this};a.prototype.setAdsPageType=function(a){this.$1.ads_page_type=a;return this};a.prototype.setEntity=function(a){this.$1.entity=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setProductLocation=function(a){this.$1.product_location=a;return this};a.prototype.setReportReason=function(a){this.$1.report_reason=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={ad_id:!0,ads_page_type:!0,entity:!0,event:!0,product_location:!0,report_reason:!0,session_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ReportAdLoggingEvents",["AdsTransparencyReportAdEntity","AdsTransparencyReportAdEvent","AdsTransparencyReportAdTypedLogger","EventListener","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={registerMenuItemClick:function(a,c,d,e,f,g,h){b("EventListener").listen(a,"click",function(){new(b("AdsTransparencyReportAdTypedLogger"))().setEvent(b("AdsTransparencyReportAdEvent").CLICK).setAdID(c).setEntity(d).setSessionID(e).setProductLocation(g).setAdsPageType(f).log();if(d===b("AdsTransparencyReportAdEntity").XOUT_MENU&&h){var a=new(b("WebFunnelLogger"))("AdsReportingFunnelDefinition");a.markStart();a.setAction("click").setActionTag("xout_menu").addFunnelPayload("flowtype",h).setSessionKey(c).log()}})}};e.exports=a}),null);
__d("CameraFileBugButton.react",["ix","fbt","AsyncDialog","AsyncRequest","Image.react","React","ReactMenu","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("ReactMenu").Item,j="/ajax/bugs/report",k="219500115583764";function a(){var a=function(){b("AsyncDialog").send(new(b("AsyncRequest"))().setData({product_category_id:k}).setURI(j))};return b("React").createElement(i,{onClick:a,key:"bug"},b("React").createElement(b("Image.react"),{src:g("112874")}),h._("Something isn't working"))}e.exports=a}),null);
__d("FBStoriesPlusPog.react",["ix","cx","Image.react","React","XUISpinner.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=b("React").createElement("div",{className:"_66a_"},b("React").createElement(b("Image.react"),{src:g("424422")})),c="_26w4 no-border"+(this.props.size==="small"?" size-small":"")+(this.props.size==="small-48"?" size-small-48":"");return b("React").createElement("div",{className:c},a,b("React").createElement(b("XUISpinner.react"),{size:"large",background:"light",className:"_26ww"}))};function a(){i.apply(this,arguments)}a.defaultProps={size:"normal"};e.exports=a}),null);
__d("ConditionClassOnVisible",["CSS","Run","intersectionObserverEntryIsIntersecting","observeIntersection"],(function(a,b,c,d,e,f){"use strict";a={track:function(a,c,d){var e=b("observeIntersection")(a,function(a){b("CSS").conditionClass(a.target,c,d===b("intersectionObserverEntryIsIntersecting")(a))});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("onRectIsWithinViewport",["onViewportChanged"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b){return!(a.bottom<b.top||a.top>b.bottom||a.right<b.left||a.left>b.right)}function a(a,c){var d;function e(b){var c=a();return!!c&&g(c,b)}function f(a){d!==a&&(d=a,c(a))}return b("onViewportChanged")(f,e)}e.exports=a}),null);
__d("LitestandStreamTailStoryPlaceholderVisibilityTracker",["PageletEventConstsJS","PageletEventsHelper","onRectIsWithinViewport","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=null,i=null,j=!1,k={};a={setPlaceholderElement:function(a){j||(b("PageletEventsHelper").subscribeToPageletEvents(l),j=!0),g=a,h&&h.remove(),h=b("onRectIsWithinViewport")(function(){return a.getBoundingClientRect()},function(a){!i&&a&&(i=b("performanceAbsoluteNow")())})},getStoryPlaceholderVisibleDuration:function(a){return k[a]||0}};function l(a,c){__p&&__p();if(a.startsWith("hyperfeed_story")&&c===b("PageletEventConstsJS").DISPLAY_END){c=b("performanceAbsoluteNow")();k[a]=i?c-i:0;if(g){a=g.getBoundingClientRect().top;a=a-window.scrollTop;i=a<window.innerHeight&&a>0?c:null}else i=null}}e.exports=a}),null);
__d("NewsFeedDedupeStoryTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIsWorkplaceUser=function(a){this.$1.is_workplace_user=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={is_workplace_user:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("NewsFeedTailloadPlaceholderTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDisplayDone=function(a){this.$1.display_done=a;return this};a.prototype.setTailLoadPosition=function(a){this.$1.tail_load_position=a;return this};a.prototype.setTailLoadStatus=function(a){this.$1.tail_load_status=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVisibleDuration=function(a){this.$1.visible_duration=a;return this};c={display_done:!0,tail_load_position:!0,tail_load_status:!0,vc:!0,visible_duration:!0};e.exports=a}),null);
__d("FeedConsumptionEvents",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze(b("keyMirror")({PLACEHOLDER_HIDDEN:null,PLACEHOLDER_VISIBLE:null,REQUEST_CANCELLED:null,REQUEST_COMPLETE:null,REQUEST_ERROR:null,REQUEST_STARTED:null,STORY_DISPLAY:null}));e.exports=a}),null);
__d("FeedConsumptionController",["EventEmitter","FeedConsumptionEvents","IntersectionObserver","PageletEventConstsJS","PageletEventsHelper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$3=null,this.$4=null,this.$6=0,this.$2=a,this.$1=new(b("EventEmitter"))()}a.prototype.setPlaceholder=function(a){!this.$3?this.$3=new(b("IntersectionObserver"))(function(a){return this.$7(a)}.bind(this),{threshold:.1}):this.$5&&this.$3.unobserve(this.$5),this.$5=a,this.$3.observe(a)};a.prototype.start=function(){this.$6=0,this.$4||(this.$4=b("PageletEventsHelper").subscribeToPageletEvents(function(a,c){c===b("PageletEventConstsJS").DISPLAY_END&&a.startsWith("hyperfeed_story")&&this.$1.emit(b("FeedConsumptionEvents").STORY_DISPLAY,this.$6++)}.bind(this))),this.$1.emit(b("FeedConsumptionEvents").REQUEST_STARTED)};a.prototype.complete=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_COMPLETE)};a.prototype.error=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_ERROR)};a.prototype.cancel=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_CANCELLED)};a.prototype.destroy=function(){this.$3&&this.$3.disconnect(),this.$3=null,this.$4&&this.$4.remove(),this.$4=null};a.prototype.addListener=function(a,b){return this.$1.addListener(a,b)};a.prototype.once=function(a,b){return this.$1.once(a,b)};a.prototype.$7=function(a){var c=this.$5,d=this.$3&&this.$3.thresholds,e=Array.isArray(d)&&d[0]||0;a.forEach(function(a){a.target===c&&this.$1.emit(a.intersectionRatio>e?b("FeedConsumptionEvents").PLACEHOLDER_VISIBLE:b("FeedConsumptionEvents").PLACEHOLDER_HIDDEN,this.$2())}.bind(this))};e.exports=a}),null);
__d("FeedConsumptionRestorationLogger",["FeedConsumptionEvents","FeedQuickLogModule","QuickPerformanceLogger","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$2=0,this.$1=a}a.prototype.destroy=function(){this.$3&&this.$3.release(),this.$4&&this.$4.remove()};a.prototype.$5=function(a){b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,a),this.reset()};a.prototype.reset=function(){this.destroy(),this.$2=0,this.$4=this.$1.once(b("FeedConsumptionEvents").PLACEHOLDER_VISIBLE,function(a){b("QuickPerformanceLogger").markerStart(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW),b("QuickPerformanceLogger").annotateMarkerInt(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,"STORY_POSITION",a),this.$3=new(b("SubscriptionsHandler"))(),this.$3.addSubscriptions(this.$1.once(b("FeedConsumptionEvents").STORY_DISPLAY,function(a){b("QuickPerformanceLogger").annotateMarkerInt(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,"TAIL_LOAD_STORY_POSITION",a),this.$5("SUCCESS")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").PLACEHOLDER_HIDDEN,function(){return this.$5("CANCEL")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").REQUEST_CANCELLED,function(){return this.$5("CANCEL")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").REQUEST_ERROR,function(){return this.$5("FAIL")}.bind(this)))}.bind(this))};e.exports=a}),null);
__d("NewsFeedDedupeStoryController",["CSS","CurrentUser","DOMQuery","NewsFeedDedupeStoryTypedLogger","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();a={dedupe:function(a,c){__p&&__p();b("queryThenMutateDOM")(function(){var d={};return b("DOMQuery").scry(a,c).filter(function(a){var c=a.getAttribute("data-dedupekey");if(c&&b("CSS").shown(a)){if(d[c])return!0;d[c]=!0}return!1})},function(a){a.forEach(function(a){new(b("NewsFeedDedupeStoryTypedLogger"))().setIsWorkplaceUser(b("CurrentUser").isWorkUser()).log(),b("CSS").hide(a),a.removeAttribute("style")})},"NewsFeedDedupeStoryControllerDedupe")}};e.exports=a}),null);
__d("NewsFeedOffscreenController",["cx","Arbiter","CSS","DOMQuery","IntersectionObserver","LitestandShareAttachment","NavigationMessage","Run","Style","SubscriptionsHandler","debounce","getOrCreateDOMID","intersectionObserverEntryIsIntersecting","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=400;var h=10,i="_5qqr",j={},k=null,l={rootMargin:a+"px 0px "+a+"px 0px"},m=null,n={};function o(){for(var a in n)b("DOMQuery").scry(n[a],"div[data-fullscreen]").length?delete n[a]:j[a]=n[a].offsetHeight}function p(){var a;for(var c in n)a=j[c],a!==undefined&&a>0&&(b("Style").apply(n[c],{height:a+"px",marginBottom:h+"px"}),a=n[c].firstElementChild,a&&b("CSS").hide(a),delete j[c]),delete n[c]}var q=b("debounce")(function(){b("queryThenMutateDOM")(o,p,"NewsFeedOffscreenController")});function r(a){delete n[b("getOrCreateDOMID")(a)];b("Style").apply(a,{height:"",marginBottom:""});a=a.firstElementChild;if(a){b("CSS").show(a);a=b("DOMQuery").scry(a,"."+i);a.forEach(function(a){b("LitestandShareAttachment").init(a)})}}function s(a){var c=[];a.forEach(function(a){b("intersectionObserverEntryIsIntersecting")(a)?c.push(a.target):n[b("getOrCreateDOMID")(a.target)]=a.target});q();c.forEach(r)}function t(){k&&k.disconnect(),k=null,m&&m.release(),m=null}function u(){if(k)return k;k=new(b("IntersectionObserver"))(s,l);var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,t),b("Run").onLeave(t));return k}c={attachSubstream:function(a){u().observe(a)}};e.exports=c}),null);
__d("NewsFeedTailLoadPlaceholderLogger",["DOM","LitestandStream","NewsFeedTailloadPlaceholderTypedLogger","TailLoadLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("TailLoadLogger"));g=c&&c.prototype;function a(a,b){g.constructor.call(this,"feed",a,b)}a.prototype.createLogger=function(){return new(b("NewsFeedTailloadPlaceholderTypedLogger"))()};a.prototype.getStoryCount=function(){return b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length};e.exports=a}),null);
__d("NewsFeedTailLoadController",["Arbiter","Bootloader","CSS","DOM","Event","FBLogger","FeedConsumptionController","FeedConsumptionRestorationLogger","FunnelLogger","LitestandMessages","LitestandStream","LitestandStreamTailStoryPlaceholderVisibilityTracker","MainThreadPerformanceLoggerActions","MainThreadPerformanceMonitor","NavigationMessage","NewsFeedDedupeStoryController","NewsFeedOffscreenController","NewsFeedTailLoadPlaceholderLogger","Run","SubscriptionsHandler","ge","getOrCreateDOMID","gkx","intersectionObserverEntryIsIntersecting","observeIntersection","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={"streamload.tail.commence":!0,"streamload.tail.success":!0,"streamload_error.tail":!0,"streamload_error.tail.transport":!0,"streamload_error.tail.final":!0,"streamload.tail.retry":!0,"streamload_error.tail.retry":!0,"streamload.tail.retry.success":!0,"streamload_timeout.tail":!0},h="WWW_NEWSFEED_TAILLOAD_FUNNEL",i=2,j=3e4,k=null;function l(){if(!k)return;k.destroy();k=null}function m(a){__p&&__p();var c=a.container,d=a.cursor,e=a.pager,f=a.pagerConfig,g=a.placeholderLoggingIntersectionThreshold;a=a.streamConfig;this.$3=!1;this.$5=null;this.$6=null;this.$7=null;this.$8=null;this.$9=null;this.$12=null;this.$13={};this.$14=0;this.$15=0;this.$17=new(b("SubscriptionsHandler"))();this.$20=function(){clearTimeout(this.$6)}.bind(this);this.$19=function(){this.$20(),this.$6=b("setTimeoutAcrossTransitions")(function(){this.$23(["streamload_timeout.tail"])}.bind(this),j)}.bind(this);this.$1=c;this.$2=d;this.$10=e;this.$11=f;this.$16=a;b("LitestandStreamTailStoryPlaceholderVisibilityTracker").setPlaceholderElement(this.$10);var h=new(b("FeedConsumptionController"))(function(){return b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length});h.setPlaceholder(this.$10);this.$17.addSubscriptions({remove:function(){h.cancel(),h.destroy()}});this.$4=h;if(b("gkx")("678702")){var i=new(b("FeedConsumptionRestorationLogger"))(this.$4);i.reset();this.$17.addSubscriptions({remove:function(){i.destroy()}});this.$5=i}this.$17.addSubscriptions(this.$18(),b("Arbiter").subscribe(b("LitestandMessages").STORIES_REQUESTED,this.$19),b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,b("LitestandMessages").STREAM_LOAD_ERROR],this.$20),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,l),b("Event").listen(this.$10,"click",function(event){this.$21(),event.preventDefault()}.bind(this)),b("Run").onLeave(l));if(g!=null){var k=new(b("NewsFeedTailLoadPlaceholderLogger"))(g,this.$10);this.$17.addSubscriptions({remove:function(){k.tailLoadCancelled(),k.destroy()}});this.$12=k}}m.prototype.destroy=function(){"use strict";if(this.$3)return;this.$3=!0;this.$20();this.$17.release()};m.prototype.handleError=function(a,c){"use strict";if(this.$3)return;b("Arbiter").inform(b("LitestandMessages").STREAM_LOAD_ERROR,c);c=["streamload_error.tail"];this.$14>0&&c.push("streamload_error.tail.retry");a!=null&&this.$14<i?(this.$14++,this.$2=a,this.$22(),c.push("streamload.tail.retry"),b("Arbiter").inform(b("LitestandMessages").STREAM_LOAD_RETRY)):(b("CSS").removeClass(this.$10,"async_saving"),this.$12&&this.$12.tailLoadFailed(),this.$4.error(),b("MainThreadPerformanceMonitor").stop(b("MainThreadPerformanceLoggerActions").TAIL_LOAD));this.$23(c)};m.prototype.handleMoreStoriesInserted=function(){"use strict";if(this.$3)return;this.$14>0&&(this.$14=0,this.$23(["streamload.tail.retry.success"]))};m.prototype.handleTailLoadCompleted=function(a,c){"use strict";if(this.$3)return;b("CSS").removeClass(this.$10,"async_saving");this.$2=a;this.$17.addSubscriptions(this.$18());this.$14=0;this.$12&&this.$12.tailLoadSuccessful(c);this.$4.complete()};m.prototype.hidePager=function(){"use strict";if(this.$3)return;b("CSS").hide(this.$10)};m.prototype.setPagerConfig=function(a){"use strict";this.$11=a};m.prototype.$22=function(){"use strict";__p&&__p();var a=this.$2;this.$14<1&&(b("FunnelLogger").startFunnel(h,this.$15),b("FunnelLogger").addFunnelTag(h,this.$15,"NewsFeedTailLoadController"));this.$23(["streamload.tail.commence"]);this.$13[a]&&(this.$23(["duplicate_cursor"]),b("Arbiter").inform(b("LitestandMessages").DUPLICATE_CURSOR_ERROR,a));this.$13[a]=!0;var c={client_stories_count:b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length,cursor:a,pager_config:this.$11,scroll_count:this.$15+1,story_id:b("LitestandStream").getStoryID()},d=function(b){this.handleError(a,b)}.bind(this),e=function(a){a.error?this.$23(["streamload_error.tail.final"]):(this.$23(["streamload.tail.success"]),this.$15++)}.bind(this),f=function(b){this.$23(["streamload_error.tail.transport"]),this.handleError(a,b)}.bind(this),g=this.$8;if(!g){this.$9&&(this.$9.remove(),this.$9=null);var i=b("Bootloader").loadModules(["UIPagelet"],function(a){this.$9=null,this.$8=g=a.loadFromEndpoint("LitestandTailLoadPagelet",b("getOrCreateDOMID")(this.$1),c,{append:!0,automatic:!0,constHeight:!0,crossPage:!0,errorHandler:d,finallyHandler:e,transportErrorHandler:f,usePipe:!0}),this.$17.addSubscriptions({remove:function(){g&&g.abandon()}}),b("Arbiter").inform(b("LitestandMessages").STORIES_REQUESTED)}.bind(this),"NewsFeedTailLoadController");this.$17.addSubscriptions(i);this.$9=i}else g.setErrorHandler(d).setTransportErrorHandler(f).go(c),b("Arbiter").inform(b("LitestandMessages").STORIES_REQUESTED)};m.prototype.$23=function(a){"use strict";a.forEach(function(a){g[a]&&b("FunnelLogger").appendActionWithTag(h,this.$15,a,"try_"+this.$14)}.bind(this)),b("Bootloader").loadModules(["BanzaiODS"],function(b){a.forEach(function(a){b.bumpEntityKey("feed_load",a)})},"NewsFeedTailLoadController")};m.prototype.$18=function(){var a;this.$7&&this.$7.remove();this.$7=b("observeIntersection")(this.$10,function(a){a=b("intersectionObserverEntryIsIntersecting")(a);a&&(this.$21(),this.$7&&(this.$7.remove(),this.$7=null))}.bind(this),{rootMargin:"0px 0px "+((a=this.$16.bufferPixels)!=null?a:0)+"px 0px"});return this.$7};m.prototype.$21=function(){"use strict";b("CSS").addClass(this.$10,"async_saving"),this.$22(),this.$4.start(),this.$12&&this.$12.tailLoadStarted(),b("MainThreadPerformanceMonitor").start(b("MainThreadPerformanceLoggerActions").TAIL_LOAD)};m.destroy=function(){"use strict";k&&(k.hidePager(),l())};m.handleErrorV2=function(a){"use strict";k&&k.handleError(a)};m.init=function(a,c,d,e,f,g){"use strict";k&&(b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.init()` but an instance of this singleton already exists. Please call `NewsFeedTailLoadController.destroy()` before creating a new one. To mitigate this, the old one has been destroyed for you."),l()),k=new m({container:d,cursor:a,pager:c,pagerConfig:e,placeholderLoggingIntersectionThreshold:g,streamConfig:f})};m.moreStoriesInserted=function(a){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.moreStoriesInserted()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}b("Arbiter").inform(b("LitestandMessages").STORIES_INSERTED,{substream_id:a});a=b("ge")(a);a&&(b("NewsFeedOffscreenController").attachSubstream(a),k&&k.handleMoreStoriesInserted())};m.setPagerConfig=function(a){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.setPagerConfig()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}k.setPagerConfig(a)};m.tailloadCompleted=function(a,c){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.tailloadCompleted()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}var d=b("LitestandStream").getStreamRoot();d&&b("NewsFeedDedupeStoryController").dedupe(d,b("LitestandStream").getStoriesSelector());k.handleTailLoadCompleted(a,c);b("MainThreadPerformanceMonitor").stop(b("MainThreadPerformanceLoggerActions").TAIL_LOAD)};e.exports=m}),null);
__d("FBStoriesQPLUtils",["QuickPerformanceLogger","Run"],(function(a,b,c,d,e,f){"use strict";function g(a){a.navigationStart?b("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker):b("QuickPerformanceLogger").markerStart(a.qplMarker,0),b("Run").onUnload(function(){b("QuickPerformanceLogger").markerEnd(a.qplMarker,"CANCEL")})}a={start:function(a){g(a)},end:function(a){b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:"SUCCESS")}};e.exports=a}),null);
__d("StoriesArchiveQuickLogModule",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARCHIVE_GRID_TTI:22347781,ARCHIVE_GRID_TTI_WWW:22347782,PAGINATION_TTI:22347779,SCROLL_PERF:22347783,STORIES_VIEWER_TTI:22347777,THUMBNAIL_TTI:22347780,VIEWERS_LIST_TTI:22347778})}),null);
__d("GHLDebug",["emptyFunction","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=new Set(),i=function(){return g};a=function(a,b,c,d,e){__p&&__p();g.push([a.toString(),b,c,d,e.toString(),j(document.getElementById(d))]);for(var a=h,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(b){if(c>=a.length)break;e=a[c++]}else{c=a.next();if(c.done)break;e=c.value}d=e;d(i())}};var j=function(a){if(a==null)return null;var b=(a.innerText||"").trim().replace(/\n\r?\s*/g,"\n");a=Array.from(a.querySelectorAll("img")).map(function(a){return a instanceof HTMLImageElement?a:null}).filter(Boolean).sort(function(a,b){return b.width*b.height-a.width*a.height}).map(function(a){return a.src});return{text:b,images:Array.from(new Set(a))}};c=function(a){h.add(a);a(i());return function(){h["delete"](a)}};e.exports=b("gkx")("676902")?{hoot:a,murmur:i,elect:c}:{hoot:b("emptyFunction"),murmur:b("emptyFunction"),elect:b("emptyFunction")}}),null);
__d("GHLSurvey",["AdblockerDetectionRetryConfig","AdDelayedHiddenCheckConfiguration","Banzai","BanzaiODS","DateTime","ErrorUtils","FBLogger","GHLDebug","GHLTestElement","GHLTracker","Run","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="swank",h="7.",i=0,j=4,k=6,l=8,m=9,n=10,o=11,p=12;a={check:function(a,c,d){var e=function(){d===!0&&b("GHLTracker").track(a.id),r(a,c,d,0)};b("Run").onAfterLoad(q(e,"initial"))}};var q=function(a,c){return function(){b("ErrorUtils").applyWithGuard(a,null,null,null,"GHL:guard:"+c)}},r=function a(c,d,e,f){__p&&__p();var i=Array.from(c.querySelectorAll("img"));if(i.length===0&&d.startsWith(h)){var j=f+1;if(j<5){var k=function(){a(c,d,e,j)};setTimeout(q(k,"pagelet-check"),2500)}else e&&b("BanzaiODS").bumpEntityKey("feed_ads","GHLSurvey.feed_ad_pagelet_timeout"),b("Banzai").post("xtrackable:"+g,{token:d,event_code:e?m:n});return}if(i.length===0){k=d.startsWith("2.");k||b("FBLogger")("GHL").warn("Expected to find images. (Token: %s)",d);return}if(e&&d.startsWith(h)){i=b("GHLTracker").getState(c.id);(i==null?void 0:i.isDelayImpLogged)===!0&&b("BanzaiODS").bumpEntityKey("feed_ads","GHLSurvey.element_delay_logged_imp_when_pagelet_loading");b("BanzaiODS").bumpEntityKey("feed_ads","GHLSurvey.feed_ad_ready_after_pagelet_retry_count."+f)}s(c,d,e,0,!1)},s=function(a,c,d,e,f){__p&&__p();var m=!1;!f&&d&&b("gkx")("676903")&&(m=b("GHLTestElement").testElementD(a),m&&u(o,c,a.id,e*w(d)));var n="other";c.startsWith(h)&&(n="16");d||(n="organic");n=b("GHLTestElement").testElementI(a,".ghls."+n);if(!n){t(a,c,d,e,f||m);return}if(d){x();if(b("gkx")("688495")){n=b("GHLTestElement").testImagesCompat(a);n||b("Banzai").post("xtrackable:"+g,{token:c,event_code:p})}}if(e>0){f=d?j:l;u(f,c,a.id,e*w(d));return}m=d?i:k;u(m,c,a.id,0)},t=function(a,b,c,d,e){var f=d+1;if(f>=v(c))return;d=function(){s(a,b,c,f,e)};var g=w(c);setTimeout(q(d,"hidden-check"),g)},u=function(a,c,d,e){b("Banzai").post("xtrackable:"+g,{token:c,event_code:a,hidden_delay:e});b("GHLDebug").hoot(a,b("DateTime").localNow(),c,d,e);if(a===j||a===i){c=b("GHLTracker").getState(d);(c==null?void 0:c.isDelayImpLogged)===!0&&b("BanzaiODS").bumpEntityKey("feed_ads","GHLSurvey.element_marked_hidden_already_delay_logged_imp");b("GHLTracker").markH(d)}},v=function(a){return a?b("AdblockerDetectionRetryConfig").retry_count:b("AdblockerDetectionRetryConfig").organic_retry_count},w=function(a){return a?b("AdblockerDetectionRetryConfig").retry_interval:b("AdblockerDetectionRetryConfig").organic_retry_interval},x=function(){return b("AdDelayedHiddenCheckConfiguration").setEnabled(!0)};e.exports=a}),null);