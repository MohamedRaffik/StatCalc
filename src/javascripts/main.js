function GCalc (data) {
    var str = data.split(",");
    var num = str.map(n => parseInt(n));
    const data = statistical.methods.summary(num);
    const qrange = statistical.methods.interQuartileRange(num);
    const svariance = statistical.methods.sampleVariance(num);
    const sdev = statistical.methods.sampleStdDeviation(num);

}

function hashchange(e) {
    $(".mainDisplay").first().fadeOut( () => {
        if (!e) { e = "#home"; }
        var file = "src/pages/"+e.split("#")[1];
        $(".mainDisplay").first().load(file+".html").fadeIn();
    });
}

$(document).ready(function() {
    $(window).on("hashchange", (e) => hashchange(e.originalEvent.newURL));
    hashchange(window.location.hash);
});
