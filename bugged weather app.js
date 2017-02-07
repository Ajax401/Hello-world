$(document).ready(function(){
  
 if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  
   var api = 'http://api.openweathermap.org/data/2.5/weather?lat=-26.2&lon=28.04&appid=4f34746d431e4f399b5f45246eda5884';
  
  $.getJSON(api, function(data){
    
    var fahrenheit;
    var celcius;
    var changeTemp = true;
    
    var weatherType = data.weather[0].description;
    var kelvin = data.main.temp;
    var city = data.name;
    var windspeed = data.wind.speed;
    fahrenheit =  (kelvin*(9/5)-459.97).toFixed(1);
    celcius = (kelvin - 273).toFixed(1);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fahrenheit").html(fahrenheit + " &#x2109");
    $("#fahrenheit").click(function(){
      if(changeTemp === false){
         $("#fahrenheit").html(fahrenheit + " &#x2109");
          changeTemp = true;
         }else{
           $("#fahrenheit").html(celcius + " &#x2103");
           changeTemp = false;
         }
    });
    windspeed = (2.237*(windspeed)).toFixed(1);
    $("#windspeed").html(windspeed + " .mph");
    if(fahrenheit > 80){
      $('body').css('background-image','url(https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=73681eabc8a21692df93956cba3a8c22)')
    }else if(fahrenheit < 70){
             $('body').css('background-image','url(https://images.unsplash.com/photo-1468779823294-9824b5b9a1b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=482f8c2467c5a0df895292ba797c2c2b)');
             }else if(fahrenheit > 70){
                 $('body').css('background-image','url(https://images.unsplash.com/photo-1430263517459-34119c5e8380?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=91a4e8db6f7276d714d3b2a38c90627a)');    
                      }
  });
});
}
  
});