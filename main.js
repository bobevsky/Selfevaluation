		
		var slider = document.getElementById('sliderStatus');
		var message = document.getElementById('sliderMessage');
		slider.classList.remove("orange","yellow","lightgreen","green");
		
		if (navigator.userAgent.indexOf("Firefox") != -1)
			{
				$('#sliderStatus').attr({
					value: '50'
				})
			} else if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
				$('#sliderStatus').attr({
					value: '54'
				});
			}
		message.innerHTML = "Уште една обична работна недела.";
		message.style.color = "#fff200";
		slider.style.background = "#fff200";//<-- yellow
		slider.classList.add("yellow");
		slider.classList.remove("lightgreen");
		
		function sliderChange(callback){
			if (slider.value <= 9) {
				message.innerHTML = "Неделава беше ужасна...";
				message.style.color = "red";
				slider.style.background = "#ed1c24"; //<-- red
				slider.classList.add("red");
				slider.classList.remove("orange");

			} else if (slider.value <= 39){
				message.innerHTML = "Можеше и подобро.";
				message.style.color = "#ff7f27";
				slider.style.background = "#ff7f27";//<-- orange
				slider.classList.add("orange");
				slider.classList.remove("yellow");

			} else if (slider.value <= 60){
				message.innerHTML = "Уште една обична работна недела.";
				message.style.color = "#fff200";
				slider.style.background = "#fff200";//<-- yellow
				slider.classList.add("yellow");
				slider.classList.remove("lightgreen");

			} else if (slider.value <= 90){
				message.innerHTML = "Забавно беше.";
				message.style.color = "#7aff0e";
				slider.style.background = "#7aff0e";//<--lightgreen
				slider.classList.add("lightgreen");
				slider.classList.remove("green");

			} else if (slider.value <= 100){
				message.innerHTML = "WOW, одлична недела.";
				message.style.color = "#0ed145";
				slider.style.background = "#0ed145";//<--green
				slider.classList.add("green");
			} 
		}

		slider.addEventListener('input', function(){
			sliderChange(callback());
		});