console.log (location.href);
if (window.location.href.indexOf("index.html") > -1) {

	button1 = document.getElementById("startbtn");
	hlf = document.getElementsByClassName('hare-leg-front')[0];
	hlb = document.getElementsByClassName('hare-leg-back')[0];
	haf = document.getElementsByClassName('hare-arm-front')[0];
	hab = document.getElementsByClassName('hare-arm-back')[0];
	hare = document.getElementById("hare");
	// trf = document.getElementsByClassName('tort-r-front')[0];
	// trb = document.getElementsByClassName('tort-r-back')[0];
	// tlf = document.getElementsByClassName('tort-l-front')[0];
	// tlb = document.getElementsByClassName('tort-l-back')[0];
	// tort = document.getElementById("tortoise");
	button1.addEventListener("click", function() {
		 // e.preventDefault;
		// hlf.classList.remove("leg-swing");
		//hlf.offsetWidth = hlf.offsetWidth;
		// hlf.classList.add("leg-swing");
		hlf.classList.add("leg-swing");
		hlb.classList.add("leg-swing2");
		haf.classList.add("swing");
		hab.classList.add("swing2");
		hare.classList.add("walk1");

		// trf.classList.add("leg-swing");
		// trb.classList.add("leg-swing2");
		// tlf.classList.add("leg-swing2");
		// tlb.classList.add("leg-swing");
		// tort.classList.add("walk2");
	},);
} else if (window.location.href.indexOf("scene2.html") > -1) {
	button2 = document.getElementById("s2btn");
	hlf = document.getElementsByClassName('hare-leg-front')[0];
	hlb = document.getElementsByClassName('hare-leg-back')[0];
	haf = document.getElementsByClassName('hare-arm-front')[0];
	hab = document.getElementsByClassName('hare-arm-back')[0];
	hare = document.getElementById("hare");
	trf = document.getElementsByClassName('tort-r-front')[0];
	trb = document.getElementsByClassName('tort-r-back')[0];
	tlf = document.getElementsByClassName('tort-l-front')[0];
	tlb = document.getElementsByClassName('tort-l-back')[0];
	tort = document.getElementById("tortoise");
	button2.addEventListener("click", function() {
		 // e.preventDefault;
		// hlf.classList.remove("leg-swing");
		//hlf.offsetWidth = hlf.offsetWidth;
		hlf.classList.add("leg-swing");
		hlf.classList.add("leg-swing");
		hlb.classList.add("leg-swing2");
		haf.classList.add("swing");
		hab.classList.add("swing2");
		hare.classList.add("walk1");

		trf.classList.add("leg-swing");
		trb.classList.add("leg-swing2");
		tlf.classList.add("leg-swing2");
		tlb.classList.add("leg-swing");
		tort.classList.add("walk2");

	},);
} else if (window.location.href.indexOf("scene3.html") > -1) {

	button3 = document.getElementById("s3btn");
	hlf = document.getElementsByClassName('hare-leg-front')[0];
	hlb = document.getElementsByClassName('hare-leg-back')[0];
	haf = document.getElementsByClassName('hare-arm-front')[0];
	hab = document.getElementsByClassName('hare-arm-back')[0];
	hare = document.getElementById("hare");
	trf = document.getElementsByClassName('tort-r-front')[0];
	trb = document.getElementsByClassName('tort-r-back')[0];
	tlf = document.getElementsByClassName('tort-l-front')[0];
	tlb = document.getElementsByClassName('tort-l-back')[0];
	tort = document.getElementById("tortoise");
	speech4 = document.getElementsByClassName('speech4')[0];
	button3.addEventListener("click", function() {
		 // e.preventDefault;
		// hlf.classList.remove("leg-swing");
		//hlf.offsetWidth = hlf.offsetWidth;
		// hlf.classList.add("leg-swing");
		hlf.classList.add("leg-swing");
		hlb.classList.add("leg-swing2");
		haf.classList.add("swing");
		hab.classList.add("swing2");
		hare.classList.add("run1");

		trf.classList.add("leg-swing");
		trb.classList.add("leg-swing2");
		tlf.classList.add("leg-swing2");
		tlb.classList.add("leg-swing");
		tort.classList.add("walk2");

		speech4.classList.add("fadeIn");
	},);

} else if (window.location.href.indexOf("scene4.html") > -1) {

	button4 = document.getElementById("s4btn");
	hlf = document.getElementsByClassName('hare-leg-front')[0];
	hlb = document.getElementsByClassName('hare-leg-back')[0];
	haf = document.getElementsByClassName('hare-arm-front')[0];
	hab = document.getElementsByClassName('hare-arm-back')[0];
	hare = document.getElementById("hare");

	speech2 = document.getElementsByClassName('speech2')[0];

	he1 = document.getElementsByClassName('hare-eye-1')[0];
	he2 = document.getElementsByClassName('hare-eye-2')[0];

	button4.addEventListener("click", function() {
		 // e.preventDefault;
		// hlf.classList.remove("leg-swing");
		//hlf.offsetWidth = hlf.offsetWidth;
		// hlf.classList.add("leg-swing");
		hlf.classList.add("leg-swing");
		hlb.classList.add("leg-swing2");
		haf.classList.add("swing");
		hab.classList.add("swing2");
		hare.classList.add("run1");

		speech2.classList.add("fadeIn");

		he1.classList.add("blink1");
		he2.classList.add("blink1");

	},);
}
else if (window.location.href.indexOf("scene5.html") > -1) {
 button5 = document.getElementById("s5btn");

 trf = document.getElementsByClassName('tort-r-front')[0];
 trb = document.getElementsByClassName('tort-r-back')[0];
 tlf = document.getElementsByClassName('tort-l-front')[0];
 tlb = document.getElementsByClassName('tort-l-back')[0];
 tort = document.getElementById("tortoise");

  speech3 = document.getElementsByClassName('speech3')[0];
	speech2 = document.getElementsByClassName('speech2')[0];
 button5.addEventListener("click", function() {
		// e.preventDefault;
	 // hlf.classList.remove("leg-swing");
	 //hlf.offsetWidth = hlf.offsetWidth;

	 trf.classList.add("leg-swing3");
	 trb.classList.add("leg-swing4");
	 tlf.classList.add("leg-swing4");
	 tlb.classList.add("leg-swing3");
	 tort.classList.add("walk3");
	 speech2.classList.add("fadeIn");
	 speech3.classList.add("fadeIn2");

 },);
}
else if (window.location.href.indexOf("scene6.html") > -1) {
 button6 = document.getElementById("s6btn");
 hlf = document.getElementsByClassName('hare-leg-front')[0];
 hlb = document.getElementsByClassName('hare-leg-back')[0];
 haf = document.getElementsByClassName('hare-arm-front')[0];
 hab = document.getElementsByClassName('hare-arm-back')[0];
 hare = document.getElementById("hare");

 trf = document.getElementsByClassName('tort-r-front')[0];
 trb = document.getElementsByClassName('tort-r-back')[0];
 tlf = document.getElementsByClassName('tort-l-front')[0];
 tlb = document.getElementsByClassName('tort-l-back')[0];
 tort = document.getElementById("tortoise2");
 i2= document.getElementsByClassName("interactive2")[0];


 button6.addEventListener("click", function() {
		// e.preventDefault;
	 // hlf.classList.remove("leg-swing");
	 //hlf.offsetWidth = hlf.offsetWidth;

	 hlf.classList.add("leg-swing");
	 hlb.classList.add("leg-swing2");
	 haf.classList.add("swing");
	 hab.classList.add("swing2");
	 hare.classList.add("run1");

	 trf.classList.add("leg-swing");
	 trb.classList.add("leg-swing2");
	 tlf.classList.add("leg-swing2");
	 tlb.classList.add("leg-swing");
	 tort.classList.add("walk4");

	 i2.classList.add("fadeIn");


 },);
}
