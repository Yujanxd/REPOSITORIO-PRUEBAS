alert('javascript cargado')
$(document).ready(function() {
    // Realizar solicitud GET a la API
    $.get("https://sheetdb.io/api/v1/vr0qpo47pi28j", function(data) {
      // Manipular los datos recibidos de la API
      var apiData = "";
      for (var i = 0; i < data.length; i++) {
        // Construir una cadena con los datos de la API
        apiData += "<p>" + data[i].NOMBRE + ": " + data[i].APELLIDO + ": " + data[i].TELF + "</p>";
      }
      
      // Mostrar los datos en el div correspondiente
      $("#apiData").html(apiData);
    });
  });
