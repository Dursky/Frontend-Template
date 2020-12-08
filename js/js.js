function search(){
    if($("#text_search" ).length < 1){
        $( "<div id='text_search'></div>" ).insertAfter( "#search" );
    }
}