var graphDOM = '<div id="container" class="scene container">'+
'<!--Control Panel-->'+
'<div class="row top-panel">'+
'<div class="col-5 sampleData">'+
'<div class="samples">'+
'<div id="sample1" class="sampleBtn active" onclick="reviewGraph(1)">A</div>'+
'<div id="sample2" class="sampleBtn disabled" onclick="reviewGraph(2)">B</div>'+
'<div id="sample3" class="sampleBtn disabled" onclick="reviewGraph(3)">C</div>'+
'<div id="sample4" class="sampleBtn disabled" onclick="reviewGraph(4)">D</div>'+
'</div>'+
'<div class="sampleIdLabel">Sample ID</div>'+
'<input id="sampleNameInput" placeholder="Label your sample" class="labelInput"></input>'+
'</div>'+
'<div class="col-2">'+
'<button type="button" class="btn btn-light ctr-btn" onclick="startPlotting()">AcquireData</button>'+
'<button type="button" class="btn btn-light ctr-btn" onclick="recordData()">RecordData</button>'+
'<button type="button" class="btn btn-light ctr-btn" onclick="nextTube()">NextTube</button>'+
'</div>'+
'<div class="col-5 align-self-center">'+
'Filters'+
'<div class="row" style="padding-top: 5px">'+
'<div class="filter">'+
'<div class="filterLabelFSC">FSC</div>'+
'<div class="filterLabelSSC">SSC</div>'+
'<div class="filterLabelGreen">Green</div>'+
'<div class="filterLabelOrange">Orange</div>'+
'</div>'+
'<div id="jxgbox-1" class="jxgbox"></div>'+
''+
'</div>'+
''+
'</div>'+
'</div>'+
'<!--End of Control Panel-->'+
''+
'<!--Graph Panel-->'+
'<div class="row graph-panel">'+
'<!--Big Graph-->'+
'<div class="col-5 graphContainer">'+
'<div id="jxgbox-2" class="jxgbox dashed">'+
`<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('Main')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('Main')"> Add Histogram</button></div><div id="axesPopupMain" class="axesPopup axesPopupMain"><div id="scatterplot"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-yMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-xMain" class="form-select form-select-sm" aria-label=".form-select-sm example" onchange="onSelect('Main')"><option value="1" selected >None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBxMain" class="col-2"><button id="CreateBtnMain" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('Main')"> Create</button></div></div>`+
'</div>'+
'<div id="xAxisMain" class="xAxis" style="visibility: hidden;"></div>'+
'<div id="yAxisMain" class="yAxis" style="visibility: hidden;"></div>'+
'<div id="xLabelMain"></div>'+
'<div id="yLabelMain"></div>'+
'<input id="closeGraphMain" class="close" onclick="resetBrd(\'Main\')">'+
'</div>'+
''+
'<!--Small Graphs-->'+
'<div class="col-3 sm-graph-col1">'+
'<!--Small Graph 1-->'+
'<div class="graphContainer graphContainersm">'+
'<div id="jxgbox-3" class="jxgbox jxgbox-top dashed">'+
`<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('1')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('1')"> Add Histogram</button></div><div id="axesPopup1" class="axesPopup axesPopup1"><div id="scatterplot1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram1"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x1" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('1')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx1" class="col-2"><button id="CreateBtn1" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('1')"> Create</button></div></div>`+
'</div>'+
'<div id="xAxis1" class="xAxisSm" style="visibility: hidden;"></div>' +
'<div id="yAxis1" class="yAxisSm" style="visibility: hidden;"></div>' +
'<div id="xLabel1"></div>' +
'<div id="yLabel1"></div>' +
'<input id="closeGraph1" class="close small" onclick="resetBrd(\'1\')">' +
'</div>'+
'<!--Small Graph 1 Ends-->'+
''+
'<!--Small Graph 2-->'+
'<div class="graphContainer graphContainersm">' +
'<div id="jxgbox-4" class="jxgbox jxgbox-bot dashed">'+
`<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('2')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('2')"> Add Histogram</button></div><div id="axesPopup2" class="axesPopup axesPopup2"><div id="scatterplot2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram2"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x2" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('2')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx2" class="col-2"><button id="CreateBtn2" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('2')"> Create</button></div></div>`+
'</div>' +
'<div id="xAxis2" class="xAxisSm" style="visibility: hidden;"></div>' +
'<div id="yAxis2" class="yAxisSm" style="visibility: hidden;"></div>' +
'<div id="xLabel2" class="xlabelSm"></div>' +
'<div id="yLabel2" class="ylabelSm"></div>' +
'<input id="closeGraph2" class="close small" onclick="resetBrd(\'2\')">' +
'</div>' +
'<!--Small Graph 2 Ends-->'+
'</div>'+
'<div class="col-3 sm-graph-col2">'+
'<!--Small Graph 3-->'+
'<div class="graphContainer graphContainersm">' +
'<div id="jxgbox-5" class="jxgbox jxgbox-top dashed">'+
`<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('3')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('3')"> Add Histogram</button></div><div id="axesPopup3" class="axesPopup axesPopup3"><div id="scatterplot3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram3"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x3" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('3')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx3" class="col-2"><button id="CreateBtn3" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('3')"> Create</button></div></div>`+
'</div>' +
'<div id="xAxis3" class="xAxisSm" style="visibility: hidden;"></div>' +
'<div id="yAxis3" class="yAxisSm" style="visibility: hidden;"></div>' +
'<div id="xLabel3" class="xlabelSm"></div>' +
'<div id="yLabel3" class="ylabelSm"></div>' +
'<input id="closeGraph3" class="close small" onclick="resetBrd(\'3\')">' +
'</div>' +
'<!--Small Graph 3 Ends-->'+
''+
'<!--Small Graph 4-->'+
'<div class="graphContainer graphContainersm">' +
'<div id="jxgbox-6" class="jxgbox jxgbox-bot dashed">'+
`<div class="graphBtnContainerMain"><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectScatter('4')"> Add Scatter Plot</button><button type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" onclick="selectHistogram('4')"> Add Histogram</button></div><div id="axesPopup4" class="axesPopup axesPopup4"><div id="scatterplot4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="sp-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div><div class="row"><div class="col-2 xAxisText">Y</div><div class="col-6"><select id="sp-y4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="histogram4"><div class="row"><div class="col-2 xAxisText">X</div><div class="col-6"><select id="ht-x4" class="form-select form-select-sm" aria-label=".form-select-sm example"onchange="onSelect('4')"><option value="1" selected>None</option><option value="2">FSC</option><option value="3">SSC</option><option value="4">Green</option><option value="5">Orange</option></select></div></div></div><div id="CreateBtnBx4" class="col-2"><button id="CreateBtn4" type="button" class="btn btn-light btn-sm btnCreate" style="font-size: 9px;" disabled onclick="createGraph('4')"> Create</button></div></div>`+
'</div>' +
'<div id="xAxis4" class="xAxisSm" style="visibility: hidden;"></div>' +
'<div id="yAxis4" class="yAxisSm" style="visibility: hidden;"></div>' +
'<div id="xLabel4" class="xlabelSm"></div>' +
'<div id="yLabel4" class="ylabelSm"></div>' +
'<input id="closeGraph4" class="close small" onclick="resetBrd(\'4\')">' +
'</div>' +
'<!--Small Graph 4 End-->'+
'</div>'+
'</div>'+
'<!--End of Graph Panel--></div></div>'