 // create our calculator class
 var digitButtons = { '#1': '1', '#2': '2','#3': '3','#4':'4','#5':'5','#6':'6','#7':'7','#8':'8','#9':'9','#0':'0'};
 var operationButtons = {'+':'plus','-':'minus','*':'multiply','/':'divide'};

 $('document').ready(function(){
     var mainCalculator = new Calculator();

     $( "#equal" ).bind('click', function() {
         mainCalculator.equalButtonPressed();
     });

     $( "#C" ).bind('click', function() {
         mainCalculator.clearButtonClick();
     });

     $.each( digitButtons, function( i, val ) {
         $( "#" + val ).bind('click', function() {
             mainCalculator.digitButtonClick(val);
         }
       )
     });

     $.each( operationButtons, function( i, val ) {
         $( "#" + val ).bind('click', function() {
             mainCalculator.operationClick(val);
         }
       )
     });
 });
