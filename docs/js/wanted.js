/*
$(document).ready(function(){
    $("a").trigger("click");
});*/

$(document).ready(function(){

    var url = window.location.href;

    var url_parts = url.split("#")
    var ancestor = url_parts[url_parts.length - 1]
    console.log(ancestor);
    switch(ancestor){
        case 'job1-link':
            $("#job1-link").trigger("click");
            break;
        case 'job2-link':
            $("#job2-link").trigger("click");
            break;
        case 'job3-link':
            $("#job3-link").trigger("click");
            break;
    }
  }); 