function check(q, a, t, b) {
    document.getElementsByClassName("answer" + q)[t].style.background = "#29a329";
    document.getElementsByClassName("answer" + q)[t].style.borderColor = "#29a329";
    document.getElementsByClassName("answer" + q)[t].style.color = "#fff";
    document.getElementById("points").innerText = parseInt(document.getElementById("points").innerText) + 1;
    if (b == false) {
        document.getElementsByClassName("answer" + q)[a].style.background = "#cc1211";
        document.getElementsByClassName("answer" + q)[a].style.borderColor = "#cc1211";
        document.getElementsByClassName("answer" + q)[a].style.color = "#fff";
        document.getElementById("points").innerText = parseInt(document.getElementById("points").innerText) - 1;
    }
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName("answer" + q)[i].disabled = true;
    }
}