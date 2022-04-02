function playerMoves() {
    document.addEventListener("keydown", (e) => {
        switch (e.key) { 
            case "ArrowDown": 
            case "s":
                e.preventDefault();
                player.moveDown();
                break;
            case "ArrowUp":
            case "w":
                e.preventDefault();
                player.moveUp();
                break;
            case  "ArrowRight":  
            case "d":
                e.preventDefault();
                player.moveRight();
                break;
            case "ArrowLeft":
            case "a": 
                e.preventDefault();
                player.moveLeft();
                break; 
            default:
                break;
        }
    });
}

function playerRests (){
    document.addEventListener('keyup', (e) => {
        switch (e.key) { 
            case "ArrowDown": 
            case "s":
                e.preventDefault();
                player.moveDown();
                player.image.src = "./assets/images/TanjiroPosition0.png";
                break;
            case "ArrowUp":
            case "w":
                e.preventDefault();
                player.moveUp();
                player.image.src = "./assets/images/TanjiroPosition0.png";
                break;
            case  "ArrowRight":  
            case "d":
                e.preventDefault();
                player.moveRight();
                player.image.src = "./assets/images/TanjiroPosition0.png";
                break;
            case "ArrowLeft":
            case "a": 
                e.preventDefault();
                player.moveLeft();
                player.image.src = "./assets/images/TanjiroPosition0.png";
                break;
            default:
                break;
            }
        });
    }
    