// JavaScript source code
let nick;
let check = false;
function subscribe() {
    let storage = localStorage;
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    try {
        storage.setItem(key, value);
    } catch (e) {
        alert("Impossibile salvare i dati richiesti");
    }
    nick = key;
}
let button = document.getElementById("ButtonSubscribe");
button.disabled = true;
let button1 = document.getElementById("ButtonLogin");
button1.disabled = true;
let button2 = document.getElementById("ButtonUnsubscribe");
button2.disabled = true;
function activate() {
    let key = document.getElementById("storageKey").value;
    if (key != undefined) {
        button.disabled = false;
        button1.disabled = false;
        button2.disabled = false;
    }
}
function isIn(b) {
    try { localStorage.getItem(b).value; }
    catch (e) { return null;}
    check = true;
    return true;
}
function login() {
    let v = document.getElementById("storageKey").value;
    isIn(v);
    let value =document.getElementById("storageValue");
    if (value == localStorage.getItem(v))
        alert("Benvenuto!");
}
function unsub() {
    let storage = localStorage;
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    if(value==storage.getItem(key))remove.removeItem(key);
}