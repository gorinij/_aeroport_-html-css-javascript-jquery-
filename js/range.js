/** Расчет времени
 *
 */
function timeComputing(x)
{
    var arr = [];
    for (var i = 1; i <= 24; i++)
    {
        if ((m = x - 60 * i) <= 59)
        {
            if (m < 0){
                i = 0;
                m = 60 + m;
            }
            arr['h'] = (i < 10) ? '0' + i : i;
            arr['m'] = (m < 10) ? '0' + m : m;
            return arr;
        }
    }
}
time = timeComputing(Math.round(Math.random()*1044));
console.log(time['h'] + ':' + time['m']);

$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[0] + ":00 - " + ui.values[ 1 ] + ":00" );
          //document.title = 'lol'+timeComputing(ui.values[0]);
      }
    });
    $( "#amount" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 -  " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });

$(function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val( " " + ui.values[ 0 ] + ":00 -  " + ui.values[ 1 ] + ":00" );
      }
    });
    $( "#amount2" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 -  " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });

$(function() {
    $( "#slider-range3" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( " " + ui.values[ 0 ] + ":00 -  " + ui.values[ 1 ] + ":00" );
      }
    });
    $( "#amount3" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 - " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });

$(function() {
    $( "#slider-range4" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount4" ).val( " " + ui.values[ 0 ] + ":00 - " + ui.values[ 1 ] + ":00" );
      }
    });
    $( "#amount4" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 - " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });

$(function() {
    $( "#slider-range5" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount5" ).val( " " + ui.values[ 0 ] + ":00 - " + ui.values[ 1 ] + ":00" );
      }
    });
    $( "#amount5" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 - " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });

$(function() {
    $( "#slider-range6" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount6" ).val( " " + ui.values[ 0 ] + ":00 -  " + ui.values[ 1 ] + ":00" );
      }
    });
    $( "#amount6" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
      ":00 - " + $( "#slider-range" ).slider( "values", 1 ) + ":00" );
  });