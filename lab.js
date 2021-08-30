
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    document.getElementById("droparea").classList.add("indicator");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if ((ev.target.id === "droparea" && ev.target.children.length < 1) || ev.target.classList.contains("tubeRackSlot")) {
        ev.target.appendChild(document.getElementById(data));
    }
    else {

        if (ev.target.classList.contains("rackFront")) {
            ev.target.closest(".tubeRackSlot").appendChild(document.getElementById(data));
        }
    }

}

function dragEnd() {
    document.getElementById("droparea").classList.remove("indicator");
}

function selectTube(e) {
    e.classList.add('selected');
    e.children[0].style.display = "block";

}
function deselectTube(e) {
    e.classList.remove('selected');
    e.children[0].style.display = "none";
}