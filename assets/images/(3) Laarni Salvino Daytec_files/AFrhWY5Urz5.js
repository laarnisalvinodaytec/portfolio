if (self.CavalryLogger) { CavalryLogger.start_js(["QBYSY"]); }

__d("FantaReducersParticipants",["FantaGetMessageActions","ImmutableObject","MercuryIDs","MessengerParticipants.bs","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("FantaGetMessageActions").Types;function a(a,b){switch(b.type){case g.ON_GET_THREAD_RESPONSE:b=b.thread;a=h(a,b);break}return a}function h(a,c){var d=c.thread_id,e=a.mercury.tabContents.get(d);if(!e)return a;e=i(c).concat(j(c));b("MessengerParticipants.bs").getMulti(e,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onParticipantResponse(d)})});return k(a,c)}function i(a){return a&&a.participants?a.participants.filter(function(a){return!b("MessengerParticipants.bs").getNow(a)}):[]}function j(a){return a&&a.group_approval_queue?a.group_approval_queue.reduce(function(a,c){var d=c.requester;c=c.inviter;return a.concat([b("MercuryIDs").getParticipantIDFromUserID(d.id),b("MercuryIDs").getParticipantIDFromUserID(c.id)])},[]):[]}function c(a,b){__p&&__p();switch(b.type){case g.ON_GET_PARTICIPANT_RESPONSE:b=b.tabID;b=a.mercury.tabContents.get(b);if(!b)return a;b=b.thread;if(!b)return a;a=k(a,b)}return a}function k(a,c){__p&&__p();var d=c.thread_id,e=a.mercury.tabContents.get(d);if(!e)return a;var f=c.participants?c.participants.map(function(a){return b("MessengerParticipants.bs").getNow(a)}).filter(function(a){return!!a}).reduce(function(a,b){a[b.id]=b;return a},{}):null;c=c.group_approval_queue?c.group_approval_queue.reduce(function(a,c){var d=c.requester;c=c.inviter;d=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(d.id));d&&(a[d.id]=d);d=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(c.id));d&&(a[d.id]=d);return a},{}):null;e=e.merge({membershipParticipants:c,participants:f});a=a.setIn(["mercury","tabContents",d],e);return a}function d(a,c){switch(c.type){case g.THREADS_UPDATED:c.threads.forEach(function(c){a=h(a,new(b("ImmutableObject"))(c))})}return a}e.exports={onGetThreadResponse_Participants:a,threadsUpdated_Participants:d,onParticipantResponse_Participants:c}}),null);
__d("getTitleHrefFromThreadID",["MercuryIDs","MessengerParticipants.bs","WebMessengerThreadPermalinks"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){if(b("MercuryIDs").isLocalThread(a)){c();return}var d=b("MercuryIDs").getUserIDFromThreadID(a);d?b("MessengerParticipants.bs").get(b("MercuryIDs").getParticipantIDFromUserID(d),function(a){a.href?c(a.href):c(b("WebMessengerThreadPermalinks").getThreadURIFromUserID(d))}):b("WebMessengerThreadPermalinks").getThreadURI(a,c)}e.exports={getTitleHrefFromThreadID:a}}),null);
__d("FantaReducersGetMessages",["AsyncRequest","CurrentUser","FantaGetMessageActions","FantaMessageActions","FantaReducersParticipants","FantaTabActions","FantaTypeJoinableThread","ImmutableObject","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","immutable","MercuryThreadActions","MessengerState.bs","TimeSlice","UserActivity","XMNCommercePageNullStateCTAController","getPageIDFromThreadID","setImmediate","getTitleHrefFromThreadID"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryThreadActions").get(),h=b("FantaMessageActions").Types,i=b("FantaTabActions").Types,j=b("FantaGetMessageActions").Types,k=b("getTitleHrefFromThreadID").getTitleHrefFromThreadID,l={},m={};function a(a,b){switch(b.type){case i.OPEN_TAB:case j.CLEAR_PARTICIPANTS:case h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:a=u(a,b.tabID);break}return a}function c(a,b){switch(b.type){case i.OPEN_TAB_WITH_INTERSTITIAL_DATA:a=v(a,b.interstitialData);break}return a}function d(a,b){switch(b.type){case i.REPLACE_TAB:case h.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:a=u(a,b.newTabID);break}return a}function f(a,c){__p&&__p();switch(c.type){case j.CLEAR_PREVIEW:case i.CREATE_NEW_NAMED_GROUP_CHAT:var d=c.tabID;c=c.tokens;var e=a.mercury.tabContents.get(d);if(!e)return a;c=c.map(function(a){a=a.info.uid;return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)});e.messageStore&&e.messageStore.destroy();e=e.merge({messages:b("immutable").List(),hasFetchedAll:!1,messageStore:null,threadPreviewID:null,threadPreviewRecipients:b("immutable").List(c)});a=a.setIn(["mercury","tabContents",d],e);b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),d,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadPreviewResponse(d,a)})});break}return a}function n(a,b){switch(b.type){case j.ADD_PARTICIPANTS:a=q(a,b.tabID,b.previewTabID);break}return a}function o(a,c){__p&&__p();switch(c.type){case i.LOAD_FROM_DATA:var d=a.tabGroup;c=c.tabData;var e=c.interstitialData;if(d.updatedTime>=c.updatedTime||c.updatedTime===undefined){for(var d=a.tabGroup.tabs.keys(),c=Array.isArray(d),f=0,d=c?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(c){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=a.mercury.tabContents.get(g).messageStore;if(!h){h=b("MercuryIDs").getThreadFBIDFromThreadID(g);e&&e[h]?(e[h].threadID=g,a=v(a,e[h])):a=u(a,g)}}return a}else for(var h=a.tabGroup.tabs.keys(),g=Array.isArray(h),f=0,h=g?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(g){if(f>=h.length)break;c=h[f++]}else{f=h.next();if(f.done)break;c=f.value}d=c;c=b("MercuryIDs").getThreadFBIDFromThreadID(d);e&&e[c]?(e[c].threadID=d,a=v(a,e[c])):a=u(a,d)}break}return a}function p(a,b){switch(b.type){case j.FETCH_MORE_MESSAGES:b=b.threadID;var c=a.mercury.tabContents.get(b).messageStore;c&&!m[b]&&(m[b]=!0,c.fetchMoreMessages());break}return a}function q(a,c,d){b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),d,function(a){b("setImmediate")(function(){b("FantaGetMessageActions").onGetThreadPreviewResponse(c,a)})});return a}function r(a,b){__p&&__p();switch(b.type){case j.ON_GET_THREAD_PREVIEW_RESPONSE:var c=b.tabID;b=b.thread;a=s(a,c,b.thread_id);var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({thread:b});a=a.setIn(["mercury","tabContents",c],d)}return a}function s(a,c,d){__p&&__p();var e=d||c,f=new(b("MercuryMessageStore"))(e),g=a.mercury.tabContents.get(c);if(m[e]||!g)return a;m[e]=!0;g&&g.messageStore&&g.messageStore.destroy();g=g.merge({messageStore:f});a=a.setIn(["mercury","tabContents",c],g);var h=setTimeout(function(){m[e]=!1,b("FantaGetMessageActions").onShowContextBannerTimer(c)},6e3);f.subscribe(function(a){m[e]=!1;var d=a.messages&&a.messages[0];d&&d.log_message_type&&d.log_message_type===b("MercuryLogMessageType").SERVER_ERROR&&g.messages.size===0?f.fetchMoreMessages():(clearTimeout(h),b("setImmediate")(function(){b("FantaGetMessageActions").onMessageStoreResponse(a.messages,c)}))});return a}function t(a,b){switch(b.type){case j.REFRESH_THREAD:return u(a,b.threadID)}return a}function u(a,c){__p&&__p();if(!l[c]){var d=b("getPageIDFromThreadID")(c);if(d){var e=b("XMNCommercePageNullStateCTAController").getURIBuilder();new(b("AsyncRequest"))().setURI(e.getURI()).setMethod("POST").setData({page_id:d}).setHandler(function(a){a&&a.payload&&b("FantaGetMessageActions").onPageNullResponse(c,a.payload)}).send()}l[c]=!0;b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),c,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadResponse(a)})});e=a.mercury.tabContents.get(c);return!e||e&&e.messageStore?a:s(a,c)}return a}function v(a,c){var d=new(b("FantaTypeJoinableThread"))(c);c=c.threadID;var e=c&&a.mercury.tabContents.get(c);e&&(e=e.merge({joinableInterstitialData:d}),a=a.setIn(["mercury","tabContents",c],e));return a}function w(a,c){switch(c.type){case j.ON_PAGE_NULL_RESPONSE:var d=c.threadID;c=c.nullStateCTA;var e=a.mercury.tabContents.get(d);e&&(e=e.merge({nullStateCTA:new(b("ImmutableObject"))(c)}),a=a.setIn(["mercury","tabContents",d],e));break}return a}function x(a,b){switch(b.type){case j.ON_GET_THREAD_RESPONSE:b=b.thread;a=y(a,b);break}return a}function y(a,c){__p&&__p();var d=c.thread_id;l[d]=!1;var e=a.mercury.tabContents.get(d);if(!e)return a;e=e.merge({highlightNewMessage:c.unread_count>0,thread:c});a=a.setIn(["mercury","tabContents",d],e);k(d,function(a){return b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadHrefResponse(d,a)})});return a}function z(a,b){switch(b.type){case j.ON_GET_THREAD_HREF_RESPONSE:var c=b.tabID,d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({threadHref:b.href});a=a.setIn(["mercury","tabContents",c],d)}return a}function A(a,c){switch(c.type){case j.THREADS_UPDATED:c.threads.forEach(function(c){a=y(a,new(b("ImmutableObject"))(c))})}return a}function B(a,c){__p&&__p();switch(c.type){case j.ON_MESSAGE_STORE_RESPONSE:var d=c.messages;c=c.tabID;var e=a.mercury.tabContents.get(c),f=e&&e.messageStore;if(f){f=f.hasFetchedAll();e=e.merge({hasFetchedAll:f,messages:b("immutable").List(d)});a=a.setIn(["mercury","tabContents",c],e)}break}return a}function C(a,b){switch(b.type){case j.ON_SHOW_CONTEXT_BANNER_TIMER:var c=a.mercury.tabContents.get(b.threadID);if(!c)return a;c=c.merge({showContextBanner:!0});a=a.setIn(["mercury","tabContents",b.threadID],c);break}return a}function D(a,c){__p&&__p();switch(c.type){case i.CLOSE_AND_TAB_NEXT:case i.FOCUS_NEXT_TAB:case i.FOCUS_PREVIOUS_TAB:case i.FOCUS_TAB:case i.SCROLL_BOTTOM_CHANGED:case i.UNMINIMIZE_TAB:case j.ON_GET_THREAD_RESPONSE:case j.ON_MESSAGE_STORE_RESPONSE:case j.REFRESH_THREAD:case j.THREADS_UPDATED:c=a.tabGroup.focusedTabID;if(c){var d=a.tabGroup.tabs.get(c);if(d&&!d.isMinimized&&b("UserActivity").isOnTab()&&b("UserActivity").isActive()){d=a.mercury.tabContents.get(c);var e=d.thread;d&&d.isScrolledToBottom&&e&&e.unread_count>0&&E(c)}}break}return a}function E(a){var c=function(){g.markSeen(a),g.markRead(a)};b("TimeSlice").guard(c,"superfluous request to first open DD",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}e.exports=babelHelpers["extends"]({addParticipants:n,clearPreview:f,fetchMoreMessages:p,loadFromData:o,onFocusChange:D,onGetThreadHrefResponse:z,onGetThreadPreviewResponse:r,onGetThreadResponse:x,onMessageStoreResponse:B,onPageNullResponse:w,onShowContextBannerTimer:C,openInterstitialTab:c,openTab:a,refreshThread:t,replaceTab:d,threadsUpdated:A},b("FantaReducersParticipants"))}),null);