$(document).ready(function () {
    $(".nav-menu").click(function () {

        var currentDate = new Date();
        var dan = currentDate.getDate();
        var mesec = currentDate.getMonth() + 1;
        var godina = currentDate.getFullYear();
        var sada = new Date();
        alert("Datum: " + dan + "/" + mesec + "/" + godina + "," + " Vreme je: " + sada.getHours() + ":" + sada.getMinutes());

    });
});
