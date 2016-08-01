// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $("#container-fluid").on("click", "#city_state", function(){
    event.preventDefault();
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("href"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });
  })
  $("#container-fluid").on("submit", "#city_state_form", function(){
    event.preventDefault();
    var destination = $("#destination").val()
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });

    var request = $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q="+destination+"&APPID=24d25b755229b50f820c31dea0daae1e",
      data: $(this).serialize(),
    })
    request.done(function(weather){
      $("#current").append((weather.main.temp * 1.8 - 459.67).toPrecision(3));
      $("#high").append((weather.main.temp_max * 1.8 - 459.67).toPrecision(3));
      $("#low").append((weather.main.temp_min * 1.8 - 459.67).toPrecision(3));
      $("#city").append(weather.name)
    })
  });
  $("#container-fluid").on("click", "#zipcode", function(){
    event.preventDefault();
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("href"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });
  })
  $("#container-fluid").on("submit", "#zipcode_form", function(){
    event.preventDefault();
    var destination = $("#destination").val()
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });

    var request = $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?zip="+destination+",us&APPID=24d25b755229b50f820c31dea0daae1e",
    })
    request.done(function(weather){
      $("#current").append((weather.main.temp * 1.8 - 459.67).toPrecision(3));
      $("#high").append((weather.main.temp_max * 1.8 - 459.67).toPrecision(3));
      $("#low").append((weather.main.temp_min * 1.8 - 459.67).toPrecision(3));
      $("#city").append(weather.name)
    })
  })
  $("#container-fluid").on("click", "#current_location", function(){
    event.preventDefault();
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("href"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });

    var request = $.ajax({
      method: "GET",
      url: "http://ip-api.com/json",
    })
    request.done(function(location){
      $("#destination").val(location.zip)
    })
  });
  $("#container-fluid").on("submit", "#current_location_form", function(){
    event.preventDefault();
    var destination = $("#destination").val()
    $("#container-fluid").empty();

    var request = $.ajax({
      method: $(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize(),
    });
    request.done(function(location){
      $("#container-fluid").append(location);
    });

    var request = $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?zip="+destination+",us&APPID=24d25b755229b50f820c31dea0daae1e",
    })
    request.done(function(weather){
      $("#current").append((weather.main.temp * 1.8 - 459.67).toPrecision(3));
      $("#high").append((weather.main.temp_max * 1.8 - 459.67).toPrecision(3));
      $("#low").append((weather.main.temp_min * 1.8 - 459.67).toPrecision(3));
      $("#city").append(weather.name)
    })
  })
});

