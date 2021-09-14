
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
function setup() {
    if (document.getElementById("droparea").children.length > 0) {
        if (document.getElementById("droparea").children[0].id != "tube1" && numOfUsedSample < 1) {
            showFeedback("SAMPLE_ORDER_1");
            return false;
        }
        switch (document.getElementById("droparea").children[0].id){
            case "tube1":
                if (numOfUsedSample >= 1) {
                    showFeedback("SAMPLE_ORDER_REPEAT");
                }
                else{
                    switchScene("graph");
                }
                break;
            case "tube2":
                if (numOfUsedSample === 1) {
                    switchScene("graph");
                } 
                else if (numOfUsedSample >= 1) {
                    showFeedback("SAMPLE_ORDER_REPEAT");
                }
                else showFeedback("SAMPLE_ORDER_1");
                break;

            case "tube3":
                if (numOfUsedSample === 2) {
                    switchScene("graph");
                }
                else if (numOfUsedSample >= 2) {
                    showFeedback("SAMPLE_ORDER_REPEAT");
                }
                else showFeedback("SAMPLE_ORDER_2");
                break;

            case "tube4":
                if (numOfUsedSample === 3) {
                    switchScene("graph");
                }
                else if (numOfUsedSample >= 3) {
                    showFeedback("SAMPLE_ORDER_REPEAT");
                }
                else showFeedback("SAMPLE_ORDER_3");
                break;
            default:
                switchScene("graph");
                break;
        }
    }
    else showFeedback("NO_SAMPLE");

}