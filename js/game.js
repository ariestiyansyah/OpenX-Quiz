var question = 0;
var level = 1;
var progress = 0;
var score=0;
var time=90;
var highscore=0;
var counter = setInterval(timer, 1000);
var a1, a2, a3, a4, currA;

var q = new Array("What is FOSS mean","Security Model that firefox using","B2G means","When Mozilla Foundation founded","When Netscape created a project called Mozilla?","Which one is not feature of Firefox","What OS can't run Firefox","Chairman of Mozilla","When Mozilla Corporation founded","what is bug tracking system used by Mozilla","Lead Developer of Bugzilla","Whic one is not Mozilla events?","When the initial release of Firefox?","MoCo stands for","Mozilla COO","Mozilla CTO","Which one not the developer of Firefox","Javascript engine can converts javascript scripts into Java classes","Which one is not development builds channel of Firefox","Cross-browser website authentication by Mozilla","Marketplace of HTML5 application by Mozilla","MDN stands for","SuMo stands for","ReMo stands for","FSA stands for","Javascript engine developed by Brendan Eich","When Mozilla announced funding for the development of non-free games","What animal featured on Firefox logo","Mobile OS by Mozilla","Email client by Mozilla","Which one partner of Mozilla in Firefox OS program?","Which one Developer phone of Firefox OS","What application help millions of people to making web?","Which one part if Webmaker","How to view contributor of Mozilla?","How to run App Manager?","Where you can reset Firefox?","How to use Inspector on Firefox?","How to start private browsing on Firefox?","To activate Developer Toolbar","Shortcut to Add-ons menu","Activate Full Screen on Firefox","Web Literacy Lead for the Mozilla Foundation","Developer Documentation Lead for the MDN","The _____ button resfreshes the web page you are currently using","What's the page that display when the browser loads?","Firefox stores your _____ for 1 month by default","You can use _____ to build Firefox OS Application","Developer of Firefox OS Boilerplate","Principal Evangelist at Mozilla HTML5 and Open Web","Firebug Lead Developer","Mozilla Hacks url","Download button program by Mozilla","Mozilla Official twitter","Firefox Official twitter","Which one isn't place for the MozSummit 2013","Where is Mozilla Headquarter","Mozilla Website","Which one Firefox Add-ons used by Web Developer","The _____ is a browser by Mozilla");
var a = new Array("2","3","2","4","2","1","3","4","2","1","4","1","2","1","3","4","2","2","1","3","4","1","3","4","3","2","1","4","3","2","3","2","4","2","1","3","4","2","1","4","2","1","3","2","1","3","4","1","3","4","3","2","1","4","3","2","1","3","2","4");
var op1=new Array("Free Open Source Shortcut","Criptography","Boot to Gaia","May 15, 2002","July 15, 2003","Dancing","Windows","Bruce Lee","August 3, 2004","Bugzilla","Blake Ross","MozHuft","September 3, 2002","Mozilla Corporation","jay Z","Steven Eich","Dave Hyatt","SpiderMonkey","Weekly","Marketplace","Mozilla App Store","Mozilla Developer Network","Support Mobile","Mozilla Marketing","Firefox System Ambassadors","SpiderMan","December 2013","Phoenix","Tizen","Instantbird","Tamarin","Samsung S9","Dreamweaver","PopFrench","about:credits","about:manager","about:reset","Ctrl+Shift+D","Ctrl+Shift+P","Shift+9","Ctrl+Shift+C","F11","El Aries","Shinchan","Reload","MozFest","History","Firefox OS Boilerplate","Shinchan","Mitchell Elop","Maman","mozillahacks.com","Affiliates Button","@mozillahacks","@tweetfox","Brussels","Mountain View, California","www.mozillafirefox.org","FireExplore","Safari");
var op2=new Array("Free Open Source Software","Steganography","Boot to Gecko","May 15, 2003","February 23, 1998","Tabbed Browsing","Linux","Jackie Chan","August 3, 2005","Chatzilla","Brendan Elow","MozSummit","September 23, 2002","Mozilla Cooperation","Ajay Devgan","Brendan O Connor","Shinchan","Rhino","Beta","Bugzilla","Mozilla Play Store","Mozilla Dancing Network","System mozilla","Mozilla Sales","Firefox Student Animation","SpiderMonkey","December 2014","Tiger","Chrome OS","Thunderbird","Telepon","Geeksphone Keon","WebsiteMaker","Popcorn","about:credit","about:app-hacking","about:credits","Ctrl+Shift+C","Ctrl+Shift+C","Shift+F3","Ctrl+Shift+A","F12","Mitchell Baker","Eric Shepherd","Re-energy","Hometown","Password Manager","Firefox OS Template","El Aries","El Aries","Chris John","hacks.mozilla.org","Facebook Button","@firefox","@firefoxtweet","Bali","Bali, Indonesia","www.mozillaweb.org","Firebug","Google Chrome");
var op3=new Array("Future Of System Security","Sandbox","Boot to Gonk","July 15, 2004","March 23, 1998","Spell Checking","iOS","Paul Irish","September 3, 2005","Instantbird","John Connor","MozCamps","September 23, 2000","Mozilla Communications","Jay Sullivan","Brandon","Joe Hewitt","Blink","Aurora","Mozilla Persona","Firefox Store","Mozilla Developer Netter","Support Mozilla","Mozilla Reok","Firefox Student Ambassadors","SpiderWoman","January 2014","Wolf","Firefox OS","Lenovo","Telefonica","Geeksphone Ranger","Appmaker","Tumblr","about:support","about:app-manager","about:help","Ctrl+Shift+B","Ctrl+Shift+D","Shift+F4","Ctrl+Shift+D","F16","Doug Belshaw","Doraemon","Revolution","Homepage","Webmaker","Firefox OS Website","Robert Nyman","Stepan Eric","Jan Honza Odvarko","hackofmozilla.org","Bikini Bottom","@mozillians","@firefox","Santa Clara","Guangzhou, China","www.mozilla.org","Firebuggy","Mozilla");
var op4=new Array("Free Open System Secrutiy","Offensive-Security","Boot to Geeksphone","July 15, 2003","February 23, 1999","Incremental Find","Mac OS","Mitchell Baker","August 30, 2005","Thunderbird","Dave Miller","MozFest","September 23, 2004","Mozilla counter","Jason Mraz","Brendan Eich","Blake Ross","WebKit","Nightly","MDN","Firefox Marketplace","Mozilla Developer Networking","Software Mozilla","Mozilla Reps","Firefox Support Ambassadors","SpiderEich","January 2013","Red Panda","SailfishOS","Gmail","Webmaker","Ara","Webmaker","Wordpress","about:contributor","about:app","about:support","Ctrl+Shift+I","Ctrl+Shift+E","Shift+F2","Ctrl+Shift+P","F23","Doug Richard","Stepan Elow","Fresh","Animation","None of above","Firefox OS Security","Paul Irish","Chris Heilmann","Si Unyil","mozillahacking.org","Spread Button","@mozilla","@mozilla","Toronto","Sepang, Malaysia","www.webmaker.org","WebDav","Firefox");

function timer()
{
	time -= 1;
	if(time <= 0)
	{
		clearInterval(counter);
		$("#gameOverPopup").css("top", "0%");
		$("#finalScore").text(score);
		if(score>1500)
		{
		$("#msg").text("You are out of the box!");
		$("#nex").css("display","block");
		$("#ret").css("display","none");
		}
		else
		{
		$("#msg").text("TRY HARDER, please answer the question with 100km/h speed.");
		$("#nex").css("display","block");
		$("#ret").css("display","block");
		}
	}
	$("#progress-bar").attr("aria-valuenow", time);
	$("#progress-bar").css("width", ((time/90)*100)+"%");
	$("#time-text").text(time+" seconds");
}


var answer = new Array();

answer[0] = 0;
answer[1] = 0;
answer[2] = 0;
answer[3] = 0;
answer[4] = 0;
answer[5] = 0;
answer[6] = 0;
answer[7] = 0;


function resetAll()
{
    a1= a2= a3= a4=0;
	$("#toggle-128").css("background-color", "#16c5ea");
	$("#toggle-64").css("background-color", "#16c5ea");
	$("#toggle-32").css("background-color", "#16c5ea");	
	$("#toggle-16").css("background-color", "#16c5ea");		

}


function checkProgress()
{
	if(progress == 60)
	{
		level += 1;
		progress=0;
		addTime();
		$("#currentLevel").text(level);
		$("#currentProgress").text(progress);
	}
}

function total()
{
	return answer[0]+answer[1]+answer[2]+answer[3]+answer[4]+answer[5]+answer[6]+answer[7];
}


function generateQuestion(level,quest)
{

 $("#toggle-128").text(op1[quest-1]);
 $("#toggle-64").text(op2[quest-1]);
 $("#toggle-32").text(op3[quest-1]);
 $("#toggle-16").text(op4[quest-1]);
 currA = a[quest-1];
 if(quest>60) time=0;
 return q[quest-1]; 
}

function compare(q, a)
{

	if(a==currA)
	{
		var audio1 = document.getElementById('audio1');
		audio1.play();
		addScore(level);
		resetAll();
		progress+=1;
		$("#currentProgress").text(progress);
		checkProgress();
		resetAll();
		quest++;
		question = generateQuestion(level,quest);
		$("#question").text(question);
	}
	else
	{
	 score = score-10;
	 $("#currentScore").text(score);
	}
}

function addScore(level)
{
	switch(level)
	{
		case 1: case 2:
			score += 50;
			$("#currentScore").text(score);
			break;
		case 3: case 4: case 5:
			score += 100;
			$("#currentScore").text(score);
			break;
		case 6: case 7: case 8: case 9:
			score += 200;
			$("#currentScore").text(score);
			break;
		case 10: case 11: case 12: case 13: case 14:
			score += 300;
			$("#currentScore").text(score);
			break;
		case 15: case 16: case 17: case 18: case 19:
			score += 400;
			$("#currentScore").text(score);
			break;
		case 20: case 21: case 22: case 23: case 24: case 25:
			score += 500;
			$("#currentScore").text(score);
			break;
		case 26: case 27: case 28: case 29: case 30: case 31: case 30:
			score += 600;
			$("#currentScore").text(score);
			break;		
		default:
			score += 700;
			$("#currentScore").text(score);
			break;
	}
}



function toggle() 
{

	var button = document.getElementById('toggle-128');
	button.addEventListener('click', function() {
		var audio = document.getElementsByTagName("audio")[0];
		audio.play();
		if(a1 == 0)
		{
			a1=1;
			$("#toggle-128").css("background-color", "red");
			compare(question, 1);
		}
		else
		{

		}
	});
	

	var button = document.getElementById('toggle-64');
	button.addEventListener('click', function() {
		var audio = document.getElementsByTagName("audio")[0];
	audio.play();
		if(a2 == 0)
		{
			a2=1;
			$("#toggle-64").css("background-color", "red");
			compare(question, 2);
		}
		else
		{

		}
	});


	var button = document.getElementById('toggle-32');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if(a3 == 0)
		{
			a3=1;
			$("#toggle-32").css("background-color", "red");
			compare(question, 3);
		}
		else
		{

		}
	});
	

	var button = document.getElementById('toggle-16');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if(a4 == 0)
		{
			a4=1;
			$("#toggle-16").css("background-color", "red");
			compare(question, 4);
		}
		else
		{

		}
	});


	var button = document.getElementById('toggle-8');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-8").text() == 0)
		{
			$("#toggle-8").text(1);
			$("#toggle-8").css("background-color", "#9CC408");
			answer[4] = 8;
			compare(question, total());
		}
		else
		{
			$("#toggle-8").text(0);
			$("#toggle-8").css("background-color", "#16c5ea");

			answer[4] = 0;
			compare(question, total());
		}
	});
	

	var button = document.getElementById('toggle-4');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-4").text() == 0)
		{
			$("#toggle-4").text(1);
			$("#toggle-4").css("background-color", "#9CC408");
			answer[5] = 4;
			compare(question, total());
		}
		else
		{
			$("#toggle-4").text(0);
			$("#toggle-4").css("background-color", "#16c5ea");

			answer[5] = 0;
			compare(question, total());
		}
	});
	

	var button = document.getElementById('toggle-2');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-2").text() == 0)
		{
			$("#toggle-2").text(1);
			$("#toggle-2").css("background-color", "#9CC408");
			answer[6] = 2;
			compare(question, total());
		}
		else
		{
			$("#toggle-2").text(0);
			$("#toggle-2").css("background-color", "#16c5ea");

			answer[6] = 0;
			compare(question, total());
		}
	});
	

	var button = document.getElementById('toggle-1');
	button.addEventListener('click', function() {
	var audio = document.getElementsByTagName("audio")[0];
audio.play();
		if($("#toggle-1").text() == 0)
		{
			$("#toggle-1").text(1);
			$("#toggle-1").css("background-color", "#9CC408");
			$("#toggle-1").css("background-color", "#9CC408");
			answer[7] = 1;
			compare(question, total());
		}
		else
		{
			$("#toggle-1").text(0);
			$("#toggle-1").css("background-color", "#16c5ea");
			answer[7] = 0;
			compare(question, total());
		}
	});
}


function addTime()
{
	if((time+10)>90)
	{
		time=90;
	}
	else
	{
		time+=10;
	}
}


$(document).ready(function(){
    a1= a2= a3= a4=0;
	toggle();
	level = 1;
	quest = 1;
	question = generateQuestion(level,quest);	
	$("#currentLevel").text(level);
	$("#question").text(question);	
});

