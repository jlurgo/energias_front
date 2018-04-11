$(function(){
    $.ajax({
        url: "https://backend-energias.herokuapp.com/getMediciones/:10",
        type: "GET",
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function(data){
            $("#mediciones").text(data);            
        }
    }); 
});
