$(document).ready(function() {
    // Función para realizar la solicitud GET a la API y mostrar los datos
    function fetchData() {
      $.get("https://sheetdb.io/api/v1/7tpl63a7x0ke4", function(data) {
        var apiData = "<table><thead><tr><th>AEROLINEA</th><th>VUELO</th><th>STA CONCATENADO</th></tr></thead><tbody>";
    
        for (var i = 0; i < data.length; i++) {
          apiData += "<tr><td>" + data[i].AEROLINEA + "</td><td>" + data[i].VUELO + "</td><td>" + data[i]['STA CONCATENADO'] + "</td></tr>";
        }
    
        apiData += "</tbody></table>";
    
        $("#apiData").html(apiData);
      });
    }
  
    // Llamar a fetchData inmediatamente y luego cada 5 segundos
    fetchData(); // Llamar inmediatamente
    setInterval(fetchData, 2000); // Llamar cada 5 segundos (5000 milisegundos)
  });
  
  
