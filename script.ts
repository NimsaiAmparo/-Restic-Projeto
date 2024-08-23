//AS REFERÊNCIAS DOS ELEMENTOS HTML USANDO SEUS IDS
const nomeInput = document.getElementById('nome') as HTMLInputElement; //NOME
const livroInput = document.getElementById('livro') as HTMLInputElement; //LIVRO
const usuarioSele = document.getElementById('usuario') as HTMLSelectElement; //USUÁRIO
const registrabot = document.getElementById('registrabot') as HTMLButtonElement; //REGISTRAR
const comrpov = document.getElementById('comprov') as HTMLDivElement; //COMPROVANTE
const temas = document.getElementById('temas') as HTMLButtonElement; //TEMA

//TIRA A BORDA VERMELHA DOS CAMPOS COM ERRO
function clearErrors() {
    nomeInput.classList.remove('error'); 
    livroInput.classList.remove('error'); 
    usuarioSele.classList.remove('error'); 
}

//VERIFICA OS CAMPOS
function validateFields(): boolean {
    let isValid = true;

    if (nomeInput.value.trim() === '') {
        nomeInput.classList.add('error'); 
        isValid = false; 
    }

    if (livroInput.value.trim() === '') {
        livroInput.classList.add('error'); 
        isValid = false;
    }


    if (usuarioSele.value === '') {
        usuarioSele.classList.add('error');
        isValid = false;
    }

    return isValid; 
}

//BOTÃO
registrabot.addEventListener('click', () => {
    clearErrors(); //REMOVE QUALQUER BORDA VERMELHA DOS CAMPOS

    if (validateFields()) { //SE TODOS OS CAMPOS ESTIVEREM PREENCHIDOS CORRETAMENTE PEGA A INFORMAÇÃO
        const name = nomeInput.value; 
        const book = livroInput.value;
        const userType = usuarioSele.value;
        
        const currentDate = new Date(); //PEGO A DATA
        const returnDate = new Date(currentDate); //DATA ENTREGA
        
        //TEMPO DE ENTREGA
        if (userType === 'servidor') {
            returnDate.setDate(currentDate.getDate() + 30); //SERVIDOR TEM 30 DIAS
        } else {
            returnDate.setDate(currentDate.getDate() + 15); //ALUNO TEM 15 DIAS
        }
        
        const formattedDate = returnDate.toLocaleDateString('pt-BR'); //DATA BR
        
        //ATUALIZAÇÃO DO MEU COMPREOVANTE
        temas.innerHTML = `
            <h2>COMPROVANTE</h2>
            <p><strong>NOME:</strong> ${name}</p>
            <p><strong>LIVRO:</strong> ${book}</p>
            <p><strong>TIPO DE USUÁRIO:</strong> ${userType.charAt(0).toUpperCase() + userType.slice(1)}</p>
            <p><strong>DATA DE DEVOLUÇÃO:</strong> ${formattedDate}</p>
        `;
    }
});

//ALTERNÂNCIA DE TEMA
temas.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    temas.textContent = document.body.classList.contains('dark-mode') ? 'TEMA CLARO' : 'TEMA ESCURO';
});
