import kaboom from 'kaboom';

// initialize context
kaboom();

// load assets
loadSprite('alien', 'sprites/alien.png');
loadSprite('ground', 'sprites/ground.png');
loadSprite('enemy', 'sprites/enemy.png');

const player = add([sprite('alien'), scale(0.5), pos(20, 20), area(), body()]);

const MOVE_SPEED = 200

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})

keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

addLevel(['      ', '  @   ', '      ', 'xxxxxx'], {
  width: 40,
  height: 40,
  x: () => [sprite('ground'), area(), solid()],
  '@': () => [sprite('enemy'), area(), body(), solid(), scale(0.5), 'dangerous'],
});

player.collides('dangerous', () => {
  destroy(player)
})