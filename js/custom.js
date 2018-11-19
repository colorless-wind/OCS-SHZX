/*START MENU JS*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.menu-top').addClass('menu-shrink');
    } else {
        $('.menu-top').removeClass('menu-shrink');
    }
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
/*END MENU JS*/


var loginStatus = sessionStorage.getItem('login') || '';

function shoppingNow(e) {
    var targetEle = $(e.target);
    if (loginStatus == 'yes') {
        location.href = 'makeOrder.html';
    } else {
        location.href = 'login.html#l';
    }
}

/*START PORTFOLIO FILTERS*/
$(function () {

    if (loginStatus == 'yes') {
        $('.loginUser').html('<img src="images/logo.png"/>');
    } else {
        $('.loginUser').attr('href', 'login.html#l');
        $('.loginUser').html('登录');
    }

    var filterList = {
        init: function () {
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.app, .icon, .logo, .web'
                }
            });
        }
    };
    filterList.init();

    var goodsTypeFilterList = {
        init: function () {
            $('#goodsType').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.app'
                }
            });
        }
    };
    goodsTypeFilterList.init();
});
/*END PORTFOLIO FILTERS*/
