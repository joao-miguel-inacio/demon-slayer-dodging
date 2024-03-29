# Demon Slayer Dodging :cherry_blossom:

IronHack Project 1 - [PLAY DSD](https://joao-miguel-inacio.github.io/demon-slayer-dodging/)

![](./assets/images/read-me-screen1.png)

## Introduction :japanese_goblin:

5 weeks into the IronHack Web Development we were asked to develop a game to showcase what we had learnt about HTML, CSS and Javascript. :face_with_spiral_eyes:

A few weeks had passed since the last Demon Slayer Episode aired and I couldn't miss this opportunity to dive back into it!

# Gameplay :exploding_head:

We will revisit the last fight of the Entertainment District Arc of Demon Slayer, against Gyutaro. :star_struck:

In the game, we will have to avoid the obstacles thrown at us (The Flying Blood Sickles) and move towards the enemy until he is within the range of our attack.

![](./assets/images/read-me-game-board.png)

As cool as it is to just watch the attack effect or to hear the slashing sound of our katana, attacking outside the range will have no pratical effect. 

# Approach :monocle_face:

## Player :smiling_face_with_three_hearts:
![Tanjiro](./assets/images/read-me-tanjiro.png)

We will be playing as Tanjiro Kamado! After trying to draw different stances on paint for what felt like 1-2 days, @[Flow-fly](https://github.com/Flow-Fly) introduced me to sprites. Talk about game changer! Merci! :sunglasses:

Using the arrow keys and W, S, A, D we will be able to control Tanjiro's movement and we will be using our frameCounter to animate our movement.

```
moveUp() {
    if (this.y > 5) {
        this.y -= this.playerSpeed;
        if (frameCounter % 4 ===0){
            this.image.src = "./assets/images/TanjiroPosition1UP.png";
        } else {
        this.image.src = "./assets/images/TanjiroPosition2UP.png";
        }
    }
}
```

The attack animation is defined differently but more on that @[f-moves-and-attacks.js](https://github.com/joaoMiguelInacio/demon-slayer-dodging/blob/main/javascript/f-moves-and-attacks.js).

## Enemy :zombie:

We will be fighting Gyutaro, one of the twelve Kizuki! I also tried drawing him from scratch using paint but then @[Ines Herminio](https://github.com/inesherminio) told me he looked like he was drinking coffee and that is when I thought I should change it. Obrigado! :rofl:

The enemy will move randomly on the y axis every 30 frames and will fire obstacles from wherever he is.

```
move(){
        enemy.y = Math.floor(Math.random()*(this.canvas.height - this.height));
    }
```

## Obstacles :drop_of_blood:

The obstacles will move towards you at different speeds and will be throw at you in different intervals depending on which level you are! :collision:

#Level 1: Objects thrown every 30 frammes @ Speed of 10

#Level 2 all before and: Objects thrown every 70 frammes @ Speed of 12

#Level 3 all before and: Objects thrown every 160 frammes @ Speed of 14

#Final Level all before and: Objects thrown every 340 frammes @ Speed of 16

## Tanjiro's Lives logic :heart: 

Every time you collide with an obstacle you loose a life and you lose the game if your lifes are depleted.

Bear in mind that you are so determined to fight the evil that you will keep fighting for another turn even after everything seemed lost! :fire:

```
class Obstacles { 
    ...
    collide(){
        const withinX = player.x + player.width > this.x && player.x < obstacle.x + this.width;
        const withinY = this.y + this.height > player.y && this.y < player.y + player.height;
        const attackSuffered = withinX && withinY;
        if (attackSuffered && playerLifesArray.length === 4){
            enemyAttacksSuccessfully(1); 
        }
    ...
    } else if(attackSuffered && playerLifesArray.length === 1){
            gameLost ();        
    }
```

![](./assets/images/read-me-screen2.png)

Gracias @[Diego](https://github.com/diegomendezp) for helping to sort out the re-start button so that we can try again!

## Gyutaro's Lives and Levels logic :blue_heart:

Your opponent will get more frustrated with every blow you deliver and increase the game level. :angry:

You can see what happens when the enemy loses his first life point in the following Javascript snippet:

```
function playerMovesAndAttacks() {
    document.onkeydown =  (e) => {
        switch (true) { 
            ...
            //if SpaceBar is pressed AND enemy has all lifes AND the enemy is within your katana's range
            case e.key === " " && enemyLifesArray.length===4 && checkRangeToAttack ():
                ...
                //you will take one of his lifes
                enemyLosingLife(1);
                
                //and increase the game difficulty by adding "difficulty1" into the difficultyArray
                difficultyArray.push("difficulty1");
                break;
            ...
            }
        });
    }
}

function update (){ 
    ...
    //the update function checks if the difficultyArray contains "difficulty1/2/3" and throws objects at the respective speed at the appropriate frame count
        if (frameCounter % 30=== 0){
            enemy.move ();
            obstaclesArray.push(new Obstacles(canvas, ctx, 10));
        }        
        if (frameCounter % 70 === 0 && difficultyArray.includes("difficulty1")){
            obstaclesArray.push(new Obstacles(canvas, ctx, 12));
        }
        ...
}
```

![](./assets/images/read-me-screen3.png)

## SPOILER ALERT :heavy_exclamation_mark:

DO NOT PLAY THE VIDEO if you haven't watched the anime YET!

## Backlog :hospital:

Because work can't wait, this will have to:
    
1) Find a way to isolate Vimeo's video play button, addEventListener and create dim lights function (that would turn background from white to black and stop music when video starts);

2) Make Zenitsu a playable character. He is already everyone's favourite! :zap:

3) Create a multiplayer version of the game where Gyutaro stands in the middle of the canvas and throws objects towards Tanjiro on the left and Zenitsu on the right. Player A would use A,W,S,D to move and Player B would use the arrow keys.

    12934. Make game Mobile Ready.

## Dataset :nerd_face:

 |-- .assets

    |-- .images

    |-- .music

 |-- .javascript
    
    |-- .classes

        |-- background.js (contains Background Class)

        |-- enemy.js (contains Enemy Class)

        |-- obstacle.js (contains Obstacles Class)

        |-- player.js (contains Player Class)

    |-- .utils

        |-- attack-range.js (constains checkRangeToAttack function)

        |-- enemy-attacks.js 

            (contains enemyAttackAnimation function)
            
            (contains enemyAttacksSuccessfully function)
            
            (contains playerLosingLife function)

        |-- opening-thread.js (contains opening-thread function)

        |-- player.attack.js

            (contains backToOriginalStance function)

            (contains playerAttacksForNothing function)

            (contains playerAttackAnimation function)

            (contains playerAttacksSuccessfully function)

            (contains enemyLosingLife function)

        |-- player.moves.js 

            (contains backToOriginalStance function)

            (contains playerAttackAnimation function)

            (contains playerMovesAndAttacks function)

            (contains playerRests function)

            (contains enemyLosingLife function)

        |-- refill.js (contains refillLifePoints function)

        |-- reset.js (contains reset function)

    |-- extra.js 

    |-- index.js 

        (initiates 95% of the variables in use)

        (contains startButton addEventListener)

        (and contains startGame and updateFunction)

    |-- screen2-lost.js (contains gameLost function that changes to screen2 using DOM)

    |-- screen3-won.js (contains gameWon function that changes to screen3 using DOM)

    |-- sound-effects 

        (contains playFirstScreenMusic function)

        (contains playFightScreenMusic function)

        (contains playLostScreenMusic funtion)

        (contains AttackMusic function)

        (contains musicON/OFF buttons EventListeners)

        (contains musicON/OFF functions)

 |-- .styles

    |-- .fonts 

    |-- styles.css

 |-- index.html

 |-- README.md

## Thank you :bowing_man:
@[Ian](https://github.com/idelace)'s son for choosing such an amazing name and being so enthusiastic about the game!

@[Ana](https://github.com/anaresende) and @[Nelson](https://github.com/nlfonseca) for your invaluable tips and advice!

@[Helena Saborit](https://github.com/Helsinky91) for helping me stay focused in class!
