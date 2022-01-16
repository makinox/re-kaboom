import kaboom from 'kaboom';

// initialize context
kaboom();

// load assets
loadSprite('alien', 'sprites/alien.png');
loadSprite('ground', 'sprites/ground.png');

add([sprite('alien'), scale(0.5), pos(20, 20)]);

addLevel(['      ', '  @   ', '      ', 'xxxxxx'], {
  width: 40,
  height: 40,
  x: () => [sprite('ground')],
});
