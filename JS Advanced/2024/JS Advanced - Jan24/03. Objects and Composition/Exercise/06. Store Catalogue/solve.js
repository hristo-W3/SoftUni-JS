function solve(input) {
    input.sort((a, b) => a.localeCompare(b))
    let letter = '';
    for(let i of input){
        if(letter !== i[0]){
            letter = i[0]
            console.log(letter);
        }
        line = i.split(' : ').join(': ');
        console.log('  ' + line);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)
console.log('------------------');
solve(["Banana : 2",
"Rubic's Cube : 5",
"Raspberry P : 4999",
"Rolex : 100000",
"Rollon : 10",
"Rali Car : 2000000",
"Pesho : 0.000001",
"Barrel : 10"]
)