// TODO
// - Path in the url when modal window is open


(function(){
    var events = function(){
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);

                    return;
                }
            }
        });

        var $modal = $('.modal-window'),
            $nav   = $('.nav');

        $('body').on({
            click: function(event){
                var $this  = $(this),
                    $event = $(event.target);

                if ($event.hasClass('nav-item') || $event.parent().hasClass('nav-item')) {
                    $nav.removeClass('expanded');
                }

                if ($event.hasClass('menu-icon') || $event.parent().hasClass('menu-icon')) {
                    $nav.toggleClass('expanded');
                    return false;
                }

                if ($event.hasClass('pi-close-circle')) {
                    $modal.removeClass('visible').addClass('hidden');
                    $this.removeClass('overflow-hidden');
                    return false;
                }
                if ($event.hasClass('project-item')) {
                    var dataID = $event.data('id');

                    $('.modal-window--' + dataID + ':eq(0)').removeClass('hidden').addClass('visible');
                    $this.addClass('overflow-hidden');
                    return false;
                }

                if ($event.hasClass('project') && $event.parent().hasClass('modal-window')) {
                    $modal.removeClass('visible').addClass('hidden');
                    $this.removeClass('overflow-hidden');
                    return false;
                }
            },
            keyup: function(event){
                var $this  = $(this),
                    $event = $(event.target);

                if (event.keyCode == 27 && $('.modal-window:visible').length) {
                    $modal.removeClass('visible').addClass('hidden');
                    $this.removeClass('overflow-hidden');
                    return false;
                }
            }
        });
    };

    var gMaps = function(){
        var map;
        var paramanaHQ = new google.maps.LatLng(52.3683885, 4.8787973);
        var mapIcon = 'images/paramana_logo.svg'

        var MY_MAPTYPE_ID = 'custom_style';

        function initialize() {
            var featureOpts = [
                    {
                      stylers: [
                        { hue: '#536C8B' },
                        { visibility: 'simplified' },
                        { gamma: 0.2 },
                        { weight: 0.5 }
                      ]
                    },
                    {
                      elementType: 'labels',
                      stylers: [
                        { visibility: 'off' }
                      ]
                    },
                    {
                      featureType: 'water',
                      stylers: [
                        { color: '#272837' }
                      ]
                    }
                ];

            var mapOptions = {
                    zoom: 13,
                    center: paramanaHQ,
                    disableDefaultUI: true,
                    scrollwheel: false,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                    },
                    mapTypeId: MY_MAPTYPE_ID
                };



            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var styledMapOptions = {
                name: 'Custom Style'
            };

            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

            map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

            var marker = new google.maps.Marker({
              position: paramanaHQ,
              map: map,
              icon: mapIcon
          });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    };

    events();
    gMaps();
})()