REadme:

Hayley Weiss

I think I have everything working! I had a lot of problems with getting CORS enabled to start, but then I realized it was a minor error for something else in the same function causing the problem. Once I fixed that it cleared all up!

I went to Jasper's info session and found a lot of help i that and the demonstrations in class. Otherwise I didn't get help from anyone.

I spent a lot of time on this... maybe 7 hours?

The grid is it's own dataobject, mostly managed in the grid.js javascript file which defines how it works and stuff. The grid and the score are both properties of the game instance. So, this.score and this.grid. 

I modified game_manager.js and index.html in the 2048 game. In index.html I just added in a script src for jquery. and in game_manager, I added into the actuate function a jquery post after it decides that the game is over. I found this to be the place where I would get only one post from the 2048 game. Otherwise, I found it sent out multiple post requests.

