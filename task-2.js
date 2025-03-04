const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function array(number) {
    let name = number[0]; 

    for (let numbers of number) {
        if (numbers.length < name.length) { 
            name = numbers;
        }
    }
    return name;
}

const result = array(heights2);
console.log(result); 
