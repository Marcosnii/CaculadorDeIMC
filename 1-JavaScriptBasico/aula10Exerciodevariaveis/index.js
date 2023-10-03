let letraA = 'A';
let letraB = 'B';
let letraC = 'C'; 

/*const letraATemp = letraA;
letraA = letraB;
letraB = letraC;
letraC = letraATemp;
*/

//Jeito mais moderno de resolver:
[letraA, letraB, letraC] = [letraB, letraC, letraA];
console.log(letraA, letraB, letraC);


