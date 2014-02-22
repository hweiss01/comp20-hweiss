


    function draw() {
        canvas = document.getElementById('game');
        // Check if canvas is supported on browser
        if (canvas.getContext) {
        	console.log("We got the canvas!")
            ctx = canvas.getContext('2d');
             ctx.fillStyle = "rgb(0, 255, 0)";
	           ctx.fillRect (50, 50, 55, 50);
            
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    }

