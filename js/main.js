 $(document).ready(function(){
   $("#receipt form").submit(function(event){
       var firstnameinput = $("input#firstname"). val();
       var lastnameinput = $("input#lastname"). val();
       var addressinput = $("input#address"). val();
       var beverageinput= $("select#beverage").val();
       
   $(".firstname").text(firstnameinput);
   $(".lastname").text(lastnameinput);
   $(".address").text(addressinput);
   $(".beverage").text(beverageinput);
       
       
   event.preventDefault();
   });
});