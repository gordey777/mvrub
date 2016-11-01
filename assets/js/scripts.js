// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.


//TABS

  (function($) {
    jQuery.fn.lightTabs = function(options) {

      var createTabs = function() {
        tabs = this;
        i = 0;

        showPage = function(i) {
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
        }

        showPage(0);

        $(tabs).children("ul").children("li").each(function(index, element) {
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).children("ul").children("li").click(function() {
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
    $(document).ready(function() {
    $(".tabs").lightTabs();
  });

//SCROLL

    $headH = $('#header').height() ;
      //alert($headH );
    $("#section-1").css("margin-top", $headH + "px");


    (function($){
      $(window).load(function(){

        $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector:"#nav-menu a"
        });

        $("a[rel='next']").click(function(e){
        e.preventDefault();
        var to=$(this).parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo",to);
        });

      });
    })(jQuery);

    (function($){
      $(window).load(function(){

      $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({

              scrollSpeed:1300,
              autoScrollSpeed:true,
              pageEndSmoothScroll:true,
              offset: $headH,
              forceSingleHighlight:false,
              highlightByNextTarget:false,
              /* disable plugin below [x,y] screen size: boolean, integer, array ([x,y]) */
              disablePluginBelow:false,
        });
      });
    })(jQuery);

// YMAPS
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.931011, 30.359388],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {

            iconLayout: 'default#image',
            iconImageHref: '../img/icon-map.png',
            iconImageSize: [100, 130],
            iconImageOffset: [-50, -130]
        });

    myMap.geoObjects.add(myPlacemark);
});

