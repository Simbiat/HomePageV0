function htmlcheck() {
	if(!document.createElement('canvas').getAttributeNS || !document.createElement('svg').getAttributeNS){
		document.write('<title>Simbiat World</title><body style="background-color:#BEBEBE"">Your browser does not support HTML5! This website will not work</body>');
		return;
	}
}
function iconclick(icontype) {
	if (window.globalload == false || window[icontype + 'ready'] == false) {
		return;
	}
	window[icontype + 'ready'] = false;
	var ictc = document.getElementById('svgic' + icontype);
	if (ictc.getAttribute("class") != "backicon") {
		ictc.setAttribute("class", "backicon");
		ictc.style.webkitAnimation = "flip 1s linear 1";
		setTimeout(function (){
			arcborders(icontype);
		}, 500);
		setTimeout(function (){
					ictc.style.fill = "red";
		}, 1000);
	} else if (ictc.getAttribute("class") === "backicon") {
		ictc.setAttribute("class", "icon");
		ictc.style.webkitAnimation = "backflip 1s linear 1";
		var tokill = document.getElementById('infodiv' + icontype);
		$(tokill).fadeOut(1000, function() { $(this).remove(); window[icontype + 'ready'] = true; window[icontype + 'open'] = false;});
		if (icontype != "bottom") {
			var tokill = document.getElementById('infodiv2' + icontype);
			$(tokill).fadeOut(1000, function() { $(this).remove();});
		}
		setTimeout(function (){
			ictc.style.fill = "green";
		}, 1000);
	}
}
function iconhover(icontype) {
	var ictc = document.getElementById('svgic' + icontype);
	if (ictc.getAttribute("class") === "preicon" || ictc.getAttribute("class") === "posticon") {
		ictc.setAttribute("class", "icon");
	}
}
function iconhoveroff(icontype) {
	var ictc = document.getElementById('svgic' + icontype);
	if (ictc.getAttribute("class") === "icon") {
		ictc.setAttribute("class", "posticon");
	}
}
function addicon(icontype) {
	var svgidiv = document.createElement("div");
	svgidiv.id = 'svgidiv' + icontype;
	svgidiv.setAttribute("height", 50);
	svgidiv.setAttribute("width", 50);
	svgidiv.setAttribute("class", "svgidiv");
	if (icontype === "bottom") {
		svgidiv.setAttribute("style", "top:470px;left:225px;");
	} else if (icontype === "righttop") {
		svgidiv.setAttribute("style", "top:19px;left:355px;");
	} else if (icontype === "rightmidtop") {
		svgidiv.setAttribute("style", "top:145px;left:456px;");
	} else if (icontype === "rightbot") {
		svgidiv.setAttribute("style", "top:433px;left:355px;");
	} else if (icontype === "rightmidbot") {
		svgidiv.setAttribute("style", "top:305px;left:456px;");
	} else if (icontype === "lefttop") {
		svgidiv.setAttribute("style", "top:19px;left:95px;");
	} else if (icontype === "leftmidtop") {
		svgidiv.setAttribute("style", "top:145px;left:-6px;");
	} else if (icontype === "leftbot") {
		svgidiv.setAttribute("style", "top:433px;left:95px;");
	} else if (icontype === "leftmidbot") {
		svgidiv.setAttribute("style", "top:305px;left:-6px;");
	}
	document.getElementById("canvasdiv").appendChild(svgidiv);
	var svgi = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgi.id = 'svgi' + icontype;
	svgi.setAttribute("height", 50);
	svgi.setAttribute("width", 50);
	svgidiv.appendChild(svgi);
	var svgic = document.createElementNS("http://www.w3.org/2000/svg","circle");
	svgic.id = 'svgic' + icontype;
	svgic.setAttribute("cx", 25);
	svgic.setAttribute("cy", 25);
	svgic.setAttribute("r",  20);
	svgic.setAttribute("style", "fill:green;cursor: pointer;");
	svgic.setAttribute("class", "preicon");
	svgidiv.setAttribute("onclick", "iconclick('"+icontype+"');");
	svgidiv.setAttribute("onmouseover", "iconhover('"+icontype+"');");
	svgidiv.setAttribute("onmouseout", "iconhoveroff('"+icontype+"');");
	svgi.appendChild(svgic);
}
function arcborders(icontype) {
	var infodiv = document.createElement("div");
	infodiv.id = 'infodiv' + icontype;
	infodiv.setAttribute("height", 1);
	infodiv.setAttribute("width", 1);
	infodiv.setAttribute("class", "infodiv");
	if (icontype != "bottom") {
		infodiv.setAttribute("style", "top:-40px;left:-40px;z-index:1;");
	} else {
		infodiv.setAttribute("style", "top:-160px;left:-160px;z-index:1;");
	}
	document.getElementById("canvasdiv").appendChild(infodiv);
	if (icontype != "bottom") {
		var infodiv2 = document.createElement("div");
		infodiv2.id = 'infodiv2' + icontype;
		infodiv2.setAttribute("height", 1);
		infodiv2.setAttribute("width", 1);
		infodiv2.setAttribute("class", "infodiv");
		infodiv2.setAttribute("style", "top:-160px;left:-160px;z-index:1;");
		document.getElementById("canvasdiv").appendChild(infodiv2);
		var inputcan = document.createElement('input');
		var inputcan2 = document.createElement('input');
		inputcan.id = 'infoincan' + icontype;
		inputcan.setAttribute("data-bgColor", "transparent");
		inputcan.setAttribute("type", "text");
		inputcan.setAttribute("style", "z-index:1;");
		inputcan.setAttribute("data-canid", 'dial' + icontype);
		inputcan.setAttribute("data-width", "575");
		inputcan.setAttribute("data-height", "575");
		inputcan.setAttribute("class", "dial");
		inputcan.setAttribute("stopper", "false");
		inputcan.setAttribute("data-displayInput", false);
		inputcan.setAttribute("data-linecap", "round");
		inputcan.setAttribute("data-readOnly", true);
		inputcan.setAttribute("data-thickness", ".02");
		inputcan.setAttribute("value", "0");
		inputcan2.id = 'infoincan2' + icontype;
		inputcan2.setAttribute("data-bgColor", "transparent");
		inputcan2.setAttribute("type", "text");
		inputcan2.setAttribute("style", "z-index:1;");
		inputcan2.setAttribute("data-canid", 'dial2' + icontype);
		inputcan2.setAttribute("data-width", "800");
		inputcan2.setAttribute("data-height", "800");
		inputcan2.setAttribute("class", "dial");
		inputcan2.setAttribute("stopper", "false");
		inputcan2.setAttribute("data-displayInput", false);
		inputcan2.setAttribute("data-linecap", "round");
		inputcan2.setAttribute("data-readOnly", true);
		inputcan2.setAttribute("data-thickness", ".02");
		inputcan2.setAttribute("value", "0");
		if (icontype === "righttop") {
			inputcan.setAttribute("data-angleOffset", "56");
			inputcan2.setAttribute("data-angleOffset", "56");
			inputcan.setAttribute("data-rotation", "anticlockwise");
			inputcan2.setAttribute("data-rotation", "anticlockwise");
		} else if (icontype === "rightmidtop") {
			inputcan.setAttribute("data-angleOffset", "92");
			inputcan2.setAttribute("data-angleOffset", "92");
			inputcan.setAttribute("data-rotation", "anticlockwise");
			inputcan2.setAttribute("data-rotation", "anticlockwise");
		} else if (icontype === "rightbot") {
			inputcan.setAttribute("data-angleOffset", "164");
			inputcan2.setAttribute("data-angleOffset", "164");
			inputcan.setAttribute("data-rotation", "anticlockwise");
			inputcan2.setAttribute("data-rotation", "anticlockwise");
		} else if (icontype === "rightmidbot") {
			inputcan.setAttribute("data-angleOffset", "128");
			inputcan2.setAttribute("data-angleOffset", "128");
			inputcan.setAttribute("data-rotation", "anticlockwise");
			inputcan2.setAttribute("data-rotation", "anticlockwise");
		} else if (icontype === "lefttop") {
			inputcan.setAttribute("data-angleOffset", "-56");
			inputcan2.setAttribute("data-angleOffset", "-56");
		} else if (icontype === "leftmidtop") {
			inputcan.setAttribute("data-angleOffset", "-92");
			inputcan2.setAttribute("data-angleOffset", "-92");
		} else if (icontype === "leftbot") {
			inputcan.setAttribute("data-angleOffset", "-164");
			inputcan2.setAttribute("data-angleOffset", "-164");
		} else if (icontype === "leftmidbot") {
			inputcan.setAttribute("data-angleOffset", "-128");
			inputcan2.setAttribute("data-angleOffset", "-128");
		}
		document.getElementById('infodiv' + icontype).appendChild(inputcan);
		document.getElementById('infodiv2' + icontype).appendChild(inputcan2);
		$('#infoincan' + icontype).knob();
		$('#infoincan2' + icontype).knob();
		var timerId = setInterval(function() {
			var knobval=document.getElementById('infoincan' + icontype);
			var knobval2=document.getElementById('infoincan2' + icontype);
			var knoblim=10;
			knobval.value++;
			knobval2.value++;
			$('#infoincan' + icontype).val(knobval.value).trigger('change');
			$('#infoincan2' + icontype).val(knobval2.value).trigger('change');
			if (knobval.value == knoblim) {
				clearInterval(timerId);
				window[icontype + 'ready'] = true;
				window[icontype + 'open'] = true;
				quake();
			} 
		}, 50);
	} else {
		var botcanvas = document.createElement("canvas");
		botcanvas.id = 'botcanvas';
		botcanvas.setAttribute("height", 800);
		botcanvas.setAttribute("width", 800);
		botcanvas.setAttribute("style", "top:-160px;left:-160px;z-index:999;");
		document.getElementById('infodiv' + icontype).appendChild(botcanvas);
		var canvas = document.getElementById('botcanvas');
		var context = canvas.getContext('2d');

		var x1min = 410;
		var x1max = 330;
		var y1min = 655;
		var y1max = 685;
		var x2min = 390;
		var x2max = 484;
		var x3max = 292;
		var y3max = 780;
		var x4max = 507;
		var y4max = 780;
		var x1cur = x1min;
		var y1cur = y1min;
		var x2cur = x2min;
		var x3cur = x1max;
		var y3cur = y1max;
		var x4cur = x2max;
		var y4cur = y1max;

		var timerId = setInterval(function() {
			context.beginPath();
			context.moveTo(x1min, y1min);
			context.lineTo(x1cur, y1cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();

			context.beginPath();
			context.moveTo(x2min, y1min);
			context.lineTo(x2cur, y1cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();
			if (y1cur < y1max) {
				x1cur -= 8.7;
				x2cur += 10.7;
				y1cur += 3;
			}
			if (y1cur >= y1max) {
				x1cur = x1max;
				x2cur = x2max;
				y1cur = y1max;
				context.beginPath();
				context.moveTo(x1max, y1max);
				context.lineTo(x3cur, y3cur);
				context.lineWidth = "7";
				context.strokeStyle = "#87CEEB";
				context.lineCap = "round";
				context.stroke();

				context.beginPath();
				context.moveTo(x2max + 1, y1max);
				context.lineTo(x4cur, y3cur);
				context.lineWidth = "7";
				context.strokeStyle = "#87CEEB";
				context.lineCap = "round";
				context.stroke();
				if (y3cur < y3max) {
					x3cur -= 3.7
					x4cur += 2.3
					y3cur += 9.3
				}
				if (y3cur >= y3max) {
					clearInterval(timerId);
					window[icontype + 'ready'] = true;
					window[icontype + 'open'] = true;
					quake();
				}
			}
		}, 50);
	}
}
function logoclick() {
	if (window.globalload == false || window.logoready == false) {
		return;
	}
	alert('logo is ready. what now?');
}
function quake() {
	if (window.bottomopen == false || window.righttopopen == false || window.rightbotopen == false || window.rightmidtopopen == false || window.rightmidbotopen == false || window.lefttopopen == false || window.leftbotopen == false || window.leftmidtopopen == false || window.leftmidbotopen == false) {
		return;
	} else {

	}
}