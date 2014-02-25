


    function draw() {
        canvas = document.getElementById('game');
        // Check if canvas is supported on browser
        if (canvas.getContext) {

            ctx = canvas.getContext('2d');
            ctx.fillStyle = "#87CEEB";
            ctx.fillRect(0, 0, 800, 600);
            ctx.fillStyle = "C96A1B";
            ctx.fillRect(0, 500, 800, 200);
            var sprite = document.createElement("img");

            sprite.src = 'assets/duckhunt.png';
            sprite.onload = function() {

            	  ctx.drawImage(sprite, 0, 273, 100, 116, 20, 35, 175, 450);
            	  ctx.drawImage(sprite, 0, 713, 900, 190, 0, 400, 800, 190);
            	  ctx.drawImage(sprite, 0, 0, 58, 50, 300, 470, 100, 100);
            	  ctx.drawImage(sprite, 0, 153, 35, 40, 620, 100, 65, 70);
            	  ctx.drawImage(sprite, 161, 191, 50, 40, 175, 300, 70, 80);
            	  ctx.drawImage(sprite, 335, 115, 39, 40, 325, 150, 70, 80);
            	  ctx.drawImage(sprite, 335, 190, 39, 40, 650, 350, 70, 80);
            	  ctx.drawImage(sprite, 205, 150, 39, 40, 350, 370, 70, 80);

            	 }
    
            
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    }

