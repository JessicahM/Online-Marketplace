 $(document).ready(function(){
   $("#receipt form").submit(function(event){
       var firstnameinput = $("input#firstname"). val();
       var lastnameinput = $("input#lastname"). val();
       var addressinput = $("input#address"). val();
       var ourproductsinput= $("select#cameratypes").val();
       
   $(".firstname").text(firstnameinput);
   $(".lastname").text(lastnameinput);
   $(".address").text(addressinput);
   $(".cameratypes").text(cameratypeinput);
       
       
   event.preventDefault();
   });
});