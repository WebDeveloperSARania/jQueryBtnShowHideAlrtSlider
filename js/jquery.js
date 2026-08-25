
$(document).ready(function(){
	$("h1").hide();
});

$(document).ready(function(){
	$(".pre").hide();
});


// Hide & Show

$(document).ready(function(){
	$("#hide").click(function(){
		$(".cool").hide();
	});
	$("#show").click(function(){
		$(".cool").show();
	});
});

//Mouse Enter

$(document).ready(function(){
	$(".me").mouseenter(function(){
		alert("Welcome To Freedom IT Family");
	});
});

//Mouse Leave

$(document).ready(function(){
	$(".ml").mouseleave(function(){
		alert("Bye! You are now Leave FIT😥😭");
	});
});

//Hide & Show

$(document).ready(function(){
	$("#hwt").click(function(){
		$(".boom").hide(3000);
	});
	$("#swt").click(function(){
		$(".boom").show(5000);
	});
});

//Fade Toggle

$(document).ready(function(){
	$("#ftbutton").click(function(){
		$("#div1").fadeToggle("fast");
		$("#div2").fadeToggle("slow");
		$("#div3").fadeToggle(3000);
		$("#div4").fadeToggle(4000);
	});
});

//Click To Slide

$(document).ready(function(){
	$("#flif").click(function(){
		$("#panel").slideToggle(5000);
	});
});










document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");