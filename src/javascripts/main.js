function GCalc (data) {
    if (data == "") { return; }
    var str = data.split(",");
    var num = str.map(n => parseInt(n));
    var stats = statistical.methods.summary(num);
    var svar = statistical.methods.sampleVariance(num);
    var sstd = statistical.methods.sampleStdDeviation(num);
    $("#min").text(stats['min']);
    $("#med").text(stats['median']);
    $("#max").text(stats['max']);
    $("#mean").text(stats['mean']);
    $("#var").text(stats['variance']);
    $("#std").text(stats['stdDeviation']);
    $("#q1").text(stats['quantile']['q1']);
    $("#q3").text(stats['quantile']['q3']);
    $("#iqr").text(stats['quantile']['q3'] - stats['quantile']['q1']);
    $("#svar").text(svar);
    $("#sstd").text(sstd);
    frequencygraph(num);
}

function frequencygraph(numbers) {
    var uniquevalues = numbers.filter((v, i, numbers) =>  numbers.indexOf(v) === i );
    var counts = uniquevalues.map((v) => {
        let count = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == v) { count += 1; }
        }
        return count;
    });
    var xVals = uniquevalues.map((v) => "("+v.toString()+")");
    var data = [{x: xVals, y: counts, type: 'bar'}];
    var layout = {title: 'Frequencies', useResizeHandler: true, autosize: true, height: undefined, width: undefined};
    Plotly.newPlot('display', data, layout);
}

function addEvents(ext) {
    if (ext == "home") {
        $(window).off("resize");
        $("#gCalcbutton").click(() => GCalc($("#gdata").val()));
        $(window).on("resize", () => GCalc($("#gdata").val()));
    }
    else {
        $(window).off("resize");
    }
}

function hashchange(e) {
    $(".mainPage").first().fadeOut(() => {
        if (!e) { e = "#home"; }
        var ext = e.split("#")[1];
        var file = "src/pages/"+ext+".html";
        $(".mainPage").first().load(file).fadeIn( () => addEvents(ext));
    });
}

$(document).ready(function() {
    $(window).on("hashchange", (e) => hashchange(window.location.hash));
    hashchange(window.location.hash);
});
