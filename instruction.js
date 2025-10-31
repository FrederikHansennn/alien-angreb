console.log("instruction.js loaded");

document.querySelector("#Jylland").addEventListener("click", jylland);
    function jylland() {
        console.log("Jylland clicked");
        document.querySelector("#HotspotJylland circle" ).style.fill="red";
    }

    document.querySelector("#Fyn").addEventListener("click", Fyn);
    function Fyn() {
    
        console.log("Fyn clicked");
    document.querySelector("#HotspotFyn ellipse" ).style.fill="red";


}

document.querySelector("#Sjaelland").addEventListener("click", Sjaelland);
    function Sjaelland() {
        console.log("Sjælland clicked");
        document.querySelector("#HotspotSjaelland circle" ).style.fill="red";
    }


