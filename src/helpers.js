export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
 const words = "snag jungle important mime peasant baggage hail clog pizza sauce password scream newsletter bookend pro dripping pharmacist lie catalog ringleader husband laser diagonal comfy myth dorsal biscuit hydrogen macaroni rubber darkness yolk exercise vegetarian shrew chestnut ditch wobble glitter neighborhood dizzy fireside retail drawback logo fabric mirror barber jazz migrate drought commercial dashboard bargain double download professor landscape goggles vitamin half cardboard oar baby-sitter drip shampoo point time-machine yardstick think lace darts world avocado bleach shower-curtain extension-cord dent birthday lap sandbox bruise quicksand fog gasoline pocket honk sponge bride wig zipper wag letter-opener fiddle water buffalo pilot brand pail baguette rib mascot fireman pole zoo sushi fizz ceiling fan bald banister punk post office season Internet chess puppet chime ivy full koala dentist ping-pong mast hut welder dryer sheets sunburn houseboat sleep kneel crust grandpa speakers cheerleader dust bunny salmon cabin handle swamp cruise wedding-cake crow's-nest macho drain foil orbit dream recycle raft gold plank cliff sweater vest cape safe picnic shrink ray leak boa-constrictor deep tiptoe hurdle knight loveseat cloak bedbug bobsled hot-tub firefighter cell phone charger nightmare coach moth sneeze wooly-mammoth pigpen swarm goblin chef applause wax sheep-dog plow runt html/css ruby yield regex string hash array irb map(coding) destructive-method boolean"

 const splitWords = words.split(" ")

 const generatedMessage = `${rando(splitWords)}`
 return generatedMessage;
}
