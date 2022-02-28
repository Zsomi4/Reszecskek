/*
 * File: app.js
 * Author: Gubis Zsombor Dániel
 * Copyright: 2022, Gubis Zsombor Dániel
 * Group: Szoft_I_N
 * Date: 2022-02-21
 * Github: https://github.com/Zsomi4/
 * Licenc: GNU GPL  
 */

var anyagIn = document.getElementById("anyag");
var szamitgomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitgomb.addEventListener("click", function() {
    let anygaStr = anyagIn.value;
    let minta = /^[30]+$/;

    if (anygaStr.match(minta)) {
        console.log("OK")
    } else {
        console.log("Nem ok.")
        alert("Hiba! Csak szám adható meg.")
        return;
    }

    let anyag = Number(anyagIn.value);
    console.log(anyag);
    let reszecskek = anyag * 6 * Math.pow(10, 23);
    console.log(reszecskek.toLocaleString());
    eredmenyIn.value = reszecskek.toLocaleString();
});