class Rabbit {
constructor(type) {
this.type = type;
}
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
}
let killerRabbit = new Rabbit("killer");

console.log(killerRabbit.speak("SKREEEE!"));