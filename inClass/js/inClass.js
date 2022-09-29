let player = {
  name: 'tweety',
  color: 'yellow',
  health: 50 ,
  backpack: ['health potion', 'sword'] ,
}

function changeColor(color) {
player.feathers = color;
}

function addItemToBackpack(item) {
  player.backpack.push(item);
}
