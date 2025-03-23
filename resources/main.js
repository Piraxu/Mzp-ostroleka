console.log("©Piraxu 2025")
console.log("Oficjalna strona v-firmy MZP Ostrołęka.")
javascript:alert(`Szerokość w CSS pixels: ${window.innerWidth}px, Wysokość w CSS pixels: ${window.innerHeight}px, DPR: ${window.devicePixelRatio}`);


function mlinks() {
var actuallink = "/"
    var mpage = document.getElementById("mpage")
    var ttable = document.getElementById("ttables")
    var sil = document.getElementById("sil")
    var dcenter = document.getElementById("dcenter")
    var sinfo = document.getElementById("sinfo")

    mpage.setAttribute("href", actuallink+"index.html");
    ttable.setAttribute("href", actuallink+"timetables.html") 
    sil.setAttribute("href", "https://sil.kanbeq.me/")
    dcenter.setAttribute("href", actuallink+"downloadcenter.html")
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

function servershutdown() {
    var hr = new Date();
    var Shour = hr.getHours();
    var Sminute = hr.getMinutes();
    if(Sminute<10) Sminute = "0"+Sminute

    var Fhour = Shour+"0"+Sminute 

    console.log(Fhour)
   
    if(Fhour>= 23000){
       javascript:alert("Uwaga!. W godzinach od 23:59 do 5:25 nasz serwer będzie wyłączony z powodu Oszczędności komponentów pracujących prawie 18h dziennie. W tym czasie strona będzie niedostępna. Dziękujemy za zrozumienie!")
    }
}