function GCalc (data) {
    var str = data.split(",");
    var num = str.map(n => parseInt(n));
    const data = statistical.methods.summary(num);
    const qrange = statistical.methods.interQuartileRange(num);
    const svariance = statistical.methods.sampleVariance(num);
    const sdev = statistical.methods.sampleStdDeviation(num);

}

$(document).ready(function() {
    /** Navigation Bar click functions, displays the content of the selected
      * Section by fading out the current content and fading in the new content
     **/
    var current_display = 0;
    $(".navigation > a").each( (i, button) => {
        $(button).click( () => {
            if (i == current_display) { return; }
            $($(".mainDisplay > div")[current_display]).fadeOut(function() {
                $($(".mainDisplay > div")[i]).fadeIn();
            });
            current_display = i;
        });
    });

    $("#generalCalcbutton").click( () =>{ GCalc($("textarea[name=gdata]").val()); } );
});
