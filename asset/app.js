const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today = new Date();
//Index
 
var currentMonth = monthNames[today.getMonth()];

var currentDate = currentMonth + ' ' + today.getDate() + ', ' + today.getFullYear();

document.getElementById("curDate").innerHTML = today;

function onClick() {


    //var doc = new jsPDF();
    var doc=new window.jsPDF();

    //getting value from html for the person
    var healthName = document.getElementById("healthName").value;

    //SElecting people
    if(healthName == "One") {

        console.log("Yes this is " + healthName);
        alert('Selected: '+ healthName);

        //Printing/Rendering Process
        doc.addImage(imgOne, 'JPEG', 0,0, 210,278);
        doc.text(currentDate, 130,212);
        doc.save('HealthDec.pdf');

    }else {
        console.log("other person");
        alert("Selected: "+ healthName);


                //Printing/Rendering Process
                doc.addImage(imgTwo, 'JPEG', 0,0, 210,278);
                doc.text(currentDate, 130,240);
                doc.save('HealthDec.pdf');
    }

    
}


