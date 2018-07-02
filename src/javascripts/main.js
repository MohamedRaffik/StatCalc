function GCalc (data) {
    var str = data.split(",");
    var num = str.map(n => parseInt(n));
    const summary = statistical.methods.summary(num);
    const qrange = statistical.methods.interQuartileRange(num);
    const svariance = statistical.methods.sampleVariance(num);
    const sdev = statistical.methods.sampleStdDeviation(num);
    console.log(summary);
}

function addEvents(ext) {
    if (ext == "home") { $("#gCalcbutton").click( () => GCalc($("#gdata").val())); }

}

function hashchange(e) {
    $(".mainDisplay").first().fadeOut( () => {
        if (!e) { e = "#home"; window.location.hash = 'home'; }
        var ext = e.split("#")[1];
        var file = "src/pages/"+ext+".html";
        $(".mainDisplay").first().load(file).fadeIn( () => addEvents(ext));
    });
}

$(document).ready(function() {
    $(window).on("hashchange", (e) => hashchange(e.originalEvent.newURL));
    hashchange(window.location.hash);
});
