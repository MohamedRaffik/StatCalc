$(document).ready(function() {
    var current_display = 0;
    $(".navigation > a").each(function(i, button) {
        $(button).click(function() {
            if (i == current_display) { return; }
            $($(".mainDisplay > div")[current_display]).fadeOut(function() {
                $($(".mainDisplay > div")[i]).fadeIn();
            });
            current_display = i;
        });
    });
});
