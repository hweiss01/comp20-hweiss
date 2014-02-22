


    function draw() {
        canvas = document.getElementById('game');
        // Check if canvas is supported on browser
        if (canvas.getContext) {

            ctx = canvas.getContext('2d');
            ctx.fillStyle = "#87CEEB"
            ctx.fillRect(0, 0, 800, 100)
            sprite = new Image();
            sprite.src = "assets/duckhunt.png";
            //sprite.addEventListener("load", function() {
            //	  ctx.drawImage(sprite, 30, 20);
            //	}, false);
          
            
        }
        else {
            alert('Sorry, canvas is not supported on your browser!');
        }
    }

