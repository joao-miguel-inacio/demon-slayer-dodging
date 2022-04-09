function openingThread(){
    ctx.beginPath();
    ctx.moveTo(player.x + 50, player.y + 50);
    ctx.lineTo(enemy.x + 50, enemy.y+ 50);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}