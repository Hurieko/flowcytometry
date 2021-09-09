
//DOM Script
var currentSample = 1;
var viewingSample = 1;
var dataRecord = [];
var dataset = {};
var isRecording = false;
var isDatafinishRecording = false;
var hasDataAcquired = false;
var mainGraphIsSet = false;

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

var smallGraphsCheckList = {
    hasGreenHisto: false,
    hasOrangeHisto: false,
    hasGrnOrnScatter: false
}
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
    for(let i = 1; i < currentSample; i++){
        document.getElementById("sample" + i).classList.remove('disabled');
        document.getElementById("sample" + i).classList.remove('active');
        document.getElementById("sample" + i).classList.add('done');
    }

}

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
    let isWrong = false 
    switch (graph) {
        case "Main":
            if(SelectedGraphMain != 1){
                showFeedback("WRONG_MAIN_GRAPH_1");
                isWrong = true;
            }
            else if (window["SPXSelect" + graph].value > 3 || window["SPYSelect" + graph].value > 3) {
                showFeedback("WRONG_MAIN_GRAPH_2");
                isWrong = true;
            }
            else{
                document.getElementById("jxgbox-2").classList.toggle("dashed");
                mainGraphIsSet = true;
                break;
            }
    
        default:
            switch (graph) {
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
            break;
    }
    if (!isWrong) {
        setAxis(graph);
        hideAxesPopup();
        window["CreateBtn" + graph].disabled = true;
        createPlot(graph);
    }
}

function hideAxesPopup() {
    let x = document.getElementsByClassName("axesPopup");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
function setAxis(graph) {
    
    let xAxis = document.getElementById("xAxis" + graph);
    let yAxis = document.getElementById("yAxis" + graph);
    let xlabel = document.getElementById("xLabel" + graph);
    let ylabel = document.getElementById("yLabel" + graph);
    
    switch (window["SPXSelect" + graph].value) {
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

    switch (window["SPYSelect" + graph].value) {
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
    switch (window["HTXSelect" + graph].value) {
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
    let xAxis = document.getElementById("xAxis" + graph);
    let yAxis = document.getElementById("yAxis" + graph);
    let xlabel = document.getElementById("xLabel" + graph);
    let ylabel = document.getElementById("yLabel" + graph);
    xAxis.classList.remove('linear', 'exp', 'count');
    yAxis.classList.remove('linear', 'exp', 'count');
    xAxis.style.visibility = 'hidden';
    yAxis.style.visibility = 'hidden';
    xlabel.style.visibility = 'hidden';
    ylabel.style.visibility = 'hidden';
}
//END DOM

//JSXGraph
let sliderBrd, sliderFSC, sliderSSC, sliderGreen, sliderOrange;
let sliderFSCCurVal = sliderSSCCurVal = sliderGreenCurVal = sliderOrangeCurVal = 100;
let allowedSliderChange = true;
function createSlider (){
   sliderBrd = JXG.JSXGraph.initBoard('jxgbox-1', {
       boundingbox: [-0.4, 5, 12, 0], axis: false, showCopyright: false, showInfobox: false, showNavigation: false, registerevents: allowedSliderChange
    });
    
    sliderFSC = sliderBrd.create('slider', [[0, 4.6], [10, 4.6], [100, sliderFSCCurVal, 1000]], {
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        snapWidth: 100,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderSSC = sliderBrd.create('slider', [[0, 3.4], [10, 3.4], [100, sliderSSCCurVal, 1000]], {
        snapWidth: 100,
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderGreen = sliderBrd.create('slider', [[0, 2.2], [10, 2.2], [100, sliderGreenCurVal, 1000]], {
        snapWidth: 100,
        baseline: { strokeColor: 'white' },
        highline: { strokeColor: '#2FABEB' },
        strokeWidth: 0,
        label: { strokeColor: 'white' },
        precision: 0
    });
    sliderOrange = sliderBrd.create('slider', [[0, 1.0], [10, 1.0], [100, sliderOrangeCurVal, 1000]], {
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

var countTime = {
    "Main": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0
}
let numx = 1;
let tempMain = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('Main')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('Main')"> Add Histogram</button></div><div id="axesPopupMain" class="axesPopup axesPopupMain"><div id="scatterplot"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-yMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBxMain" class="col-2"><button id="CreateBtnMain" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('Main')"> Create</button></div></div>`;
let tempSm1 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('1')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('1')"> Add Histogram</button></div><div id="axesPopup1" class="axesPopup axesPopup1"><div id="scatterplot1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx1" class="col-2"><button id="CreateBtn1" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('1')"> Create</button></div></div>`;
let tempSm2 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('2')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('2')"> Add Histogram</button></div><div id="axesPopup2" class="axesPopup axesPopup2"><div id="scatterplot2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx2" class="col-2"><button id="CreateBtn2" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('2')"> Create</button></div></div>`;
let tempSm3 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('3')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('3')"> Add Histogram</button></div><div id="axesPopup3" class="axesPopup axesPopup3"><div id="scatterplot3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx3" class="col-2"><button id="CreateBtn3" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('3')"> Create</button></div></div>`;
let tempSm4 = `<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('4')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('4')"> Add Histogram</button></div><div id="axesPopup4" class="axesPopup axesPopup4"><div id="scatterplot4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx4" class="col-2"><button id="CreateBtn4" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('4')"> Create</button></div></div>`;

function resetBrd(graph) {
    switch (graph) {
        case 'Main'://main board
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
    hasDataAcquired = true;
    checkSmallGraphSetup();
    let sampleName = document.getElementById("sampleNameInput").value;
    if (sampleName == "") {
        showFeedback("NO_SAMPLE_NAME");
        return false;
    }
    else if (!mainGraphIsSet) {
        showFeedback("NO_MAIN_GRAPH");
        return false;
    }
    else if (!Object.values(smallGraphsCheckList).every(Boolean)) {
        showFeedback("WRONG_SMALL_GRAPH");
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
        dataset.dataXMain = [];
        dataset.dataYMain = [];
        window.requestAnimationFrame((t) => { updatePlot(t, "Main") })
    }
    if (Brd1) {
        dataset.dataX1 = [];
        dataset.dataY1 = [];
        window.requestAnimationFrame((t) => { updatePlot(t, "1") })
    }
    if (Brd2) {
        dataset.dataX2 = [];
        dataset.dataY2 = [];
        window.requestAnimationFrame((t) => { updatePlot(t, "2") })
    }
    if (Brd3) {
        dataset.dataX3 = [];
        dataset.dataY3 = [];
        window.requestAnimationFrame((t) => { updatePlot(t, "3") })
    }
    if (Brd4) {
        dataset.dataX4 = [];
        dataset.dataY4 = [];
        window.requestAnimationFrame((t) => { updatePlot(t, "4") })
    }
    return true;
};


function nextTube() {
    if (!isDatafinishRecording) {
        showFeedback("DATA_NOT_RECORDED");
        return false;
    }
    else if (numOfUsedSample >= 4){
        showFeedback("SIMULATION_END");
        return false;
    }
    countTime = {
        "Main": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
    }
    sliderFSCCurVal = sliderFSC.Value();
    sliderSSCCurVal = sliderSSC.Value();
    sliderGreenCurVal = sliderGreen.Value();
    sliderOrangeCurVal = sliderOrange.Value();
    currentSample++;
    viewingSample = currentSample;
    switchScene("lab");
}

function reviewGraph(id){
    if (viewingSample != id && !isRecording) {
        viewingSample = id;
        //Viewing Old or Recorded Samples
        if (viewingSample <= numOfUsedSample) {
            dataset = {...dataRecord[id - 1]};
                
            disableDataAcquisitionControl();
            document.getElementById('sampleNameInput').value = dataset.sampleName;
            callBoardUpdate();
            if (viewingSample == numOfUsedSample) {
                document.getElementsByClassName('ctr-btn')[2].disabled = false;
            }
        }
        //When goin back to current on going sample
        else{
            dataset = {};
            dataset.dataXMain = [];
            dataset.dataYMain = [];
            dataset.dataX1 = [];
            dataset.dataY1 = [];
            dataset.dataX2 = [];
            dataset.dataY2 = [];
            dataset.dataX3 = [];
            dataset.dataY3 = [];
            dataset.dataX4 = [];
            dataset.dataY4 = [];
            enableDataAcquisitionControl();
            document.getElementById('sampleNameInput').value = "";
            callBoardUpdate();
        }

        for (let i = 1; i <= currentSample; i++) {
            if (i != id) {
                document.getElementById("sample" + i).classList.remove('disabled');
                document.getElementById("sample" + i).classList.remove('active');
                document.getElementById("sample" + i).classList.add('done');
            }
        }
        document.getElementById("sample" + id).classList.remove('done');
        document.getElementById("sample" + id).classList.remove('disabled');
        document.getElementById("sample" + id).classList.add('active');
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
        sw = 1.2;
        if (window["HTXSelect" + graph].value === '2' || window["HTXSelect" + graph].value === '3') {
            x2 = 2500;
            y1 = 300;
        }
        else {
            x2 = 250;
            y1 = 300;
        }
    }
    
    dataset["dataX" + graph] = [];
    dataset["dataY" + graph] = [];
    
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
    window["Graph" + graph].updateDataArray = function () {
        this.dataX = dataset["dataX" + graph];
        this.dataY = dataset["dataY" + graph];
        // console.log(window["Graph" + graph]);
    };

    document.getElementById('closeGraph' + graph).style.display = 'inline';
};
//END OF CreatePlot()


//GRAPH UPDATE FUNCTION
function updatePlot(timestamp, graph) {
    let ScatterSliderX, ScatterValueX, ScatterSliderY, ScatterValueY;
    let HistoSliderX, HistoValueX;
    //Set Scatter xAxis Filter multiplier
    switch (window["SPXSelect" + graph].value) {
        case '2'://FSC
            ScatterSliderX = sliderFSC.Value();
            ScatterValueX = jsonObj[currentSample - 1].FSC[countTime[graph]];
            break;
        case '3'://SSC
            ScatterSliderX = sliderSSC.Value();
            ScatterValueX = jsonObj[currentSample - 1].SSC[countTime[graph]];
            break;
        case '4'://Green
            ScatterSliderX = sliderGreen.Value();
            ScatterValueX = jsonObj[currentSample - 1].Green[countTime[graph]];
            break;
        case '5'://Orange
            ScatterSliderX = sliderOrange.Value();
            ScatterValueX = jsonObj[currentSample - 1].Orange[countTime[graph]];
            break;
    };
    //Set Scatter yAxis Filter multiplier
    switch (window["SPYSelect" + graph].value) {
        case '2'://FSC
            ScatterSliderY = sliderFSC.Value();
            ScatterValueY = jsonObj[currentSample - 1].FSC[countTime[graph]];
            break;
        case '3'://SSC
            ScatterSliderY = sliderSSC.Value();
            ScatterValueY = jsonObj[currentSample - 1].SSC[countTime[graph]];
            break;
        case '4'://Green
            ScatterSliderY = sliderGreen.Value();
            ScatterValueY = jsonObj[currentSample - 1].Green[countTime[graph]];
            break;
        case '5'://Orange
            ScatterSliderY = sliderOrange.Value();
            ScatterValueY = jsonObj[currentSample - 1].Orange[countTime[graph]];
            break;
    };
    //Set Histo xAxis Filter multiplier
    switch (window["HTXSelect"+graph].value) {
        case '2'://FSC
            HistoSliderX = sliderFSC.Value();
            HistoValueX = jsonObj[currentSample - 1].FSC[countTime[graph]];
            break;
        case '3'://SSC
            HistoSliderX = sliderSSC.Value();
            HistoValueX = jsonObj[currentSample - 1].SSC[countTime[graph]];
            break;
        case '4'://Green
            HistoSliderX = sliderGreen.Value();
            HistoValueX = jsonObj[currentSample - 1].Green[countTime[graph]];
            break;
        case '5'://Orange
            HistoSliderX = sliderOrange.Value();
            HistoValueX = jsonObj[currentSample - 1].Orange[countTime[graph]];
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
    //Histogram
    else {
        //Linear Scale
        if (window["HTXSelect"+graph].value === '2' || window["HTXSelect"+graph].value === '3') {
            x = Math.floor(HistoValueX * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5) / 1000);
        }
        else {
            //Exponention Scale
            let value = HistoValueX * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5);
            x = Math.floor(Math.log10(value / 10) * 250 / Math.log10(100000 / 10));
        }

        countX = window["Graph" + graph].dataX.filter(value => value == x).length / 2;
        // let value = 1 * Math.pow(1.2, (HistoSliderX - 100) / 100 * 5);
        // y = Math.floor((value - 0) * 200 / (200 - 0));
        y = countX;
        dataset["dataX" + graph].push(x, x, NaN);
        dataset["dataY" + graph].push(y, y, NaN);
        y++;
    }
    
    dataset["dataX" + graph].push(x, x, NaN);
    dataset["dataY" + graph].push(y, y, NaN);
    // countTime.Main < 2 ? console.log(dataset) : false;
    
    if (countTime[graph] < 100) {
        if (countTime[graph] % 5 === 0) {
            window["Brd" + graph].update();
        }
    }
    else if (countTime[graph] < 1000) {
        if (countTime[graph] % 10 === 0) {
            window["Brd" + graph].update();
        }
    }
    else if (countTime[graph] < 5000) {
        if (countTime[graph] % 20 === 0) {
            window["Brd" + graph].update();
        }
    }
    else if (countTime[graph] < 10000) {
        if (countTime[graph] % 100 === 0) {
            window["Brd" + graph].update();
        }
    }
    else if (countTime[graph] < 20000) {
        if (countTime[graph] % 200 === 0) {
            window["Brd" + graph].update();
        }
    }
    else {
        window["Brd" + graph].update();
    }
    countTime[graph]++;
    
    if (jsonObj[currentSample - 1].FSC.length <= (countTime[graph]) ||
        jsonObj[currentSample - 1].SSC.length <= (countTime[graph]) ||
        jsonObj[currentSample - 1].Green.length <= (countTime[graph])||
        jsonObj[currentSample - 1].Orange.length <= (countTime[graph])) {
        showFeedback("DATA_FINISHED_PLOTTING");
        if (isRecording) {
            isRecording = false;
            isDatafinishRecording = true;
            dataset.sampleName = document.getElementById('sampleNameInput').value;
            dataRecord.push(dataset);
            numOfUsedSample++;
            document.getElementsByClassName('ctr-btn')[2].disabled = false;
        }
    }
    else {
        window.requestAnimationFrame((t) => { updatePlot(t, graph) })
    }
    
};

function recordData () {
    if (hasDataAcquired) {
        isRecording = true;
        
        if(startPlotting()) {
            disableGraphControls();
            disableDataAcquisitionControl();
        }
    }
    else {
        showFeedback("DATA_NOT_ACQUIRED");
    }
}

    
function checkSmallGraphSetup (){
    for (let index = 1; index < 5; index++) {
        //Check for Scatterplot
        if (window["SelectedGraph" + index] == 1) {
            //Check if scatterplot has Green as X and Orange as Y
            if (window["SPXSelect" + index].value == 4 && window["SPYSelect" + index].value == 5) {
                smallGraphsCheckList.hasGrnOrnScatter = true;
            }
        }
        //Check for histogram
        else if (window["SelectedGraph" + index] == 2) {
            //Check if X Axis is green
            if (window["HTXSelect" + index].value == 4) {
                smallGraphsCheckList.hasGreenHisto = true;
            }
            //Check if X axis is orange
            else if (window["HTXSelect" + index].value == 5) {
                smallGraphsCheckList.hasOrangeHisto = true;
            }
        }
        
    }
}
function recreateAllGraphs (){
    dataset = {}
    isDatafinishRecording = false;
    if(BrdMain){ createGraph("Main") }
    if (Brd1) {createGraph("1"); }
    if (Brd2){createGraph("2"); }
    if (Brd3){createGraph("3"); }
    if (Brd4){createGraph("4"); }
    disableGraphControls();
    for (let i = 1; i <= numOfUsedSample; i++) {
        if (i != currentSample) {
            document.getElementById("sample" + i).classList.remove('disabled');
            document.getElementById("sample" + i).classList.remove('active');
            document.getElementById("sample" + i).classList.add('done');  
        }
    }
    document.getElementById("sample" + currentSample).classList.remove('done');
    document.getElementById("sample" + currentSample).classList.remove('disabled');
    document.getElementById("sample" + currentSample).classList.add('active');
}

function disableGraphControls () {
    
    document.getElementById('closeGraphMain').style.display = 'none';
    document.getElementById('closeGraph1').style.display = 'none';
    document.getElementById('closeGraph2').style.display = 'none';
    document.getElementById('closeGraph3').style.display = 'none';
    document.getElementById('closeGraph4').style.display = 'none';
    
    sliderFSC.setAttribute({
        fillColor: '#b4b4b4',
        highline: { strokeColor: '#d0cfcf' },
    });
    sliderSSC.setAttribute({
        fillColor: '#b4b4b4',
        highline: { strokeColor: '#d0cfcf' },
    });
    sliderGreen.setAttribute({
        fillColor: '#b4b4b4',
        highline: { strokeColor: '#d0cfcf' },
    });
    sliderOrange.setAttribute({
        fillColor: '#b4b4b4',
        highline: { strokeColor: '#d0cfcf' },
    });
    if (allowedSliderChange) {
        sliderBrd.removeEventHandlers();
    }
    allowedSliderChange = false;
    let arrayOfElements = document.getElementsByClassName('graphBtnContainerMain');
    let lengthOfArray = arrayOfElements.length;
    for (let i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].style.display = 'none';
    }
}

function disableDataAcquisitionControl () {
    let arrayOfElements = document.getElementsByClassName('ctr-btn');
    let lengthOfArray = arrayOfElements.length;

    for (let i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].disabled = 'disable';
    }
    document.getElementById('sampleNameInput').disabled = "disable";
}
function enableDataAcquisitionControl() {
    let arrayOfElements = document.getElementsByClassName('ctr-btn');
    let lengthOfArray = arrayOfElements.length;

    for (let i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].removeAttribute("disabled");
    }
    document.getElementById('sampleNameInput').removeAttribute("disabled");
}

function callBoardUpdate () {
    if (BrdMain) { BrdMain.update(); }
    if (Brd1) { Brd1.update(); }
    if (Brd2) { Brd2.update(); }
    if (Brd3) { Brd3.update(); }
    if (Brd4) { Brd4.update(); }
}