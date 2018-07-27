"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertirLiKg = convertirLiKg;
exports.convertirKgLi = convertirKgLi;
function convertirLiKg() {

  var libraKg = document.getElementById("libraKg").value;
  resultado.innerHTML = "<strong>" + parseInt(libraKg) * 0.4536 + " Es tu resultado!</strong>";
}

function convertirKgLi() {

  var kgLibra = document.getElementById("kgLibra").value;
  resultado2.innerHTML = "<strong>" + parseInt(kgLibra) / 0.4536 + " Es tu resultado!</strong>";
}