var popup = document.getElementById('popup');
var logbtn = document.getElementById('logbtn')
var popupc = document.getElementById('popupc')

var buttonIds = ["button1", "button2", "button3", "button4"];
var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");
var main4 = document.getElementById("main4");

function defile() {
    var buttonId = this.id;
    console.log("Button clicked:", buttonId);

    if (buttonId === "button1") {
        main1.style.display = 'flex';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
    } else if (buttonId === "button2") {
        main2.style.display = 'flex';
        main1.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'none';
    } else if (buttonId === "button3") {
        main3.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
        main4.style.display = 'none';
    }else if (buttonId === "button4") {
        main4.style.display = 'flex';
        main2.style.display = 'none';
        main1.style.display = 'none';
        main3.style.display = 'none';
    }
}

// Assign the defile function to each button
buttonIds.forEach(function(buttonId) {
    document.getElementById(buttonId).addEventListener("click", defile);
});
