(function($) {
"use strict";
    if(window.innerWidth <= 1068){
        $('.responsive-msg-component').hide();
    }
    $(document).ready(function(){
        $('.bs-tooltip').click(function () {
            $('.bs-tooltip').tooltip("hide");
        });
        $('.close-msg-component').click(function () {
            $('.responsive-msg-component').hide();
        });
    });
    $(document).ready(function(){
        $('.bs-tooltip').click(function () {
            $('.bs-tooltip').tooltip("hide");
        });
    });
    var App = function() {
        var MediaSize = {
            xl: 1200,
            lg: 992,
            md: 991,
            sm: 576
        };
        var ToggleClasses = {
            headerhamburger: '.toggle-sidebar',
            inputFocused: 'input-focused',
        };
        var Selector = {
            mainHeader: '.header.navbar',
            headerhamburger: '.toggle-sidebar',
            fixed: '.fixed-top',
            mainContainer: '.main-container',
            sidebar: '#sidebar',
            sidebarContent: '#sidebar-content',
            sidebarStickyContent: '.sticky-sidebar-content',
            ariaExpandedTrue: '#sidebar [aria-expanded="true"]',
            ariaExpandedFalse: '#sidebar [aria-expanded="false"]',
            contentWrapper: '#content',
            contentWrapperContent: '.container',
            mainContentArea: '.main-content',
            searchFull: '.toggle-search',
            rightBar:'.right-bar',
            overlay: {
                sidebar: '.overlay',
                cs: '.cs-overlay',
                search: '.search-overlay'
            }
        };
        var toggleFunction = {
            sidebar: function($recentSubmenu) {
                $('.sidebarCollapse').on('click', function (sidebar) {
                    sidebar.preventDefault();
                    $(Selector.mainHeader).toggleClass('expand-header');
                    $(Selector.mainContainer).toggleClass("sbar-open");
                    $('.overlay').toggleClass('show');
                    $('html,body').toggleClass('sidebar-noneoverflow');
                });
            },
            overlay: function() {
                $('#dismiss, .overlay, cs-overlay').on('click', function () {
                    // hide sidebar
                    $(Selector.mainContainer).removeClass('sbar-open');
                    // hide overlay
                    $('.overlay').removeClass('show');
                    $('html,body').removeClass('sidebar-noneoverflow');
                });
            },
            search: function() {
                $(Selector.searchFull).click(function(event) {
                    $(this).parents('.search-animated').parent().addClass('show-search');
                    $(Selector.overlay.search).addClass('show');
                    $(Selector.overlay.search).addClass('show');
                });
                $(Selector.overlay.search).click(function(event) {
                    $(this).removeClass('show');
                    $(Selector.searchFull).parents('.search-animated').parent().removeClass('show-search');
                });
            },
            rightbar: function() {
                $('.rightbarCollapse').on('click', function () {
                    $('.rightbar-overlay').toggleClass('show');
                    $('body').toggleClass('right-bar-enabled');
                });
            },
            rightbarClose: function() {
                $('.rightbar-overlay').on('click', function () {
                    $('.rightbar-overlay').removeClass('show');
                    $('body').removeClass('right-bar-enabled');
                    // Open first tab in right bar everytime
                    $('.right-bar .simplebar-content .nav-tabs .nav-item:nth-child(3) a.nav-link').removeClass('active');
                    $('.right-bar .simplebar-content .nav-tabs .nav-item:nth-child(2) a.nav-link').removeClass('active');
                    $('.right-bar .simplebar-content .nav-tabs .nav-item:nth-child(1) a.nav-link').addClass('active');
                    $('.right-bar .simplebar-content .tab-content .tab-pane:nth-child(3)').removeClass('active');
                    $('.right-bar .simplebar-content .tab-content .tab-pane:nth-child(2)').removeClass('active');
                    $('.right-bar .simplebar-content .tab-content .tab-pane:nth-child(1)').addClass('active');
                });
            },
        }
        var inBuiltfunctionality = {
            mainCatActivateScroll: function() {
                const ps = new PerfectScrollbar('.menu-categories', {
                    wheelSpeed:.5,
                    swipeEasing:!0,
                    minScrollbarLength:40,
                    maxScrollbarLength:300,
                    suppressScrollX : true
                });
                const vs = new PerfectScrollbar('.rightbar-tab', {
                    wheelSpeed:.5,
                    swipeEasing:!0,
                    minScrollbarLength:40,
                    maxScrollbarLength:300,
                    suppressScrollX : true
                });
            },
            preventScrollBody: function() {
                $('#sidebar').bind('mousewheel DOMMouseScroll', function(e) {
                    var scrollTo = null;
                    if (e.type == 'mousewheel') {
                        scrollTo = (e.originalEvent.wheelDelta * -1);
                    }
                    else if (e.type == 'DOMMouseScroll') {
                        scrollTo = 40 * e.originalEvent.detail;
                    }
                    if (scrollTo) {
                        e.preventDefault();
                        $(this).scrollTop(scrollTo + $(this).scrollTop());
                    }
                });
                $('.rightbar-tab-container').bind('mousewheel DOMMouseScroll', function(e) {
                    var scrollTo = null;
                    if (e.type == 'mousewheel') {
                        scrollTo = (e.originalEvent.wheelDelta * -1);
                    }
                    else if (e.type == 'DOMMouseScroll') {
                        scrollTo = 40 * e.originalEvent.detail;
                    }
                    if (scrollTo) {
                        e.preventDefault();
                        $(this).scrollTop(scrollTo + $(this).scrollTop());
                    }
                });
            },
            functionalDropdown: function() {
                var getDropdownElement = document.querySelectorAll('.more-dropdown .dropdown-item');
                for (var i = 0; i < getDropdownElement.length; i++) {
                    getDropdownElement[i].addEventListener('click', function() {
                        document.querySelectorAll('.more-dropdown .dropdown-toggle > span')[0].innerText = this.getAttribute('data-value');
                    })
                }
            }
        }

        var nightLightMode = {
            nightLight: function () {
                var myIcon = document.getElementById('darkModeIcon');
                $('.night-light-mode').on('click', function () {
                    if(document.body.classList.contains("darkmode")) {
                        myIcon.classList.add("la-moon");
                        myIcon.classList.remove("la-sun");

                        document.body.classList.remove("darkmode");
                        setCookie("theme", "lightmode", 365);
                    } else {
                        myIcon.classList.remove("la-moon");
                        myIcon.classList.add("la-sun");

                        document.body.classList.add("darkmode");
                        setCookie("theme", "darkmode", 365);
                    }

                    function setCookie(name, value) {
                        var d = new Date();
                        d.setTime(d.getTime() + (365*24*60*60*1000));
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = name + "=" + value + ";" + expires + ";path=/";
                    }
                })
            },
        }

        var fullScreenMode = {
            fullscreen: function() {
                var toggle;
                $('.full-screen-mode').on('click', function () {
                    toggle = !toggle;
                    var myId = document.getElementById('fullScreenIcon');
                    if(toggle){
                        myId.classList.remove("la-compress");
                        myId.classList.add("la-compress-arrows-alt");
                        var elem = document.documentElement;
                        if (elem.requestFullscreen) {
                            elem.requestFullscreen();
                        } else if (elem.mozRequestFullScreen) { /* Firefox */
                            elem.mozRequestFullScreen();
                        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                            elem.webkitRequestFullscreen();
                        } else if (elem.msRequestFullscreen) { /* IE/Edge */
                            elem.msRequestFullscreen();
                        }
                    } else if(!toggle) {
                        myId.classList.remove("la-compress-arrows-alt");
                        myId.classList.add("la-compress");
                        document.getElementById("fullScreenIcon").classList.remove('helo');
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    }
                })
            },
        }
        var _mobileResolution = {
            onRefresh: function() {
                var windowWidth = window.innerWidth;
                if ( windowWidth <= MediaSize.md ) {
                    toggleFunction.sidebar();
                }
            },
        }
        var _desktopResolution = {
            onRefresh: function() {
                var windowWidth = window.innerWidth;
                if ( windowWidth > MediaSize.md ) {
                    toggleFunction.sidebar(true);
                }
            },
        }
        function sidebarFunctionality() {
            // FOR RIPPLE EFFECT
            (function($, window, document, undefined) {
                'use strict';
                var $ripple = $('.js-ripple');
                $ripple.on('click.ui.ripple', function(e) {
                    var $this = $(this);
                    var $offset = $this.parent().offset();
                    var $circle = $this.find('.ripple-ripple__circle');
                    var x = e.pageX - $offset.left;
                    var y = e.pageY - $offset.top;
                    $circle.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                    $this.addClass('is-active');
                });
                $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
                    $(this).removeClass('is-active');
                });
            })(jQuery, window, document);
        }
        return {
            init: function() {
                toggleFunction.overlay();
                toggleFunction.search();
                toggleFunction.rightbar();
                toggleFunction.rightbarClose();
                //Darkmode
                nightLightMode.nightLight();
                fullScreenMode.fullscreen();
                _desktopResolution.onRefresh();
                _mobileResolution.onRefresh();
                sidebarFunctionality();
                inBuiltfunctionality.mainCatActivateScroll();
                inBuiltfunctionality.preventScrollBody();
                inBuiltfunctionality.functionalDropdown();
            }
        }
    }();

    $(document).ready(function() {
        App.init();
    });
})(jQuery);
