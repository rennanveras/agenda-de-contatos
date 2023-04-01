const form = document.querySelector('#form-agenda-contato');
const nomesAgenda = [];
const numeroAgenda = [];

let linhas = '';

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    adicionaLinha();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(inputTelefoneContato.value.length < 8){     
        return alert('O número precisar ter mais que 8 digitos ')
    }else{
        if (nomesAgenda.includes(inputNomeContato.value) || numeroAgenda.includes(inputTelefoneContato.value)) {
            alert('Nome ou número já existente na agenda ');
        } else {
            nomesAgenda.push(inputNomeContato.value);
            numeroAgenda.push(inputTelefoneContato.value);
    
            let linha = `<tr>`;
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputTelefoneContato.value}</td>`;
            linha += `</tr>`;
            linhas += linha;
    
            document.querySelector('tbody').innerHTML = linhas;
        }
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}
//adicionar o nome e número na tabela 

// verificar se existe nome igual se estiver zerar o input

