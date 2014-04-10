REadme:

Hayley Weiss

So! I had everything pretty much working, and i was very pleased. Then, suddenly 2048 claimed my heroku app no longer had CORs enabled, even though it previously was able to send a post request just fine. I tried lots of different things for quite a while, and I just do not feel like I am going to find the problem. And since I am sure most other things are working, you can probably tell me what the problem was -.-

I went to Jasper's info session and found a lot of help i that and the demonstrations in class. Otherwise I didn't get help from anyone.

I spent a lot of time on this... maybe 7 hours?

The grid is it's own dataobject, mostly managed in the grid.js javascript file which defines how it works and stuff. The grid and the score are both properties of the game instance. So, this.score and this.grid. 

I modified game_manager.js and index.html in the 2048 game. In index.html I just added in a script src for jquery. and in game_manager, I added into the actuate function a jquery post after it decides that the game is over. I found this to be the place where I would get only one post from the 2048 game. Otherwise, I found it sent out multiple post requests.

