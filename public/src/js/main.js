$(window).ready(function(){
	$('h2').hover(function(){
		$(this).find('i').removeClass('fa-circle-o')
		$(this).find('i').addClass('fa-circle')
	},function(){
		$(this).find('i').removeClass('fa-circle')
		$(this).find('i').addClass('fa-circle-o')
	})

})