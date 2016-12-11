//2016.9.5
//	xf
			$(function(){
			   $(window).resize(function(){
					var nowWidth = document.body.clientWidth;//获取当前屏幕有效区域BODY的宽度
					var changePercent = (nowWidth/640) * 100;//对比我们的640px宽度参考值,计算当前宽度变化的百分比
					console.log('当前屏幕宽度:'+nowWidth+'px,相对于640px参考值的变化百分比:'+changePercent+"%");
					$("html").css("font-size",changePercent+"%");
			   }).resize();
			})
		
	
			
//		返回上一页
		function goback(){
		  window.history.go(-1)
		  }
		
		<input type="button" value="goback" onclick="go(-1)" />



























