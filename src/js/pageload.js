$(function() {
	var x1min = 250;
	var x1max = 19;
	var y1min = 5;
	var y1max = 175;
	var x2min = 390;
	var x2max = 486;
	var x3max = 292;
	var y3max = 332;
	var x4max = 507;
	var y4max = 780;
	var y5max = 495;
	var x5cur = x1max;
	var x6cur = x2max;
	var y5cur = y3max;
	var x1cur = x1min;
	var y1cur = y1min;
	var x2cur = x1min;
	var x3cur = x1min;
	var y3cur = y1min;
	var x4cur = x1min;
	var y4cur = y1max;
	var divcreat = true;

	$(".dial").knob();
	var timerId = setInterval(function() {
		var knobval=document.getElementById("maindial");
		if (knobval.value == 50) {
			addicon("bottom");
		} else if (knobval.value == 10) {
			addicon("righttop");
		} else if (knobval.value == 40) {
			addicon("rightbot");
		} else if (knobval.value == 20) {
			addicon("rightmidtop");
		} else if (knobval.value == 30) {
			addicon("rightmidbot");
		} else if (knobval.value == 90) {
			addicon("lefttop");
		} else if (knobval.value == 60) {
			addicon("leftbot");
		} else if (knobval.value == 80) {
			addicon("leftmidtop");
		} else if (knobval.value == 70) {
			addicon("leftmidbot");
		}
		if (knobval.value < 100) {
			knobval.value++;
		}
		$(".dial").val(knobval.value).trigger('change');
		if (knobval.value == 100) {
			if (divcreat == true) {
			var dimdiv = document.createElement("div");
			dimdiv.id = 'dimdiv';
			dimdiv.setAttribute("height", 500);
			dimdiv.setAttribute("width", 500);
			dimdiv.setAttribute("style", "top:-500px;z-index:1;position: relative;");
			document.getElementById("canvasdiv").appendChild(dimdiv);
			var dimcanvas = document.createElement("canvas");
			dimcanvas.id = 'dimcanvas';
			dimcanvas.setAttribute("height", 500);
			dimcanvas.setAttribute("width", 500);
			dimcanvas.setAttribute("style", "z-index:999;");
			document.getElementById("dimdiv").appendChild(dimcanvas);
			divcreat = false;
			}
			var canvas = document.getElementById('dimcanvas');
			var context = canvas.getContext('2d');

			context.beginPath();
			context.moveTo(x1min, y1min);
			context.lineTo(x1cur, y1cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();
			context.beginPath();
			context.moveTo(x1min, y1min);
			context.lineTo(x2cur, y1cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();

			context.beginPath();
			context.moveTo(x1min, y1min);
			context.lineTo(x3cur, y3cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();
			context.beginPath();
			context.moveTo(x1min, y1min);
			context.lineTo(x4cur, y3cur);
			context.lineWidth = "5";
			context.strokeStyle = "#87CEEB";
			context.lineCap = "round";
			context.stroke();

			if (y1cur < y1max) {
				x1cur -= 19.5;
				x2cur += 19.5;
				y1cur += 14;

			}
			if (y1cur >= y1max) {
				x1cur = x1max;
				x2cur = x2max;
				y1cur = y1max;
			}
			if (y3cur < y3max) {
				x3cur -= 10.6;
				x4cur += 10.6;
				y3cur += 15;
			}
			if (y3cur >= y3max) {
				x3cur = x1max;
				x4cur = x2max;
				y3cur = y3max;

				context.beginPath();
				context.moveTo(x1max + 6, y3max);
				context.lineTo(x5cur, y5cur);
				context.lineWidth = "5";
				context.strokeStyle = "#87CEEB";
				context.lineCap = "round";
				context.stroke();
				context.beginPath();
				context.moveTo(x2max - 6, y3max);
				context.lineTo(x6cur, y5cur);
				context.lineWidth = "5";
				context.strokeStyle = "#87CEEB";
				context.lineCap = "round";
				context.stroke();
				if (y5cur < y5max) {
					x5cur += 22.5;
					x6cur -= 23;
					y5cur += 15;
				}
				if (y5cur >= y5max) {
					clearInterval(timerId);
					var logodiv = document.createElement("div");
					logodiv.id = 'logodiv';
					logodiv.setAttribute("class", "prelogo");
					logodiv.setAttribute("height", 140);
					logodiv.setAttribute("width", 300);
					logodiv.setAttribute("style", "top:-800px;z-index:1;position: relative;");
					//logodiv.setAttribute("onclick", "logoclick()");
					document.getElementById("canvasdiv").appendChild(logodiv);
					document.getElementById('logodiv').innerHTML = '<img style="cursor: pointer;" width="300px" height="140px" onclick="logoclick()" src=./sinfinity.gif>';
					setTimeout(function (){
						window.logoready = true;
					}, 2000);
					window.globalload = true;
					window.bottomready = true;
					window.righttopready = true;
					window.rightbotready = true;
					window.rightmidtopready = true;
					window.rightmidbotready = true;
					window.lefttopready = true;
					window.leftbotready = true;
					window.leftmidtopready = true;
					window.leftmidbotready = true;
				}
			}
		}
	}, 30);
});