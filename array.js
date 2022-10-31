let array1 = ['Maçã', 'Banana'];
console.log(frutas.length);

//Questao 1
function verificaArray(array){
    if ((Array.isArray(array)) == true){
        console.log(`É um array`);
    } else {
        console.log(`Nao é um array`);
    }
}
verificaArray(array1);

//Questao 2
function cloneArray(array){
    let i = array.length;
    let array2 = array.slice();
    return array2;
}
let array2 = cloneArray(array1);
console.log(array2);

//Questao 3
let array3 = ['Maçã', 'Banana', 'Pera', 'Uva'];

function nPrimeirosArray(n, array){
    for(let i = 0; i <= n; i++){
        console.log(array[i], i);
    }
}
nPrimeirosArray(array3);

//Questao 4
function nUltimossArray(n, array){
    let i = array.length;
    for(i; i >= (i-n); i--){
        console.log(array[i], i);
    }
}
nUltimossArray(array3);

//Questao 5
function stringArray(array){
    console.log(array.join(`-`));
}
stringArray(array3);

//Questao 6
let numero = 54467890;
let arrayNumber = numero.toString().split("").map(Number);

function igual(array){
    if(array%2==0){
        return true;
    } 
    else return false;
}

for(let i = 0; i < arrayNumber.length-1; i++){
    if(igual(arrayNumber[i]) && igual(arrayNumber[i+1])){
        arrayNumber.splice(i+1, 0, "-");
    }
}

arrayNumber = arrayNumber.join("");
console.log(array.Number);

//Questao 7
let arrayRepetidos = [1, 2, 3, 2, 4, 2, 5, 2, 5];

let aux = null;
let cont = 0;

for(let i = 0; i < arrayRepetidos.length; i++){
    let cont2 = 1;
    for(let j = i+1; j < arrayRepetidos.length; j++){
        if(arrayNumber[i] === arrayNumber[j]){
            cont2++;
        }
    }
    if(cont2 > cont){
        aux = arrayNumber[i];
        cont = cont2;
    }
}
console.log("O que mais se repete: " + aux);

//Questao 8
let arrayRepetidos2 = [1, 2, 3, 2, 4, 2, 5, 2, 5].map(upper);

function upperCase(item){
    if(typeof item === "string"){
        return item.toUpperCase();
    }else return item;
}

for(let i = 0; i < arrayRepetidos2; i++){
    for(let j = i+1; j < arrayRepetidos2; j++){
        if(arrayRepetidos2[i] === arrayRepetidos2[j]){
            arrayRepetidos2.splice(j, 1);
        }
    }
}
console.log(arrayRepetidos2);

//Questao 9
let arrayRepetidos3 = [2, 7, 3, 2, 4, 2, 8, 2, 5];

function sumArrays(array, array2){
    const array1 = array;
    array2.forEach((element, index) => (array1[index] += element));
    return array1;
}

arraySoma = sumArrays(arrayRepetidos, arrayRepetidos3);
console.log(arraySoma);

//Questao 10
const mergeArrays = (vetorPilha, vetorAdiciona) => [...vetorPilha, ...vetorAdiciona];
console.log(`${mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])}`);