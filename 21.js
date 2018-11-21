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
