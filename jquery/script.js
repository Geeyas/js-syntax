//java script in Jquery

$(function()
{

	$('#box').click(function()
	{
		alert('you clicked the box');
		$('#box').text('Enter your name in below box!!');
	})

	$('input').blur(function()
	{

		if($(this).val() == "") 
		{
			$(this).css("border","1px solid red");
			$('#box').text('opps! Your forgot to enter your name');
		}
	})

	$('input').keydown(function()
	{
		if($(this).val() !== "") 
	{
		$('#box').text('Thanks for that');
	}
	})

	$('#enter').click(function()
	{
		$('#box').text('thanks for name');
	})

	$('#box').hover(function(){
		$(this).text('Wow! I found your Cursor');
	}, function(){
		$(this).text('Opps! I lost it');
	})

	$('#notification').delay(1000).fadeIn().delay(2000).slideUp();
// slideUp and slideDown will make the elemt toggle up and toggle down respectively.
	$('#anim').click(function(){
		$('#box').slideToggle(); // slideToggle method make the element up and down as users required.
		$('#circle').slideToggle();
		$('h1').fadeTo( 2000, 0.25); //fadeTo( delay-time, opacity, <function(){<code>}>);
	// fadeTo is similar with method like fadeIn and fadeOut
	})


// jQuery code for navigation of arrows

$('#left').click(function(){
	$('.boxx').animate({
		left:"-=40px",
	}, function(){
	});
})


$('#right').click(function(){
	$('.boxx').animate({
		left:"+=40px"
	}, function(){


	});

})


$('#up').click(function(){
	$('.boxx').animate({
		top:"-=40px"
	}, function(){});
})


$('#down').click(function(){
	$('.boxx').animate({
		top:"+=40px"
	},function(){});
})


});