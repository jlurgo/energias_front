$(function(){
    $("#btn_subirMedicion").click(function(){
        $.ajax({
			url: url + "postulacionesDelExpediente/" + expediente_seleccionado.numero,
			type: "GET",
			async: true,
			success: function (postulaciones_json) {}
        });
    });    
});