$(document).ready(function(){    
var click = 1;
var show = 1;
$("#search").click(function () {
    if(click == 2){
        //If secod click remove a search bar and reset a click variable
        $("#text_search").remove();
        click = 0;
    }
    if($("#text_search" ).length < 1 && click == 1 ){
        //Add div when not be in DOM and first click on button
        $( "<div id='text_search'></div>" ).insertAfter( "#search" );
        $( "#text_search" ).append( "<div id='search_btn'><p style='margin-top:5px;'>DALEJ</p></div>"  );
        $( "#text_search" ).append( "<input type text id='search_input'/>"  );
        
    }
    click++;

});


$('#hamburger').click(function() {
    if(show == 1){
$("#text_title").hide();
    }
if(show ==2){
    $("#text_title").show();
    show = 0;
}
show++;
});


$(".plus").click(function () {
console.log(this.id);
});

});