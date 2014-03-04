var question = 0;
var level = 1;
var progress = 0;
var score=0;
var time=90;
var highscore=0;
var counter = setInterval(timer, 1000);
var a1, a2, a3, a4, currA;

var q = new Array("www stands for?","Which one protocol services on internet","When research ito packet switching started?","Since the _____ the internet has had impact on culture and commerce","The principal name spaces of internet are administrated by _____","Which one not part of RIRs","When Internet Society (ISOC) was founded?","Which one not Internet Chat","Email stands for?","HTTP Stands for?","World Wide Web Browser","How many layer on OSI Model?","in 1957, The ______ launched the first satelite, Sputnik I","When Internet Assigned Numbers Authority (IAN) established","in 2012, ICANN begins accepting applications for new generic top-level _____","One of peer-to-peer file sharing","The Anonymous news and information leaks","The first live internet link into low earth orbit was established on","____ created @ sign to separate user names from host names","The world first Web Server used by _____ at CERN","The 1st mobile phone with internet connectivity","The 1st mobile internet service by NTT DoCoMo","Who coined the tem Web 2.0?","The best way to describe internet","Function of Browser?","The Internet was originally developed by ","Which one of the following not search engine?","Three main search expression, or operators, reconigzed by Booelan logic","Example of URL","http://oonlab.com is example of?","Which one is not and example of extension in a URL?","URL extension for organizations","Where to buy Domain Names?","Browser by Apple","IM stands for?","Microblogging Social Media","ISP stands for?","Vint Cerf and _____ introduced Transmission Control Protocol in 1974","Successor of IPv4","Which one is not certification release by CISCO","People who like doing awesome stuff on internet","Which one not part of Transport Layer?","Internet Layer","Sample of IPv4 Address","Sample of Ipv6 Address","What classes mentioned on RFC1517","An IP packet consist of a header section and a _____ section","FTP is part of _____ layer","Which one not part of Application layer","Which one part of Link layer?","One of media access control","One of ISP in the world","Request method using on HTTP","Safe method on HTTP","Competitor HTTP","Gopher Protocol was first described in ______","Search engine system for the gopher protocol","IPv6 was first formally described in ______","IPv6 packet has two parts, what is it?","IPv6 is an ______");
var a = new Array("4","2","2","1","3","4","1","3","4","3","2","1","4","3","2","3","2","4","2","1","3","4","2","1","4","2","1","3","4","4","1","4","2","1","3","4","1","1","4","3","2","3","1","3","4","1","3","4","3","2","3","1","3","4","2","1","4","2","1","3");
var op1=new Array("World Wide Watch","Voltage","Early 1880s","1990s","UCANN","AIN","1992","WhatsApp","Ecosystem Mail","HyperMall","Mozilla Thunderbird","7","Indonesia","1990","Domain Documentation","Keyboard","Power Ranger","January 22, 2011","Naruto","Tim Berners-Lee","Nokia N95","ISP","Dora the Explorer","A Network of Networks","Access girlfriend","Indonesia Department Hacker","oonlab","YOU AND ME","28796129","Email",".rpm",".edu","Hotel","Safari","Internet Marketing","DotA","Internet Services Provider","Bob Kahn","Ipv8","CCIE","PILOT","UDP","IPv4","9g9dg9.2982.ddd","08780303028","Classless Inter-Domain Routing","Status","Data","HTTP","HTTP","Bag","AT&T","POST","HED","Firefox","RFC 1436","Yahoo","RFC 1436","Header & Payload","Game");
var op2=new Array("World Wide WC","VoIP","Early 1960s","1980s","ICAN","AfriNIC","1994","Google Hangout","Electronic Market","Hypertext Transport People","Mozilla Firefox","6","UK","1975","Domain Names","Mouse","WikiLeaks","January 23, 2011","Ray Tomlison","O'Reaily","Nokia N900","I-node","Dale Dougherty","A girlfriend of networks","to be power rannger","U.S Department Defense","Yahoo","AND, OR, YES","www","Phone Number",".org",".girl","GoDaddy","Firefox","Internet Marketplace","Facebook","Internet Services Protocol","Doraemon","IPv3","CCNA","HACKER","TCP","Mouse","127.0.0.xxx","192.168.1.0","IPv6","Type","Network","FTP","None of Above","Hoodie","KitKat","GET","GET","Gopher","RFC 1444","Bing","RFC 2460","Header & Footer","HACKER","BodyPack");
var op3=new Array("Word Web Wide","Volume","Early 1980s","2000s","ICANN","APNIC","1995","Yamaha","Electronic Music","Hypertext Transfer Protocol","LINE","2","USA","1972","Server","BitTorrent","Crayon Shinchan","January 22, 2014","Ray Murray","Shinchan","Nokia 9000 Communicator","I-ambe","Diego Catalan","A human Network","to fly in the sky","ID Department Developer","Google","AND, OR, NOT","onto@oonlab.com","Address Home",".com",".com","Workshop","Chrome","Internet Messaging","MySpace","Internet Server Protocol","Shinchan","IPv7","OSCP","DRIVER","OOP","Keyboard","127.0.0.1","127.0.0.1","Google","Data","Link","OSCE","FTP","DSL","Firefox OS","All True","TRACE","Chrome","RFC 2641","Google","RFC 2461","Payload & Application","Internet Layer Protocol");
var op4=new Array("World Wide Web","VoxIP","Early 2000s","1970s","UCAN","OONIC","1990","IRC","Electronic Mail","Hypertext Transfer Provider","Mouse","4","Uni Soviet","1994","Inter-Domain","Hacker","Dora the Explorer","January 22, 2010","Shinchan","Tom Cruize","Samsung Ice Cream","I-mode","Shinchan Nohara","A Network of Girl","Access World Wide Web","U.S Hacker","Bing","ME AND YOU","http://www.oonlab.com","URL",".info",".org","Beach","Thunderbird","Internet HyperMall","Twitter","Internet Services People","Dora The Explorer","IPv6","CCNP","Shinchan","RSVP","LCD","::1","::1","Classless External Routing","Code","Application","DHCP","DHCP","Hat","Chrome","PUT","All True","Safari","RFC 2460","Veronica","RFC 1335","Header & Body","Operating System");

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
	$("#toggle-128").css("background-color", "#0a9140");
	$("#toggle-64").css("background-color", "#0a9140");
	$("#toggle-32").css("background-color", "#0a9140");	
	$("#toggle-16").css("background-color", "#0a9140");		

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
			$("#toggle-8").css("background-color", "#0a9140");

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
			$("#toggle-4").css("background-color", "#0a9140");

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
			$("#toggle-2").css("background-color", "#0a9140");

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
			$("#toggle-1").css("background-color", "#0a9140");
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

