if (self.CavalryLogger) { CavalryLogger.start_js(["mXOKr"]); }

__d("XPlaceClaimLogEntryPointController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/place_claim/log_entry_point/",{})}),null);
__d("PlaceClaimLogEntryPoint",["AsyncRequest","Event","XPlaceClaimLogEntryPointController"],(function(a,b,c,d,e,f){a={init:function(a,c,d){b("Event").listen(a,"click",function(){this.sendLoggingRequest(c,d)}.bind(this))},initMenu:function(a,b,c,d){a.subscribe("itemclick",function(a,e){e.item.getValue()==b&&this.sendLoggingRequest(c,d)}.bind(this))},sendLoggingRequest:function(a,c){var d=b("XPlaceClaimLogEntryPointController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({pageid:a,pageevent:c}).setMethod("POST").send()}};e.exports=a}),null);
__d("SaveState",[],(function(a,b,c,d,e,f){a=Object.freeze({SAVING:"saving",SAVED:"saved",UNSAVING:"unsaving",UNSAVED:"unsaved"});e.exports=a}),null);
__d("SaveStateHandler",["Run","SaveState"],(function(a,b,c,d,e,f){__p&&__p();var g=null;function h(){"use strict";this.$1={},this.$2={},b("Run").onLeave(function(){g=null})}h.prototype.addListener=function(a,b){"use strict";this.$1[a]||(this.$1[a]=[]),this.$1[a].push(b)};h.prototype.setState=function(a,b){"use strict";a.forEach(function(a){this.$2[a]=b;if(!this.$1[a])return;a=this.$1[a];a.forEach(function(a){try{a.call(window,b)}catch(a){}})},this)};h.prototype.getState=function(a){"use strict";return this.$2[a]};h.$3=function(){"use strict";g||(g=new h());return g};h.listen=function(a,b){"use strict";this.$3().addListener(a,b)};h.getState=function(a){"use strict";this.$3().getState(a)};h.saving=function(a){"use strict";this.$3().setState(a,b("SaveState").SAVING)};h.saved=function(a){"use strict";this.$3().setState(a,b("SaveState").SAVED)};h.unsaving=function(a){"use strict";this.$3().setState(a,b("SaveState").UNSAVING)};h.unsaved=function(a){"use strict";this.$3().setState(a,b("SaveState").UNSAVED)};h.isSaveAction=function(a){"use strict";a=this.$3().getState(a);return a==b("SaveState").UNSAVED||a==b("SaveState").UNSAVING};e.exports=h}),null);
__d("CurationToggleButton",["cx","CSS","Event","SaveState","SaveStateHandler","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_vu",i="_vv";function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=!1,this.$2=f,b("tidyEvent")([b("Event").listen(c,"click",this.setSaving.bind(this)),b("Event").listen(c,"error",this.setUnsaved.bind(this)),b("Event").listen(d,"click",this.setUnsaving.bind(this)),b("Event").listen(d,"error",this.setSaved.bind(this))]),b("SaveStateHandler").listen(e,function(e){__p&&__p();switch(e){case b("SaveState").SAVING:b("CSS").addClass(a,h);b("CSS").addClass(a,i);d.setAttribute("rel","");this.$1=!0;break;case b("SaveState").SAVED:b("CSS").addClass(a,h);b("CSS").removeClass(a,i);d.setAttribute("rel","async-post");this.$1=!1;break;case b("SaveState").UNSAVING:b("CSS").removeClass(a,h);b("CSS").addClass(a,i);c.setAttribute("rel","");this.$1=!0;break;case b("SaveState").UNSAVED:b("CSS").removeClass(a,h);b("CSS").removeClass(a,i);c.setAttribute("rel","async-post");this.$1=!1;break}}.bind(this))}a.prototype.setSaving=function(){"use strict";this.$1||b("SaveStateHandler").saving(this.$2)};a.prototype.setUnsaving=function(){"use strict";this.$1||b("SaveStateHandler").unsaving(this.$2)};a.prototype.setSaved=function(){"use strict";b("SaveStateHandler").saved(this.$2)};a.prototype.setUnsaved=function(){"use strict";b("SaveStateHandler").unsaved(this.$2)};e.exports=a}),null);