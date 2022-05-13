var test = document.getElementById('test');
test.addEventListener("click", function(){
    var tipo = document.getElementById('tipo').value;
    //verificação de cpf:
    if(tipo == 1){                                                 
        var cpf = document.getElementById("cpf").value;
        var split = cpf.split('');
        //conta verificadora do primeiro dígito:
        var conta = (parseInt(split[0]) * 10) + (parseInt(split[1]) * 9) + (parseInt(split[2]) * 8) + (parseInt(split[3]) * 7) + (parseInt(split[4]) * 6) + (parseInt(split[5]) * 5) + (parseInt(split[6]) * 4) + (parseInt(split[7]) * 3) + (parseInt(split[8]) * 2);
        //primeiro dígito verificador:
        var digito = 11 - (conta % 11);
        if(digito != split[9]){
            alert("Cpf inválido, não utilize caracteres especiais");
        }
        else{
            //conta verificadora do segundo dígito:
            var conta2 = (parseInt(split[0]) * 11) + (parseInt(split[1]) * 10) + (parseInt(split[2]) * 9) + (parseInt(split[3]) * 8) + (parseInt(split[4]) * 7) + (parseInt(split[5]) * 6) + (parseInt(split[6]) * 5) + (parseInt(split[7]) * 4) + (parseInt(split[8]) * 3) + (parseInt(split[9]) * 2);
            //segundo dígito verificador:
            var digito2 = 11 - (conta2 % 11);
            if(digito2 != split[10]){
                alert("Cpf inválido, não utilize caracteres especiais");
            }
            else{
                alert("OK");
            }
        }
    }
    //fim da verificação de cpf.
    //início da verificação de cnpj:
    else if(tipo == 2){        
        var cnpj = document.getElementById('cpf').value;
        var split = cnpj.split('');
        //conta verificadora do primeiro dígito:
        var conta = (parseInt(split[0]) * 5) + (parseInt(split[1]) * 4) + (parseInt(split[2]) * 3) + (parseInt(split[3]) * 2) + (parseInt(split[4]) * 9) + (parseInt(split[5]) * 8) + (parseInt(split[6]) * 7) + (parseInt(split[7]) * 6) + (parseInt(split[8]) * 5) + (parseInt(split[9]) * 4) + (parseInt(split[10]) * 3) + (parseInt(split[11]) * 2);
        //resto da divisão por 11:
        var resto = conta % 11; 
        //verificação da excessão (número 2 não é válido para a conta):
        if(resto < 2){
            //primeiro dígito verificador:
            var digito = 0;
        } 
        else if(resto > 2){
            var digito = 11 - resto;
        }
        if(digito == split[12]){
            var conta2 = (parseInt(split[0]) * 6) + (parseInt(split[1]) * 5) + (parseInt(split[2]) * 4) + (parseInt(split[3]) * 3) + (parseInt(split[4]) * 2) + (parseInt(split[5]) * 9) + (parseInt(split[6]) * 8) + (parseInt(split[7]) * 7) + (parseInt(split[8]) * 6) + (parseInt(split[9]) * 5) + (parseInt(split[10]) * 4) + (parseInt(split[11]) * 3) + (parseInt(split[12]) * 2);
            var resto2 = conta2 % 11;
            if(resto2 < 2){
                var digito2 = 0; 
                if(digito2 == split[13]){
                    alert('OK');
                }
                else{
                    alert('Cnpj inválido, não utilize caracteres especiais')
                }              
            }
            else{
                var digito2 = 11 - resto2;
                if(digito2 == split[13]){
                    alert('OK');
                }
                else{
                    alert('Cnpj inválido, não utilize caracteres especiais')
                }
            }
        }
        else{
            alert('Cnpj inválido, não utilize caracteres especiais');
        }
    }
    //fim da verificação de cnpj.
    //tipo inválido:
    else{
        alert("Escolha um tipo válido");
    }
});