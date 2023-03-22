# Founders and Coders Project Five
# ---------------Game---------------
## My game is an attempt at remaking Galaga an oldschool arcade game
#
## Building

I went into this one naively expecting it to not be *too* complicated.
I set out going through a few different tutorials for canvas.\
The first hurdle was getting a projectile that kept it's trajectory when the player co-ordinates changed whilst still originating from the player. I played around with this for a while and then saw that pretty much every tutorial for more complex games used constructor classes.\
I leaned very heavily on a few youtube videos to get started and managed to get projectiles that kept their own trajectory. I had to go back to freeCodeCamp and run through some more courses to better understand what was happening in the videos and by extension my own code.\
Once I had these elements working I started adding more features. 
* I grabbed a photo of night sky from a recent camping trip to use as the background I made it significantly taller than my canvas so it could scroll by for a good bit of time without a seam. 
I found a few resources talking about seamless transition between background so tried to make this work for my own game. It did improve but I never quite got to grips with lining everything up perfectly. Thankfully the photo is fairly noisy so the transitions aren't too distracting.
* Next I needed to add some enemies. I pretty much re-used the functionality of my projectile handler for this. Ideally I wanted to have each enemy type in an array but couldn't get it to work the way I'd expected so settled for just defining each individual enemy and pushing them to the main array.
* Once I had my player sprite, projectiles and enemies it was time to do the collision detection *(not much of a game otherwise)*. This is pretty much lifted from one of the resources I was using. I don't think there's any way I'd have worked it out on my own. The player sprite is a triangle and it turns out edge detection is much trickier for shapes other than rectangles and circles. I've settled for making it a rectangle that doesn't quite cover the whole player sprite. Better to have a forgiving hitbox for the player.
* Finally I wanted to have a proper game over screen and be able to restart the game without reloading the entire page. Whilst at work I suddenly realised the entire game is a constructor so I should be able to just create a new game. Originally I tried to handle this in a similar way to projectiles and enemies with an array that the game was pushed and popped out of. In the end I got it working best just using a global variable to keep track of if the game was over or not.
#
## Debugging
There was an awful lot of time spent debugging on this project. Pretty much every time I committed a file I went back and discovered it hadn't actually fixed the issue or it created a new issue. \
As I added more features to the game debugging became a lot more tedious. For one thing I had to reach a certain point in the game to see if enemies were spawning correctly. On top of that there's a fair bit of interdependence between the different features so changing something about the way the player sprite behaved caused trouble elsewhere.\
I've left in the hitbox for the player sprite which was one of the tricks I used to help improve edge detection and there's `console.log`'s scattered all over my code.\
One issue that kept catching me out was assigning inherited values in the constructor and then them not updating. For instance when making the third enemy type track the player at first they'd lock on to the player.x from when they spawned.\
Another similar issue I bumped into quite a few times was not properly creating a new instance when using constructors which threw everything out of whack a fair bit.\
There's quite a few places where I use variables as counters to create delays. Really I wanted to use setInterval or setTimeout for all of these but I had issues with them getting called too many times creating horrible memory leaks. I also need to read up on the scope of variables when using these functions and how they interact with `this.variable` keyword.
#
## Roadmap
I really enjoyed making this and I'd love to come back and improve on it.
* I think one of the first thing to do is sort out hit detection. I suspect there's maybe a disconnect between when a new frame is drawn and when the edge detection functions happen.
* I'm not very happy with the implementation of upgraded projectiles. Ideally I'd have a pickup that has to be collected or maybe an enemy that when killed gives upgrade. Rather than the current timer system.
* I haven't even attempted to make this mobile/touchscreen friendly. I think this shouldn't take too much extra effort in terms of inputs but I might have to rework a lot of the positioning to be based of canvas size instead of numbers picked through experimentation.
* It would be cool to add a boss enemy and I couldn't face tackling it this time round but I'd love to have an enemy that fires projectiles.
* Currently after a certain score the game doesn't get any harder I'd like to have some enemy attributes scale with score once you reach a certain point.