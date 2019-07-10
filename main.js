// var numbers = [1, 5, 10, 15];
// var numbers2 = [1, 4, 9];
// var double = numbers.map(function (elem) {
//     return elem * 2;
// });
// var roots = numbers2.map(Math.sqrt);
// console.log(numbers);
// console.log(double);
// console.log(numbers2);
// console.log(roots);
// var words = ['spray', 'limit', 'elite', 'exhuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length === 5);
// const result2 = words.filter(function (elem) {
//     return elem.length > 6;
// });
// var result3 = words.filter(word => word === 'elite');
// console.log(result);
// console.log(result2);
// console.log(result3);

//Ejercicio 1
const animal = [
    {nombre: 'Carlitos', especie: 'conejo'},
    {nombre: 'Esteban', especie: 'perro'},
    {nombre: 'Fabiruchis', especie: 'tortuga'},
    {nombre: 'Anita', especie: 'gato'},
    {nombre: 'Miranda', especie: 'conejo'},
    {nombre: 'Lucas', especie: 'conejo'},
    {nombre: 'Horacia', especie: 'tortuga'}
];
var conejo = animal.filter(word => word.especie === 'conejo');
console.log(conejo);
const mascota = [
    {nombre: 'Bimbo', especie: 'hámster', comida: ['semillas', 'nueces']},
    {nombre: 'Ludovico', especie: 'perro', comida: ['huesos', 'jamón']},
    {nombre: 'Pavlov', especie: 'perro', comida: ['croquetas', 'pollo']},
    {nombre: 'Chancla', especie: 'gato', comida: ['atún', 'pescado']},
    {nombre: 'Don Pepe', especie: 'perico', comida: ['semillas']}
];
var nombres = mascota.filter(mascota => mascota.especie === 'perro').map(mascota => mascota.nombre);
console.log(nombres)