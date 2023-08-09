const cookiecontainer=document.querySelector(".cookie-container");
		const button=document.querySelector(".cookie-btn");
		setTimeout(()=>{
			cookiecontainer.classList.add("active");

		},2000);
		button.addEventListener("click",function(){
			cookiecontainer.classList.remove("active");
		})
		let a=document.querySelector("#forprivacy1");
		a.addEventListener("click",ashish());
		function ashish(){
			alert("At Book Central,we care deeply about our privacy.we believe in transperence, and we are committed to being upfront about our privacy practices including how we tret put information.")
		}