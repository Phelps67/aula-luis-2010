const idade = [12, 17, 18, 2, 15, 30];

let filter = idades.filter((idade) => idade > 20);

let map = idade.map((idade) => idade * 20);

let filterEhMapJuntos = idades
.map((idade) => idade * 2)
.filter((idade) => idade > 20);

console.log(filterEhMapJuntos);