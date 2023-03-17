const tiger = require('./Tiger');// TODO 3
const wolf = require('./Wolf');// TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
};
 
const Tiger = new tiger();
const Wolf = new wolf();
fighting(Tiger, Wolf);