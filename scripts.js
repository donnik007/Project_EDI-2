
    window.onload = function() { 
    var dataPoints = []; 
    var dataPoints1 = []; 
    var dataPoints2 = []; 
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Wykres Temperatury Miast"
        },
        axisY: {
            title: "Temperatura",
            titleFontSize: 24
        },
        axisX: {
            title: "Miasta",
            titleFontSize: 24,
            labelFontColor: "white",
        },
        data: [{
            type: "line",
            dataPoints: dataPoints1
        }]
    });

    
    var chart1 = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Wykres Liczby Mieszkańców Miast"
        },
        axisY: {
            title: "Liczba Mieszkańców",
            titleFontSize: 24
        },
        axisX: {
            title: "Miasta",
            titleFontSize: 24,
            labelFontColor: "white",
        },
        data: [{
            type: "column",   
            dataPoints: dataPoints
        }]
    });

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Wykres Powierzchni Miast w km²"
        },
        axisY: {
            title: "Powierzchnia",
            titleFontSize: 24, 
        },
        axisX: {
            title: "Miasta",
            titleFontSize: 24,
            labelFontColor: "white",
        },
        data: [{
            type: "stepArea",
            dataPoints: dataPoints2
        }]
    });
     
     
   
    $.getJSON("https://my.api.mockaroo.com/ha.json?key=36e36a40",function(data){
            for (var i = 0; i < data.length; i++) {
                dataPoints.push({
                    label: data[i].Miasto,
                    y: data[i].Liczba_Mieszkańców
                });
                dataPoints1.push({
                    label: data[i].Miasto,
                    y: data[i].Średnia_temperatura
                });
                dataPoints2.push({
                    label: data[i].Miasto,
                    y: data[i].Powierzchnia_w_km2
                });
            }
            chart.render();
            chart1.render();
            chart2.render();
            var dane = '';
            $.each(data, function(key, value){
                dane += '<tr style="background-color: #ececff;">';
                dane += '<td>' +value.Miasto+ '</td>';
                dane += '<td>' +value.Gestosc_zaludnienia_w_km2+ '</td>';
                dane += '<td>' +value.Liczba_Mieszkańców+ '</td>';
                dane += '<td>' +value.Średnia_temperatura+ '</td>';
                dane += '<td>' +value.Powierzchnia_w_km2+ '</td>';
                dane += '</tr>';
            });
            $('#dane_table').append(dane);
        });
    }


   