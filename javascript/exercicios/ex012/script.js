function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      var genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "m_crianca.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "m_jovem.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "m_adulto.png");
      } else {
        //Idoso
        img.setAttribute("src", "m_idoso.png");
      }
    } else if (fsex[1].checked) {
      var genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "f_crianca.png");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "f_jovem.png");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "f_adulto.png");
      } else {
        //idoso
        img.setAttribute("src", "f_idoso.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  }
  res.appendChild(img);
}
