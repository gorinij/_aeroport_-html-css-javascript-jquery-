$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "" + ui.values[ 0 ] + ":00 - " + ui.values[ 1 ] + ":00" );
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