var labDOM = '<div id="scene_Lab" class="scene">'+
'<div class="uiBlocker"></div>'+
'<div class="apparatus tubeRack">'+
'<div id="rack1" class="tubeRackSlot ui-droppable" ondrop="drop(event)" ondragover="allowDrop(event)">'+
'<div class="rackFront"></div>'+
'<div id="tube1" draggable="true" ondragstart="drag(event)" onmouseover="selectTube(this)" onmouseout="deselectTube(this)" ondragend="dragEnd()" class="apparatus tube ui-draggable ui-draggable-handle selectable"'+
'style="top: 0px; left: 0px;">'+
'<div class="tubePopup" style="top: -48.6px; left: -49.383px;">'+
'<div class="label">Unstained Control</div>'+
'<div class="arrow"></div>'+
'</div>'+
'</div>'+
'</div><div id="rack2" class="tubeRackSlot ui-droppable" ondrop="drop(event)" ondragover="allowDrop(event)">'+
'<div class="rackFront"></div>'+
'<div id="tube2" draggable="true" ondragstart="drag(event)" onmouseover="selectTube(this)" onmouseout="deselectTube(this)" ondragend="dragEnd()" class="apparatus tube ui-draggable ui-draggable-handle selectable"'+
'style="width: 29px; inset: 0px auto auto 0px; height: 149px;">'+
'<div class="tubePopup" style="top: -48.6px; left: -57.55px;">'+
'<div class="label">Green Stained Control</div>'+
'<div class="arrow"></div>'+
'</div>'+
'</div>'+
'</div><div id="rack3" class="tubeRackSlot ui-droppable" ondrop="drop(event)" ondragover="allowDrop(event)">'+
'<div class="rackFront"></div>'+
'<div id="tube3" draggable="true" ondragstart="drag(event)" onmouseover="selectTube(this)" onmouseout="deselectTube(this)" ondragend="dragEnd()" class="apparatus tube ui-draggable ui-draggable-handle selectable"'+
'style="width: 29px; inset: 0px auto auto 0px; height: 149px;">'+
'<div class="tubePopup" style="top: -48.6px; left: -61.55px;">'+
'<div class="label">Orange Stained Control</div>'+
'<div class="arrow"></div>'+
'</div>'+
'</div>'+
'</div><div id="rack4" class="tubeRackSlot ui-droppable" ondrop="drop(event)" ondragover="allowDrop(event)">'+
'<div class="rackFront"></div>'+
'<div id="tube4" draggable="true" ondragstart="drag(event)" onmouseover="selectTube(this)" onmouseout="deselectTube(this)" ondragend="dragEnd()" class="apparatus tube ui-draggable ui-draggable-handle selectable"'+
'style="width: 29px; inset: 0px auto auto 0px; height: 149px;">'+
'<div class="tubePopup" style="top: -48.6px; left: -22.55px;">'+
'<div class="label">Specimen</div>'+
'<div class="arrow"></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="labBackground" style="overflow: hidden;position: relative;">'+
'<div class="drawer"></div>'+
'<div class="drawer"></div>'+
'</div>'+
'<div class="apparatus flowCytometryMachine">'+
'<div id="droparea" class="dropArea ui-droppable" ondrop="drop(event)" ondragover="allowDrop(event)"></div>'+
'</div>'+
'<div class="apparatus computer"><button class="monitor-button" onclick="setup()">Set up Experiment</button></div>'+
'</div>'