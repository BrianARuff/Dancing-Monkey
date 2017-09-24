	$("#dancingMonkey").click(function(){
		if($("img").attr("src") == ""){
			$("img").attr("src", "https://media.giphy.com/media/dchERAZ73GvOE/giphy.gif");
		}else{
			$("img").attr("src", "");
		}
	});