app.common = {
    init: function(){
  
  
//navigation
	$("#menu-main-menu li").hover(function()
		{
			var this_id = $(this).attr("id");
			switch (this_id)
			{
				case "menu-item-13":
				$(this).find("a").css("color","#f69230");
				break;
				case "menu-item-17":
				$(this).find("a").css("color","#f05f42");
				break;
				case "menu-item-15":
				$(this).find("a").css("color","#5588c1");
				break;
				case "menu-item-14":
				$(this).find("a").css("color","#a1d147");
				break;
			}
			
		},function()
		{
			$(this).find("a").css("color","#000");
		});
		
		
		//scrolling
		$("#arrow_image img").click(function()
		{
			$("html, body").animate({ scrollTop: "0px" },700, 'linear');
		});
		
		if ($("body").attr("id") == "map" || $("body").attr("id") == "about-us") $("#arrow_image").css("display","none");
		
		$(document).scroll(function()
			{
				if ($(document).scrollTop() >= 700)
				{
					$("#arrow_image img").css("opacity","1");
				}
				else if ($(document).scrollTop() <= 450)
				{
					$("#arrow_image img").css("opacity","0");
				}
			});
			
	//fancybox
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});  
  
    },
    finalize: function(){

    }
};