var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.__twttrll=window.__twttrll||[]).push([[8],{183:function(e,t,o){var i=o(0);e.exports=function(e){return i.isType("string",e)}},185:function(e,t,o){var i=o(0);e.exports=function(e){var t={transparent:!1,hideBorder:!1,hideHeader:!1,hideFooter:!1,hideScrollBar:!1};return e=e||"",i.contains(e,"transparent")&&(t.transparent=!0),i.contains(e,"noborders")&&(t.hideBorder=!0),i.contains(e,"noheader")&&(t.hideHeader=!0),i.contains(e,"nofooter")&&(t.hideFooter=!0),i.contains(e,"noscrollbar")&&(t.hideScrollBar=!0),t}},201:function(e,t){var o=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=function(e){return o.test(e)}},207:function(e,t,o){var i=o(10),n=o(31),r=o(5),s=o(0),a="is-openedAbove",c="is-openedBelow";e.exports=function(e){e.selectors({shareMenuOpener:".js-showShareMenu",shareMenu:".timeline-ShareMenu",shareMenuTimelineHeader:".timeline-Header",shareMenuTimelineFooter:".timeline-Footer"}),e.define("getHeaderHeight",function(){var e=this.selectOne("shareMenuTimelineHeader");return e?e.getBoundingClientRect().height:0}),e.define("getFooterHeight",function(){var e=this.selectOne("shareMenuTimelineFooter");return e?e.getBoundingClientRect().height:0}),e.define("getShareMenuPositionClass",function(e){var t=e.getBoundingClientRect(),o=t.top-this.getHeaderHeight();return this.sandbox.height-t.bottom-this.getFooterHeight()<o?a:c}),e.after("render",function(){this.on("click","shareMenuOpener",function(e,t){var o,a=this,c=n.closest(this.selectors.shareMenu,e.target,this.el);function w(){i.remove(c,o),a.el.removeEventListener("click",w,!1),r.removeEventListener("click",w,!1)}e.preventDefault(),c&&(o=this.getShareMenuPositionClass(t),i.add(c,o),s.async(function(){a.el.addEventListener("click",w,!1),r.addEventListener("click",w,!1)}))})})}},208:function(e,t){var o=/^(dark|light)$/;e.exports=function(e){return o.test(e)}},209:function(e){e.exports={INITIAL:1,NEWER:2,OLDER:3}},210:function(e,t,o){var i=o(73),n=o(3),r=o(4);e.exports=function(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var o=n.intentForFollowURL(t.href);r.asBoolean(t.getAttribute("data-age-gate"))||i.open(o,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}},211:function(e,t,o){var i=o(31),n=o(10);e.exports=function(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var o=i.closest(this.selectors.mediaCard,t,this.el);o&&n.remove(o,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}},212:function(e,t,o){var i,n,r=o(10),s=o(29),a=o(171),c=o(31),w=o(69),m=o(16),l=o(15),d=o(204),u=o(6),h={autoplay:"1"},f="js-forceRedraw";e.exports=a.couple(o(213),function(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}e.params({lang:{required:!0,transform:w.matchLanguage,fallback:"en"},videoPlayerBorderRadius:{fallback:{}},videoPlayerBranding:{fallback:!0}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),e.define("videoPlayerOptions",function(){var e=(this.scribeData()||{}).widget_origin,t=this.scribeNamespace()||{};return{addBranding:this.params.videoPlayerBranding,borderRadius:this.params.videoPlayerBorderRadius,languageCode:this.params.lang,widgetOrigin:e,autoPlay:!0,scribeContext:{page:t.page,client:t.client}}}),e.define("replaceInterstitialWithMedia",function(e,t){return u.all([this.restoreLastMediaInterstitial(),m.write(function(){i=e,n=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return i&&n?(e=n.firstElementChild,d.remove(e),m.write(function(){n.replaceChild(i,e)})):u.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var o,i=c.closest(this.selectors.sourceIdInfo,t,this.el),n=i.getAttribute("data-tweet-id"),r=d.insertForTweet;return n||(n=i.getAttribute("data-event-id"),r=d.insertForEvent),n?(e.preventDefault(),o=this.selectOne(i,this.selectors.wvpInterstitial),this.getConsent(i,o).then(function(){this.displayWebVideoPlayerMediaAsset(i,n,r)}.bind(this))):u.reject(new Error("No source id found for player"))}),e.define("displayWebVideoPlayerMediaAsset",function(e,o,i){var n=this.selectOne(e,this.selectors.mediaAsset),r=t(this.sandbox),s=this.sandbox.createElement("div"),a=this.videoPlayerOptions();return s.className="wvp-player-container",r.appendChild(s),this.replaceInterstitialWithMedia(n,r).then(function(){return i.call(this,r,o,a)})}),e.define("displayIframeMediaAsset",function(e,o){var i,n,a,w=c.closest(this.selectors.mediaAsset,o,this.el),d=c.closest(this.selectors.cardInterstitial,o,this.el),p=d.getAttribute("data-player-src"),g=d.getAttribute("data-player-width"),b=d.getAttribute("data-player-height"),v=d.getAttribute("data-player-title");return p?(e.preventDefault(),a=p,p=l.url(a,h),i=t(this.sandbox),(n=s({src:p,allowfullscreen:"true",width:g,height:b,title:v||""})).className="FilledIframe",i.appendChild(n),this.replaceInterstitialWithMedia(w,i).then(function(){n.focus(),m.write(function(){r.add(i,f),r.add(n,f)})})):u.reject(new Error("No Player frame source"))}),e.after("render",function(){var e=this.selectOne(this.selectors.wvpInterstitial);e&&r.remove(e,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})})},213:function(e,t,o){var i=o(10),n=o(214),r=o(2),s=o(17),a=o(16),c=o(22),w=o(6),m=o(70);e.exports=function(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var o=this.selectOne(e,this.selectors.interstitial);return o?m.shouldObtainCookieConsent().catch(function(){return w.resolve(!0)}).then(function(e){var i,n;return e?(i=new r,n=function(){this.handleCookieConsentClick(t,o),i.resolve()}.bind(this),a.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(o,t),this.attachConsentListener(o,n)},this),i.promise):w.resolve()}.bind(this)):w.resolve()}),e.define("attachConsentListener",function(e,t){var o=this.selectOne(e,this.selectors.cookieConsentButton);o&&o.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){i.remove(e,"u-hidden"),t&&i.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){i.add(e,"u-hidden"),t&&i.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return n.request(s.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return c.allSettled([a.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}},214:function(e,t,o){var i=o(2),n=o(6),r=o(21),s=o(30),a=o(15),c=o(0),w=o(1),m={method:"GET",params:{},headers:{},credentials:"include",isSuccess:function(e){return e>=200&&e<300}},l={JSON:"application/json",TEXT:"text/plain"},d={NO_XHR:new Error("No suitable XHR implementation available."),REQUEST_FAILED:new Error("XHR request failed."),REQUEST_ABORTED:new Error("XHR request aborted."),REQUEST_TIMED_OUT:new Error("XHR request timed out."),NETWORK_ERROR:new Error("Network error.")};e.exports={request:function(e,t){var o,u;return t=c.aug({},m,t||{}),o=a.url(e,t.params),(u=w.fetch)?u(o,t).catch(function(){return n.reject(d.NETWORK_ERROR)}).then(function(e){if(t.isSuccess(e.status))return e.text().then(function(t){var o=e.headers.get("content-type");return t&&c.contains(o,l.JSON)?s.parse(t):t});throw new Error("Request failed with status: "+e.status)}):function(e,t){var o,a=new i,m=r.ie9(),u=m?w.XDomainRequest:w.XMLHttpRequest;if(!u)return n.reject(d.NO_XHR);function h(){var e=m?o.contentType:o.getResponseHeader("content-type"),i=c.contains(e,l.JSON)?function(e){return e?s.parse(e):e}(o.responseText):o.responseText;m||t.isSuccess(o.status)?a.resolve(i):m||0!==o.status?a.reject(i):a.reject(d.NETWORK_ERROR)}return(o=new u).onreadystatechange=function(){4===o.readyState&&h()},o.onload=h,o.onerror=function(){a.reject(d.REQUEST_FAILED)},o.onabort=function(){a.reject(d.REQUEST_ABORTED)},o.ontimeout=function(){a.reject(d.REQUEST_TIMED_OUT)},o.open(t.method,e),"include"===t.credentials&&(o.withCredentials=!0),o.setRequestHeader&&c.forIn(t.headers,function(e){o.setRequestHeader(e,t.headers[e])}),o.send(),a.promise}(o,t)},mimeTypes:l,errors:d}},215:function(e,t,o){var i=o(10),n=o(16),r=o(44),s=o(21),a=o(6),c=o(0),w=o(171),m=50,l="data-card-breakpoints",d="data-theme",u="is-loaded",h="is-constrainedByMaxWidth";e.exports=w.couple(o(172),function(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},2)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){var t=this,o=!1;function r(){o&&t.resizeSandboxDueToCardChange()}return this.select(e,"img").forEach(function(e){e.addEventListener("load",r,!1)}),this.scribeCardShown(e),n.write(function(){i.add(e,u)}).then(function(){o=!0,t.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return a.all(this.select("prerenderedCard").map(function(t){var o=e.selectOne(t,"rootCardEl");return n.defer(function(){var e,n=0;s.ios()?(i.remove(t,h),n=r(t.parentElement).width,t.style.maxWidth=n+"px"):n=r(t.parentElement).width,e=function(e){var t,o="";for(t=Math.floor(e/m);t>0;t--)o+="w"+t*m+" ";return o}(n),o.setAttribute(l,e),i.add(t,h)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(d,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,o=this.select(e,"prerenderedCard").reduce(function(e,t){var o=t.getAttribute("data-css");return o&&(e[o]=e[o]||[],e[o].push(t)),e},{});c.forIn(o,function(e,o){t.sandbox.prependStyleSheet(e).then(function(){o.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return s.anyIE()&&(e=this.selectOne("periscopeVideo"))&&(e.style.display="none"),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})})},216:function(e,t,o){var i=o(1),n=o(0),r=/^#/;function s(e){return i.parseInt(e,16)}function a(e,t){var o,i,a,c;if(e=function(e){return n.isType("string",e)?(e=e.replace(r,""),e+=3===e.length?e:""):null}(e),t=t||0,e)return o=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),i=s(e.substring(0,2)),a=s(e.substring(2,4)),c=s(e.substring(4,6)),"#"+(16777216+65536*(Math.round((o-i)*t)+i)+256*(Math.round((o-a)*t)+a)+(Math.round((o-c)*t)+c)).toString(16).slice(1)}e.exports={darken:function(e,t){return a(e,-t)},lighten:function(e,t){return a(e,t)}}},217:function(e,t,o){var i=o(31),n=o(40);e.exports=function(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,o=t.tagName;if(n(t,"td "+o))return e=i.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}},219:function(e,t,o){var i=o(209);e.exports=function(e,t,o){switch(e.cursors=e.cursors||{},e.pollInterval=t.pollInterval,o){case i.INITIAL:e.cursors.min=t.minCursorPosition,e.cursors.max=t.maxCursorPosition;break;case i.NEWER:e.cursors.max=t.maxCursorPosition||e.cursors.max;break;case i.OLDER:e.cursors.min=t.minCursorPosition||e.cursors.min}}},235:function(e,t,o){var i=o(6),n=o(175),r=o(16),s=o(32),a=o(4),c=o(0),w=o(171),m=o(7),l=o(173),d=o(188),u=o(183),h=o(69),f=o(208),p=o(219),g=o(177),b=o(209),v="180px",y="100%",k="200px",x="520px",C="600px",T=1;e.exports=w.couple(o(172),o(174),function(e){e.params({dataSource:{required:!0},id:{validate:u},lang:{required:!0,transform:h.matchLanguage,fallback:"en"},isPreconfigured:{required:!0,fallback:!1},width:{validate:d,transform:d},height:{validate:d,transform:d},theme:{fallback:[m(s.val,s,"widgets:theme")],validate:f},tweetLimit:{transform:a.asInt},partner:{fallback:m(s.val,s,"partner")},staticContent:{required:!1,transform:a.asBoolean}}),e.selectors({header:".timeline-Header",footer:".timeline-Footer",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet"}),e.around("scribeNamespace",function(e){return c.aug(e(),{page:"timeline"})}),e.around("scribeData",function(e){var t=this.params.dataSource.id;return c.aug(e(),{widget_id:a.isNumber(t)?t:void 0,widget_data_source:t,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),e.around("widgetDataAttributes",function(e){return c.aug({"widget-id":this.params.dataSource.id,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},e())}),e.define("updateViewportHeight",function(){var e,t=this.sandbox,o=this.selectOne("header"),i=this.selectOne("footer"),n=this.selectOne("viewport");return r.read(function(){e=t.height-2*T,e-=o?o.offsetHeight:0,e-=i?i.offsetHeight:0}),r.write(function(){n.style.height=e+"px"})}),e.define("adjustWidgetSize",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),e.define("scribeImpressionsForInitialTweetSet",function(){var e=l(this.select("tweetsInStream")),t=Object.keys(e),o=t.length?"results":"no_results",i=this.el.getAttribute("data-collection-id");i&&(t.push(i),e[i]={item_type:g.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:o},{item_ids:t,item_details:e})}),e.override("initialize",function(){this.params.width||(this.params.width=this.params.isPreconfigured?x:y),this.isStaticTimeline=this.params.staticContent||this.params.tweetLimit>0,this.params.theme=this.params.theme||"light",this.isFullyExpanded=this.isStaticTimeline||!this.params.isPreconfigured&&!this.params.height,this.isFullyExpanded||this.params.height||(this.params.height=C)}),e.override("hydrate",function(){var e=this;return this.params.dataSource.fetch().then(function(t){e.html=t.html,p(e,t,b.INITIAL)})}),e.override("render",function(){var e,t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,this.isFullyExpanded&&this.sandbox.addRootClass("var-fully-expanded"),this.isStaticTimeline&&this.sandbox.addRootClass("var-static"),e=n.timeline(this.params.lang,this.params.theme),i.all([this.sandbox.appendStyleSheet(e),this.sandbox.styleSelf({display:"inline-block",maxWidth:y,width:this.params.width,minWidth:v,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):i.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox,t=this;return this.sandbox.makeVisible().then(function(){return e.styleSelf({minHeight:t.isStaticTimeline?void 0:k,height:t.params.height})}).then(function(){return t.adjustWidgetSize()}).then(function(){return r.read(function(){t.scribeImpressionsForInitialTweetSet()})})}),e.last("resize",function(){return this.adjustWidgetSize()})})},236:function(e,t,o){var i=o(16),n=o(185);e.exports=function(e){e.params({chrome:{transform:n,fallback:""}}),e.selectors({streamContainer:".timeline-Viewport",tweetStream:".timeline-TweetList"}),e.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),e.after("render",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.after("resize",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.define("hideScrollBar",function(){var e=this.selectOne("streamContainer"),t=this.selectOne("tweetStream");return i.defer(function(){var o,i;e.style.width="",o=e.offsetWidth-t.offsetWidth,i=e.offsetWidth+o,e.style.width=i+"px"})})}},237:function(e,t){e.exports=function(e){e.params({ariaLive:{fallback:""}}),e.selectors({newTweetsNotifier:".new-tweets-bar"}),e.after("render",function(){var e=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&e&&e.setAttribute("aria-live","assertive")})}},238:function(e,t,o){var i=o(6),n=o(171);e.exports=n.couple(o(215),function(e){e.override("resizeSandboxDueToCardChange",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():i.resolve()})})},239:function(e,t,o){var i=o(2),n=o(6),r=o(10),s=o(16),a=o(1),c=o(9),w=o(0),m=o(171),l=o(173),d=o(240),u=o(219),h=o(24),f=o(241),p=o(209),g=50,b=5e3,v=500,y="is-atEndOfTimeline";e.exports=m.couple(o(172),function(e){e.params({dataSource:{required:!0},isPreviewTimeline:{required:!1,fallback:!1}}),e.selectors({timelineTweet:".timeline-Tweet",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet",newTweetsNotifier:".new-tweets-bar",loadMore:".timeline-LoadMore",loadMoreButton:".timeline-LoadMore-prompt"}),e.define("gcTweetsSync",function(){var e="custom"===this.el.getAttribute("data-timeline-type"),t=this.selectOne("tweetList");if(e)return n.resolve();d(t,g)}),e.define("scribeImpressionsForDynamicTweetSet",function(e,t){var o=w.toRealArray(e.querySelectorAll(this.selectors.timelineTweet)),i=l(o),n=Object.keys(i),r=t?"newer":"older",s=t?f.CLIENT_SIDE_APP:f.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:r,action:"results"},{item_ids:n,item_details:i,event_initiator:s})}),e.define("fetchTweets",function(e,t){var o=this,i=function(e,t,o){var i={};return e=e||{},o&&e.max?i.minPosition=e.max:!o&&e.min?i.maxPosition=e.min:o?i.sinceId=t:i.maxId=t,i}(this.cursors,e,t);return this.params.dataSource.poll(i,t).then(function(i){var n,r,s=o.sandbox.createFragment(),a=o.sandbox.createElement("ol"),c=t?p.NEWER:p.OLDER;return u(o,i,c),a.innerHTML=i.html,(n=a.firstElementChild)&&(r=o.selectOne(n,"timelineTweet")),r&&"LI"===n.tagName?(r.getAttribute("data-tweet-id")===e&&a.removeChild(n),o.scribeImpressionsForDynamicTweetSet(a,t),o.prepForInsertion(a),w.toRealArray(a.children).forEach(function(e){s.appendChild(e)}),s):s},function(e){return"404"===e?o.pollInterval=null:"503"===e&&(o.pollInterval*=1.5),n.reject(e)})}),e.define("loadOldTweets",function(){var e=this,t=this.selectLast("tweetsInStream"),o=t&&t.getAttribute("data-tweet-id");return o?this.fetchTweets(o,!1).then(function(t){var o=e.selectOne("tweetList"),i=e.selectOne("loadMore");return s.write(function(){t.childNodes.length>0?o.appendChild(t):r.add(i,y)})}):n.reject(new Error("unable to load more"))}),e.after("loadOldTweets",function(){return h.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"}),this.resize()}),e.define("loadNewTweets",function(){var e=this,t=this.selectOne("tweetsInStream"),o=t&&t.getAttribute("data-tweet-id");return o?this.fetchTweets(o,!0).then(function(t){var o,i,n=e.selectOne("viewport"),r=e.selectOne("tweetList");if(0!==t.childNodes.length)return s.read(function(){o=n.scrollTop,i=n.scrollHeight}),s.defer(function(){var s;r.insertBefore(t,r.firstElementChild),s=o+n.scrollHeight-i,o>40||e.mouseIsOverWidget?(n.scrollTop=s,e.showNewTweetsNotifier()):(n.scrollTop=0,e.gcTweetsSync())})}):n.reject(new Error("unable to load new tweets"))}),e.after("loadNewTweets",function(){return h.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"}),this.resize()}),e.define("showNewTweetsNotifier",function(){var e=this,t=this.selectOne("newTweetsNotifier"),o=t&&t.firstElementChild;return a.setTimeout(function(){e.hideNewTweetsNotifier()},b),s.write(function(){t.removeChild(o),t.appendChild(o),r.add(t,"is-displayed")}),s.defer(function(){r.add(t,"is-opaque")})}),e.define("hideNewTweetsNotifier",function(e){var t=new i,o=this.selectOne("newTweetsNotifier");return!(e=e||{}).force&&this.mouseIsOverNewTweetsNotifier?(t.resolve(),t.promise):(s.write(function(){r.remove(o,"is-opaque")}),a.setTimeout(function(){s.write(function(){r.remove(o,"is-displayed")}).then(t.resolve,t.reject)},v),t.promise)}),e.define("scrollToTopOfViewport",function(){var e=this.selectOne("viewport");return s.write(function(){e.scrollTop=0,e.focus()})}),e.define("schedulePolling",function(){var e=this,t=c.get("timeline.pollInterval");function o(){e.isPollInProgress=!1}!function i(){var n=t||e.pollInterval;n&&a.setTimeout(function(){e.isPollInProgress||(e.isPollInProgress=!0,e.loadNewTweets(e.sandbox).then(o,o)),i()},n)}()}),e.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),e.after("render",function(){this.isStaticTimeline||this.params.isPreviewTimeline||(this.select("timelineTweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})})},240:function(e,t){e.exports=function(e,t){if(e)for(;e.children[t];)e.removeChild(e.children[t])}},241:function(e){e.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},242:function(e,t,o){var i=o(32),n=o(201),r=o(7),s=".customisable-border";e.exports=function(e){e.params({borderColor:{fallback:[r(i.val,i,"widgets:border-color")],validate:n}}),e.after("render",function(){var e=this.params.borderColor;e&&this.sandbox.appendCss(function(e){return s+"{border-color:"+e+";}"}(e))})}},243:function(e,t,o){var i=o(32),n=o(216),r=o(201),s=o(7),a=[".customisable",".customisable:link",".customisable:visited"],c=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"];function w(e){return e.join(",")}e.exports=function(e){e.params({linkColor:{fallback:s(i.val,i,"widgets:link-color"),validate:r}}),e.after("render",function(){var e=this.params.linkColor;e&&this.sandbox.appendCss(function(e){return[w(a)+"{color:"+e+";}",w(c)+"{color:"+n.lighten(e,.2)+";}"].join("")}(e))})}},244:function(e,t,o){var i=o(70),n=o(8),r=o(9),s=o(245),a="https://web.archive.org/web/20190102231549/https://cdn.platform.openx.com/libs/twitter/twitter_adapter.js",c="publish.twitter.com"===n.host&&"/preview"===n.pathname,w=s.indexOf(n.host)>-1||c;e.exports=function(e){var t;e.after("show",function(){var e=r.get("shouldForceAdsInjection");i.isAllowedAds().then(function(o){(e||o&&w)&&((t=this.sandbox.createElement("script")).src=a,this.el.appendChild(t))}.bind(this))})}},245:function(e){e.exports=["1011now.com","13abc.com","247sports.com","360.columbian.com","abc12.com","abovethelaw.com","abqjournal.com","adservingtests.com","agupdate.com","agweb.com","airwaysmag.com","al.com","al.milesplit.com","allaccess.com","allpoliticsnow.com","allspark.com","alternativenation.net","annistonstar.com","ar.milesplit.com","attractionsmagazine.com","auburnpub.com","az.milesplit.com","azdailysun.com","bachbracket.com","backofthecage.com","baseball.realgm.com","basketball.realgm.com","basketballinsiders.com","bbs.clutchfans.net","beatricedailysun.com","beaumontenterprise.com","berkeleyside.com","bestclassicbands.com","biblemoneymatters.com","bicycleretailer.com","big10central.com","bigbluebanter.com","billingsgazette.com","bismarcktribune.com","blackenterprise.com","blogmickey.com","bookmarks.reviews","bozemandailychronicle.com","breakingone.com","brickset.com","ca.milesplit.com","cdn.columbian.com","celebuzz.com","celiac.com","chicagomaroon.com","chipandco.com","chippewa.com","chron.com","classifieds.columbian.com","clemsonsportstalk.com","clutchfans.com","clutchfans.net","clutchpoints.com","co.milesplit.com","columbian.com","columbustelegram.com","comingsoon.net","countrymusicnation.com","crimereads.com","ct.milesplit.com","cumberlink.com","dailyadvance.com","dailyamerican.com","dailygalaxy.com","dailyjournalonline.com","dawgpost.com","dealnews.com","democratherald.com","disneycruiselineblog.com","divinelifestyle.com","diynatural.com","dolartoday.com","dottzgaming.com","earthsky.org","easytravel101.com","elkodaily.com","entrepreneur.com","events.columbian.com","extratv.com","f4wonline.com","fanfest.com","fightful.com","fl.milesplit.com","floridastate.rivals.com","football.realgm.com","forums.sherdog.com","fremonttribune.com","ga.milesplit.com","galvnews.com","gametimect.com","garagesales.columbian.com","gazettetimes.com","gematsu.com","glidemagazine.com","globegazette.com","hanfordsentinel.com","helenair.com","herald-review.com","heraldandnews.com","hfboards.mandatory.com","hip-hopvibe.com","hiphop-n-more.com","hitechanswers.net","hjnews.com","hockey.realgm.com","houstonchronicle.com","ia.milesplit.com","idahosports.com","il.milesplit.com","illinoisloyalty.com","in.milesplit.com","insidelacrosse.com","insidepacksports.com","insidethegators.com","insidethemagic.net","iowa.rivals.com","irealhousewives.com","irishsportsdaily.com","jg-tc.com","journalstar.com","journaltimes.com","kalb.com","kcrg.com","kendallcountynow.com","kfyrtv.com","kktv.com","kmaland.com","knoe.com","kolotv.com","kron4.com","ks.milesplit.com","ksfy.com","kusi.com","kwqc.com","kwtx.com","kxan.com","kxii.com","ky.milesplit.com","lacrossetribune.com","laughingplace.com","lebanon-express.com/","lifedaily.com","listenonrepeat.com","lithub.com","livesoccertv.com","localadventurer.com","lompocrecord.com","ma.milesplit.com","madison.com","magicvalley.com","mandatory.com","marketrealist.com","md.milesplit.com","me.milesplit.com","metsmerizedonline.com","miami.rivals.com","michigan.rivals.com","milesplit.com","missoulanews.com","missoulian.com","mlive.com","mn.milesplit.com","mo.milesplit.com","ms.milesplit.com","mtstandard.com","muscatinejournal.com","music.allaccess.com","mysanantonio.com","n.rivals.com","napavalleyregister.com","nc.milesplit.com","nebraska.rivals.com","nhregister.com","nj.milesplit.com","notredame.rivals.com","nwherald.com","nwitimes.com","ny.milesplit.com","nyunews.com","oh.milesplit.com","onmilwaukee.com","onwardstate.com","oregonlive.com","ourtownjohnstown.com","pa.milesplit.com","pantagraph.com","patsfans.com","pba.com","pennlive.com","philadelphiaweekly.com","phillytrib.com","poststar.com","projects.columbian.com","prostoknow.com","prowrestling.com","qconline.com","qctimes.com","qctoday.com","rap-up.com","rapidcityjournal.com","ravallirepublic.com","realestate.columbian.com","realgm.com","realmoney.thestreet.com","reflector.com","ri.milesplit.com","rivals.com","rockymounttelegram.com","safeliving101.com","sandiegomagazine.com","santamariatimes.com","saukvalley.com","sc.milesplit.com","scoopduck.com","seattlepi.com","secure2.thestreet.com","severestudios.com","sfasawmill.com","sfchronicle.com","sfgate.com","sherdog.com","sicem365.com","silive.com","siouxcityjournal.com","smartonmoney.com","socaluncensored.com","soccer.realgm.com","southcarolina.rivals.com","spacenews.com","spotrac.com","stageagent.com","stardewvalleywiki.com","stltoday.com","syvnnews.com","tarheeltimes.com","tdn.com","tennisnow.com","texags.com","thedartmouth.com","thejasminebrand.com","thepostgame.com","thereal.com","thesouthern.com","thestreet.com","thetandd.com","thetennischannel.com","theticketfm.com","theworldlink.com","tigerbait.com","timegoggles.com","tn.milesplit.com","trekmovie.com","trib.com","trojaninsider.com","trueachievements.com","truetrophies.com","tucson.com","tx.milesplit.com","uga.rivals.com","uncached.com","uppermichiganssource.com","urbanbellemag.com","ut.milesplit.com","va.milesplit.com","walterfootball.com","wausaupilotandreview.com","wbay.com","wbbjtv.com","wccbcharlotte.com","wcfcourier.com","wctv.tv","wdwinfo.com","wdwnt.com","whiskers101.com","whoabella.com","winonadailynews.com","wiscnews.com","wkyt.com","wpri.com","wrestlinginc.com","wsaz.com","wtrf.com","wvlt.tv","www.1011now.com","www.13abc.com","www.247sports.com","www.360.columbian.com","www.abc12.com","www.abovethelaw.com","www.abqjournal.com","www.adservingtests.com","www.agupdate.com","www.agweb.com","www.airwaysmag.com","www.al.com","www.al.milesplit.com","www.allaccess.com","www.allpoliticsnow.com","www.allspark.com","www.alternativenation.net","www.annistonstar.com","www.ar.milesplit.com","www.attractionsmagazine.com","www.auburnpub.com","www.az.milesplit.com","www.azdailysun.com","www.bachbracket.com","www.backofthecage.com","www.baseball.realgm.com","www.basketball.realgm.com","www.basketballinsiders.com","www.bbs.clutchfans.net","www.beatricedailysun.com","www.beaumontenterprise.com","www.berkeleyside.com","www.bestclassicbands.com","www.biblemoneymatters.com","www.bicycleretailer.com","www.big10central.com","www.bigbluebanter.com","www.billingsgazette.com","www.bismarcktribune.com","www.blackenterprise.com","www.blogmickey.com","www.bookmarks.reviews","www.bozemandailychronicle.com","www.breakingone.com","www.brickset.com","www.ca.milesplit.com","www.cdn.columbian.com","www.celebuzz.com","www.celiac.com","www.chicagomaroon.com","www.chipandco.com","www.chippewa.com","www.chron.com","www.classifieds.columbian.com","www.clemsonsportstalk.com","www.clutchfans.com","www.clutchfans.net","www.clutchpoints.com","www.co.milesplit.com","www.columbian.com","www.columbustelegram.com","www.comingsoon.net","www.countrymusicnation.com","www.crimereads.com","www.ct.milesplit.com","www.cumberlink.com","www.dailyadvance.com","www.dailyamerican.com","www.dailygalaxy.com","www.dailyjournalonline.com","www.dawgpost.com","www.dealnews.com","www.democratherald.com","www.disneycruiselineblog.com","www.divinelifestyle.com","www.diynatural.com","www.dolartoday.com","www.dottzgaming.com","www.earthsky.org","www.easytravel101.com","www.elkodaily.com","www.entrepreneur.com","www.events.columbian.com","www.extratv.com","www.f4wonline.com","www.fanfest.com","www.fightful.com","www.fl.milesplit.com","www.floridastate.rivals.com","www.football.realgm.com","www.forums.sherdog.com","www.fremonttribune.com","www.ga.milesplit.com","www.galvnews.com","www.gametimect.com","www.garagesales.columbian.com","www.gazettetimes.com","www.gematsu.com","www.glidemagazine.com","www.globegazette.com","www.hanfordsentinel.com","www.helenair.com","www.herald-review.com","www.heraldandnews.com","www.hfboards.mandatory.com","www.hip-hopvibe.com","www.hiphop-n-more.com","www.hitechanswers.net","www.hjnews.com","www.hockey.realgm.com","www.houstonchronicle.com","www.ia.milesplit.com","www.idahosports.com","www.il.milesplit.com","www.illinoisloyalty.com","www.in.milesplit.com","www.insidelacrosse.com","www.insidepacksports.com","www.insidethegators.com","www.insidethemagic.net","www.iowa.rivals.com","www.irealhousewives.com","www.irishsportsdaily.com","www.jg-tc.com","www.journalstar.com","www.journaltimes.com","www.kalb.com","www.kcrg.com","www.kendallcountynow.com","www.kfyrtv.com","www.kktv.com","www.kmaland.com","www.knoe.com","www.kolotv.com","www.kron4.com","www.ks.milesplit.com","www.ksfy.com","www.kusi.com","www.kwqc.com","www.kwtx.com","www.kxan.com","www.kxii.com","www.ky.milesplit.com","www.lacrossetribune.com","www.laughingplace.com","www.lebanon-express.com/","www.lifedaily.com","www.listenonrepeat.com","www.lithub.com","www.livesoccertv.com","www.localadventurer.com","www.lompocrecord.com","www.ma.milesplit.com","www.madison.com","www.magicvalley.com","www.mandatory.com","www.marketrealist.com","www.md.milesplit.com","www.me.milesplit.com","www.metsmerizedonline.com","www.miami.rivals.com","www.michigan.rivals.com","www.milesplit.com","www.missoulanews.com","www.missoulian.com","www.mlive.com","www.mn.milesplit.com","www.mo.milesplit.com","www.ms.milesplit.com","www.mtstandard.com","www.muscatinejournal.com","www.music.allaccess.com","www.mysanantonio.com","www.n.rivals.com","www.napavalleyregister.com","www.nc.milesplit.com","www.nebraska.rivals.com","www.nhregister.com","www.nj.milesplit.com","www.notredame.rivals.com","www.nwherald.com","www.nwitimes.com","www.ny.milesplit.com","www.nyunews.com","www.oh.milesplit.com","www.onmilwaukee.com","www.onwardstate.com","www.oregonlive.com","www.ourtownjohnstown.com","www.pa.milesplit.com","www.pantagraph.com","www.patsfans.com","www.pba.com","www.pennlive.com","www.philadelphiaweekly.com","www.phillytrib.com","www.poststar.com","www.projects.columbian.com","www.prostoknow.com","www.prowrestling.com","www.qconline.com","www.qctimes.com","www.qctoday.com","www.rap-up.com","www.rapidcityjournal.com","www.ravallirepublic.com","www.realestate.columbian.com","www.realgm.com","www.realmoney.thestreet.com","www.reflector.com","www.ri.milesplit.com","www.rivals.com","www.rockymounttelegram.com","www.safeliving101.com","www.sandiegomagazine.com","www.santamariatimes.com","www.saukvalley.com","www.sc.milesplit.com","www.scoopduck.com","www.seattlepi.com","www.secure2.thestreet.com","www.severestudios.com","www.sfasawmill.com","www.sfchronicle.com","www.sfgate.com","www.sherdog.com","www.sicem365.com","www.silive.com","www.siouxcityjournal.com","www.smartonmoney.com","www.socaluncensored.com","www.soccer.realgm.com","www.southcarolina.rivals.com","www.spacenews.com","www.spotrac.com","www.stageagent.com","www.stardewvalleywiki.com","www.stltoday.com","www.syvnnews.com","www.tarheeltimes.com","www.tdn.com","www.tennisnow.com","www.texags.com","www.thedartmouth.com","www.thejasminebrand.com","www.thepostgame.com","www.thereal.com","www.thesouthern.com","www.thestreet.com","www.thetandd.com","www.thetennischannel.com","www.theticketfm.com","www.theworldlink.com","www.tigerbait.com","www.timegoggles.com","www.tn.milesplit.com","www.trekmovie.com","www.trib.com","www.trojaninsider.com","www.trueachievements.com","www.truetrophies.com","www.tucson.com","www.tx.milesplit.com","www.uga.rivals.com","www.uncached.com","www.uppermichiganssource.com","www.urbanbellemag.com","www.ut.milesplit.com","www.va.milesplit.com","www.walterfootball.com","www.wausaupilotandreview.com","www.wbay.com","www.wbbjtv.com","www.wccbcharlotte.com","www.wcfcourier.com","www.wctv.tv","www.wdwinfo.com","www.wdwnt.com","www.whiskers101.com","www.whoabella.com","www.winonadailynews.com","www.wiscnews.com","www.wkyt.com","www.wpri.com","www.wrestlinginc.com","www.wsaz.com","www.wtrf.com","www.wvlt.tv","www.wy.milesplit.com","www.wymt.com","www.ytravelblog.com","www.zabihah.com","wy.milesplit.com","wymt.com","ytravelblog.com","zabihah.com"]},90:function(e,t,o){var i=o(171);e.exports=i.build([o(235),o(236),o(197),o(198),o(176),o(186),o(181),o(237),o(191),o(192),o(189),o(190),o(210),o(211),o(212),o(238),o(239),o(207),o(196),o(195),o(242),o(243),o(193),o(194),o(199),o(217),o(244)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:[330,430,550,660,820,970]})}}]);

}
/*
     FILE ARCHIVED ON 23:15:49 Jan 02, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:30:08 Jun 15, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 949.984
  exclusion.robots: 0.153
  exclusion.robots.policy: 0.144
  cdx.remote: 0.076
  esindex: 0.012
  LoadShardBlock: 138.297 (3)
  PetaboxLoader3.datanode: 162.516 (5)
  load_resource: 201.446 (2)
  PetaboxLoader3.resolve: 127.717 (2)
*/