var question = 0;
var level = 1;
var progress = 0;
var score=0;
var time=90;
var highscore=0;
var counter = setInterval(timer, 1000);
var a1, a2, a3, a4, currA;

var q = new Array("A World Wide Web Consortium","Open Sources facilities the _____ , and benefits from it","_____ develops legal concepts related to the Open Web","The _____ is a prominent advocate of the Open Web","Web to test HTML5 browser support","HTML5 filename extension","Type of format HTML5","What is new element in HTML5","When W3C introduced a logo of HTML5","And When the HTML5 logo is official?","Javascript appeared in","Javascript created by","Javascript filename extension","Type of format javascript","What is the name of javascript before using 'javascript' name","Which version of microsoft IE start using javascript","DOM stands for","OpenOffice allow _____ to be used as scripting language","Javascript Version 1.8.5 release date","Javascript framework to create game","Lightweight framework for building Javascript UI's","Server side Javascript framework","Server side JS developed by Mozilla","CSS means","Filename extension of CSS","Internet media type used by CSS","Type of format CSS"," If we use 'color: blue' what color we get on browser?","The _____ is the platform","Mobile OS by Mozilla that runs Open Web App","Javascript Library","Variables in Javascript can be defined using the _____ keyword","In JS, a _____ object can be used to to print output","HTML5 extended to","_____ is a web page API for storing data in databases","Web browser standard interface for a local database by Oracle","Indexed DB was initially proposed in _____","Tag <p> describe","Element to define graphics drawing using javascript","Element o define music content","<hgroup> element define","Element to desfine progress of a task","To use font in CSS","Set 20px font size using CSS","Set transition effect on the width with duration 2 seconds","Specify :hover for <div> elements in CSS","Which one not jQuery effects","Which methods to set content using jQuery","Winner of 2nd Annual Open Web Award in 2008, category start pages","Winner of 2nd Annual Open Web Award in 2008, category Mobile Apps","Open Web Application Security Project","Type of Open Web Apps by Mozilla are packaged apps and _____","The first websites were created in the early _____","Offline and _____","Web by Mozilla to create and remix the web","Application by Google to design web and banner","Creator of CSS","Internet media type of HTML5","HTML standardized as HTML4 in _____","The HTML5 element has been changed recently");
var a = new Array("1","4","2","4","3","2","3","4","3","3","4","2","1","3","2","3","1","3","4","4","1","3","4","1","3","4","3","2","1","4","3","2","3","2","4","2","1","4","2","1","4","2","1","3","1","4","2","1","3","4","1","1","4","3","3","4","4","1","4","4");
var op1=new Array("W3C","OpenOffice","Creative Designer","Summit Foundation","testhtml5web.org",".html5","Sheet Language","<audio>","January 18, 2010","March 1, 2011","1994","Brendan Connor",".js","Sheet Language","LoveScript","1.0","Document Object Model","HTML4","July 27, 2011","CrafyJS","KnockoutJS","LimeJS","Lime","Cascading Style Sheet",".html","text/javascript","Scripting Language","Ocean","Web","Tizen OS","HTML","if else","output","XHTML","MySQL","MongoDB","2009","Title Content","<audio>","<audio>","Long Heading","<task>","font-family:","font-style:20px;","transition: width 2s;",":hover:div {}","jQuery Fade","All listed below","Bing","Path","OWASP","Hosted Apps","2010s","Database","Google Designer","AppMaker","Dora the Explorer","application/xml","1994","<a>");
var op2=new Array("W2C","Open Love","Creative Commons","Ford Foundation","html5rocks.com",".html","Scripting Language","<video>","Jauary 11, 2010","April 1, 2010","1996","Brendan Eich",".html","Markup Language","LiveScript","4.0","Document Object Markup","HTML5","September 27, 2010","LimeJS","oonlabJS","CraftyJS","Reno","Cascading Server Slide",".js","text/sheet","Markup Language","Blue","World","Sailfish OS","CSS","var","show","XHTML5","PostgreSQL","IndexedDB","2010","Footer Content","<canvas>","<canvas>","Body Heading","<progress>","font-style:","font-size:200%;","transition: width 4s;","hover:div {}","jQuery Ranger","text()","Yahoo","Google Chrome","OWAS","Packaged Apps only","2000s","Off","AppMaker","Webmaker","Brendan Eich","application/css","1990","<cite>");
var op3=new Array("WC","Open Hacking","Cretive Web","oonlab Foundation","html5test.com","html5test","Markup Language","<canvas>","January 18, 2011","April 1, 2011","1997","Shinchan",".css","Scripting Language","JavaS","3.0","Developer Object Model","Javascript","July 28, 2011","EnchantJS","MozillaJS","NodeJS","Dino","Case Slide Sheet",".css","text/html","Style Sheet Language","Red","Hacker","Ubuntu OS","jQuery","DOM","console","CSSX","MariDB","MariDB","1999","Heading Content","<menu>","<menu>","Footer Heading","<cek>","font-size","font-size: 20px;","transition-mode: width 2s;","div-hover {}","jQuery Slide","html()","Google","Firefox for Android","BASO","Web Apps","1980s","Online","Webmaker","Google App for Business","Pal Irish","application/javascript","1998","<menu>");
var op4=new Array("Website","Open Web","Creator Commons","Mozilla Foundation","html5testingX.com",".5html","Love Language","All True","January 11, 2011","March 2, 2011","1995","Brendan Eight",".rpm","Love Language","JScript","2.0","Documentation Object Markup","CSS","July 27, 2010","All True","WebJS","ServersideJS","Rhino","CrafyJS Script Sheet",".exe","text/css","Love Language","White","Love","Firefox OS","Mouse","text","popup","XHTM","Web SQL Database","oonDB","2008","Paragraph Content","<footer>","<header>","Group Heading","<element>","font-type","font-family:20px;","web-transition: 2s;","div:hover {}","jQuery Callback","val()","Mozilla","Evernote","Sec-OP","Desktop Apps","1990s","Hacking","Google+","Google Designer","Haakon Wium Lie","application/xxx","1997","All True");

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
	$("#toggle-128").css("background-color", "#a49a00");
	$("#toggle-64").css("background-color", "#a49a00");
	$("#toggle-32").css("background-color", "#a49a00");	
	$("#toggle-16").css("background-color", "#a49a00");		

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
			$("#toggle-8").css("background-color", "#a49a00");

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
			$("#toggle-4").css("background-color", "#a49a00");

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
			$("#toggle-2").css("background-color", "#a49a00");

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
			$("#toggle-1").css("background-color", "#a49a00");
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
