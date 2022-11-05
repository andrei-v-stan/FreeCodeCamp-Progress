function toggleDogRaiting() {

    var hiddenRaiting = document.getElementById("hidden-dog-raiting");

    var checkButton = document.getElementById("dog-person-yes");

    if (hiddenRaiting.hidden) {
        hiddenRaiting.hidden = false;
    } else {
        hiddenRaiting.hidden = true;
    }
}
