$(document).ready(function(){
    //Search Based on Ingerdients
     $("#searchMenu").keyup(function() {    
        var value = $("#searchMenu").val().toLowerCase(); 
        $(".menu-card").each(function(){
            $(this).toggle($(this).text().toLowerCase().includes(value));
            $("h2").hide();
        });
    });
});