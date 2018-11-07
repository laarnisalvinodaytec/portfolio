if (self.CavalryLogger) { CavalryLogger.start_js(["wc\/8U"]); }

__d("ProfileTimelineUITypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileTimelineUILoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventMetadata=function(a){this.$1.event_metadata=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setProfileID=function(a){this.$1.profile_id=a;return this};a.prototype.setRelationshipType=function(a){this.$1.relationship_type=a;return this};a.prototype.setUIComponent=function(a){this.$1.ui_component=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={event:!0,event_metadata:!0,profile_id:!0,relationship_type:!0,ui_component:!0,vc:!0};e.exports=a}),null);
__d("ScrollingPager",["Arbiter","CSS","DOM","Event","OnVisible","UIPagelet","ge","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,c,d,e,f){"use strict";this.$9=a,this.$7=c,this.$2=d,this.$5=e||{},this.$1=!1,this.$5.target_id?(this.$10=this.$5.target_id,this.$5.append=!0):this.$10=a,f&&b("tidyEvent")(b("Event").listen(f,"click",function(){this.getHandler()(!1);return!1}.bind(this))),this.$8=this.$5.scroll_area_id,this.$3=null,this.$5.fireOnScroll&&this.register(),g[this.$9]=this,b("Arbiter").inform(h.CONSTRUCTED,{id:this.$9})}h.prototype.setBuffer=function(a){"use strict";this.$5.buffer=a,this.$4&&this.$4.setBuffer(a)};h.prototype.getBuffer=function(){"use strict";return this.$5.buffer};h.prototype.getElement=function(){"use strict";return b("ge")(this.$9)};h.prototype.register=function(){"use strict";if(this.$1)return;var a=this.getElement();if(!a)return;this.$4=new(b("OnVisible"))(a,function(a){this.getHandler()(a)}.bind(this),!1,this.$5.buffer,!1,b("ge")(this.$8));this.$1=!0};h.prototype.getInstance=function(a){"use strict";return g[a]};h.prototype.getHandler=function(){"use strict";__p&&__p();if(this.$3)return this.$3;function a(c){__p&&__p();var d=b("ge")(this.$9);if(!d){this.$4.remove();return}b("CSS").addClass(d.firstChild,"async_saving");var e=this.$5.handler,f=this.$5.force_remove_pager&&this.$9!==this.$10,a=function(){for(var a=arguments.length,c=new Array(a),g=0;g<a;g++)c[g]=arguments[g];e&&e.apply(null,c);f&&b("DOM").remove(d);this.$6=null}.bind(this);this.$5.usePipe?this.$5.finallyHandler=a:this.$5.handler=a;c&&(this.$2.pager_fired_on_init=!0);this.$6=b("UIPagelet").loadFromEndpoint(this.$7,this.$10,this.$2,this.$5)}return a.bind(this)};h.prototype.setHandler=function(a){"use strict";this.$3=a};h.prototype.removeOnVisible=function(){"use strict";this.$4.remove()};h.prototype.checkBuffer=function(){"use strict";this.$4&&this.$4.checkBuffer()};h.prototype.setOption=function(a,b){"use strict";this.$5[a]=b};h.prototype.cancelPagelet=function(){"use strict";this.$6&&(this.$6.cancel(),this.$6=null)};h.getInstance=function(a){"use strict";return g[a]};h.CONSTRUCTED="ScrollingPager/constructed";e.exports=h}),null);
__d("DoublyLinkedListMap",[],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this._head=null,this._tail=null,this._nodes={},this._nodeCount=0}a.prototype.get=function(a){a=(a=this._nodes[a])!=null?a.data:a;return a?a:null};a.prototype.getIndex=function(a){"use strict";var b=this._head;for(var c=0;b;b=b.next,c++)if(b.key===a)return c;return null};a.prototype._insert=function(a,b,c,d){"use strict";__p&&__p();c&&!this._nodes[c]&&(c=null);c&&this._nodes[c]?c=this._nodes[c]:c=d?this._head:this._tail;b={data:b,key:a,next:null,prev:null};c&&(this.remove(a),d?(b.prev=c.prev,c.prev&&(c.prev.next=b),c.prev=b,b.next=c):(b.next=c.next,c.next&&(c.next.prev=b),c.next=b,b.prev=c));b.prev===null&&(this._head=b);b.next===null&&(this._tail=b);this._nodes[a]=b;this._nodeCount++;return this};a.prototype.insertBefore=function(a,b,c){"use strict";return this._insert(a,b,c,!0)};a.prototype.insertAfter=function(a,b,c){"use strict";return this._insert(a,b,c,!1)};a.prototype.prepend=function(a,b){"use strict";return this.insertBefore(a,b,this._head&&this._head.key)};a.prototype.append=function(a,b){"use strict";return this.insertAfter(a,b,this._tail&&this._tail.key)};a.prototype.remove=function(a){"use strict";__p&&__p();var b=this._nodes[a];if(b){var c=b.next,d=b.prev;c&&(c.prev=d);d&&(d.next=c);this._head===b&&(this._head=c);this._tail===b&&(this._tail=d);delete this._nodes[a];this._nodeCount--}return this};a.prototype.find=function(a){"use strict";for(var b=this._head;b;b=b.next)if(a(b.data))return b.key;return null};a.prototype.reduce=function(a,b){"use strict";for(var c=this._head;c;c=c.next)b=a(c.data,b);return b};a.prototype.exists=function(a){"use strict";return!!this._nodes[a]};a.prototype.isEmpty=function(){"use strict";return!this._head};a.prototype.reset=function(){"use strict";this._head=null,this._tail=null,this._nodes={},this._nodeCount=0};a.prototype.map=function(a){"use strict";for(var b=this._head;b;b=b.next)a(b.data)};a.prototype.getCount=function(){"use strict";return this._nodeCount};a.prototype.getHead=function(){var a;return(a=this._head)!=null?a.data:a};a.prototype.getTail=function(){var a;return(a=this._tail)!=null?a.data:a};a.prototype.getNext=function(a){return(a=this._nodes[a])!=null?(a=a.next)!=null?a.data:a:a};a.prototype.getPrev=function(a){return(a=this._nodes[a])!=null?(a=a.prev)!=null?a.data:a:a};a.prototype.getHeadKey=function(){var a;return(a=this._head)!=null?a.key:a};a.prototype.getTailKey=function(){var a;return(a=this._tail)!=null?a.key:a};e.exports=a}),null);
__d("ProfileOverviewSection",["CallbackDependencyManager","DOMScroll","DoublyLinkedListMap","TidyArbiterMixin","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=new(b("CallbackDependencyManager"))(),i={};function a(a,c,d){"use strict";this.id=a,this.label=d,this.nodeID=c,this._isLoaded=!1,this._parentSection=null,this.childSections=new(b("DoublyLinkedListMap"))(),i[a]=this,setTimeout(function(){return h.satisfyPersistentDependency(a)},0)}a.prototype.reset=function(){"use strict";this.childSections.map(function(a){return a.reset()})};a.prototype.appendSection=function(a){"use strict";this.childSections.append(a.id,a),a._parentSection=this};a.prototype.freeze=function(){"use strict";this.freezeChildren()};a.prototype.freezeChildren=function(){"use strict";var a=this.childSections.getHead();while(a)a.isActive()||a.freeze(),a=a.getNext()};a.prototype.getParent=function(){"use strict";return this._parentSection};a.prototype.getChildren=function(){"use strict";return this.childSections};a.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id)};a.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id)};a.prototype.isActive=function(){"use strict";var a=this;while(a){if(a.id===g)return!0;a=a._parentSection}return!1};a.prototype.isLoaded=function(){"use strict";return this._isLoaded};a.prototype.setIsLoaded=function(a){"use strict";this._isLoaded=a;return this};a.prototype.scrollTo=function(){"use strict";if(!b("ge")(this.nodeID))return;b("DOMScroll").scrollTo(this.getNode(),!0,!1,0,0,b("DOMScroll").scrollTo.bind(this).bind(null,this.getNode(),0))};a.prototype.thaw=function(){"use strict";this.thawChildren()};a.prototype.thawChildren=function(){"use strict";var a=this.childSections.getHead();while(a)a.thaw(),a=a.getNext()};a.prototype.getNode=function(){"use strict";throw new Error("This function needs to be implemented in children.")};a.callWithSection=function(a,b){"use strict";h.registerCallback(function(){b(i[a])},[a])};a.setActiveSectionID=function(a){"use strict";g=a};a.resetGlobalState=function(){"use strict";g=null,h=new(b("CallbackDependencyManager"))(),i={}};Object.assign(a,b("TidyArbiterMixin"));e.exports=a}),null);
__d("ProfileOverviewDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"})}),null);
__d("TimelineDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",STICKY_HEADER_CONTAINER:"timeline_sticky_header_container",STICKY_HEADER_OVERVIEW:"timeline_sticky_header_overview",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",ABOVE_COMPOSER:"timeline_above_composer",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",SUFFIX_MORE_PAGER:"_more_pager"})}),null);
__d("TimelineOverviewDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TAB_CONTENT:"timeline_overview"})}),null);
__d("ProfileTabUtils",["ProfileOverviewDOMID","ProfileTabConst","TimelineDOMID","TimelineOverviewDOMID","qex"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a===null||a===undefined||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)||h.isTimelineTab(a)&&b("qex")._("684070")},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return b("ProfileOverviewDOMID").PREFIX_APP_COLLECTION+a},getIDForSectionKey:function(a){return b("ProfileOverviewDOMID").PREFIX_MEDLEY+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return b("TimelineDOMID").TAB_CONTENT;return h.isTimelineOverviewTab(a)?b("TimelineOverviewDOMID").TAB_CONTENT:b("ProfileOverviewDOMID").MEDLEY_ROOT},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return b("qex")._("684071")?"TimelineJumperColumn":"TimelineWallColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h}),null);
__d("ProfileDOMID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ABOVE_HEADER_TIMELINE:"pagelet_above_header_timeline",ABOVE_HEADER_TIMELINE_PLACEHOLDER:"above_header_timeline_placeholder",COVER:"fbProfileCover",MAIN_COLUMN:"pagelet_main_column",MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal",MAIN_COLUMN_PERSONAL_OTHER:"pagelet_main_column_personal_other",RIGHT_SIDEBAR:"pagelet_right_sidebar",TAB_LOAD_INDICATOR:"tab_load_indicator",TOP_SECTION:"timeline_top_section",DISCOVERY_INTENT_BUTTON:"discovery_intent_button",DISCOVERY_INTENT_BANNER:"discovery_intent_banner",PREFIX_MAIN_COLUMN_PERSONAL:"pagelet_main_column_personal_"})}),null);
__d("TimelineComponentKeys",[],(function(a,b,c,d,e,f){a={CONTENT:"content",ESCAPE_HATCH:"escape_hatch",OVERVIEW_CONTAINER:"overview_container",NAV:"nav",SCRUBBER:"scrubber",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav",STICKY_HEADER_VIEW_SWITCHER:"sticky_header_view_switcher"};e.exports=a}),null);
__d("TimelineConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_LOADED:"TimelineConstants/sectionLoaded",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});e.exports=a}),null);
__d("TimelineLegacySections",["fbt","CSS","DOM","getElementText"],(function(a,b,c,d,e,f,g){__p&&__p();var h={},i={},j=!1,k=[],l={},m={get:function(a){return Object.prototype.hasOwnProperty.call(i,a)?i[a]:null},getAll:function(){return i},remove:function(a){for(var b=0;b<k.length;b++)if(k[b]===a){k[b]=null;break}delete i[a]},removeAll:function(){i={}},set:function(a,b){i[a]=b},addOnVisible:function(a,b){l[a]=b},destroyOnVisible:function(a){var c=l[a];c&&(c.remove(),b("DOM").remove(c.getElement()));l[a]=null},removeOnVisible:function(a){a=l[a];a&&a.remove()},removeAllOnVisibles:function(){Object.keys(l).forEach(function(a){return this.removeOnVisible(a)}.bind(this))},getOnVisible:function(a){return l[a]},setMainSectionOrder:function(a,b){k[b]=a},getMainSectionOrder:function(){return k},addLoadPagelet:function(a,b){h[a]=b},cancelLoadPagelet:function(a){h[a]&&h[a].cancel()},cancelLoadPagelets:function(){Object.keys(h).forEach(function(a){return this.cancelLoadPagelet(a)}.bind(this)),h={}},shouldForceNoFriendActivity:function(){return j},forceNoFriendActivity:function(){j=!0},collapsePlaceHolderHeaders:function(){__p&&__p();var a,c,d=!1;for(var e=0;e<k.length;e++){var f=k[e];if(!f)continue;f=m.get(f);if(!f)continue;if(f.canScrollLoad()||f.isLoaded()){f.isLoaded()||(b("CSS").removeClass(f.getNode(),"fbTimelineTimePeriodSuppressed"),b("CSS").addClass(f.getNode(),"fbTimelineTimePeriodUnexpanded"));a&&c&&(this.combineSectionHeaders(a,c),d&&a.deactivateScrollLoad(),d=!0);a=null;c=null;continue}else a?(c=f,f.deactivateScrollLoad()):(a=f,c=f,d&&f.activateScrollLoad());b("CSS").removeClass(f.getNode(),"fbTimelineTimePeriodSuppressed");b("CSS").addClass(f.getNode(),"fbTimelineTimePeriodUnexpanded")}},combineSectionHeaders:function(a,c){b("CSS").removeClass(c.getNode(),"fbTimelineTimePeriodUnexpanded");b("CSS").addClass(c.getNode(),"fbTimelineTimePeriodSuppressed");a=b("DOM").find(a.getNode(),"span.sectionLabel");c=b("DOM").find(c.getNode(),"span.sectionLabel");c.getAttribute("data-original-label")||c.setAttribute("data-original-label",b("getElementText")(c));a.getAttribute("data-month")&&c.getAttribute("data-month")&&a.getAttribute("data-year")==c.getAttribute("data-year")?b("DOM").setContent(c,g._("Show {month1} - {month2} {year}",[g._param("month1",c.getAttribute("data-month")),g._param("month2",a.getAttribute("data-month")),g._param("year",a.getAttribute("data-year"))])):a.getAttribute("data-year")!==c.getAttribute("data-year")?b("DOM").setContent(c,g._("Show {year1} - {year2}",[g._param("year1",c.getAttribute("data-year")),g._param("year2",a.getAttribute("data-year"))])):b("DOM").setContent(c,g._("Show {year}",[g._param("year",c.getAttribute("data-year"))]))}};e.exports=m}),null);
__d("findTag",["TAAL","$","ex"],(function(a,b,c,d,e,f){__p&&__p();a=function(a,c){__p&&__p();var d=b("$")(a);if(!c){if(d instanceof HTMLElement)return d;throw new Error(b("TAAL").blameToPreviousFile(b("ex")('Element with ID "%s" is not an HTMLElement',a)))}var e=d.tagName.toLowerCase();if(e!==c)throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Expected $('%s') to be of type '%s' but got '%s' instead.",a,c,e)));return d};e.exports=a}),null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","DOMQuery","Event","ProfileDOMID","ProfileTabConst","ProfileTabUtils","Run","TidyArbiter","TimelineComponentKeys","TimelineConstants","TimelineLegacySections","UITinyViewportAction","URI","Vector","findTag","forEachObject","ge","queryThenMutateDOM","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g=740,h="top",i="paddingTop",j="paddingTop",k=null,l=!1,m=null,n=null,o={},p={},q=null,r=[],s=null,t=null;b("Vector").getViewportDimensions();var u=!1,v=!1,w=!1;function x(a,b,c){c===void 0&&(c=[]);if(o[a])return o[a][b].apply(o[a],c);p[a]=p[a]||{};p[a][b]=c;return!1}function y(){u&&(u=C(b("ge")("rightCol"),j,I.getCurrentScrubber()));if(v){var a=b("ge")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE);a&&(v=C(a,h))}w&&(w=C(b("BlueBar").getBar(),i))}function z(){t=b("Vector").getScrollPosition()}function A(){y(),t&&b("ProfileTabUtils").tabHasStickyHeader(k)&&x(b("TimelineComponentKeys").STICKY_HEADER,"check",[t.y]),x(b("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function B(){b("queryThenMutateDOM")(z,A,"TimelineController/scrollListener")}function C(a,c,d){__p&&__p();if(!a||!t)return!1;if(t.y<=0){D(a,c);return!1}if(d&&b("CSS").hasClass(d.getRoot(),"fixed_elem")){D(a,c);return!1}d=parseInt(a.style[c],10)||0;t.y<d?(b("CSS").addClass(a,"timeline_fixed"),a.style[c]=t.y+"px"):b("CSS").removeClass(a,"timeline_fixed");return!0}function D(a,c){a.style[c]="0px",b("CSS").removeClass(a,"timeline_fixed")}function E(){b("Vector").getViewportDimensions()}function F(){b("queryThenMutateDOM")(E,function(){x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights"),t&&x(b("TimelineComponentKeys").STICKY_HEADER,"check",[t.y])},"TimelineController/resize")}function G(a,c){__p&&__p();a=b("Vector").getScrollPosition();c=Math.min(c,a.y);a=b("ge")("rightCol");a&&(a.style[j]=c+"px",u=!0);I.showAboveHeaderContent(c);w=b("UITinyViewportAction").isTinyHeight();if(w){a=b("BlueBar").getBar();a&&(a.style[i]=c+"px")}b("Arbiter").inform("reflow")}function H(){__p&&__p();while(r.length)r.pop().remove();b("forEachObject")(o,function(a,b){a.reset&&a.reset()});k=null;m=null;o={};p={};s=null;l=!1;v=!1;if(u){var a=b("ge")("rightCol");a&&D(a,j)}u=!1;if(w){a=b("BlueBar").getBar();a&&D(a,i);w=!1}b("DataStore").purge(b("TimelineConstants").DS_LOADED)}var I={init:function(a,c,d){__p&&__p();if(l)return;b("ProfileTabUtils").isTimelineTab(c)&&(c=b("ProfileTabConst").TIMELINE);l=!0;m=a;n=d.relationship_type;q=d.session_token;r.push(b("Event").listen(window,"scroll",B),b("Event").listen(window,"resize",F));b("tidyEvent")(b("TidyArbiter").subscribe("TimelineCover/coverCollapsed",G));b("Run").onLeave(H);a=new(b("URI"))(window.location).getQueryData();I.registerCurrentKey(c,a.subkey)},showAboveHeaderContent:function(a){var c=b("Vector").getScrollPosition();a=Math.min(a,c.y);c=b("findTag")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE);if(c.firstChild){var d=b("findTag")(b("ProfileDOMID").ABOVE_HEADER_TIMELINE_PLACEHOLDER);d.style.height=c.offsetHeight+"px";c.style.top=a+"px";v=!0}},registerCurrentKey:function(a,c){__p&&__p();k=a;s=a!==b("ProfileTabConst").MAP&&b("Vector").getViewportDimensions().y<g&&b("ProfileTabUtils").tabHasScrubber(a);if(!s){var d=b("BlueBar").getBar();s=d&&d.offsetTop}b("Arbiter").inform("TimelineController/sectionKeyChange",[a,c],"state");x(b("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").OVERVIEW_CONTAINER,"handleTabChange",[a,c]);x(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,"handleTabChange",[a,c]);B()},getProfileID:function(){return m},getRelationshipType:function(){return n},getSessionToken:function(){return q},getCurrentKey:function(){return k},getCurrentScrubber:function(){return o[b("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function(){return o[b("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function(a){b("CSS").conditionClass(a.getRoot(),"fixed_elem",!s)},sectionHasChanged:function(a,c){a=[a,c];x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",a);x(b("TimelineComponentKeys").SCRUBBER,"updateSection",a)},navigateToSection:function(a){x(b("TimelineComponentKeys").CONTENT,"navigateToSection",[a])},adjustStickyHeaderWidth:function(){x(b("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},dismissStickyHeaderConfirmationBar:function(){x(b("TimelineComponentKeys").STICKY_HEADER,"dismissConfirmationBar")},hideStickyHeaderNavSectionMenu:function(){x(b("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function(a,c){o[a]=c,p[a]&&(b("forEachObject")(p[a],function(b,c){x(a,c,b)}),delete p[a])},runOnceWhenSectionFullyLoaded:function(a,c,d){__p&&__p();var e=parseInt(d,10);d=b("TimelineLegacySections").get(c);var f=!1;if(d){d=b("DOMQuery").scry(d.getNode(),".fbTimelineCapsule");f=d.some(function(c){c=b("DataStore").get(b("TimelineConstants").DS_LOADED,c.id);if(parseInt(c,10)>=parseInt(e,10)){a();return!0}return!1})}if(!f)var g=b("Arbiter").subscribe(b("TimelineConstants").SECTION_FULLY_LOADED,function(b,d){d.scrubberKey===c&&parseInt(d.pageIndex,10)===e&&(a(),g.unsubscribe())})}};e.exports=I}),null);
__d("ProfileTimelineUILogger",["Banzai","ProfileTimelineUITypedLogger","TimelineController"],(function(a,b,c,d,e,f){__p&&__p();var g="profile_timeline_ui";function h(event,a,c){var d=b("TimelineController").getProfileID(),e=b("TimelineController").getRelationshipType();b("Banzai").isEnabled(g)&&!!d&&!!e&&new(b("ProfileTimelineUITypedLogger"))().setEvent(event).setUIComponent(a).setProfileID(d).setRelationshipType(e).setEventMetadata(c).log()}a={logCoverNavItemClick:function(a){h("click","cover_nav_item",{tab_key:a})},logCoverNavMoreItemClick:function(a){h("click","cover_nav_more_item",{tab_key:a})},logScrubberClick:function(a){h("click","scrubber",{section_key:a})},logStickyHeaderImpression:function(){h("view","sticky_header",{})},logStickyHeaderNavItemClick:function(a){h("click","sticky_header_nav_item",{tab_key:a})},logStickyHeaderScrubberClick:function(a){h("click","sticky_header_scrubber",{section_key:a})},logStickyHeaderNavItemWithJumperClick:function(a){h("click","sticky_header_nav_item_with_jumper",{tab_key:a})},logStickyHeaderScrubberWithJumperClick:function(a){h("click","sticky_header_scrubber_with_jumper",{section_key:a})},logJumperRecentStoriesButtonClick:function(a){h("click","jumper_recent_stories_button",{cursor:a})},logJumperMoreStoriesSpinnerView:function(a){h("view","jumper_more_stories_spinner",{cursor:a})}};e.exports=a}),null);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],(function(a,b,c,d,e,f){__p&&__p();var g=100;function h(a){return a==="viewport"?b("Vector").getViewportDimensions().y:a}var i=!1,j=!1;function k(){if(j)return;b("Run").onLeave(l);j=!0}function l(){i=!1,j=!1}a={run:function(a,c,d){__p&&__p();k();if(!i||b("UserAgent_DEPRECATED").ie()<=8){c();return}var e=a.offsetHeight;c();c=a.offsetHeight;var f=b("Vector").getScrollPosition().y;a=b("Vector").getElementPosition(a).y;c!==e&&a<f&&a+e<f+h(d||g)&&window.scrollBy(0,c-e)},enable:function(){i=!0}};e.exports=a}),null);