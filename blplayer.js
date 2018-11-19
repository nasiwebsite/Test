$(".link-lightbox").on("click", function() {
    if (window.innerHeight > 540) var a = (window.innerHeight - 540) / 2;
    var b = '<iframe src="" width="640" height="480" id="video-embed" style="border:0;"></iframe>',
        c = '<div id="close-icon"></div>',
        d = '<div class="lightbox" style="margin-top:' + a + 'px">',
        e = '<div id="back-lightbox">',
        f = '<div id="background-close"></div>',
        g = '<div id="window">',
        h = '<div id="ref"><a href="https://101helper.blogspot.com">Powered by 101Helper</a>',
        i = "</div></div></div></div>";
    if ($("body").append(g + f + e + d + c + b + h+i), $("#window").hide(), "youtube" == $(this).data("videosite")) var i = "<object height="100%" id="BLOG_video-" + $(this).data("videoid") + "" width="100%"></object>";
    $("#window").fadeIn(), $("#video-embed").attr("src", i), $("#close-icon").on("click", function() {
        $("#window").fadeOut(1e3, function() {
            $(this).remove()
        })
    }), $("#background-close").on("click", function() {
        $("#window").fadeOut(1e3, function() {
            $(this).remove()
        })
    })
}), $(document).on("keyup", function(a) {
    27 == a.keyCode && $("#window").fadeOut(1e3, function() {
        $(this).remove()
    })
}), $(document).on("mouseover", function() {
    var a = (window.innerHeight - 540) / 2;
    $(".lightbox").attr("style", "margin-top:" + a + "px")
});
