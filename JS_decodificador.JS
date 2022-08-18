    var cEntrada = document.querySelector("#cEntrada");
    var dSaida = document.querySelector("#dSaida");

    var Btn = document.querySelector("#Cbtn-1")
    Btn.addEventListener('click', function(){
        var texto = cEntrada.value;
        var newCode = texto.replace(/e/gi,'enter')
                .replace(/i/gi,'imes')
                .replace(/a/gi,'ai')
                .replace(/o/gi,'ober')
                .replace(/u/gi,'ufat');
                dSaida.value = newCode;
                console.log(newCode);
    })


    var Btn2 = document.querySelector("#Dbtn-2")
    Btn2.addEventListener('click', function(){
        var texto = cEntrada.value;
        let newDecode = texto.replace(/enter/gi,'e')
                .replace(/imes/gi,'i')
                .replace(/ai/gi,'a')
                .replace(/ober/gi,'o')
                .replace(/ufat/gi,'u');
                dSaida.value = newDecode
                console.log(newDecode);
    })
    










