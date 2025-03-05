// problem-1
function calculateVAT( price ) {
    if( typeof price === "string" || price<0){
        return "Invalid"
    }
    let vat = (price *7.5) /100;
    return vat;
}


// problem-2

function  validContact( contact ) {

    if( typeof contact !== "string"){
        return "Invalid"
    }
    
    if(contact.length == 11 && contact[0]== "0" && contact[1]=="1" && !contact.includes(" ")){
        return true;
    }
    return false;
}
console.log(validContact(["01987654321"]))



// problem-3

function  willSuccess( marks ) {
    if(marks ===null || (!Array.isArray(marks))){
        return "invalid";
    }

    let pass = 0;
    let fail = 0;

    for(let i =0;i<marks.length;i++){
        if(marks[i] >=50){
            pass = pass +1;
        }
        else{
            fail = fail +1;
        }
    }

        if(pass>fail){
            return true;
        }
        return false;
       
    }
    
// problem-4

function  validProposal( person1 , person2 ) {

    if(typeof person1 !== 'object' || typeof person2 !== 'object'){
        return "invalid";
    }

    if(person1.gender === person2.gender){
        return false;
    }

    const person = (person1.age - person2.age);
    const age = Math.abs(person)

    if(age>7){
        return false;
    }

    return true;
    
}


// problem-5

function  calculateSleepTime( times ) {
   for(let i =0 ; i<times.length;i++){
    if(typeof times[i] !== 'number' ){
        return "invalid"
    }
   }

   let second = 0;
   for(let i = 0;i<times.length;i++){
    second = second + times[i];
   }

   let hours = second/3600;
   let minutes = (second%3600)/60;
   let seconds = second %60;

   return {hour:parseInt(hours),minute:parseInt(minutes),second: parseInt(seconds)};
}







