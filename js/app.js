document.addEventListener('DOMContentLoaded',function() {
	document.getElementById('question').addEventListener('click',() => {
		const question = document.getElementById('question');
		const answer = document.getElementById('answer');
	  if (answer.clientHeight) {
	    answer.style.height = 0;
	    question.innerHTML = `SHOOT ME 💘`;
	  } else {
	    const wrapper = document.querySelector('.measuringWrapper');
	    answer.style.height = wrapper.clientHeight + "px";
	    question.innerHTML = `SGT. DOAKES 👾`;
	  }
	});
});
