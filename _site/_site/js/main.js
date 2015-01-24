$(document).ready(function () {
    $("header .nav a").click(function (e) {
        var link = $(this).attr('href');
        if (link.indexOf('http://') !== -1) {
            return true;
        }
        e.preventDefault();
        
        if ($(link).length === 0) {
            window.location.href = 'index.html' + link;
        }

        // $(link).hide().prependTo("#main");
        // $(link).slideDown(500);
        $('html, body').animate({scrollTop: $(link).offset().top - 40}, 500);
        var url = link
        window.history.pushState({path: url} , null, url);
    });
});