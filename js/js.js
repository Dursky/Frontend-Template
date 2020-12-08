$(document).ready(function(){    
var click = 1;
$("#search").click(function () {
    if(click == 2){
        //If secod click remove a search bar and reset a click variable
        $("#text_search").remove();
        click = 0;
    }
    if($("#text_search" ).length < 1 && click == 1 ){
        //Add div when not be in DOM and first click on button
        $( "<div id='text_search'></div>" ).insertAfter( "#search" );
        $( "#text_search" ).append( "<div id='search_btn'>DALEJ</div>"  );
        
    }
    click++;

});


$('#hamburger').click(function() {

});
});