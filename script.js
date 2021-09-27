const Scene = require('Scene');
const Random = require('Random');
const Time  = require('Time');
const TouchGestures = require('TouchGestures');
export const Diagnostics = require('Diagnostics');

const cities = [
  'Bandung',
  'Bali',
  'Jakarta',
  'Surabaya',
  'Manado',
  'Makassar',
  'Raja Ampat'
];

(async function () {  
  const cityTextNode = await Scene.root.findFirst('city');

  const confettiNode = await Scene.root.findFirst('confetti');

  TouchGestures.onTap().subscribe(function() {
    confettiNode.hidden = true;

    const timeInterval = Time.setInterval(function() {
      cityTextNode.text = randomizeCity();
    }, 200);

    Time.setTimeout(function() {
      Time.clearInterval(timeInterval)
      cityTextNode.text = randomizeCity();
      confettiNode.hidden = false;
    }, 2750);
  });
})(); 

function randomizeCity() {
  const randomNumer = Math.floor(Random.random() * cities.length);

  return cities[randomNumer];
}
