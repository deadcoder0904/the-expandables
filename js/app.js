document.addEventListener('DOMContentLoaded',function() {
	document.getElementById('question').addEventListener('click',() => {
		document.getElementById('answer').classList.add('display');
	});
});
