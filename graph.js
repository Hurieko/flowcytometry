
//DOM Script
var currentSample = 1;
var dataset = {
    id: 'sample' + currentSample
};
//Big graph elements
// var SPMain, HTMain, SelectedGraphMain, CreateBtnBxMain, CreateBtnMain, SPXSelectMain, SPYSelectMain, HTXSelectMain;
var SPMain, HTMain, SelectedGraphMain, CreateBtnBxMain, CreateBtnMain, SPXSelectMain, SPYSelectMain, HTXSelectMain;
//Small graph 1 elemetns
var SP1, HT1, SelectedGraph1, CreateBtnBx1, CreateBtn1, SPXSelect1, SPYSelect1, HTXSelect1;
//Small graph 2 elemetns
var SP2, HT2, SelectedGraph2, CreateBtnBx2, CreateBtn2, SPXSelect2, SPYSelect2, HTXSelect2;
//Small graph 3 elemetns
var SP3, HT3, SelectedGraph3, CreateBtnBx3, CreateBtn3, SPXSelect3, SPYSelect3, HTXSelect3;
//Small graph 4 elemetns
var SP4, HT4, SelectedGraph4, CreateBtnBx4, CreateBtn4, SPXSelect4, SPYSelect4, HTXSelect4;

var showAxesPopup = false;

document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('btnCreate') &&
        !e.target.classList.contains('axesPopup') &&
        !e.target.closest('.axesPopup')) {
        hideAxesPopup();
    }
})



//Call this function after changing scene to Re define all dom elem
function reDefineDOMElem() {
    SPMain = document.getElementById("scatterplot");
    HTMain = document.getElementById("histogram");
    SelectedGraphMain = 0;//1=Scatterplot 2=Histogram
    CreateBtnBxMain = document.getElementById("CreateBtnBxMain");
    CreateBtnMain = document.getElementById("CreateBtnMain");
    SPXSelectMain = document.getElementById("sp-xMain");
    SPYSelectMain = document.getElementById("sp-yMain");
    HTXSelectMain = document.getElementById("ht-xMain");
    SPXSelectMain.value = SPYSelectMain.value = HTXSelectMain.value = 1;

    SP1 = document.getElementById("scatterplot1");
    HT1 = document.getElementById("histogram1");
    SelectedGraph1 = 0;//1=Scatterplot 2=Histogram
    CreateBtnBx1 = document.getElementById("CreateBtnBx1");
    CreateBtn1 = document.getElementById("CreateBtn1");
    SPXSelect1 = document.getElementById("sp-x1");
    SPYSelect1 = document.getElementById("sp-y1");
    HTXSelect1 = document.getElementById("ht-x1");
    SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;

    SP2 = document.getElementById("scatterplot2");
    HT2 = document.getElementById("histogram2");
    SelectedGraph2 = 0;//1=Scatterplot 2=Histogram
    CreateBtnBx2 = document.getElementById("CreateBtnBx2");
    CreateBtn2 = document.getElementById("CreateBtn2");
    SPXSelect2 = document.getElementById("sp-x2");
    SPYSelect2 = document.getElementById("sp-y2");
    HTXSelect2 = document.getElementById("ht-x2");
    SPXSelect2.value = SPYSelect2.value = HTXSelect2.value = 1;

    SP3 = document.getElementById("scatterplot3");
    HT3 = document.getElementById("histogram3");
    SelectedGraph3 = 0;//1=Scatterplot 2=Histogram
    CreateBtnBx3 = document.getElementById("CreateBtnBx3");
    CreateBtn3 = document.getElementById("CreateBtn3");
    SPXSelect3 = document.getElementById("sp-x3");
    SPYSelect3 = document.getElementById("sp-y3");
    HTXSelect3 = document.getElementById("ht-x3");
    SPXSelect3.value = SPYSelect3.value = HTXSelect3.value = 1;

    SP4 = document.getElementById("scatterplot4");
    HT4 = document.getElementById("histogram4");
    SelectedGraph4 = 0;//1=Scatterplot 2=Histogram
    CreateBtnBx4 = document.getElementById("CreateBtnBx4");
    CreateBtn4 = document.getElementById("CreateBtn4");
    SPXSelect4 = document.getElementById("sp-x4");
    SPYSelect4 = document.getElementById("sp-y4");
    HTXSelect4 = document.getElementById("ht-x4");
    SPXSelect4.value = SPYSelect4.value = HTXSelect4.value = 1;

    document.getElementById("sample" + currentSample).classList.remove('disabled');
    document.getElementById("sample" + currentSample).classList.add('active');
    for(var i = 1; i < currentSample; i++){
        document.getElementById("sample" + i).classList.remove('disabled');
        document.getElementById("sample" + i).classList.remove('active');
        document.getElementById("sample" + i).classList.add('done');
    }
    // console.log(currentSample);

}

var myVar, myVar1, myVar2, myVar3, myVar4 = null;
//Main Graph Control Functions
function selectScatter (graph) {
    hideAxesPopup();
    document.getElementById("axesPopup" + graph).style.display = "block";
    window["SPXSelect" + graph].value = window["SPYSelect" + graph].value = window["HTXSelect" + graph].value = 1;
    window["CreateBtn" + graph].disabled = true;
    window["SelectedGraph" + graph] = 1;
    window["HT" + graph].style.display = "none";
    window["SP" + graph].style.display = "block";
    window["CreateBtnBx" + graph].style.display = "block";
    showAxesPopup = true;
}
function selectHistogram (graph) {
    hideAxesPopup();
    document.getElementById("axesPopup" + graph).style.display = "block";
    window["SPXSelect" + graph].value = window["SPYSelect" + graph].value = window["HTXSelect" + graph].value = 1;
    window["CreateBtn" + graph].disabled = true;
    window["SelectedGraph" + graph] = 2;
    window["HT" + graph].style.display = "block";
    window["SP" + graph].style.display = "none";
    window["CreateBtnBx" + graph].style.display = "block";
    showAxesPopup = true;
}
function onSelect(graph) {
    if (window["SelectedGraph" + graph] == 1 && window["SPXSelect" + graph].value != 1 && window["SPYSelect" + graph].value != 1) {
        window["CreateBtn" + graph].disabled = false;
    }
    else if (window["SelectedGraph" + graph] == 2 && window["HTXSelect" + graph].value != 1) {
        window["CreateBtn" + graph].disabled = false;
    }
    else {
        window["CreateBtn" + graph].disabled = true;
    }
}
function createGraph(graph) {
    setAxis(graph);
    hideAxesPopup();
    switch (graph) {
        case "Main":
            document.getElementById("jxgbox-2").classList.toggle("dashed");
            break;
        case "1":
            document.getElementById("jxgbox-3").classList.toggle("dashed");
            break;
        case "2":
            document.getElementById("jxgbox-4").classList.toggle("dashed");
            break;
        case "3":
            document.getElementById("jxgbox-5").classList.toggle("dashed");
            break;
        case "4":
            document.getElementById("jxgbox-6").classList.toggle("dashed");
            break;
    
        default:
            break;
    }
    window["CreateBtn" + graph].disabled = true;
    createPlot(graph);
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
       boundingbox: [-0.4, 5, 12, 0], axis: false, showCopyright: false, showInfobox: false, showNavigation: false, 
    });
    //registerevents: false
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


var BrdMain = null;
var GraphMain = null;
var Brd1 = null;
var Graph1 = null;
var Brd2 = null;
var Graph2 = null;
var Brd3 = null;
var Graph3 = null;
var Brd4 = null;
var Graph4 = null;
// const Brd1 = JXG.JSXGraph.initBoard('jxgbox-3', {
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

// var Graph1 = Brd1.create('curve', [[], []], { strokeWidth: 1, strokeColor: '#4E4E4E' });
// var SmlGraph2 = SmlBrd2.create('curve', [[], []], { strokeWidth: 1, strokeColor: '#4E4E4E' });
// var SmlGraph3 = SmlBrd3.create('curve', [[], []], { strokeWidth: 1, strokeColor: '#4E4E4E' });
// var SmlGraph4 = SmlBrd4.create('curve', [[], []], { strokeWidth: 1, strokeColor: '#4E4E4E' });
var countTime = {
    "Main": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0
}
var numx = 1;
var tempMain = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('Main')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('Main')"> Add Histogram</button></div><div id="axesPopupMain" class="axesPopup axesPopupMain"><div id="scatterplot"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-yMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBxMain" class="col-2"><button id="CreateBtnMain" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('Main')"> Create</button></div></div>`;
var tempSm1 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('1')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('1')"> Add Histogram</button></div><div id="axesPopup1" class="axesPopup axesPopup1"><div id="scatterplot1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx1" class="col-2"><button id="CreateBtn1" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('1')"> Create</button></div></div>`;
var tempSm2 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('2')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('2')"> Add Histogram</button></div><div id="axesPopup2" class="axesPopup axesPopup2"><div id="scatterplot2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx2" class="col-2"><button id="CreateBtn2" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('2')"> Create</button></div></div>`;
var tempSm3 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('3')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('3')"> Add Histogram</button></div><div id="axesPopup3" class="axesPopup axesPopup3"><div id="scatterplot3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx3" class="col-2"><button id="CreateBtn3" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('3')"> Create</button></div></div>`;
var tempSm4 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('4')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('4')"> Add Histogram</button></div><div id="axesPopup4" class="axesPopup axesPopup4"><div id="scatterplot4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx4" class="col-2"><button id="CreateBtn4" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('4')"> Create</button></div></div>`;

function resetBrd(graph) {
    switch (graph) {
        case 'Main'://main board
            clearInterval(myVar);
            JXG.JSXGraph.freeBoard(BrdMain);
            document.getElementById('jxgbox-2').innerHTML = tempMain;
            document.getElementById("jxgbox-2").classList.toggle("dashed");
            hideAxis('Main');
            document.getElementById('closeGraphMain').style.display = 'none';

            SPMain = document.getElementById("scatterplot");
            HTMain = document.getElementById("histogram");
            SelectedGraphMain = 0;//1=Scatterplot 2=Histogram
            CreateBtnBxMain = document.getElementById("CreateBtnBxMain");
            CreateBtnMain = document.getElementById("CreateBtnMain");
            SPXSelectMain = document.getElementById("sp-xMain");
            SPYSelectMain = document.getElementById("sp-yMain");
            HTXSelectMain = document.getElementById("ht-xMain");
            SPXSelectMain.value = SPYSelectMain.value = HTXSelectMain.value = 1;

            break;
        case '1'://Small Board 1
            clearInterval(myVar1);
            JXG.JSXGraph.freeBoard(Brd1);
            document.getElementById('jxgbox-3').innerHTML = tempSm1;
            document.getElementById("jxgbox-3").classList.toggle("dashed");
            hideAxis('1');
            document.getElementById('closeGraph1').style.display = 'none';

            SP1 = document.getElementById("scatterplot1");
            HT1 = document.getElementById("histogram1");
            SelectedGraph1 = 0;//1=Scatterplot 2=Histogram
            CreateBtnBx1 = document.getElementById("CreateBtnBx1");
            CreateBtn1 = document.getElementById("CreateBtn1");
            SPXSelect1 = document.getElementById("sp-x1");
            SPYSelect1 = document.getElementById("sp-y1");
            HTXSelect1 = document.getElementById("ht-x1");
            SPXSelect1.value = SPYSelect1.value = HTXSelect1.value = 1;

            break;
        case '2'://Small Board 2
            clearInterval(myVar2);
            JXG.JSXGraph.freeBoard(Brd2);
            document.getElementById('jxgbox-4').innerHTML = tempSm2;
            document.getElementById("jxgbox-4").classList.toggle("dashed");
            hideAxis('2');
            document.getElementById('closeGraph2').style.display = 'none';

            SP2 = document.getElementById("scatterplot2");
            HT2 = document.getElementById("histogram2");
            SelectedGraph2 = 0;//1=Scatterplot 2=Histogram
            CreateBtnBx2 = document.getElementById("CreateBtnBx2");
            CreateBtn2 = document.getElementById("CreateBtn2");
            SPXSelect2 = document.getElementById("sp-x2");
            SPYSelect2 = document.getElementById("sp-y2");
            HTXSelect2 = document.getElementById("ht-x2");
            SPXSelect2.value = SPYSelect2.value = HTXSelect2.value = 1;

            break;
        case '3'://Small Board 3
            clearInterval(myVar3);
            JXG.JSXGraph.freeBoard(Brd3);
            document.getElementById('jxgbox-5').innerHTML = tempSm3;
            document.getElementById("jxgbox-5").classList.toggle("dashed");
            hideAxis('3');
            document.getElementById('closeGraph3').style.display = 'none';

            SP3 = document.getElementById("scatterplot3");
            HT3 = document.getElementById("histogram3");
            SelectedGraph3 = 0;//1=Scatterplot 2=Histogram
            CreateBtnBx3 = document.getElementById("CreateBtnBx3");
            CreateBtn3 = document.getElementById("CreateBtn3");
            SPXSelect3 = document.getElementById("sp-x3");
            SPYSelect3 = document.getElementById("sp-y3");
            HTXSelect3 = document.getElementById("ht-x3");
            SPXSelect3.value = SPYSelect3.value = HTXSelect3.value = 1;

            break;
        case '4'://Small Board 4
            clearInterval(myVar4);
            JXG.JSXGraph.freeBoard(Brd4);
            document.getElementById('jxgbox-6').innerHTML = tempSm4;
            document.getElementById("jxgbox-6").classList.toggle("dashed");
            hideAxis('4');
            document.getElementById('closeGraph4').style.display = 'none';

            SP4 = document.getElementById("scatterplot4");
            HT4 = document.getElementById("histogram4");
            SelectedGraph4 = 0;//1=Scatterplot 2=Histogram
            CreateBtnBx4 = document.getElementById("CreateBtnBx4");
            CreateBtn4 = document.getElementById("CreateBtn4");
            SPXSelect4 = document.getElementById("sp-x4");
            SPYSelect4 = document.getElementById("sp-y4");
            HTXSelect4 = document.getElementById("ht-x4");
            SPXSelect4.value = SPYSelect4.value = HTXSelect4.value = 1;

            break;
    }
}

function startPlotting() {
    var sampleName = document.getElementById("sampleNameInput").value;
    if (sampleName == "") {
        showFeedback("NO_SAMPLE_NAME");
        return false;
    }
    countTime = {
        "Main": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    }
    if (BrdMain) {
        clearInterval(myVar);
        GraphMain.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        BrdMain.update();
        myVar = setInterval(() => { updatePlot("Main") }, 50)
    }
    if (Brd1) {
        clearInterval(myVar1);
        Graph1.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        Brd1.update();
        myVar1 = setInterval(() => { updatePlot("1") }, 50)
    }
    if (Brd2) {
        clearInterval(myVar2);
        Graph2.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        Brd2.update();
        myVar2 = setInterval(() => { updatePlot("2") }, 50)
    }
    if (Brd3) {
        clearInterval(myVar3);
        Graph3.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        Brd3.update();
        myVar3 = setInterval(() => { updatePlot("3") }, 50)
    }
    if (Brd4) {
        clearInterval(myVar4);
        Graph4.updateDataArray = function () {
            this.dataX = [];
            this.dataY = [];
        };
        Brd4.update();
        myVar4 = setInterval(() => { updatePlot("4") }, 50)
    }

};

var dataRecord = [];

function nextTube() {
    countTime = {
        "Main": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    }

    if (BrdMain) {
        GraphMain.updateDataArray = function () {
            dataset.dataXMain = this.dataX;
            dataset.dataYMain = this.dataY;
            this.dataX = [];
            this.dataY = [];
        };
        BrdMain.update();
        clearInterval(myVar);
    }
    if (Brd1) {
        Graph1.updateDataArray = function () {
            dataset.dataX1 = this.dataX;
            dataset.dataY1 = this.dataY;
            this.dataX = [];
            this.dataY = [];
        };
        Brd1.update();
        clearInterval(myVar1);
    }
    if (Brd2) {
        Graph2.updateDataArray = function () {
            dataset.dataX2 = this.dataX;
            dataset.dataY2 = this.dataY;
            this.dataX = [];
            this.dataY = [];
        };
        Brd2.update();
        clearInterval(myVar2);
    }
    if (Brd3) {
        Graph3.updateDataArray = function () {
            dataset.dataX3 = this.dataX;
            dataset.dataY3 = this.dataY;
            this.dataX = [];
            this.dataY = [];
        };
        Brd3.update();
        clearInterval(myVar3);
    }
    if (Brd4) {
        Graph4.updateDataArray = function () {
            dataset.dataX4 = this.dataX;
            dataset.dataY4 = this.dataY;
            this.dataX = [];
            this.dataY = [];
        };
        Brd4.update();
        clearInterval(myVar4);
    }
    dataRecord.push(dataset);
    currentSample++;
    numOfUsedSample++;
    switchScene("lab");
}

function reviewGraph(id){
    
    switch (id) {
        case 1:
            currentSample = 1;
            if (BrdMain) { JXG.JSXGraph.freeBoard(BrdMain);}
            if (Brd1) { JXG.JSXGraph.freeBoard(Brd1); }
            document.getElementById("jxgbox-2").classList.toggle("dashed");
            document.getElementById("jxgbox-3").classList.toggle("dashed");
            document.getElementById('closeGraphMain').style.display = 'none';
            document.getElementById('closeGraph1').style.display = 'none';
            BrdMain = JXG.JSXGraph.initBoard('jxgbox-2', {
                boundingbox: dataRecord[0].boundingboxMain, axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            GraphMain = BrdMain.create('curve', [[], []], {
                strokeWidth: 1, strokeColor: '#4E4E4E' });
            GraphMain.updateDataArray = function () {
                this.dataX = dataRecord[0].dataXMain;
                this.dataY = dataRecord[0].dataYMain;
            };
            BrdMain.update();
            break;
    
        default:
            break;
    }

    
}

//DEFINE AND CREATE GRAPH BOARD
function createPlot(graph) {
    let x1 = y1 = x2 = y2 = 0;
    let sw = 1;
    if (window["SelectedGraph" + graph] == 1) {
        if (window["SPXSelect" + graph].value === '2' || window["SPXSelect" + graph].value === '3') {
            x2 = 2500;
        }
        else {
            x2 = 300;
        }
        if (window["SPYSelect" + graph].value === '2' || window["SPYSelect" + graph].value === '3') {
            y1 = 2500;
        }
        else {
            y1 = 300;
        }
    }
    else {
        sw = 1.5;
        if (window["HTXSelect" + graph].value === '2' || window["HTXSelect" + graph].value === '3') {
            x2 = 2500;
            y1 = 400;
        }
        else {
            x2 = 300;
            y1 = 400;
        }
    }
    dataset["boundingbox" + graph] = [x1, y1, x2, y2];
    switch (graph) {
        case "Main":
            BrdMain = JXG.JSXGraph.initBoard('jxgbox-2', {
                boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            GraphMain = BrdMain.create('curve', [[], []], { strokeWidth: sw, strokeColor: '#0E0E0E', highlight: false });
            break;
        case "1":
            Brd1 = JXG.JSXGraph.initBoard('jxgbox-3', {
                boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            Graph1 = Brd1.create('curve', [[], []], {strokeWidth: sw, strokeColor: '#0E0E0E', highlight: false});
            break;
        case "2":
            Brd2 = JXG.JSXGraph.initBoard('jxgbox-4', {
                boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            Graph2 = Brd2.create('curve', [[], []], { strokeWidth: sw, strokeColor: '#0E0E0E', highlight: false });
            break;
        case "3":
            Brd3 = JXG.JSXGraph.initBoard('jxgbox-5', {
                boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            Graph3 = Brd3.create('curve', [[], []], { strokeWidth: sw, strokeColor: '#0E0E0E', highlight: false });
            break;
        case "4":
            Brd4 = JXG.JSXGraph.initBoard('jxgbox-6', {
                boundingbox: [x1, y1, x2, y2], axis: false, showCopyright: false, showInfobox: false, showNavigation: false
            });
            Graph4 = Brd4.create('curve', [[], []], { strokeWidth: sw, strokeColor: '#0E0E0E', highlight: false });
            break;
    
        default:
            break;
    }
    
    document.getElementById('closeGraph' + graph).style.display = 'inline';
};
//END OF CreatePlot()


//GRAPH UPDATE FUNCTION
function updatePlot(graph) {
    var ScatterSliderX, ScatterValueX, ScatterSliderY, ScatterValueY;
    var HistoSliderX, HistoValueX;
    window["Graph" + graph].updateDataArray = function () {
        //Set Scatter xAxis Filter multiplier
        switch (window["SPXSelect" + graph].value) {
            case '2'://FSC
                ScatterSliderX = sliderFSC.Value();
                ScatterValueX = samplePoints.FSC[countTime[graph]];
                break;
            case '3'://SSC
                ScatterSliderX = sliderSSC.Value();
                ScatterValueX = samplePoints.SSC[countTime[graph]];
                break;
            case '4'://Green
                ScatterSliderX = sliderGreen.Value();
                ScatterValueX = samplePoints.Green[countTime[graph]];
                break;
            case '5'://Orange
                ScatterSliderX = sliderOrange.Value();
                ScatterValueX = samplePoints.Orange[countTime[graph]];
                break;
        };
        //Set Scatter yAxis Filter multiplier
        switch (window["SPYSelect" + graph].value) {
            case '2'://FSC
                ScatterSliderY = sliderFSC.Value();
                ScatterValueY = samplePoints.FSC[countTime[graph]];
                break;
            case '3'://SSC
                ScatterSliderY = sliderSSC.Value();
                ScatterValueY = samplePoints.SSC[countTime[graph]];
                break;
            case '4'://Green
                ScatterSliderY = sliderGreen.Value();
                ScatterValueY = samplePoints.Green[countTime[graph]];
                break;
            case '5'://Orange
                ScatterSliderY = sliderOrange.Value();
                ScatterValueY = samplePoints.Orange[countTime[graph]];
                break;
        };
        //Set Histo xAxis Filter multiplier
        switch (window["HTXSelect"+graph].value) {
            case '2'://FSC
                HistoSliderX = sliderFSC.Value();
                HistoValueX = samplePoints.FSC[countTime[graph]];
                break;
            case '3'://SSC
                HistoSliderX = sliderSSC.Value();
                HistoValueX = samplePoints.SSC[countTime[graph]];
                break;
            case '4'://Green
                HistoSliderX = sliderGreen.Value();
                HistoValueX = samplePoints.Green[countTime[graph]];
                break;
            case '5'://Orange
                HistoSliderX = sliderOrange.Value();
                HistoValueX = samplePoints.Orange[countTime[graph]];
                break;
        };
        let y, x;
        //Scatterplot
        if (window["SelectedGraph" + graph] == 1) {
            //Linear scale X axis
            if (window["SPXSelect"+graph].value === '2' || window["SPXSelect"+graph].value === '3') {
                x = Math.floor(ScatterValueX * Math.pow(1.2, (ScatterSliderX - 100) / 100 * 5) / 100);
            }
            else {
                //Exponential X axis
                let value = ScatterValueX * Math.pow(1.2, (ScatterSliderX - 100) / 100 * 5);
                x = Math.floor(Math.log10(value / 10) * 300 / Math.log10(100000 / 10));
            }
            //Linear scale Y axis
            if (window["SPYSelect" + graph].value === '2' || window["SPYSelect" + graph].value === '3') {
                y = Math.floor(ScatterValueY * Math.pow(1.2, (ScatterSliderY - 100) / 100 * 5) / 100);
            }
            else {
                //Exponential Y axis
                let value = ScatterValueY * Math.pow(1.2, (ScatterSliderY - 100) / 100 * 5);

                y = Math.floor(Math.log10(value / 10) * 300 / Math.log10(100000 / 10));

            }

        }
        // log(val)-log(min))/(log(max)-log(min))
        // (value - min) * size / (max - min)

        //Histogram
        else {
            //Linear Scale
            if (window["HTXSelect"+graph].value === '2' || window["HTXSelect"+graph].value === '3') {
                // var value = HistoValueX * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5) / 1000;
                x = Math.floor(HistoValueX * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5) / 1000);
                // x = Math.floor((value - 0) * 250 / (250000 - 0));
            }
            else {
                //Exponention Scale
                let value = HistoValueX * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5);
                x = Math.floor(Math.log10(value / 10) * 300 / Math.log10(100000 / 10));
            }

            countX = this.dataX.filter(value => value == x).length / 2;
            // var value = 1 * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5);
            // y = Math.floor((value - 0) * 200 / (200 - 0));
            y = countX;
            this.dataX.push(x, x, NaN);
            this.dataY.push(y, y, NaN);
            y += 1;
            // for(let r = 1; r < 3; r++){

            //     y = countX + r * 9;
            //     this.dataX.push(x, x, NaN);
            //     this.dataY.push(y, y, NaN);
            // }
            // y = countX + 27;
        }
        
        this.dataX.push(x, x, NaN);
        this.dataY.push(y, y, NaN);
        countTime[graph]++;
    };
    if (samplePoints.FSC.length <= countTime.Main - 1){
        alert("done"); return false;
    }
    
    window["Brd" + graph].update();
};