!function(){for(var e,n=function(){},a=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=a.length,t=window.console=window.console||{};i--;)e=a[i],t[e]||(t[e]=n)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),function(e){jQuery.fn.lightTabs=function(n){var a=function(){tabs=this,i=0,showPage=function(n){e(tabs).children("div").children("div").hide(),e(tabs).children("div").children("div").eq(n).show(),e(tabs).children("ul").children("li").removeClass("active"),e(tabs).children("ul").children("li").eq(n).addClass("active")},showPage(0),e(tabs).children("ul").children("li").each(function(n,a){e(a).attr("data-page",i),i++}),e(tabs).children("ul").children("li").click(function(){showPage(parseInt(e(this).attr("data-page")))})};return this.each(a)}}(jQuery),$(document).ready(function(){$(".tabs").lightTabs()}),$headH=$("#header").height(),$("#section-1").css("margin-top",$headH+"px"),function(e){e(window).load(function(){e("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({highlightSelector:"#nav-menu a"}),e("a[rel='next']").click(function(n){n.preventDefault();var a=e(this).parent().parent("section").next().attr("id");e.mPageScroll2id("scrollTo",a)})})}(jQuery),function(e){e(window).load(function(){e("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({scrollSpeed:1300,autoScrollSpeed:!0,pageEndSmoothScroll:!0,offset:$headH,forceSingleHighlight:!1,highlightByNextTarget:!1,disablePluginBelow:!1})})}(jQuery),ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.931011,30.359388],zoom:18},{searchControlProvider:"yandex#search"}),n=new ymaps.Placemark(e.getCenter(),{hintContent:"",balloonContent:""},{iconLayout:"default#image",iconImageHref:"img/icon-map.png",iconImageSize:[100,130],iconImageOffset:[-50,-130]});e.geoObjects.add(n)});
//# sourceMappingURL=maps/scripts.js.map
