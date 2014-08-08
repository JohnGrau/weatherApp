// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

 
// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Framework7.$;
 
// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');

// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});
//api 
$.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&units=metric&lang=sp&APPID=f4e9757e25a37ae54c5ae6cf8f201c26",
      success: function( data ) 
      {
        var clima = '';
        $('#ciudad').html(data.name);
        if(data.weather[0].description == 'chubasco') //por aguacero  ;) jajajaj
        {
            clima += 'Aguacero';
        }
        else  if(data.weather[0].description == 'niebla')
        {
          clima += 'Neblina';
        }
        else
        {
          clima += data.weather[0].description;
        }
        $('#clima').html(clima);
        $('#tiempo').html(data.main.temp+'<i class="icon" data-icon="*" style="font-size:1.2em"></i>');
        $('#viento').html(data.wind.speed+'<i class="icon" data-icon="F" style="font-size:1.2em"></i>');
        $('#humedad').html(data.main.humidity+"<i class=icon data-icon=' style=font-size:1.2em></i>");
        var ico = '';
        //icon
        
        switch(data.weather[0].icon)
        {
            case "01d": 
            ico += "B";
            break;
            case "01n": 
              ico +="1";
            break;

            case "02d": 
              ico += "H";
            break;
            case "02n": 
              ico += "I";
            break;

            case "03d": 
              ico += "N";
            break;
            case "03n": 
              ico += "N";
            break;

            case "04d": 
              ico += "Y";
            break;
            case "04n": 
              ico += "Y";
            break;

            case "09d": 
              ico +="Q";
            break;
            case "09n": 
              ico += "Q";
            break;

            case "10d": 
              ico +="R";
            break;
            case "10n": 
              ico += "R";
            break;
            
            case "11d": 
              ico += "0";
            break;
            case "11n": 
              ico += "0";
            break;

            case "13d": 
              ico +="W";
            break;

            case "13n": 
              ico += "W";
            break;

            case "50d": 
              ico += "J";
            break;
            case "50n":
              ico += "K";
            break;
        }
        
        $("#icon").html('<i class="icon" data-icon="'+ico+'" style="font-size:4em:padding-top:1px"></i>');
      }
    });

//date
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
var fecha = diasSemana[f.getDay()] + " " + f.getDate() + " de " + meses[f.getMonth()];
document.getElementById('date').innerHTML = fecha;

function reloadWeather(){

}
