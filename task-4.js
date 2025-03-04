
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(number){

        let totalprice =0;

        for(let i=0;i<number.length;i++){
            
            totalprice = totalprice + phones[i].price

        } 
        
   return totalprice/number.length;

}
const result = findAveragePhonePrice(phones)
console.log(result)