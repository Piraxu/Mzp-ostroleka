console.log("©Piraxu 2025")
console.log("Oficjalna strona v-firmy MZP Ostrołęka.")



function mlinks() {
var actuallink = "https://piraxu.github.io/Mzp-ostroleka/"
    var mpage = document.getElementById("mpage")
    var ttable = document.getElementById("ttables")
    var sil = document.getElementById("sil")
    var sinfo = document.getElementById("sinfo")

    mpage.setAttribute("href", actuallink+"index.html");
    ttable.setAttribute("href", actuallink+"timetables.html") 
    sil.setAttribute("href", "https://sil.kanbeq.me/")
    sinfo.setAttribute("href", actuallink+"info.html")
}


function clock() {

    var mainhour = new Date();
    var hour = mainhour.getHours();
    if (hour<10) hour = "0"+hour
    var minutes = mainhour.getMinutes();
    if (minutes<10) minutes = "0"+minutes
    var secounds = mainhour.getSeconds();
    if (secounds<10) secounds = "0"+secounds
    var day = mainhour.getDate();
    if (day<10) day = "0"+day
    var month = mainhour.getMonth()+1;
if (month<10) month = "0"+month
    var year = mainhour.getFullYear();

document.getElementById("hour").innerHTML = hour+":"+minutes
document.getElementById("date").innerHTML = day+"-"+month+"-"+year

    setTimeout(clock, 1000);
}
