$(document).ready(function() {
    var buttons = $(".navigation > a");
    var displays = $(".mainDisplay > div");
    var current_display = 0;

    for (let i = 0; i < buttons.length; i++) {
        $(buttons[i]).click(function() {
            $(displays[current_display]).fadeOut(function() {
                $(displays[i]).fadeIn();
            });
            current_display = i;
        });
    }

    
});
