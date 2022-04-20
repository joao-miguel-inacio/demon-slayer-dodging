function checkRangeToAttack() {
    const withinRangeToAttack = (player.x >= (canvas.width*0.7)) && (((player.y+40)-(enemy.y+50)) <= 200);
    if (withinRangeToAttack) {
        return true;
    }
}