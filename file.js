let cc = document.getElementById("contentContainer");
cc.style.width = (window.innerWidth*4/5).toString()+"px";
cc.style.height = ((window.innerWidth*4/5)/(1440/732)).toString()+"px";
cc.style.left = (window.innerWidth*1/10).toString()+"px";
class slide {
    constructor() {
        this.toptext = "";
        this.imgurl = "";
        this.imgtext = "";
        this.bottomtext = "";
        this.toptextsize = 0;
        this.bottomtextsize = 0;
        this.imgsize = 0;
        this.offset = 0;
        this.hasimg = true;
    }
}
let currentslidenum = 0;
let slidearray = [];
let colourA = [128,225,0]; // start on A
let colourB = [255,178,102]; // end on B

newSlide("Did you meet your initial goals?","<i>- I hope to learn more about modern day media. -</i><br>"+
"I was exposed to many types of media throughout the course and I learned more about media I don't normally consume, such as podcasts or vlogs.","initialgoal.jpg","Image by <a href='https://pixabay.com/users/geralt-9301/'>geralt</a> from Pixabay",40);

newSlide("What did you learn in each of the units?",
"Unit 1: I learned the importance of analysing books and comparing their different elements with different media.<br><br>"+
"Unit 2: I learned the varying opinions about social media from the perspectives of professionals and non-professionals.<br><br>"+
"Unit 3: I learned the tale of Frankenstein, which helped introduce me to many more books from that era.<br><br>"+
"Unit 4: I learned more about social media and how it can connect - or disconnect - to the outside world.","","",0,3.5,btsize=2.35);

newSlide("Was there one that stood out more for you?","Unit 1 stood out to me as I haven't done a novel study in a long time.","stoodout.jpg","Image by <a href='https://pixabay.com/users/geralt-9301/'>geralt</a> from Pixabay");

newSlide("How did the ideas in this course deepen your understanding about your own identity, strengths, abilities, and your connection to others and the world?","I now understand more about my personal connection to social media and am glad I responsibly use social media.","deepenunderstanding.jpg","Image by <a href='https://pixabay.com/users/publicdomainpictures-14/'>PublicDomainPictures</a> from Pixabay",50,ttsize=3);

newSlide("What, if anything, were you surprised to learn about your ability and interest in studying new media?","I was surprised to learn about my interest in argumentation when I could use new media to present it.","studynewmedia.jpg","Image by <a href='https://pixabay.com/users/recklessstudios-1884442/'>Recklessstudios</a> from Pixabay",45);

newSlide("Choose ONE piece of work that you submitted for assessment in this course.","","onepiece.jpg","Image by <a href='https://pixabay.com/users/qimono-1962238/'>qimono</a> from Pixabay");

newSlide("I choose...","3.1: GRAPHIC NOVELS: LEGIT OR NOT?","chosenassignment.jpg","",60,6,4);

newSlide("3.1: GRAPHIC NOVELS: LEGIT OR NOT?",
"1. I made a connection to my personal experience of reading both the Frankenstein original novel and graphic novel.<br><br>"+
"2. This is important to me because I used a lot of creative thinking to come up with all the arguments in my report.<br><br>"+
"3. This went well because I was arguing against graphic novels and had to take a more unique point of view.<br><br>","","",0,3.5,2.35)

newSlide("3.1: GRAPHIC NOVELS: LEGIT OR NOT?",
"4. This has taught me argumentative skills and how to include my personal thoughts into an academic discussion.<br><br>"+
"5. Next time I will speak louder during my recording so my voice is clearer.<br><br>"+
"6. A question I still have is of the popularity of the argument that graphic novels are not real books.<br><br>","","",0,3.5,2.35)

newSlide("END OF ASSIGNMENT","","end.jpg","Image by <a href='https://pixabay.com/users/elektro-plan-178847/'>Elektro-Plan</a> from Pixabay");

function newSlide(ttext, btext, imgurl="", imggtext="", imggsize=50, ttsize=3.5, btsize=2) {
	let tempslide = new slide();
	tempslide.toptext = ttext;
	tempslide.toptextsize = ttsize;
	tempslide.bottomtext = btext;
	tempslide.bottomtextsize = btsize;
	tempslide.imgtext = imggtext;
	tempslide.imgurl = imgurl;
	tempslide.imgsize = imggsize;
	tempslide.offset = 12;
	if (imgurl == "") {
		tempslide.hasimg = false;
	}
	slidearray.push(tempslide);
	return tempslide;
}

function displaySlide(slidenum) {
    currentslide = slidearray[slidenum];
    
    phystoptext = document.createElement("p");
    phystoptext.innerHTML = currentslide.toptext;
    phystoptext.style.fontSize = currentslide.toptextsize.toString()+"vw";
    document.getElementById("TopText").appendChild(phystoptext);
    
    if (currentslide.hasimg) {
    	physimg = document.createElement("img");
    	physimg.src = currentslide.imgurl;
    	physimg.style.width = ((currentslide.imgsize/100)*parseInt(cc.style.width)).toString()+"px";
    	//document.getElementById("ImgContainer").style.left = ((100-currentslide.imgsize)/2).toString()+"%";
    	document.getElementById("ImgContainer").appendChild(physimg);
    	physimgtext = document.createElement("p");
    	physimgtext.innerHTML = currentslide.imgtext;
    	document.getElementById("ImgContainer").appendChild(physimgtext);
    }
    
    physbottomtext = document.createElement("p");
    physbottomtext.innerHTML = currentslide.bottomtext;
    physbottomtext.style.fontSize = currentslide.bottomtextsize.toString()+"vw";
    document.getElementById("BottomText").appendChild(physbottomtext);
    if (!(currentslide.hasimg)) {
    	//document.getElementById("BottomText").style.width = (window.innerWidth*3/4).toString()+"px";
    		document.getElementById("BottomText").style.width = "80%";
    		document.getElementById("BottomText").style.left = "10%";
    }
    
    cc.style.top = (((window.innerHeight/2)-(parseInt(cc.style.height))/2)-(currentslide.offset/100)*window.innerHeight).toString()+"px";
}

function NextSlide() {
	currentslidenum += 1;
    document.getElementById("body").style.backgroundColor = "rgb("+(colourA[0]+(currentslidenum*((colourB[0]-colourA[0])/(slidearray.length-1)))).toString()+", "+(colourA[1]+(currentslidenum*((colourB[1]-colourA[1])/(slidearray.length-1)))).toString()+", "+(colourA[2]+(currentslidenum*((colourB[2]-colourA[2])/(slidearray.length-1)))).toString()+")";
    document.getElementById("TopText").innerHTML = '';
    document.getElementById("BottomText").innerHTML = '';
    document.getElementById("BottomText").style.width = "auto";
    document.getElementById("BottomText").style.left = "auto";
   	document.getElementById("ImgContainer").innerHTML = '';
    if (currentslidenum == slidearray.length-1) {
        document.getElementById("next-button").style.display = 'none';
    }
    if (currentslidenum == 1) {
        document.getElementById("prev-button").style.display = 'block';
    }
    displaySlide(currentslidenum)

}
function PrevSlide() {
	currentslidenum -= 1;
    document.getElementById("body").style.backgroundColor = "rgb("+(colourA[0]+(currentslidenum*((colourB[0]-colourA[0])/(slidearray.length-1)))).toString()+", "+(colourA[1]+(currentslidenum*((colourB[1]-colourA[1])/(slidearray.length-1)))).toString()+", "+(colourA[2]+(currentslidenum*((colourB[2]-colourA[2])/(slidearray.length-1)))).toString()+")";
    document.getElementById("TopText").innerHTML = '';
    document.getElementById("BottomText").innerHTML = '';
    document.getElementById("ImgContainer").innerHTML = '';
    if (currentslidenum == 0) {
        document.getElementById("prev-button").style.display = 'none';
    }
    if (currentslidenum == slidearray.length-2) {
        document.getElementById("next-button").style.display = 'block';
    }
    displaySlide(currentslidenum)
}
displaySlide(currentslidenum)
