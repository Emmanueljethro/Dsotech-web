let summary ;

// let nameData = [
//     {
//         items:"FAN",
//         // quality:"PREMIUM",
//         powerRating: 20.42,
//         quantity: 6, id:1
//     },
//     {
//         items:"BULB",
//         // quality:"BASIC",
//         powerRating: 60,
//         quantity: 8, id:2
//     }
// ];
let nameData = JSON.parse(localStorage.getItem('locataData'))  || []

/*
var a = Data()
b = age
function substract() {
   return  a - b;
};
document.getElementById('substract()').innerHTML = substract();
*/

function displayTableData() {
    let html = "<table border= '1/2 class='table'>";
    setTimeout(() => {
        html+="<thead style=' background-color: gray; color: #000; border-bottom: 2px solid #000;'>";
        html+="<tr>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>S/NO.</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;' contenteditable=''>" + '<b>ITEMS</b>' + "</td>";
        // html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUALITY</b>' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>POWER-RATING</b>' +  "</td>";
        // html+="<td>" + 'Age' + "</td>";
        html+="<td  style='border-right: 2px solid #000;'>" + '<b>QUANTITY</b>' + "</td>";
        html+="<td>" + '<b>ACTION</b>' + "</td>";
        html+="</tr>";
        html+="</thead>";
        for ( let i = 0; i < nameData.length; i++) {
            let sno=i+1;
            html+="<tr style='table-striped-danger w-auto border-bottom: 2px solid #000;'>";
            html+="<td  style='border-right: 2px solid #000;'>" + sno + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].items + "</td>";
            // html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].quality + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].powerRating + "</td>";
            // html+="<td>" + nameData[i].age + "</td>";
            html+="<td  style='border-right: 2px solid #000;'>" + nameData[i].quantity + "</td>";
            html+="<td>"+ `<button type="button" class="btn btn-danger" onclick='removeItem(${nameData[i].id})'><i class="fa fa-trash"></i> Remove</button>` + "</td>";
            // html+="<td>"+ `<button type="button" class="btn btn-danger" onclick='removeItem(${nameData[i].id})'><i class="fa fa-trash"></i> Remove</button>` + `<button type="button" class="btn btn-upload" onclick='updateItem(${nameData[i].id})'><i class="fa fa-upload"></i> Update</button>` + "</td>";
            html+="</tr>";
        }
        html+="</table>";
        document.getElementById("table").innerHTML =html
    }, 200);

    calculate();

}

document.value

function addOnClick() {
    let items = document.getElementById('items').value;
    // var quality = document.getElementById('quality').value;
    let powerRating = document.getElementById('powerRating').value;
    // var age = document.getElementById('age').value;
    let quantity = document.getElementById('quantity').value;

    if(items && powerRating && quantity) {
        let id = nameData.length +1;
        nameData.push({
            items:items, powerRating:powerRating, quantity:quantity, id:id
        })
        displayTableData();
        window.localStorage.setItem("locataData", JSON.stringify(nameData))
        clearItems();
    }
    // calculate();

}

function clearItems() {
    document.getElementById('items').value=""
    // document.getElementById('quality').value=""
    document.getElementById('powerRating').value=""
    // document.getElementById('age').value=""
    document.getElementById('quantity').value=""
}

function removeItem(rec) {
    console.log(rec, '...rec');
    let data = JSON.parse( localStorage.getItem("locataData")) || []  

    console.log(data, 'data...');
    let filt = nameData.filter((a,i)=>{
        if(rec == a.id){
         let filtered = nameData.splice(i,1) 

         console.log(filtered, '....filtered');
            displayTableData();
        }

    })


    console.log(nameData, 'second data instance');

    window.localStorage.setItem("locataData", JSON.stringify(nameData))


  
}


displayTableData();

function display() {
    // localStorage.setItem('value', 'nameData')
    document.getElementById("storage").innerHTML
    // console.log(localStorage.getItem('value'))
}

// function updateItem(rec) {
//     console.log(rec);

//     var filt = nameData.filter((a,i)=>{
//         if(rec == a.id){
//             document.getElementById('items').value=a.items
//             // document.getElementById('quality').value=a.quality
//             document.getElementById('powerRating').value=a.powerRating
//             // document.getElementById('age').value=a.age
//             document.getElementById('quantity').value=a.quantity
//             // displayTableData();
//             nameData.push();
            
//         }
        
//     })
//     // summary = nameData;
// }

// updateItem()

function calculate() {
    summary = nameData;

    totalQty = summary.map(summm => Number(summm.quantity))
    totalQuantity = totalQty.reduce( (accumulate, current,)=>{ return current + accumulate})
    // console.log(typeof(totalQty))
    
    totalPower = summary.map(summm => Number(summm.powerRating))
    totalPowered = totalPower.reduce( (accumulate, current)=>{return current + accumulate})
    // console.log(typeof(totalPowered))

    var quant = document.getElementById('quant')
    quant.innerHTML = totalQuantity
    // quant.append(totalQuantity)
    var power = document.getElementById('power')
    power.innerHTML = totalPowered
    // power.append(totalPowered)
    var total = document.getElementById('total')
    // total.append(totalQuantity * totalPowered)
    total.innerHTML = totalQuantity * totalPowered
    var cost = document.getElementById('cost')
    var totalCost = document.getElementById('totalCost')
    var work = document.getElementById('work')
}


// total = summary.map(summm => summm.totalEnergy)
// totalCost = total.reduce( (totalQuantity, totalPowered)=>{return totalQuantity * totalPowered})
// console.log(totalCost)


// document.write("<h4> quantity </h3>/")

