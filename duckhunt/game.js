


    function draw() {
        canvas = document.getElementById('game');
        // Check if canvas is supported on browser
        if (canvas.getContext) {

            ctx = canvas.getContext('2d');
            ctx.fillStyle = "#87CEEB";
            ctx.fillRect(0, 0, 800, 600);
            ctx.fillStyle = "C96A1B";
            ctx.fillRect(0, 500, 800, 100);
            sprite = new Image();
            sprite.src = "assets/duckhunt.png";
            sprite.addEventListener("load", function() {
            	  ctx.drawImage(sprite, 0, 273, 100, 116, 20, 35, 175, 450);
            	  ctx.drawImage(sprite, 0, 713, 900, 190, 0, 400, 800, 190);

            	}, false);
          
            
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    }

