// /* -----------------------------------
// SOUNDS UI 
// -------------------------------------- */
const button = document.querySelectorAll('.hoverShadow');
button.forEach(function (button) {
    button.addEventListener('mouseenter', function () {
        soundhover.play();
    });
});


// réglages welcoming

document.getElementById('welcome').addEventListener('click', (event) => {
    document.querySelector('.welcoming').classList.add('disappear');
    setTimeout(() => {
        document.querySelector('.tagList').classList.add('appears');
    }, "800");
})

document.getElementById('welcome').addEventListener('mouseenter', function () {
    soundhover.play();
});

// montre l'historique ou le chache
let history = document.querySelector('.history')
let historyButton = document.getElementById('buttonHistory')

function showHistory() {
    // history.classList.remove('appears');
    // history.classList.add('show');

    if (history.classList.contains('hidden')) {
        history.classList.remove('hidden');
        history.classList.add('show');
        historyButton.classList.add('checked');
    }
    else {
        history.classList.remove('show');
        history.classList.add('hidden');
        historyButton.classList.remove('checked');
    }

}
historyButton.addEventListener('click', showHistory)

// montre l'index ou le chache
let buttonIndex = document.getElementById('buttonIndex')

function showindex() {
    // index.classList.remove('appears');
    // index.classList.add('show');

    if (index.classList.contains('hidden')) {
        index.classList.remove('hidden');
        index.classList.add('show');
        buttonIndex.classList.add('checked');
    }
    else {
        index.classList.remove('show');
        index.classList.add('hidden');
        buttonIndex.classList.remove('checked');
    }

}
buttonIndex.addEventListener('click', showindex)

// montre about ou le chache
let about = document.querySelector('.about')

let buttonAbout = document.getElementById('buttonAbout')

function showabout() {
    // about.classList.remove('appears');
    // about.classList.add('show');

    if (about.classList.contains('hidden')) {
        about.classList.remove('hidden');
        about.classList.add('show');
        buttonAbout.classList.add('checked');
    }
    else {
        about.classList.remove('show');
        about.classList.add('hidden');
        buttonAbout.classList.remove('checked');
    }

}
buttonAbout.addEventListener('click', showabout)


// restart tool
let buttonRestart = document.getElementById('buttonRestart')
let blackScreen = document.querySelector('.blackScreen')

function reload() {
    // blackScreen.classList.add('fadeOut')
    blackScreen.classList.remove('hidden');
    blackScreen.classList.add('appearsLong');

    setTimeout(() => {
        location.reload();
    }, "2100");
}
buttonRestart.addEventListener("click", reload);




// zoom slider
var zoomSlider = document.getElementById("bookzoom");

function zoomBooks() {
    var zoom = zoomSlider.value;
    var zoomValue = zoom + "%";
    document.body.style.setProperty('--zoom', zoomValue)
}

zoomSlider.addEventListener("input", zoomBooks);
