// let position = 0;
// const slidesToShow = 3;
// const slidesToScroll = 1;
// const container = document.querySelector('.slider-container');
// const track = document.querySelector('.slider-track');
// const btnPrev = document.querySelector('prev');
// const btnNext = document.querySelector('.next');
// const itemsCount = document.querySelectorAll('.item')









// our story part
document.getElementById('tab1').onclick = function(){
	document.getElementById('story1').style.display = "block";
	document.getElementById('story2').style.display = "none";
	document.getElementById('story3').style.display = "none";
	document.getElementById('story4').style.display = "none";
	document.getElementById('tab1').style.border = "4px solid #ff7d27";
	document.getElementById('tab2').style.border = "4px solid white";
	document.getElementById('tab3').style.border = "4px solid white";
	document.getElementById('tab4').style.border = "4px solid white";
}
document.getElementById('tab2').onclick = function(){
	document.getElementById('story2').style.display = "block";
	document.getElementById('story1').style.display = "none";
	document.getElementById('story3').style.display = "none";
	document.getElementById('story4').style.display = "none";
	document.getElementById('tab2').style.border = "4px solid #ff7d27";
	document.getElementById('tab1').style.border = "4px solid white";
	document.getElementById('tab3').style.border = "4px solid white";
	document.getElementById('tab4').style.border = "4px solid white";
}
document.getElementById('tab3').onclick = function(){
	document.getElementById('story3').style.display = "block";
	document.getElementById('story2').style.display = "none";
	document.getElementById('story1').style.display = "none";
	document.getElementById('story4').style.display = "none";
	document.getElementById('tab3').style.border = "4px solid #ff7d27";
	document.getElementById('tab2').style.border = "4px solid white";
	document.getElementById('tab1').style.border = "4px solid white";
	document.getElementById('tab4').style.border = "4px solid white";
}
document.getElementById('tab4').onclick = function(){
	document.getElementById('story4').style.display = "block";
	document.getElementById('story2').style.display = "none";
	document.getElementById('story3').style.display = "none";
	document.getElementById('story1').style.display = "none";
	document.getElementById('tab4').style.border = "4px solid #ff7d27";
	document.getElementById('tab2').style.border = "4px solid white";
	document.getElementById('tab3').style.border = "4px solid white";
	document.getElementById('tab1').style.border = "4px solid white";
}





