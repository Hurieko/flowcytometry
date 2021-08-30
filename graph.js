
//DOM Script
//Big graph elements
var mainSP, mainHT, mainSelectedGraph, mainCreatBtnBx, mainCreatBtn, mainSPXSelect, mainSPYSelect, mainHTXSelect;
//Small graph 1 elemetns
var SP1, HT1, SelectedGraph1, CreatBtnBx1, CreatBtn1, SPXSelect1, SPYSelect1, HTXSelect1;

// async function getHtml (html) {
//     let myObject = await fetch(html);
//     let myText = await myObject.text();
//     alert("hi2");
//     document.getElementById("container").innerHTML = myText;
//     reDefineDOMElem();
// }
// getHtml('graph.html');


var showAxesPopup = false;

document.addEventListener('click', function (e) {
    // console.log(e.target.parentElement);
    if (!e.target.classList.contains('btnCreate') &&
        !e.target.classList.contains('axesPopup') &&
        !e.target.closest('.axesPopup')) {
        hideAxesPopup();
    }
})



//Call this function after changing scene to Re define all dom elem
function reDefineDOMElem() {
    mainSP = document.getElementById("scatterplot");
    mainHT = document.getElementById("histogram");
    mainSelectedGraph = 0;//1=Scatterplot 2=Histogram
    mainCreatBtnBx = document.getElementById("mainCreatBtnBx");
    mainCreatBtn = document.getElementById("mainCreatBtn");
    mainSPXSelect = document.getElementById("sp-xMain");
    mainSPYSelect = document.getElementById("sp-yMain");
    mainHTXSelect = document.getElementById("ht-xMain");
    mainSPXSelect.value = mainSPYSelect.value = mainHTXSelect.value = 1;

    SP1 = document.getElementById("scatterplot1");
    HT1 = document.getElementById("histogram1");
    SelectedGraph1 = 0;//1=Scatterplot 2=Histogram
    CreatBtnBx1 = document.getElementById("CreatBtnBx1");
    CreatBtn1 = document.getElementById("CreatBtn1");
    SPXSelect1 = document.getElementById("sp-x1");
    SPYSelect1 = document.getElementById("sp-y1");
    HTXSelect1 = document.getElementById("ht-x1");
    SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;
}



//Small graph 2 elemetns
// var SP2 = document.getElementById("scatterplot2");
// var HT2 = document.getElementById("histogram2");
// var SelectedGraph2 = 0;//1=Scatterplot 2=Histogram
// var CreatBtnBx2 = document.getElementById("CreatBtnBx2");
// var CreatBtn2 = document.getElementById("CreatBtn2");
// var SPXSelect2 = document.getElementById("sp-x2");
// var SPYSelect2 = document.getElementById("sp-y2");
// var HTXSelect2 = document.getElementById("ht-x2");
// SPXSelect2.value = SPYSelect2.value = HTXSelect2.value = 1;

//Small graph 3 elemetns
// var SP3 = document.getElementById("scatterplot3");
// var HT3 = document.getElementById("histogram3");
// var SelectedGraph3 = 0;//1=Scatterplot 2=Histogram
// var CreatBtnBx3 = document.getElementById("CreatBtnBx3");
// var CreatBtn3 = document.getElementById("CreatBtn3");
// var SPXSelect3 = document.getElementById("sp-x3");
// var SPYSelect3 = document.getElementById("sp-y3");
// var HTXSelect3 = document.getElementById("ht-x3");
// SPXSelect3.value = SPYSelect3.value = HTXSelect3.value = 1;

//Small graph 4 elemetns
// var SP4 = document.getElementById("scatterplot4");
// var HT4 = document.getElementById("histogram4");
// var SelectedGraph4 = 0;//1=Scatterplot 2=Histogram
// var CreatBtnBx4 = document.getElementById("CreatBtnBx4");
// var CreatBtn4 = document.getElementById("CreatBtn4");
// var SPXSelect4 = document.getElementById("sp-x4");
// var SPYSelect4 = document.getElementById("sp-y4");
// var HTXSelect4 = document.getElementById("ht-x4");
// SPXSelect4.value = SPYSelect4.value = HTXSelect4.value = 1;


var myVar, myVar1 = null;
//Main Graph Control Functions
function selectScatterMain() {
    hideAxesPopup();
    document.getElementById("axesPopupMain").style.display = "block";
    mainSPXSelect.value = mainSPYSelect.value = mainHTXSelect.value = 1;
    mainCreatBtn.disabled = true;
    mainSelectedGraph = 1;
    mainHT.style.display = "none";
    mainSP.style.display = "block";
    mainCreatBtnBx.style.display = "block";
    showAxesPopup = true;
}
function selectHistogramMain() {
    hideAxesPopup();
    document.getElementById("axesPopupMain").style.display = "block";
    mainSPXSelect.value = mainSPYSelect.value = mainHTXSelect.value = 1;
    mainCreatBtn.disabled = true;
    mainSelectedGraph = 2;
    mainSP.style.display = "none";
    mainHT.style.display = "block";
    mainCreatBtnBx.style.display = "block";
    showAxesPopup = true;
}
function onSelectMain() {
    if (mainSelectedGraph == 1 && mainSPXSelect.value != 1 && mainSPYSelect.value != 1) {
        mainCreatBtn.disabled = false;
    }
    else if (mainSelectedGraph == 2 && mainHTXSelect.value != 1) {
        mainCreatBtn.disabled = false;
    }
    else {
        mainCreatBtn.disabled = true;
    }
}
function createGraphMain() {
    setAxis("Main");
    hideAxesPopup();
    document.getElementById("jxgbox-2").classList.toggle("dashed");
    mainCreatBtn.disabled = true;
    createPlotMain();

}
//End of Main Graph Functions

//Small Graph 1 Fucntions
function selectScatterGraph1() {
    hideAxesPopup();
    document.getElementById("axesPopupSmGraph1").style.display = "block";
    SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;
    CreatBtn1.disabled = true;
    SelectedGraph1 = 1;
    HT1.style.display = "none";
    SP1.style.display = "block";
    CreatBtnBx1.style.display = "block";
    showAxesPopup = true;
}
function selectHistogramGraph1() {
    hideAxesPopup();
    document.getElementById("axesPopupSmGraph1").style.display = "block";
    SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;
    CreatBtn1.disabled = true;
    SelectedGraph1 = 2;
    SP1.style.display = "none";
    HT1.style.display = "block";
    CreatBtnBx1.style.display = "block";
    showAxesPopup = true;
}
function onSelectGraph1() {
    if (SelectedGraph1 == 1 && SPXSelect1.value != 1 && SPYSelect1.value != 1) {
        CreatBtn1.disabled = false;
    }
    else if (SelectedGraph1 == 2 && HTXSelect1.value != 1) {
        CreatBtn1.disabled = false;
    }
    else {
        CreatBtn1.disabled = true;
    }
}
function createGraph1() {
    setAxis("1");
    hideAxesPopup();
    document.getElementById("jxgbox-3").classList.toggle("dashed");
    CreatBtn1.disabled = true;
    createPlot1();
}

//Small Graph 2 Fucntions
function selectScatterGraph2() {
    if (SP2.style.display === "none") {
        SPXSelect2.value = SPYSelect2.value = HTXSelect2.value = 1;
        CreatBtn2.disabled = true;
        SelectedGraph2 = 1;
        SP2.style.display = "block";
        HT2.style.display = "none";
        CreatBtnBx2.style.display = "block";
    }
}
function selectHistogramGraph2() {
    if (HT2.style.display === "none") {
        SPXSelect2.value = SPYSelect2.value = HTXSelect2.value = 1;
        CreatBtn2.disabled = true;
        SelectedGraph2 = 2;
        SP2.style.display = "none";
        HT2.style.display = "block";
        CreatBtnBx2.style.display = "block";
    }
}
function onSelectGraph2() {
    if (SelectedGraph2 == 1 && SPXSelect2.value != 1 && SPYSelect2.value != 1) {
        CreatBtn2.disabled = false;
    }
    else if (SelectedGraph2 == 2 && HTXSelect2.value != 1) {
        CreatBtn2.disabled = false;
    }
    else {
        CreatBtn2.disabled = true;
    }
}
function createGraph2() {
    myVar = setInterval(updatePlot2, 50);
    CreatBtn2.disabled = true;
    SPXSelect2.disabled = true;
    SPYSelect2.disabled = true;
    HTXSelect2.disabled = true;
}
//Small Graph 3 Fucntions
function selectScatterGraph3() {
    if (SP3.style.display === "none") {
        SPXSelect3.value = SPYSelect3.value = HTXSelect3.value = 1;
        CreatBtn3.disabled = true;
        SelectedGraph3 = 1;
        SP3.style.display = "block";
        HT3.style.display = "none";
        CreatBtnBx3.style.display = "block";
    }
}
function selectHistogramGraph3() {
    if (HT3.style.display === "none") {
        SPXSelect3.value = SPYSelect3.value = HTXSelect3.value = 1;
        CreatBtn3.disabled = true;
        SelectedGraph3 = 2;
        SP3.style.display = "none";
        HT3.style.display = "block";
        CreatBtnBx3.style.display = "block";
    }
}
function onSelectGraph3() {
    if (SelectedGraph3 == 1 && SPXSelect3.value != 1 && SPYSelect3.value != 1) {
        CreatBtn3.disabled = false;
    }
    else if (SelectedGraph3 == 2 && HTXSelect3.value != 1) {
        CreatBtn3.disabled = false;
    }
    else {
        CreatBtn3.disabled = true;
    }
}
function createGraph3() {
    myVar = setInterval(updatePlot3, 50);
    CreatBtn3.disabled = true;
    SPXSelect3.disabled = true;
    SPYSelect3.disabled = true;
    HTXSelect3.disabled = true;
}

//Small Graph 4 Fucntions
function selectScatterGraph4() {
    if (SP4.style.display === "none") {
        SPXSelect4.value = SPYSelect4.value = HTXSelect4.value = 1;
        CreatBtn4.disabled = true;
        SelectedGraph4 = 1;
        SP4.style.display = "block";
        HT4.style.display = "none";
        CreatBtnBx4.style.display = "block";
    }
}
function selectHistogramGraph4() {
    if (HT4.style.display === "none") {
        SPXSelect4.value = SPYSelect4.value = HTXSelect4.value = 1;
        CreatBtn4.disabled = true;
        SelectedGraph4 = 2;
        SP4.style.display = "none";
        HT4.style.display = "block";
        CreatBtnBx4.style.display = "block";
    }
}
function onSelectGraph4() {
    if (SelectedGraph4 == 1 && SPXSelect4.value != 1 && SPYSelect4.value != 1) {
        CreatBtn4.disabled = false;
    }
    else if (SelectedGraph4 == 2 && HTXSelect4.value != 1) {
        CreatBtn4.disabled = false;
    }
    else {
        CreatBtn4.disabled = true;
    }
}
function createGraph4() {
    myVar = setInterval(updatePlot4, 50);
    CreatBtn4.disabled = true;
    SPXSelect4.disabled = true;
    SPYSelect4.disabled = true;
    HTXSelect4.disabled = true;
}

function hideAxesPopup() {
    var x = document.getElementsByClassName("axesPopup");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
function setAxis(graph) {
    var xAxis = document.getElementById("xAxis" + graph);
    var yAxis = document.getElementById("yAxis" + graph);
    var xlabel = document.getElementById("xLabel" + graph);
    var ylabel = document.getElementById("yLabel" + graph);

    switch (document.getElementById("sp-x" + graph).value) {
        case '2'://FSC
            xAxis.classList.add("linear");
            xlabel.innerHTML = 'FSC';
            break;
        case '3'://SSC
            xAxis.classList.add("linear");
            xlabel.innerHTML = 'SSC';
            break;
        case '4'://Green
            xAxis.classList.add("exp");
            xlabel.innerHTML = 'Green';
            break;
        case '5'://Orange
            xAxis.classList.add("exp");
            xlabel.innerHTML = 'Orange';
            break;
    }

    switch (document.getElementById("sp-y" + graph).value) {
        case '2'://FSC
            yAxis.classList.add("linear");
            ylabel.innerHTML = 'FSC';
            break;
        case '3'://SSC
            yAxis.classList.add("linear");
            ylabel.innerHTML = 'SSC';
            break;
        case '4'://Green
            yAxis.classList.add("exp");
            ylabel.innerHTML = 'Green';
            break;
        case '5'://Orange
            yAxis.classList.add("exp");
            ylabel.innerHTML = 'Orange';
            break;

    }
    switch (document.getElementById("ht-x" + graph).value) {
        case '2'://FSC
            xAxis.classList.add("linear");
            yAxis.classList.add("count");
            xlabel.innerHTML = 'FSC';
            ylabel.innerHTML = 'Count';
            break;
        case '3'://SSC
            xAxis.classList.add("linear");
            yAxis.classList.add("count");
            xlabel.innerHTML = 'SSC';
            ylabel.innerHTML = 'Count';
            break;
        case '4'://Green
            xAxis.classList.add("exp");
            yAxis.classList.add("count");
            xlabel.innerHTML = 'Green';
            ylabel.innerHTML = 'Count';
            break;
        case '5'://Orange
            xAxis.classList.add("exp");
            yAxis.classList.add("count");
            xlabel.innerHTML = 'Orange';
            ylabel.innerHTML = 'Count';
            break;

    }
    xAxis.style.visibility = 'visible';
    yAxis.style.visibility = 'visible';
    xlabel.style.visibility = 'visible';
    ylabel.style.visibility = 'visible';
};
function hideAxis(graph) {
    var xAxis = document.getElementById("xAxis" + graph);
    var yAxis = document.getElementById("yAxis" + graph);
    var xlabel = document.getElementById("xLabel" + graph);
    var ylabel = document.getElementById("yLabel" + graph);
    xAxis.classList.remove('linear', 'exp', 'count');
    yAxis.classList.remove('linear', 'exp', 'count');
    xAxis.style.visibility = 'hidden';
    yAxis.style.visibility = 'hidden';
    xlabel.style.visibility = 'hidden';
    ylabel.style.visibility = 'hidden';
}
//END DOM

//JSXGraph
var sliderBrd, sliderFSC, sliderSSC, sliderGreen, sliderOrange;
function createSlider (){
   sliderBrd = JXG.JSXGraph.initBoard('jxgbox-1', {
        boundingbox: [-0.4, 5, 12, 0], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
    });
    sliderFSC = sliderBrd.create('slider', [[0, 4.6], [10, 4.6], [100, 100, 1000]], {
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        snapWidth: 100,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderSSC = sliderBrd.create('slider', [[0, 3.4], [10, 3.4], [100, 100, 1000]], {
        snapWidth: 100,
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderGreen = sliderBrd.create('slider', [[0, 2.2], [10, 2.2], [100, 100, 1000]], {
        snapWidth: 100,
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderOrange = sliderBrd.create('slider', [[0, 1.0], [10, 1.0], [100, 100, 1000]], {
        snapWidth: 100,
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        label: { strokeColor: 'white' },
        precision: 0
    });
} 
var currentSample = 1;
var mainBrd = null;
var mainGraph = null;
var SmlBrd1 = null;
var SmlGraph1 = null;
// var SmlBrd2 = null;
// var SmlGraph2 = null;
// var SmlBrd3 = null;
// var SmlGraph3 = null;
// var SmlBrd4 = null;
// var SmlGraph4 = null;
// const SmlBrd1 = JXG.JSXGraph.initBoard('jxgbox-3', {
//     boundingbox: [-0.1, 12, 12, -0.1], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
// });
// const SmlBrd2 = JXG.JSXGraph.initBoard('jxgbox-4', {
//     boundingbox: [-0.1, 12, 12, -0.1], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
// });
// const SmlBrd3 = JXG.JSXGraph.initBoard('jxgbox-5', {
//     boundingbox: [-0.1, 12, 12, -0.1], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
// });
// const SmlBrd4 = JXG.JSXGraph.initBoard('jxgbox-6', {
//     boundingbox: [-0.1, 12, 12, -0.1], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
// });

// var SmlGraph1 = SmlBrd1.create('curve', [[], []], { strokeWidth: 1, strokeColor: 'black' });
// var SmlGraph2 = SmlBrd2.create('curve', [[], []], { strokeWidth: 1, strokeColor: 'black' });
// var SmlGraph3 = SmlBrd3.create('curve', [[], []], { strokeWidth: 1, strokeColor: 'black' });
// var SmlGraph4 = SmlBrd4.create('curve', [[], []], { strokeWidth: 1, strokeColor: 'black' });
var countTime = 0;
var numx = 1;


var mainScatterSliderX, mainScatterValueX, mainScatterSliderY, mainScatterValueY;
var mainHistoSliderX, mainHistoValueX;

function createPlotMain() {
    let x1 = y1 = x2 = y2 = 0;
    let sw = 1;
    if (mainSelectedGraph == 1) {
        if (mainSPXSelect.value === '2' || mainSPXSelect.value === '3') {
            x2 = 2500;
        }
        else {
            x2 = 2500;
        }
        if (mainSPYSelect.value === '2' || mainSPYSelect.value === '3') {
            y1 = 2500;
        }
        else {
            y1 = 2500;
        }
    }
    else {
        sw = 1.5;
        if (mainHTXSelect.value === '2' || mainHTXSelect.value === '3') {
            x2 = 2500;
            y1 = 200;
        }
        else {
            x2 = 1000;
            y1 = 200;
        }
    }
    mainBrd = JXG.JSXGraph.initBoard('jxgbox-2', {
        boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
    });
    mainGraph = mainBrd.create('curve', [[], []], { strokeWidth: sw, strokeColor: 'black' });

    document.getElementById('closeGraphMain').style.display = 'inline';
};

function updatePlotMain() {
    mainGraph.updateDataArray = function () {
        //Set Scatter xAxis Filter multiplier
        switch (mainSPXSelect.value) {
            case '2'://FSC
                mainScatterSliderX = sliderFSC.Value();
                mainScatterValueX = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                mainScatterSliderX = sliderSSC.Value();
                mainScatterValueX = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                mainScatterSliderX = sliderGreen.Value();
                mainScatterValueX = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                mainScatterSliderX = sliderOrange.Value();
                mainScatterValueX = samplePoints.Orange[countTime];
                break;
        };
        //Set Scatter yAxis Filter multiplier
        switch (mainSPYSelect.value) {
            case '2'://FSC
                mainScatterSliderY = sliderFSC.Value();
                mainScatterValueY = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                mainScatterSliderY = sliderSSC.Value();
                mainScatterValueY = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                mainScatterSliderY = sliderGreen.Value();
                mainScatterValueY = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                mainScatterSliderY = sliderOrange.Value();
                mainScatterValueY = samplePoints.Orange[countTime];
                break;
        };
        //Set Histo xAxis Filter multiplier
        switch (mainHTXSelect.value) {
            case '2'://FSC
                mainHistoSliderX = sliderFSC.Value();
                mainHistoValueX = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                mainHistoSliderX = sliderSSC.Value();
                mainHistoValueX = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                mainHistoSliderX = sliderGreen.Value();
                mainHistoValueX = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                mainHistoSliderX = sliderOrange.Value();
                mainHistoValueX = samplePoints.Orange[countTime];
                break;
        };
        let y, x;
        if (mainSelectedGraph == 1) {
            if (mainSPXSelect.value === '2' || mainSPXSelect.value === '3') {
                x = Math.floor(mainScatterValueX * Math.pow(1.2, (mainScatterSliderX - 100) / 100 * 5) / 100);
            }
            else {
                if (mainScatterValueX > 10) {
                    let value = mainScatterValueX * Math.pow(1.2, (mainScatterSliderX - 100) / 100 * 5);
                    x = Math.floor(Math.log10(value / 10) * 2500 / Math.log10(100000 / 10));
                }
                else {
                    x = -1;
                }
            }
            if (mainSPYSelect.value === '2' || mainSPYSelect.value === '3') {
                y = Math.floor(mainScatterValueY * Math.pow(1.2, (mainScatterSliderY - 100) / 100 * 5) / 100);
            }
            else {
                if (mainScatterValueY > 10) {
                    let value = mainScatterValueY * Math.pow(1.2, (mainScatterSliderY - 100) / 100 * 5);

                    y = Math.floor((Math.log10(value) - Math.log10(10)) * 2500 / (Math.log10(100000) - Math.log10(10)));
                    // console.log((Math.log10(value)-Math.log10(10)) + ";" + y );
                }
                else {
                    y = -1;
                }
            }

        }
        // log(val)-log(min))/(log(max)-log(min))
        // (value - min) * size / (max - min)
        //Histogram
        else {
            if (mainHTXSelect.value === '2' || mainHTXSelect.value === '3') {
                var value = mainHistoValueX * Math.pow(1.2, (mainHistoSliderX - 100) / 100 * 5);
                x = Math.floor((value - 0) * 2500 / (250000 - 0));
            }
            else {
                if (mainHistoValueX > 10) {
                    let value = mainHistoValueX * Math.pow(1.2, (mainHistoSliderX - 100) / 100 * 5);
                    x = Math.floor(Math.log10(value / 10) * 2500 / Math.log10(100000 / 10));
                }
                else {
                    x = -1;
                }
            }

            countX = this.dataX.filter(value => value == x).length / 2;
            var value = 1 * Math.pow(1.2, (mainHistoSliderX - 100) / 100 * 5);
            y = Math.floor((value - 0) * 200 / (200 - 0));
            y += countX
            // for(let r = 1; r < 3; r++){

            //     y = countX + r * 9;
            //     this.dataX.push(x, x, NaN);
            //     this.dataY.push(y, y, NaN);
            // }
            // y = countX + 27;
        }
        // console.log(x + " ; " + y);
        // console.log(mainScatterValueY+ " ; " + y);
        this.dataX.push(x, x, NaN);
        this.dataY.push(y, y, NaN);
        countTime++;
    };
    mainBrd.update();
};
//END OF MAINBOARD

//SMALLBORD 1

var ScatterSliderX1, ScatterValueX1, ScatterSliderY1, ScatterValueY1;
var HistoSliderX1, HistoValueX1;

function createPlot1() {
    let x1 = y1 = x2 = y2 = 0;
    let sw = 1;
    if (SelectedGraph1 == 1) {
        if (SPXSelect1.value === '2' || SPXSelect1.value === '3') {
            x2 = 2500;
        }
        else {
            x2 = 2500;
        }
        if (SPYSelect1.value === '2' || SPYSelect1.value === '3') {
            y1 = 2500;
        }
        else {
            y1 = 2500;
        }
    }
    else {
        sw = 1.5;
        if (HTXSelect1.value === '2' || HTXSelect1.value === '3') {
            x2 = 2500;
            y1 = 200;
        }
        else {
            x2 = 1000;
            y1 = 200;
        }
    }
    SmlBrd1 = JXG.JSXGraph.initBoard('jxgbox-3', {
        boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
    });
    SmlGraph1 = SmlBrd1.create('curve', [[], []], { strokeWidth: sw, strokeColor: 'black' });

    document.getElementById('closeGraph1').style.display = 'inline';
};

function updatePlot1() {
    SmlGraph1.updateDataArray = function () {
        //Set Scatter xAxis Filter multiplier
        switch (SPXSelect1.value) {
            case '2'://FSC
                ScatterSliderX1 = sliderFSC.Value();
                ScatterValueX1 = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                ScatterSliderX1 = sliderSSC.Value();
                ScatterValueX1 = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                ScatterSliderX1 = sliderGreen.Value();
                ScatterValueX1 = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                ScatterSliderX1 = sliderOrange.Value();
                ScatterValueX1 = samplePoints.Orange[countTime];
                break;
        };
        //Set Scatter yAxis Filter multiplier
        switch (SPYSelect1.value) {
            case '2'://FSC
                ScatterSliderY1 = sliderFSC.Value();
                ScatterValueY1 = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                ScatterSliderY1 = sliderSSC.Value();
                ScatterValueY1 = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                ScatterSliderY1 = sliderGreen.Value();
                ScatterValueY1 = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                ScatterSliderY1 = sliderOrange.Value();
                ScatterValueY1 = samplePoints.Orange[countTime];
                break;
        };
        //Set Histo xAxis Filter multiplier
        switch (HTXSelect1.value) {
            case '2'://FSC
                HistoSliderX1 = sliderFSC.Value();
                HistoValueX1 = samplePoints.FSC[countTime];
                break;
            case '3'://SSC
                HistoSliderX1 = sliderSSC.Value();
                HistoValueX1 = samplePoints.SSC[countTime];
                break;
            case '4'://Green
                HistoSliderX1 = sliderGreen.Value();
                HistoValueX1 = samplePoints.Green[countTime];
                break;
            case '5'://Orange
                HistoSliderX1 = sliderOrange.Value();
                HistoValueX1 = samplePoints.Orange[countTime];
                break;
        };
        let y, x;
        if (SelectedGraph1 == 1) {
            if (SPXSelect1.value === '2' || SPXSelect1.value === '3') {
                x = Math.floor(ScatterValueX1 * Math.pow(1.2, (ScatterSliderX1 - 100) / 100 * 5) / 100);
            }
            else {
                if (ScatterValueX1 > 10) {
                    let value = ScatterValueX1 * Math.pow(1.2, (ScatterSliderX1 - 100) / 100 * 5);
                    x = Math.floor(Math.log10(value / 10) * 2500 / Math.log10(100000 / 10));
                }
                else {
                    x = -1;
                }
            }
            if (SPYSelect1.value === '2' || SPYSelect1.value === '3') {
                y = Math.floor(ScatterValueY1 * Math.pow(1.2, (ScatterSliderY1 - 100) / 100 * 5) / 100);
            }
            else {
                if (ScatterValueY1 > 10) {
                    let value = ScatterValueY1 * Math.pow(1.2, (ScatterSliderY1 - 100) / 100 * 5);

                    y = Math.floor((Math.log10(value) - Math.log10(10)) * 2500 / (Math.log10(100000) - Math.log10(10)));
                    // console.log((Math.log10(value)-Math.log10(10)) + ";" + y );
                }
                else {
                    y = -1;
                }
            }

        }
        // log(val)-log(min))/(log(max)-log(min))
        // (value - min) * size / (max - min)
        //Histogram
        else {
            if (HTXSelect1.value === '2' || HTXSelect1.value === '3') {
                var value = HistoValueX1 * Math.pow(1.2, (HistoSliderX1 - 100) / 100 * 5);
                x = Math.floor((value - 0) * 2500 / (250000 - 0));
            }
            else {
                if (HistoValueX1 > 10) {
                    let value = HistoValueX1 * Math.pow(1.2, (HistoSliderX1 - 100) / 100 * 5);
                    x = Math.floor(Math.log10(value / 10) * 2500 / Math.log10(100000 / 10));
                }
                else {
                    x = -1;
                }
            }

            countX = this.dataX.filter(value => value == x).length / 2;
            var value = 1 * Math.pow(1.2, (HistoSliderX1 - 100) / 100 * 5);
            y = Math.floor((value - 0) * 200 / (200 - 0));
            y += countX
            // for(let r = 1; r < 3; r++){

            //     y = countX + r * 9;
            //     this.dataX.push(x, x, NaN);
            //     this.dataY.push(y, y, NaN);
            // }
            // y = countX + 27;
        }
        // console.log(x + " ; " + y);
        // console.log(mainScatterValueY+ " ; " + y);
        this.dataX.push(x, x, NaN);
        this.dataY.push(y, y, NaN);
        countTime++;
    };
    SmlBrd1.update();
};
function updatePlot2() {
    if (numx % 40 == 0) {
        numx = 1;
    }
    SmlGraph2.updateDataArray = function () {
        if (j < 1000) {
            if (SPXSelect2.value == 2) {
                var sX = sliderFSC.Value();
            } else if (SPXSelect2.value == 3) {
                var sX = sliderSSC.Value();
            }
            if (SPYSelect2.value == 2) {
                var sY = sliderFSC.Value();
            } else if (SPYSelect2.value == 3) {
                var sY = sliderSSC.Value();
            }
            if (HTXSelect2.value == 2)
                var sX = sliderFSC.Value();
            else if (HTXSelect2.value == 3)
                var sX = sliderSSC.Value();

            if (SelectedGraph2 == 1) {
                x = Math.random() * sX / 100;
                y = Math.random() * sY / 100;
            }
            else {
                x = numx * sX / 2500;
                countX = this.dataX.filter(value => value == x).length
                y = (1 + countX) / 80 + 1;
            }

            this.dataX.push(x, x, NaN);
            this.dataY.push(y, y, NaN);
            numx++;
        }
    };
    SmlBrd2.update();
    k++;
}
function updatePlot3() {
    if (numx % 40 == 0) {
        numx = 1;
    }
    SmlGraph3.updateDataArray = function () {
        if (j < 1000) {
            if (SPXSelect3.value == 2) {
                var sX = sliderFSC.Value();
            } else if (SPXSelect3.value == 3) {
                var sX = sliderSSC.Value();
            }
            if (SPYSelect3.value == 2) {
                var sY = sliderFSC.Value();
            } else if (SPYSelect3.value == 3) {
                var sY = sliderSSC.Value();
            }
            if (HTXSelect3.value == 2)
                var sX = sliderFSC.Value();
            else if (HTXSelect3.value == 3)
                var sX = sliderSSC.Value();

            if (SelectedGraph3 == 1) {
                x = Math.random() * sX / 100;
                y = Math.random() * sY / 100;
            }
            else {
                x = numx * sX / 2500;
                countX = this.dataX.filter(value => value == x).length
                y = (1 + countX) / 80 + 1;
            }

            this.dataX.push(x, x, NaN);
            this.dataY.push(y, y, NaN);
            numx++;
        }
    };
    SmlBrd3.update();
    l++;
}
function updatePlot4() {
    if (numx % 40 == 0) {
        numx = 1;
    }
    SmlGraph4.updateDataArray = function () {
        if (j < 1000) {
            if (SPXSelect4.value == 2) {
                var sX = sliderFSC.Value();
            } else if (SPXSelect4.value == 3) {
                var sX = sliderSSC.Value();
            }
            if (SPYSelect4.value == 2) {
                var sY = sliderFSC.Value();
            } else if (SPYSelect4.value == 3) {
                var sY = sliderSSC.Value();
            }
            if (HTXSelect4.value == 2)
                var sX = sliderFSC.Value();
            else if (HTXSelect4.value == 3)
                var sX = sliderSSC.Value();

            if (SelectedGraph4 == 1) {
                x = Math.random() * sX / 100;
                y = Math.random() * sY / 100;
            }
            else {
                x = numx * sX / 2500;
                countX = this.dataX.filter(value => value == x).length
                y = (1 + countX) / 80 + 1;
            }

            this.dataX.push(x, x, NaN);
            this.dataY.push(y, y, NaN);
            numx++;
        }
    };
    SmlBrd4.update();
    m++;
}

var tempMain = '<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatterMain()"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogramMain()"> Add Histogram</button></div><div id="axesPopupMain" class="axesPopup axesPopupMain"><div class="arrow"></div><div id="scatterplot"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelectMain()"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-yMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelectMain()"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelectMain()"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="mainCreatBtnBx" class="col-2"><button id="mainCreatBtn" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraphMain()"> Create</button></div></div>'
var tempSm1 = '<div class="graphBtnContainerMain">' +
    '<button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatterGraph1()"> Add Scatter Plot</button>' +
    '<button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogramGraph1()"> Add Histogram</button>' +
    '</div>' +
    '<div id="axesPopupSmGraph1" class="axesPopup axesPopupSmGraph1">' +
    '<div id="scatterplot1">' +
    '<div class="row">' +
    '<div class="col-2 xAxisText">' +
    'X' +
    '</div>' +
    '<div class="col-6">' +
    '<select id="sp-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"' +
    'onchange="onSelectGraph1()">' +
    '<option value="1" selected>None</option>' +
    '<option value="2">FSC</option>' +
    '<option value="3">SSC</option>' +
    '<option value="4">Green</option>' +
    '<option value="5">Orange</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '<div class="row">' +
    '<div class="col-2 xAxisText">' +
    'Y' +
    '</div>' +
    '<div class="col-6">' +
    '<select id="sp-y1" class="form-select form-select-sm" aria-label=".form-select-sm example"' +
    'onchange="onSelectGraph1()">' +
    '<option value="1" selected>None</option>' +
    '<option value="2">FSC</option>' +
    '<option value="3">SSC</option>' +
    '<option value="4">Green</option>' +
    '<option value="5">Orange</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="histogram1">' +
    '<div class="row">' +
    '<div class="col-2 xAxisText">' +
    'X' +
    '</div>' +
    '<div class="col-6">' +
    '<select id="ht-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"' +
    'onchange="onSelectGraph1()">' +
    '<option value="1" selected>None</option>' +
    '<option value="2">FSC</option>' +
    '<option value="3">SSC</option>' +
    '<option value="4">Green</option>' +
    '<option value="5">Orange</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="CreatBtnBx1" class="col-2">' +
    '<button id="CreatBtn1" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled' +
    ' onclick="createGraph1()"> Create</button>' +
    '</div>' +
    '</div>';
function resetBrd(graph) {
    switch (graph) {
        case 'Main'://main board
            JXG.JSXGraph.freeBoard(mainBrd);
            document.getElementById('jxgbox-2').innerHTML = tempMain;
            document.getElementById("jxgbox-2").classList.toggle("dashed");
            hideAxis('Main');
            document.getElementById('closeGraphMain').style.display = 'none';

            mainSP = document.getElementById("scatterplot");
            mainHT = document.getElementById("histogram");
            mainSelectedGraph = 0;//1=Scatterplot 2=Histogram
            mainCreatBtnBx = document.getElementById("mainCreatBtnBx");
            mainCreatBtn = document.getElementById("mainCreatBtn");
            mainSPXSelect = document.getElementById("sp-xMain");
            mainSPYSelect = document.getElementById("sp-yMain");
            mainHTXSelect = document.getElementById("ht-xMain");
            mainSPXSelect.value = mainSPYSelect.value = mainHTXSelect.value = 1;

            break;
        case '1'://Small Board 1
            JXG.JSXGraph.freeBoard(SmlBrd1);
            document.getElementById('jxgbox-3').innerHTML = tempSm1;
            document.getElementById("jxgbox-3").classList.toggle("dashed");
            hideAxis('1');
            document.getElementById('closeGraph1').style.display = 'none';

            SP1 = document.getElementById("scatterplot1");
            HT1 = document.getElementById("histogram1");
            SelectedGraph1 = 0;//1=Scatterplot 2=Histogram
            CreatBtnBx1 = document.getElementById("CreatBtnBx1");
            CreatBtn1 = document.getElementById("CreatBtn1");
            SPXSelect1 = document.getElementById("sp-x1");
            SPYSelect1 = document.getElementById("sp-y1");
            HTXSelect1 = document.getElementById("ht-x1");
            SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;

            break;
    }
}

function startPlotting() {
    if (myVar || myVar1) {
        clearInterval(myVar);
        clearInterval(myVar1);
    }
    countTime = 0;
    if (mainBrd) {
        mainGraph.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        mainBrd.update();
        myVar = setInterval(updatePlotMain, 10)
    }
    if (SmlBrd1) {
        SmlGraph1.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        SmlBrd1.update();
        myVar1 = setInterval(updatePlot1, 10)
    }

};
    // if(i>=100000){
    //     
    // }