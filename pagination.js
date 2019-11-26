$(function() {
 $("#load-more-link")["each"](function() {
        var a = $(this),
            b = a["data"]("load");
        if (b) $("#load-more-link")["show"]();
        $("#load-more-link")["on"]("click", function(a) {
            $("#load-more-link")["hide"]();
            $["ajax"]({
                url: b,
                success: function(a) {
                    var c = $(a)["find"](".grid-posts");
                    c["find"](".index-post")["addClass"]("post-animated post-fadeInUp");
                    $(".grid-posts")["append"](c["html"]());
                    b = $(a)["find"]("#load-more-link")["data"]("load");
                    if (b) $("#load-more-link")["show"]();
                    else {
                        $("#load-more-link")["hide"]();
                        $("#blog-pager .no-more")["addClass"]("show");
                    }
                },
                beforeSend: function() {
                    $("#blog-pager .loading")["show"]();
                },
                complete: function() {
                    $("#blog-pager .loading")["hide"]();
                }
            });
            a["preventDefault"]();
        });
    });
});