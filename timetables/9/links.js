function timetableslinks() {
    var pagelink = "https://piraxu.github.io/Mzp-ostroleka/"
    var style = document.getElementById("mainstyle")
    var js = document.getElementById("mainjs")
    var mimg = document.getElementById("mimg")
    var sicon = document.getElementById("sicon")
    var fontello = document.getElementById("fontello")

    style.setAttribute("href", pagelink+"resources/style.css")
    js.setAttribute("src", pagelink+"resources/main.js"+"?v=1")
    mimg.setAttribute("src", pagelink+"resources/IMG/mlogo.png")
    sicon.setAttribute("href", pagelink+"resources/IMG/mlogo.png")
    fontello.setAttribute("href", pagelink+"resources/fontello/css/fontello.css")

}

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

function timestamp() {
 document.addEventListener("DOMContentLoaded", function() {
            const stopLinks = document.querySelectorAll(".stop-element, .stop-element-side");
            stopLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
                    const originalHref = link.getAttribute("href");
                    link.setAttribute("href", `${originalHref}?t=${Date.now()}`);
                    window.location.href = link.getAttribute("href");
                });
            });
        });

}
