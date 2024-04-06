var enviar = document.getElementById("enviar")
var agregar = document.getElementById("agregar")

$(document).ready(function() {
    $("#enviar").click(function() {
        alert("El correo fue enviado correctamente...");
    });
});

var ingredientes = document.getElementById("ingredientes")

$(document).ready(function() {
    $(".ingredientes").dblclick(function() {
        $(this).css("color", "red");
    });
});

$(".titulo").on("click", function() {
    $(".texto2").toggle();
});
