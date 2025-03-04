
const heights2 = [167, 190, 120, 165, 137];

function array(number){
    sum = number[0];
    for(const numbers of number){
        if(sum>numbers){
            sum = numbers;
        }
       
    }
    return sum;

}
const result = array(heights2);
console.log(result)