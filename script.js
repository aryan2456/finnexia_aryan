const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var preloader = document.getElementById('loading');
function myLoader(){
	preloader.style.display = 'none';
}



facts = ['Bill Gates told his Harvard University professors that he would be a millionaire by age 30. He became a billionaire at age 31.',
	'The word “tax” is from the Latin word "taxo", meaning “I estimate.”',
	'In Texas, cowboy boots are exempted from sales tax. Hiking books are not.',
	'In 2001, in the wake of the World Trade Center attack, the NYSE was closed for four sessions, the longest period of time the exchange was closed since 1933.',
	'Martha Washington is the only woman to appear on a U.S. currency note.',
	'The Secret Service was originally made to fight counterfeiting.',
	'The most counterfeited denomination of money is the $20 bill.',
	"The world's first bank was Monte Dei Paschi di Siena, founded in 1472 and headquartered in Tuscany, Italy. It still operates today.",
	"More monopoly money is printed each year than real money in the US.",
	"During a period of intense hyperinflation in Zimbabwe, where a loaf of bread could cost $300 billion, a $100 trillion note was produced.",
	"In 1958, as an experiment, Bank of America mailed 60,000 residents of Fresno, California a small plastic card with a $500 credit line. BoA figured if it failed, there’d be no media coverage because it was in Fresno. The experiment was hugely successful and the program became Visa.",
	"Prior to 1999, the mythical American Express Black Card was just a myth. The myth became so pervasive that American Express decided to capitalize on it and actually make a black, ultra exclusive credit card.",
	"The concept of using a card for purchases was described in 1887 by Edward Bellamy in his utopian novel Looking Backward.",
	"To open the vaults at the Bank of England, you need a key which is 3 feet long.",
	"The first institutions that took on the storage of money and valuables, were the temples.",
	"Credito Emiliano bank, in the Emilia Romagna region of northern Italy, has been accepting giant wheels of Parmigiano-Reggiano cheese as collateral for small-business loans since 1953.",
	"The earliest reference of coins in the Indian context can be found in the Vedas. Nishka was the term used for coins of metals.",
	"The first set of commemorative coins was issued in 1964 in honor of Jawaharlal Nehru, the first prime minister of the Indian Republic.",
	"D. Udaya Kumar introduced the symbol of Indian rupees in the year of 2010. While creating the symbol, the Latin ‘R’ and the Devanagari symbol of ‘Ra’ was used shortly.",
	"Indian currency notes feature 15 official languages.",
	"In 2007, a shortage of coins in Kolkata led shopkeepers to buy them at more than their face value. The reason for this shortage has been speculated to be the melting and smuggling of coins to turn then into ornaments, razor blades, etc.",
	"Currently, Indian coins are minted in 4 locations - Mumbai, Noida, Hyderabad, Kolkata. Each coin has a unique shape right below the year that helps identify which city it was minted in. Mumbai is represented by a diamond, Noida by a dot, Hyderabad by a star and Kolkata mint has no mark.",
	"The world’s smallest note is the Romania 10 bani, issued in 1917 and measuring just 27.5mm by 38mm. By contrast the world’s largest was issued in the Philippines to commemorate the centenary of the country’s independence, and measured 22cm by 23cm."]


function changeText1() {
	document.getElementById("title-state").innerHTML = "FINNEXIA";
	document.getElementById("text-state").innerHTML = "FINANCE CLUB | IIIT DELHI";

	if(window.innerWidth >= 1200){
		document.getElementById("title-state").style.fontSize = '6vw';
		document.getElementById("text-state").style.fontSize = '2vw';
	}
	else if(window.innerWidth >=768 && window.innerWidth < 1200){
		document.getElementById("title-state").style.fontSize = '7.8vw';
		document.getElementById("text-state").style.fontSize = '2.8vw';
	}
	else if(window.innerWidth < 768) {
		document.getElementById("title-state").style.fontSize = '11.8vw';
		document.getElementById("text-state").style.fontSize = '3.6vw';
	}	

	document.getElementById("home-logo").style.display = 'block';
	document.getElementById("button1").style.backgroundColor = "white";
	document.getElementById("button2").style.opacity = "0.5";
	document.getElementById("button1").style.opacity = "1";
}

function changeText2() {
	var n = facts.length;
	var x = Math.floor(Math.random()*n);
	document.getElementById("title-state").innerHTML = "Did You Know?";
	document.getElementById("text-state").innerHTML = facts[x];	

	if(window.innerWidth >= 1200){
		document.getElementById("title-state").style.fontSize = '4.3vw';
		document.getElementById("text-state").style.fontSize = '1.65vw';
	}	
	else if(window.innerWidth >=768 && window.innerWidth < 1200){
		document.getElementById("title-state").style.fontSize = '7vw';
		document.getElementById("text-state").style.fontSize = '2.5vw';
	}
	else if(window.innerWidth < 768){
		document.getElementById("title-state").style.fontSize = '8vw';
		document.getElementById("text-state").style.fontSize = '3vw';
	}

	document.getElementById("home-logo").style.display = 'none';
	document.getElementById("button2").style.backgroundColor = "white";
	document.getElementById("button1").style.opacity = "0.5";
	document.getElementById("button2").style.opacity = "1";
}

function notifIgnore(){
	document.getElementById('popUpMain').style.display = 'none';
}




