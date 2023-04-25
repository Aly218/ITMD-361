function init(){
  
		function myEventFunction(){
			alert("Nidia Guadarrama: " + entryI.value);
		}

		var entryB = document.getElementById('entrybutton');
    
		entryB.addEventListener('click', myEventFunction);
    
    var entryI = document.getElementById('entryinput')
    
		entryB.addEventListener('click', function(){
			entryB.innerHTML = entryI.value;
		});
}

window.addEventListener('load', init);
