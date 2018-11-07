if (self.CavalryLogger) { CavalryLogger.start_js(["\/ltb0"]); }

__d("getFullScreenElement",[],(function(a,b,c,d,e,f){function a(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}e.exports=a}),null);
__d("logVideosClickTracking",["clickRefAction"],(function(a,b,c,d,e,f){function a(a){b("clickRefAction")("click",a,null,"FORCE")}e.exports=a}),null);
__d("VideoWithClickPlayPause",["VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}a.prototype.$3=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause(b("VideoPlayerReason").USER)}else b("logVideosClickTracking")(this.$2),this.$1.play(b("VideoPlayerReason").USER)};a.prototype.$4=function(){"use strict";var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};a.prototype.$5=function(){"use strict";return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};e.exports=a}),null);
__d("VideoData",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this.$1=a||{aspect_ratio:0,original_height:0,original_width:0,video_id:""}}h.prototype.hasHD=function(){"use strict";return!!this.$1.hd_src};h.prototype.getEncodingTag=function(){"use strict";return this.$1.encoding_tag};h.prototype.getContentCategory=function(){"use strict";return this.$1.content_category};h.prototype.getVideoID=function(){"use strict";return this.$1.video_id};h.prototype.getVideoURL=function(){"use strict";return this.$1.video_url};h.prototype.getAspectRatio=function(){"use strict";return this.$1.aspect_ratio};h.prototype.getRotation=function(){"use strict";return this.$1.rotation||0};h.prototype.hasSubtitles=function(){"use strict";return!!this.$1.subtitles_src};h.prototype.hasDashManifest=function(){"use strict";return!!this.$1.dash_manifest};h.prototype.getDashManifest=function(){"use strict";return this.$1.dash_manifest};h.prototype.hasHighlightsManifest=function(){"use strict";return!!this.$1.highlights_manifest};h.prototype.getHighlightsManifest=function(){"use strict";return this.$1.highlights_manifest};h.prototype.getDashPrefetchedRepresentationIDs=function(){"use strict";return this.$1.dash_prefetched_representation_ids};h.prototype.getSubtitlesSrc=function(){"use strict";this.$1.subtitles_src||g(0,1109);return this.$1.subtitles_src};h.prototype.getPlayableSrcSD=function(){"use strict";return this.$1.sd_src_no_ratelimit?this.$1.sd_src_no_ratelimit:this.getPlayableSrcRateLimitedSD()};h.prototype.getPlayableSrcHD=function(){"use strict";return this.$1.hd_src_no_ratelimit?this.$1.hd_src_no_ratelimit:this.getPlayableSrcRateLimitedHD()};h.prototype.getPlayableSrcRateLimitedSD=function(){"use strict";return this.$1.sd_src};h.prototype.getPlayableSrcRateLimitedHD=function(){"use strict";return this.$1.hd_src};h.prototype.getLiveManifestUrl=function(){"use strict";this.isLiveStream()||g(0,1110);return this.getPlayableSrcRateLimitedSD()};h.prototype.hasRateLimit=function(){"use strict";return!!this.$1.sd_src_no_ratelimit};h.prototype.getStreamType=function(){"use strict";this.$1.stream_type||g(0,1111);return this.$1.stream_type};h.prototype.isBroadcast=function(){"use strict";return!!this.$1.is_broadcast};h.prototype.isServableViaFbms=function(){"use strict";return!!this.$1.is_servable_via_fbms};h.prototype.isLiveStream=function(){"use strict";return!!this.$1.is_live_stream};h.prototype.isLowLatency=function(){"use strict";return!!this.$1.is_low_latency};h.prototype.isFacecastAudio=function(){"use strict";return!!this.$1.is_facecast_audio};h.prototype.liveRoutingToken=function(){"use strict";return this.$1.live_routing_token};h.prototype.getHDTag=function(){"use strict";return this.$1.hd_tag};h.prototype.getSDTag=function(){"use strict";return this.$1.sd_tag};h.prototype.getProjection=function(){"use strict";return this.$1.projection};h.prototype.getPlayerVersionOverwrite=function(){"use strict";return this.$1.player_version_overwrite};h.prototype.getFalloverData=function(){"use strict";var a=this.$1.fallover_data;return a?a.map(function(a){return new h(a)}):[]};h.prototype.getSphericalConfig=function(){"use strict";return this.$1.spherical_config};h.prototype.isSpherical=function(){"use strict";return!!this.$1.is_spherical};h.prototype.getOriginalHeight=function(){"use strict";return this.$1.original_height};h.prototype.getOriginalWidth=function(){"use strict";return this.$1.original_width};h.prototype.getOverrideConfig=function(){"use strict";return this.$1.override_config};h.prototype.getRawData=function(){"use strict";return this.$1};h.prototype.getPrefetchCache=function(){"use strict";return this.$1.prefetch_cache};h.prototype.getWidevineCert=function(){"use strict";return this.$1.widevine_cert};e.exports=h}),null);
__d("VideoPlayerReasonTransitionHelper",["VideoPlayerReasonTransitionExperiment"],(function(a,b,c,d,e,f){function a(a){"use strict";this.$1=a}a.prototype.getReason=function(){"use strict";return!b("VideoPlayerReasonTransitionExperiment").provideReason?null:this.$1};e.exports=a}),null);
__d("VideoPlayerVolumeSettings",["WebStorage"],(function(a,b,c,d,e,f){__p&&__p();function a(){"use strict";this.$1=1,this.$2=1}a.prototype.getVolume=function(){"use strict";var a=b("WebStorage").getLocalStorage();if(a){a=a.getItem("videoPlayerControllerVolume");return a===null||isNaN(+a)?1:+a}return this.$1};a.prototype.getSessionVolume=function(){"use strict";return this.$1};a.prototype.setSessionVolume=function(a){"use strict";this.$1=a};a.prototype.saveVolume=function(a){"use strict";var c=b("WebStorage").getLocalStorage();c&&c.setItem("videoPlayerControllerVolume",a);this.$1=a};a.prototype.getLastVolumeBeforeMute=function(){"use strict";var a=b("WebStorage").getLocalStorage();if(a){a=a.getItem("videoPlayerControllerLastVolumeBeforeMute");return a===null||isNaN(+a)?1:+a}return this.$2};a.prototype.saveLastVolumeBeforeMute=function(a){"use strict";var c=b("WebStorage").getLocalStorage();c&&c.setItem("videoPlayerControllerLastVolumeBeforeMute",a);this.$2=a};c=new a();e.exports=c}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("EventEmitter"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$VideoStateDirectory1=new Map()}a.prototype.setPlaybackState=function(a,c,d){"use strict";var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};a.prototype.setSaveState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};a.prototype.setSubscriptionState=function(a,b){"use strict";var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};a.prototype.getState=function(a){"use strict";return this.$VideoStateDirectory1.get(a)};e.exports=new a()}),null);
__d("supportsHTML5Video",["DOM","memoize"],(function(a,b,c,d,e,f){e.exports=b("memoize")(function(){return!!b("DOM").create("video").canPlayType})}),null);
__d("isHTML5VideoImplementationUnavailable",["VideoMimeTypes","canVideoPlayType","supportsHTML5Video"],(function(a,b,c,d,e,f){a=function(a){if(a){a=b("canVideoPlayType")(b("VideoMimeTypes").h264main30avc);return a!=="probably"}return!b("supportsHTML5Video")()};e.exports=a}),null);
__d("VODPresenceCVCDisplayStage",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PRE_ENTER:"pre_enter",POST_ENTER:"post_enter"})}),null);
__d("VideoPlayerFormats",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INLINE:"inline",SNOWLIFT:"snowlift",PERMALINK:"permalink",CHANNEL:"channel",FULL_SCREEN:"full_screen",SOCIAL_PLAYER:"social_player",TV:"tv",MISC:"misc",WATCH_SCROLL:"watch_scroll",WATCH_SCROLL_APP_BACKGROUND:"watch_scroll_app_background",WATCH_AND_GO:"watch_and_go",WATCH_AND_BROWSE:"watch_and_browse",CANVAS:"canvas",TAHOE:"tahoe",FB_STORIES:"fb_stories",UNKNOWN:"unknown"})}),null);
__d("VideoPlayerLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUTOPLAY_PREFERENCE_CHANGED:"autoplay_preference_changed",END_STALL_TIME:"end_stall_time",AUTOPLAY_PREFERENCE_STATUS:"autoplay_preference_status",ERROR_ALERT_SHOWN:"video_error_alert_shown",COMMERCIAL_BREAK_OFFSCREEN:"commercial_break_offscreen",COMMERCIAL_BREAK_ONSCREEN:"commercial_break_onscreen",NOT_AUTOPLAYING:"not_autoplaying",VIDEO_CHANNEL_NO_RELATED_VIDEO:"video_channel_no_related_video",VIDEO_ORIENTATION_CHANGED:"video_orientation_changed",AD_BREAK_STARTING_INDICATOR:"ad_break_starting_indicator",AD_BREAK_NON_INTERRUPTIVE_AD_START:"ad_break_non_interruptive_ad_start",AD_BREAK_NON_INTERRUPTIVE_AD_CLICK:"ad_break_non_interruptive_ad_click",AD_BREAK_PRE_ROLL_AD_START:"ad_break_pre_roll_ad_start",AD_BREAK_TAP_ON_TRAILER:"ad_break_tap_on_trailer",AD_BREAK_TAP_START_FROM_TRAILER:"ad_break_tap_start_from_trailer",ASSETS_LOADED:"assets_loaded",BUFFERED:"buffered",CANCELLED_REQUESTED_PLAYING:"cancelled_requested_playing",CAPTION_CHANGE:"caption_change",CAROUSEL_CHANGE:"carousel_change",CHROMECAST_AVAILABILITY_CHECKED:"chromecast_availabilty_checked",CHROMECAST_CAST_CLICKED:"chromecast_button_clicked",CHROMECAST_CAST_CONNECTED:"chromecast_connected",CHROMECAST_CAST_DISABLED:"chromecast_button_disabled",CHROMECAST_CAST_DISCONNECTED:"chromecast_disconnected",CHROMECAST_CAST_RECONNECTED:"chromecast_reconnected",CHROMECAST_CAST_VISIBLE:"chromecast_button_visible",CHROMECAST_NOT_SUPPORTED:"chromecast_not_supported",CLICK:"click",DISPLAYED:"displayed",ENTERED_FALLBACK:"entered_fallback",ENTERED_FS:"entered_fs",ENTERED_HD:"entered_hd",ERROR:"error",EXITED_FS:"exited_fs",EXITED_HD:"exited_hd",FINISHED_LOADING:"finished_loading",FINISHED_PLAYING:"finished_playing",HEADSET_CONNECTED:"headset_connected",HEADSET_DISCONNECTED:"headset_disconnected",HEART_BEAT:"heart_beat",HOST_ERROR:"host_error",HTTP_STATUS_UPDATE:"http_status_update",IMPRESSION:"impression",INVALID_URL:"invalid_url",MUTED:"muted",NO_SURFACE_UPDATE:"no_surface_update",PAUSED:"paused",PLAY_REQUESTED:"play_requested",PLAY_REQUESTED_OOB:"play_requested_oob",PLAYER_ALLOCATED:"player_allocated",PLAYER_FORMAT_CHANGED:"player_format_changed",PLAYER_LOADED:"player_loaded",PLAYING_LIVE_STARTED:"playing_live_started",PLAYING_LIVE_STOPPED:"playing_live_stopped",POP_FAILOVER:"pop_failover",PROGRESS:"progress",QUALITY_CHANGE:"quality_change",R2D2_SUMMARY:"r2d2_summary",R2D2_EVENT_VALIDATION:"r2d2_event_validation",READY_TO_PLAY:"ready_to_play",REPLAYED:"replayed",REPRESENTATION_ENDED:"representation_ended",REPRESENTATION_FIRST_ENDED:"representation_first_ended",REQUESTED:"requested",REQUESTED_PLAYING:"requested_playing",SCRUBBED:"scrubbed",SEEKED:"seeked",SPLASH_DISPLAYED:"splash_displayed",STALE:"stale",STARTED_PLAYING:"started_playing",STARTED_RECEIVING_BYTES:"started_receiving_bytes",STOPPED_PLAYING:"stopped_playing",STREAM_RESET:"stream_reset",SURFACE_UPDATED:"surface_updated",SWITCHED_IMPLEMENTATION:"switched_implementation",UNMUTED:"unmuted",UNPAUSED:"unpaused",VIDEO_CHAINING_IMPRESSION:"video_chaining_impression",VIDEO_CHAINING_TAP:"video_chaining_tap",VIDEO_CLICKED_WITHIN_PLAYER:"video_clicked_within_player",VIDEO_PLAYER_SERVICE_DISCONNECTED:"video_player_service_disconnected",VIDEO_PLAYER_SERVICE_RECONNECTED:"video_player_service_reconnected",VIDEO_PLAYER_SERVICE_UNAVAILABLE:"video_player_service_unavailable",VIDEO_PLAYING:"video_playing",VIDEO_SKIP_AD:"video_skip_ad",VOLUME_CHANGED:"volume_changed",VOLUME_DECREASE:"volume_decrease",VOLUME_INCREASE:"volume_increase",WATCH_AND_SCROLL_CHANNEL_ENTERED:"watch_and_scroll_channel_entered",WATCH_AND_SCROLL_EXITED:"watch_and_scroll_exited",WATCH_AND_SCROLL_ICON_HIGHLIGHTED:"watch_and_scroll_icon_highlighted",WATCH_AND_SCROLL_ICON_UNHIGHLIGHTED:"watch_and_scroll_icon_unhighlighted",WATCH_AND_SCROLL_PAUSED:"watch_and_scroll_paused",LIVE_SEGMENT_LOAD_ERROR:"live_segment_load_error",MANIFEST_DATA_TYPE_ERROR:"manifest_data_type_error",MANIFEST_LOAD_ERROR:"manifest_load_error",PLAYER_WARNING:"player_warning",PLAYHEAD_FELL_BEHIND_ERROR:"playhead_fell_behind_error",STREAM_SEGMENT_LOAD_ERROR:"stream_segment_load_error",UNEXPECTED_SEGMENT_ERROR:"unexpected_segment_error",NETWORK_TIMEOUT:"network_timeout",VIDEO_LOGGING_SESSION_TIMEOUT:"video_logging_session_timeout",COMPLETION:"completion",VIEW:"view",PLAYED_FOR_THREE_SECONDS:"played_for_three_seconds",GUIDE_ENTERED:"guide_entered",GUIDE_EXITED:"guide_exited",HEADING_RESET:"heading_reset",SPHERICAL_FALLBACK_ENTERED:"spherical_fallback_entered",SPHERICAL_VIDEO_FALLBACK_CTA_CLICKED:"spherical_video_fallback_cta_clicked",VIEWPORT_ROTATED:"viewport_rotated",VIEWPORT_ZOOMED:"viewport_zoomed",BANZAI_OAUTH_GK_ERROR:"banzai_oauth_gk_error",BANZAI_OAUTH_PARSE_ERROR:"banzai_oauth_parse_error",BANZAI_OAUTH_SESSION_ERROR:"banzai_oauth_session_error",VIEWABILITY_CHANGED:"viewability_changed",PLAYER_SEEK:"player_seek"})}),null);
__d("VideoPlayerLoggerSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS:"ads",ANIMATED_IMAGE_SHARE:"animated_image_share",ASSET:"asset",BALLOT:"ballot",BROADCAST_REQUEST_ATTACHMENT:"broadcast_request_attachment",CAMERA_POST:"camera_post",CANDIDATE_VIDEOS:"candidate_videos",CHAINED:"chained",CHAINED_SUGGESTION:"chained_suggestion",CHANNEL:"channel",CONTINUE_WATCHING_RECOMMENDATION:"continue_watching_recommendation",EMBEDDED:"embedded",EMBEDDED_PAGE_PLUGIN:"embedded_page_plugin",EMBEDDED_VIDEO:"embedded_video",EMBEDDED_VIDEO_FROM_UFI:"embedded_video_from_ufi",EMBEDDED_VIDEO_PREVIEW:"embedded_video_preview",GAMEROOM_LIVE_VIDEO_HERO_BANNER:"gameroom_live_video_hero_banner",GAMEROOM_LIVE_VIDEO_TAB:"gameroom_live_video_tab",GAMEROOM_LIVE_VIDEO_THUMBNAIL:"gameroom_live_video_thumbnail",GAMES_VIDEO_LIVE_RECOMMENDATION:"games_video_live_recommendation",GAMES_VIDEO_HOME:"games_video_home",GAMES_VIDEO_HOME_HERO:"games_video_home_hero",GAMES_VIDEO_HOME_STREAMER_HUB:"games_video_home_streamer_hub",GAMES_VIDEO_SINGLE_GAME:"games_video_single_game",GAMES_VIDEO_SEARCH_UNIT:"games_video_search_unit",GAMES_VIDEO_SOCIAL_PLUGIN:"games_video_social_plugin",GAMES_VIDEO_HUB:"games_video_hub",GAMES_VIDEO_HUB_REDIRECT_NOTIFICATION:"games_video_hub_redirect_notification",GAMES_VIDEO_HUB_REDIRECT_UNKNOWN:"games_video_hub_redirect_unknown",GROUP_LIVE_VIDEO_MODULE:"group_live_video_module",HTML5:"html5",INLINE:"inline",INSIGHTS:"insights",INTERN_CURATION:"intern_curation",INTERN_EXAMPLE:"intern_example",ISSUES_MODULE:"issues_module",LIVE_BEEPER:"live_beeper",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_MAP:"live_map",LIVE_MAP_LISTVIEW:"live_map_listview",LIVE_MAP_SIDEBAR:"live_map_sidebar",LIVE_MAP_TOOLTIP:"live_map_tooltip",LIVE_MAP_TOOLTIP_FROM_LISTVIEW:"live_map_tooltip_from_listview",LIVE_MAP_TOOLTIP_FROM_MAP:"live_map_tooltip_from_map",LIVE_MAP_TOOLTIP_FROM_WEBGL:"live_map_tooltip_from_webgl",LIVE_VIDEO_BROADCAST:"live_video_broadcast",LIVE_VIDEO_PREVIEW:"live_video_preview",LIVING_ROOM:"living_room",LIVING_ROOM_COMMENTATING:"living_room_commentating",LIVING_ROOM_RECAP_FULLSCREEN:"living_room_recap_fullscreen",LIVING_ROOM_RECAP_INLINE:"living_room_recap_inline",LOOKBACK:"lookback",MEDIA_COLLAGE:"media_collage",MEMORY_LEAK_TEST:"memory_leak_test",MESSAGING:"messaging",MISC:"misc",MOBILE:"mobile",NOT_SPECIFIED_PLEASE_FIX:"not_specified_please_fix",OFFERS_DETAIL:"offers_detail",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",PAGES_FINCH_MAIN_VIDEO:"pages_finch_main_video",PAGES_FINCH_THUMBNAIL_VIDEO:"pages_finch_thumbnail_video",PAGES_FINCH_TRAILER:"pages_finch_trailer",PAGES_VIDEO_SET:"pages_video_set",PAGES_MESSAGING_VIDEO:"pages_messaging_video",PAGES_COVER:"pages_cover",PAGES_TIMELINE_PAGES_COVER:"pages_timeline_pages_cover",PAGES_COVER_HOVER:"pages_cover_hover",PAGES_HOME_HERO:"pages_home_hero",VIDEO_PAGE_SPOTLIGHT_UNIT:"video_page_spotlight_unit",VIDEO_PAGE_VIDEO_LIST:"video_page_video_list",PERMALINK:"permalink",PROFILE_OVERVIEW:"profile_overview",PROFILE_COVER:"profile_cover",PROFILE_VIDEO:"profile_video",PROFILE_VIDEO_HOVERCARD:"profile_video_hovercard",PROFILE_VIDEO_THUMB:"profile_video_thumb",REPORT_FLOW:"report_flow",REVIEW:"review",SEARCH_LIVE_VIDEO_MODULE:"search_live_video_module",SERP_VIDEOS_TAB:"serp_videos_tab",SLIDESHOW:"slideshow",SNOWLIFT:"snowlift",SRT_REVIEW:"srt_review",TAHOE:"tahoe",TOPIC_CHANNEL_LIVING_ROOM:"topic_channel_living_room",TOPIC_GAMING:"topic_gaming",TRAILER_OG_ATTACHMENT:"trailer_og_attachment",TRAILER_TIMELINE_COLLECTIONS:"trailer_timeline_collections",TRAILER_TIMELINE_UNIT:"trailer_timeline_unit",TRIVIA_GAME_ADMIN_DASHBOARD:"trivia_game_admin_dashboard",TV:"tv",USER_VIDEO_TAB:"user_video_tab",VIDEO_COPYRIGHT_PREVIEW:"video_copyright_preview",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_EXPLORE:"discover",VIDEO_HOME_WATCHLIST:"watchlist",VIDEO_INLINE_CHAINING:"video_inline_chaining",VIDEOHUB_FEATURED:"videohub_featured",VIDEOHUB_LIVE:"videohub_live",VIDEOHUB_PLAYLIST:"videohub_playlist",WATCH_SCROLL:"watch_scroll",UFI_COMMENT_ATTACHMENT:"ufi_comment_attachment",LIVE_AUTOPLAY_WATCH_AND_SCROLL:"live_autoplay_watch_and_scroll",GAMES_VIDEO_STREAMER_SEARCH_UNIT:"games_video_streamer_unit",GAMES_STREAMER_DASHBOARD:"games_streamer_dashboard",ADS_PREVIEW:"ads_preview",VIDEO_PAGE_UNSPECIFIED:"video_page_unspecified",SPOTLIGHT_LIVE:"spotlight_live",SPOTLIGHT_FEATURED:"spotlight_featured",SPOTLIGHT_POPULAR:"spotlight_popular",SPOTLIGHT_UNKNOWN:"spotlight_unknown",VIDEOS_CARD:"videos_card",VIDEOS_TAB:"videos_tab",PLAYLISTS_TAB:"playlists_tab",PLAYLISTS_CARD:"playlists_card",PLAYLIST_PAGE:"playlist_page",CIVIC_PROPOSAL:"civic_proposal"})}),null);
__d("VideoPlayerOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",NEWSFEED:"newsfeed",USER_TIMELINE:"user_timeline",PAGE_TIMELINE:"page_timeline",PARENT_PAGE_TIMELINE:"parent_page_timeline",PERMALINK:"permalink",GROUP:"group",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",CONNECTED_TV_SAMSUNG_EDEN_TILE:"connected_tv_samsung_eden_tile",CONNECTED_TV_SAMSUNG_LC:"connected_tv_samsung_lc",SOCIAL_PLAYER:"social_player",VIDEO_HOME:"video_home",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_REACTION:"video_home_reaction",VIDEO_HOME_MAIN:"video_home_main",VIDEO_HOME_GUIDE:"video_home_guide",VIDEO_TAB:"video_tab",EXTERNAL:"external",INSTANT_ARTICLES:"instant_articles",INTERN:"intern",BACKSTAGE:"backstage",INSTANT_SHOPPING:"instant_shopping",REDSPACE:"redspace",SAVED:"saved",SEARCH:"search",NOTIFICATIONS:"notifications",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_DISCOVERY:"live_discovery",LIVE_MAP:"live_map",LIVE_REDIRECT:"live_redirect",LIVE_EMBED_REDIRECT:"live_embed_redirect",LOCAL_NEWS:"local_news",MOVIE_CHECKOUT_FLOW:"movie_checkout_flow",PAGES_MODULE:"pages_module",PAGES_VIDEO_TAB:"pages_video_tab",BUSINESS_PAGE_VIDEO_EDUCATION_UNIT:"business_page_video_education_unit",BUSINESS_PAGE_VIDEO_EDUCATION_DIALOG:"business_page_video_education_dialog",PROMOTIONS_MANAGER_INSPIRATION_GALLERY:"promotions_manager_inspiration_gallery",BACKGROUND_PLAY:"background_play",QUICK_PROMOTION:"quick_promotion",CULTURAL_MOMENTS_SHARE:"cultural_moments_share",CULTURAL_MOMENTS_PROMOTION:"cm_promotion",DAILY_DIALOGUE_PINNED_UNIT:"dd_pinned",SPHERIAL_VIDEO_EDITING:"spherial_video_editing",EXPLORE_FEED:"explorefeed",RHC:"rhc",ADS:"ads",CANVAS:"canvas",COMMERCE:"commerce",COMPOSER:"composer",DASH:"dash",FACEWEB:"faceweb",FEEDBACK:"feedback",FRIENDS:"friends",EVENTS:"events",HELP:"help",INFRASTRUCTURE:"infrastructure",LOGIN:"login",MARKETING:"marketing",MESSAGING:"messaging",NAVIGATION:"navigation",PHOTOS:"photos",PRIVACY:"privacy",SETTINGS:"settings",STORY_VIEW:"story_view",WEBVIEW:"webview",TRENDING:"trending",FACECAST_NUX:"facecast_nux",PIXELCLOUD:"pixelcloud",PROTON:"proton",TAROT:"tarot",GAMEROOM:"gameroom",GAMES_VIDEO_HUB:"games_video_hub",LEARN:"learn",BEEPER:"beeper",FACECAST_BEEPER:"facecast_beeper",JOB_SEARCH:"job_search",TOP_LIVE_BOOKMARK:"top_live_bookmark",AUTODOWNLOAD:"autodownload",FB_STORIES:"fb_stories",DIRECT_INBOX:"direct_inbox",COMMENT:"comment",LIVE_VIDEO_END_SCREEN:"live_video_end_screen",MEDIA_GALLERY:"media_gallery",MOMENTS:"moments",PHOTOSFEED:"photosfeed",SIMPLE_PICKER:"simple_picker",VIDEO_EDITING_GALLERY:"video_editing_gallery",ALBUM:"album",OFFERS:"offers",MESSENGER_THREAD:"messenger_thread",MESSENGER_MONTAGE:"messenger_montage",MESSENGER_GIF:"messenger_gif",SHARED_VIDEO:"shared_video",VISUAL_POLL_GIF:"visual_poll_gif",LIVING_ROOM:"living_room",LIVE_CHAINING:"live_chaining",BRANDED_CONTENT:"branded_content",LIVING_ROOM_RECAP:"living_room_recap",POLITICAL_AD_ARCHIVE:"political_ad_archive",MESSENGER_ADS:"messenger_ads",VIDEO_PAGE_VIDEO_LIST:"video_page_video_list",HASHTAG_DISCOVERY:"hashtag_discovery",VIDEO_GIF_CREATION:"video_gif_creation",VIEW_ADS:"view_ads",GAME_GROUP_RHC:"game_group_rhc",GAME_PAGE_RHC:"game_page_rhc",INTERN_CURATION:"intern_curation",SEARCH_VOYAGER:"search_voyager",KOTOTORO:"kototoro",PAGE_SPOTLIGHT:"page_spotlight",PAGE_VIDEOS_TAB:"page_videos_tab",PAGE_VIDEOS_CARD:"page_videos_card",PLAYLIST_PAGE:"playlist_page",MESSENGER_STORY:"messenger_story",GAMES_FEED:"games_feed",GAMES_ACTION_LINK:"games_action_links",GAMES_VIDEO_STREAMER_DASHBOARD:"games_video_streamer_dashboard",CIVIC_PROPOSAL:"civic_proposal",NOTIFICATIONS_SHOWS_FOLLOWER_NEW_EPISODE:"notifications_shows_follower_new_episode",NOTIFICATIONS_HEAVY_SAVE_REMINDER:"notifications_heavy_save_reminder",NOTIFICATIONS_WATCH_FOLLOWER_CAMPAIGN:"notifications_watch_follower_campaign"})}),null);
__d("VideoPlayerStates",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({READY:"ready",PLAYING:"playing",PAUSED:"paused",LOADING:"loading",FALLBACK:"fallback",FINISHED:"finished",DESTROYED:"destroyed",REPLAYED:"replayed",UNKNOWN:"unknown"})}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=17;a=b("React").createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:b("React").PropTypes.oneOfType([b("React").PropTypes.string,b("React").PropTypes.shape({enter:b("React").PropTypes.string,leave:b("React").PropTypes.string,active:b("React").PropTypes.string}),b("React").PropTypes.shape({enter:b("React").PropTypes.string,enterActive:b("React").PropTypes.string,leave:b("React").PropTypes.string,leaveActive:b("React").PropTypes.string,appear:b("React").PropTypes.string,appearActive:b("React").PropTypes.string})]).isRequired,appear:b("React").PropTypes.bool,enter:b("React").PropTypes.bool,leave:b("React").PropTypes.bool,appearTimeout:b("React").PropTypes.number,enterTimeout:b("React").PropTypes.number,leaveTimeout:b("React").PropTypes.number},transition:function(a,c,d){__p&&__p();var e=b("ReactDOM").findDOMNode(this);if(!e){c&&c();return}var f=this.props.name[a]||this.props.name+"-"+a,g=this.props.name[a+"Active"]||f+"-active",h=null;a=function a(d){if(d&&d.target!==e)return;clearTimeout(h);b("fbjs/lib/CSSCore").removeClass(e,f);b("fbjs/lib/CSSCore").removeClass(e,g);b("ReactTransitionEvents").removeEndEventListener(e,a);c&&c()};b("fbjs/lib/CSSCore").addClass(e,f);this.queueClassAndNode(g,e);d?(h=setTimeout(a,d),this.transitionTimeouts.push(h)):b("ReactTransitionEvents").addEndEventListener(e,a)},queueClassAndNode:function(a,b){this.classNameAndNodeQueue.push({className:a,node:b}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,g))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(a){b("fbjs/lib/CSSCore").addClass(a.node,a.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},UNSAFE_componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(a){clearTimeout(a)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(a){this.props.appear?this.transition("appear",a,this.props.appearTimeout):a()},componentWillEnter:function(a){this.props.enter?this.transition("enter",a,this.props.enterTimeout):a()},componentWillLeave:function(a){this.props.leave?this.transition("leave",a,this.props.leaveTimeout):a()},render:function(){return b("React").Children.only(this.props.children)}});e.exports=a}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("emptyFunction");c={getChildMapping:function(a){if(!a)return a;var c={};b("React").Children.toArray(a).forEach(function(a){var b=a.key,d=c[b]===undefined;d&&(c[b]=a)});return c},mergeChildMappings:function(a,b){__p&&__p();a=a||{};b=b||{};function c(c){if(Object.prototype.hasOwnProperty.call(b,c))return b[c];else return a[c]}var d={},e=[];for(var f in a)Object.prototype.hasOwnProperty.call(b,f)?e.length&&(d[f]=e,e=[]):e.push(f);var g,h={};for(var i in b){if(Object.prototype.hasOwnProperty.call(d,i))for(g=0;g<d[i].length;g++){var j=d[i][g];h[d[i][g]]=c(j)}h[i]=c(i)}for(g=0;g<e.length;g++)h[e[g]]=c(e[g]);return h}};e.exports=c}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={children:b("ReactTransitionChildMapping").getChildMapping(this.props.children)},this.performAppear=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillAppear?b.componentWillAppear(this.$1.bind(this,a)):this.$1(a)}.bind(this),this.$1=function(a){var c=this.refs[a];c.componentDidAppear&&c.componentDidAppear();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&this.performLeave(a)}.bind(this),this.performEnter=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillEnter?b.componentWillEnter(this.$2.bind(this,a)):this.$2(a)}.bind(this),this.$2=function(a){var c=this.refs[a];c.componentDidEnter&&c.componentDidEnter();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&this.performLeave(a)}.bind(this),this.performLeave=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillLeave?b.componentWillLeave(this.$3.bind(this,a)):this.$3(a)}.bind(this),this.$3=function(a){var c=this.refs[a];c.componentDidLeave&&c.componentDidLeave();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);c&&Object.prototype.hasOwnProperty.call(c,a)?this.performEnter(a):this.setState(function(b){b=Object.assign({},b.children);delete b[a];return{children:b}})}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]};a.prototype.componentDidMount=function(){var a=this.state.children;for(var b in a)a[b]&&this.performAppear(b)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();a=b("ReactTransitionChildMapping").getChildMapping(a.children);var c=this.state.children;this.setState({children:b("ReactTransitionChildMapping").mergeChildMappings(c,a)});var d;for(d in a){var e=c&&Object.prototype.hasOwnProperty.call(c,d);a[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToEnter.push(d)}for(d in c){e=a&&Object.prototype.hasOwnProperty.call(a,d);c[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToLeave.push(d)}};a.prototype.componentDidUpdate=function(){var a=this.keysToEnter;this.keysToEnter=[];a.forEach(this.performEnter);a=this.keysToLeave;this.keysToLeave=[];a.forEach(this.performLeave)};a.prototype.render=function(){__p&&__p();var a=[];for(var c in this.state.children){var d=this.state.children[c];d&&a.push(b("React").cloneElement(this.props.childFactory(d),{ref:c,key:c}))}d=Object.assign({},this.props);delete d.transitionLeave;delete d.transitionName;delete d.transitionAppear;delete d.transitionEnter;delete d.childFactory;delete d.transitionLeaveTimeout;delete d.transitionEnterTimeout;delete d.transitionAppearTimeout;delete d.component;return b("React").createElement(this.props.component,d,a)};a.displayName="ReactTransitionGroup";a.propTypes={component:b("React").PropTypes.any,childFactory:b("React").PropTypes.func};a.defaultProps={component:"span",childFactory:b("fbjs/lib/emptyFunction").thatReturnsArgument};e.exports=a}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var b="transition"+a+"Timeout",c="transition"+a;return function(a){if(a[c])if(a[b]==null)return new Error(b+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof a[b]!=="number")return new Error(b+" must be a number (in milliseconds)")}}d=babelHelpers.inherits(c,b("React").Component);g=d&&d.prototype;function c(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){return b("React").createElement(b("ReactCSSTransitionGroupChild"),{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},a)}.bind(this),c}c.prototype.render=function(){return b("React").createElement(b("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$1}))};c.displayName="ReactCSSTransitionGroup";c.propTypes={transitionName:b("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:b("React").PropTypes.bool,transitionEnter:b("React").PropTypes.bool,transitionLeave:b("React").PropTypes.bool,transitionAppearTimeout:a("Appear"),transitionEnterTimeout:a("Enter"),transitionLeaveTimeout:a("Leave")};c.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0};e.exports=c}),null);