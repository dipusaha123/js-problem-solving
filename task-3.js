

function calculateElectronicsBudget (laptop, tablets, mobile){
    const laptopi = 35000 
    const tableti = 15000 
    const mobilei = 20000 

    total = 0;
    const laptoprice = laptopi *  laptop;
    const tabletprice = tableti * tablets;
    const mobileprice = mobilei * mobile;

    total = laptoprice + tabletprice + mobileprice;

    return total;



}
const result = calculateElectronicsBudget(1,2,3);
console.log(result)