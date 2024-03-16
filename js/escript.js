$(document).ready(function(){
    const title = $("#titulo");
    /*const title = document.getElementById(titulo);
    title.innerHTML
    title.innerText*/
    title.html("Texto utilizando jquery");
    title.text("Hola Jquery");

    $("#alerta").click(function(){
        window.alert("Haz hecho click");
    });
    $("#alerta").addClass("btnalert");
    title.css("color","red");


    $("#cambio").click(function(){
        $.ajax({
            url:"dato.php",
            method:"GET",
            success:function(data){
                $("#info").text(data);
            },
            error:function(error){
                console.log(error);
            }
        });

    })

    $("#formenv").submit(function(event){
        event.preventDefault();
        var datos = $(this).serialize();
        $.ajax({
            url:"enviar.php",
            method:"POST",
            data:datos,
            success:function(response){
                $("#infonom").text(response);
            },
            error:function(error){
                console.log(error);
            }
        });

    })
})