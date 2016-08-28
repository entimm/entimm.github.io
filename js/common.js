function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

$(function() {
    var bgimage = Cookies.get('bgcache');
    if (!bgimage) {
        var idx = random(backArray.length - 1);
        bgimage = backRoot + backArray[idx];
        Cookies.set('bgcache', bgimage, { expires: 0.01 });
    }
    $.backstretch(bgimage);
    //console.log("/images/background/" + backArray[idx]);
    console.log(bgimage);
    
    $("nav[role=banner]").headroom({
        offset  : 10,
        onNotTop: function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
        },
        onTop   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
        },
        onPin   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
        },
        onUnpin : function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
        }
    });
    
    $(".post-body p").each(function() {
        if($(this).find("img").length) {
            $(this).css("text-align", "center");
        }
    });

    $(".post-body img").addClass("img-thumbnail img-responsive");
});
