$(function(){
    $("#btn_subirMedicion").click(function(){
        $.ajax({
			url: "https://backend-energias.herokuapp.com/guardarMedicion",
			type: "POST",
			async: true,
            dataType: "json",
            contentType: "application/json",
			data: JSON.stringify({
				"Id-MAC": "1111",
                "mediciones":[
                    {fecha: moment().format('DD/MM/YYYY HH:mm:ss'), sensor: "Temperatura-IN", valor: Math.random()*20},
                    {fecha: moment().format('DD/MM/YYYY HH:mm:ss'), sensor: "Temperatura-OUT", valor: Math.random()*20},
                    {fecha: moment().format('DD/MM/YYYY HH:mm:ss'), sensor: "Caudalimetro", valor: Math.random()*20}                
                ]
			})
        });
    });    
});
