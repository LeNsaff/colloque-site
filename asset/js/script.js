var popup = document.getElementById('popup');
var logbtn = document.getElementById('logbtn')
var popupc = document.getElementById('popupc')

var buttonIds = ["button1", "button2", "button3"];
var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");

function defile() {
    var buttonId = this.id;
    console.log("Button clicked:", buttonId);

    if (buttonId === "button1") {
        main1.style.display = 'flex';
        main2.style.display = 'none';
        main3.style.display = 'none';
    } else if (buttonId === "button2") {
        main2.style.display = 'flex';
        main1.style.display = 'none';
        main3.style.display = 'none';
    } else if (buttonId === "button3") {
        main3.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
    }
}

// Assign the defile function to each button
buttonIds.forEach(function(buttonId) {
    document.getElementById(buttonId).addEventListener("click", defile);
});

function pop() {
    if (popup) {
        popup.style.display = 'flex';
        console.log("Element display:", popup.style.display);
    } else {
        console.error("Popup element not found!");
    }
}

function popd() {
    if (popup) {
        popup.style.display = 'none';
        console.log("Element display:", popup.style.display);
    } else {
        console.error("Popup element not found!");
    }
}

// Add event listener to the button if logbtn is defined
if (logbtn) {
    logbtn.addEventListener("click", pop);
} else {
    console.error("Button element not found!");
}

if (popupc) {
    popupc.addEventListener("click", popd);
} else {
    console.error("Button element not found!");
}