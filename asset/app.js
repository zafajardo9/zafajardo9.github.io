const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const timeHour = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", 
"12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

var today = new Date();
//Index
 
var currentMonth = monthNames[today.getMonth()];

var currentDate = currentMonth + ' ' + today.getDate() + ', ' + today.getFullYear();
var time = timeHour[today.getHours()] + ":" + today.getMinutes();

document.getElementById("curDate").innerHTML = today;

//IMplementation of QR Code

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://github.com/zafajardo9",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function onClick() {


    //var doc = new jsPDF();
    var doc = new window.jsPDF();

    //getting value from html for the person
    var healthName = document.getElementById("healthName").value;

    //getting some details
    var amtemp = document.getElementById("amTemp").value;
    var pmtemp = document.getElementById("pmTemp").value;

    //This will be the fonts
    doc.addFont('Times New Roman', 'Times', 'serif');
    doc.setFont('Times New Roman');
    doc.setFontSize(10);


    //SElecting people
    if(healthName == "One") {

        console.log("Yes this is " + healthName);
        alert('Selected: '+ healthName);

        //Printing/Rendering Process
        doc.addImage(imgOne, 'JPEG', 0,0, 210,278);
        doc.text(currentDate, 150,250);
        doc.text(amtemp + "C°", 60,73);
        doc.text(pmtemp + "C°", 150,73);
        doc.save('HealthDec.pdf');
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


function QRGen() {

    qrcode.makeCode(time);

}


