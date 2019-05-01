$(document).ready (function (){
setTimeout(function() {   
   $("#text-1").hide();
   $("#genre").css("display","block");
}, 4000);
});

//The code to start the number counter on first loading of page
$(".num").counterUp({delay:10,time:1200});



//The code to execute number counter each time course section is accessed
$(".course-nav").click(function(){
 $(".num").counterUp({delay:10,time:1200});
 });
 
//The code to submit Contact form's data using POST type REST web service
$(".contact-form-btn").click(function(){
	var requestJson = {
		name: $(".contact-form-name").val(),
		email : $(".contact-form-email").val(),
		phone: $(".contact-form-phone").val(),
		message : $(".contact-form-message").val()
		
	}
	
	var url = "http://localhost:8080/contactUs/form-data";
	sendPOSTRequest(url,requestJson);

	
});




//CommonMethod for POST calls
var sendPOSTRequest = function(url , requestJson){
	var data = 	JSON.stringify(requestJson);
$.ajax({
  url:url,
  type:"POST",
  data:data,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(response){
   console.log(response);
  }
})
};