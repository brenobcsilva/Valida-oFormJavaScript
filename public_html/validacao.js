function validar(){
    if(document.nomeFormulario.nomeForm.value==="" || document.nomeForm.value.length<8){
        alert('Escreva seu nome, por gentileza');
        document.nomeFormulario.nomeFormulario.focus();
    }
    else if(document.nomeFormulario.emailForm.value==="" ||document.nomeFormulario.emailForm.value.indexOf("@")===-1||document.nomeFormulario.emailForm.valueOf(".")===-1){
        alert('Escreva o email corretamente, por gentileza');
        document.nomeFormulario.emailForm.focus();
    }
    else if(document.nomeFormulario.telForm.value==="" || document.nomeFormulario.telForm.value.length===10){
        alert('Escreva o telefone correntamente, por gentileza');
        document.nomeFormulario.telForm.focus();
    }
    else if(document.nomeFormulario.estadoForm.value===""){
        alert('Selecione um estado, por gentileza');
        document.nomeFormulario.estadoForm.focus();
    }
 else{
     document.nomeFormulario.submit();
 }       
}
