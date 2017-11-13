// Default location (area code or city, state – in quotes)
var lc = "SALEM, MA";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: lc, //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html =  '<main>';
    html += '<section class="one">';
    html += '<div class="left">';
    html += '<h1 class="wdata-01">'+weather.forecast[0].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[0].code+'"></i></a>';
    html += '<p class="wdata-02">'+weather.forecast[0].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-03">'+weather.forecast[0].date+'</h2>';
    html += '<h3 class="wdata-04">'+weather.forecast[0].text+'</h3>';
    html += '<p class="wdata-05">'+weather.forecast[0].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="two">';
    html += '<div class="left">';
    html += '<h1 class="wdata-06">'+weather.forecast[1].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[1].code+'"></i></a>';
    html += '<p class="wdata-07">'+weather.forecast[1].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-08">'+weather.forecast[1].date+'</h2>';
    html += '<h3 class="wdata-09">'+weather.forecast[1].text+'</h3>';
    html += '<p class="wdata-10">'+weather.forecast[1].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="three">';
    html += '<div class="left">';
    html += '<h1 class="wdata-11">'+weather.forecast[2].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[2].code+'"></i></a>';
    html += '<p class="wdata-12">'+weather.forecast[2].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-13">'+weather.forecast[2].date+'</h2>';
    html += '<h3 class="wdata-14">'+weather.forecast[2].text+'</h3>';
    html += '<p class="wdata-15">'+weather.forecast[2].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="four">';
    html += '<div class="left">';
    html += '<h1 class="wdata-16">'+weather.forecast[3].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[3].code+'"></i></a>';
    html += '<p class="wdata-17">'+weather.forecast[3].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-18">'+weather.forecast[3].date+'</h2>';
    html += '<h3 class="wdata-19">'+weather.forecast[3].text+'</h3>';
    html += '<p class="wdata-20">'+weather.forecast[3].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="five">';
    html += '<div class="left">';
    html += '<h1 class="wdata-21">'+weather.forecast[4].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[4].code+'"></i></a>';
    html += '<p class="wdata-22">'+weather.forecast[4].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-23">'+weather.forecast[4].date+'</h2>';
    html += '<h3 class="wdata-24">'+weather.forecast[4].text+'</h3>';
    html += '<p class="wdata-25">'+weather.forecast[4].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="six">';
    html += '<div class="left">';
    html += '<h1 class="wdata-26">'+weather.forecast[5].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[5].code+'"></i></a>';
    html += '<p class="wdata-27">'+weather.forecast[5].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-28">'+weather.forecast[5].date+'</h2>';
    html += '<h3 class="wdata-29">'+weather.forecast[5].text+'</h3>';
    html += '<p class="wdata-30">'+weather.forecast[5].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="seven">';
    html += '<div class="left">';
    html += '<h1 class="wdata-31">'+weather.forecast[6].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[6].code+'"></i></a>';
    html += '<p class="wdata-32">'+weather.forecast[6].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-33">'+weather.forecast[6].date+'</h2>';
    html += '<h3 class="wdata-34">'+weather.forecast[6].text+'</h3>';
    html += '<p class="wdata-35">'+weather.forecast[6].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '<section class="eight">';
    html += '<div class="left">';
    html += '<h1 class="wdata-36">'+weather.forecast[7].day+'</h1>';
    html += '<a><i class="icon icon-'+weather.forecast[7].code+'"></i></a>';
    html += '<p class="wdata-37">'+weather.forecast[7].high+'&deg;</p>';
    html += '</div>';
    html += '<div class="right">';
    html += '<h2 class="wdata-38">'+weather.forecast[7].date+'</h2>';
    html += '<h3 class="wdata-39">'+weather.forecast[7].text+'</h3>';
    html += '<p class="wdata-40">'+weather.forecast[7].low+'&deg;</p>';
    html += '</div>';
    html += '</section>';
    html += '</main>';
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

