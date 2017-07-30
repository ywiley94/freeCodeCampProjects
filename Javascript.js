
//If browers accept geolocation
$(document).ready(function(){
    
    var long;
    var lat;
    var farenheit;
    var celsius;
    var tempSwap = true;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            
            lat = position.coords.latitude;
            long = position.coords.longitude;
            
        var key = '7286118f9682bf27b956c7bf0647f50c';
        var weather = 'http://api.openweathermap.org/data/2.5/weather?lat=' +lat+'&lon='+long+'&appid=7286118f9682bf27b956c7bf0647f50c';
//JSON call for weather API
    $.getJSON(weather, function(data){
        
        var weatherType = data.weather[0].description;
        var kelvin = data.main.temp;
        var farenheit = (kelvin*(9/5)-459.67).toFixed(1);
        var celsius = (kelvin-273).toFixed(1);
        var windSpeed = data.wind.speed;
        var city = data.name;
    $('#location').html(city);
        windSpeed = (2.237*(windSpeed)).toFixed(1);
    $('#wind').html(windSpeed + ' mph');
    $('#temp').html(farenheit + "&#8457;");
    $('#temp').click(function(){
        if(tempSwap===false){
            $('#temp').html(celsius + '&#8451;');
            tempSwap = true;
        }
        else{
            $('#temp').html(farenheit + '&#8457');
            tempSwap = false;
        }
    });
    
    $('#desc').html(weatherType);
    
        if(farenheit>80) {
            
            
        }
        else if(farenheit>70) {
            $('body').css('background-image','url(file:///Users/mac/Downloads/jason-blackeye-295313.jpg)');
        }
        
        else if(farenheit>60) {
            $('body').css('background-image','url(file:///Users/mac/Downloads/jason-blackeye-295313.jpg)');
        }
        else if(farenheit>50) {
            $('body').css('background-image','url(file:///Users/mac/Downloads/kristian-seedorff-149478.jpg)');
        }
        else if(farenheit>40) {
              $('body').css('background-image','url(file:///Users/mac/Downloads/kristian-seedorff-149478.jpg)');   
        }
        else if(farenheit>30) {
             $('body').css('background-image','url(file:///Users/mac/Downloads/les-anderson-199515.jpg)');
        }
        else {
             $('body').css('background-image','url(file:///Users/mac/Downloads/les-anderson-199515.jpg)');
        }
        
   
        
        
    


            
            
            
        });
    });
    }});
       
    

