$(function(){
    $("#btn_getMediciones").click(function(){
        $("#mediciones").text("");            
        $.ajax({
            url: "https://backend-energias.herokuapp.com/getMediciones/:" + $("#id_medidor").val(),
            type: "GET",
            async: true,
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                $("#mediciones").text(JSON.stringify(data, null, 2));            
            }
        }); 
    }); 
});
