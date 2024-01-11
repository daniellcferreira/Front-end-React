// Switch - casa

const permissoes = 'aluno';

switch(permissoes) {
    case 'aluno':
        console.log('Voce so pode visualizar as aulas.');
        break
    case 'professor':
        console.log('Voce pode alterar e adicionar aula e exercecios.');
        break
    case 'admin':
        console.log('Acesso total ao sistema.');
        break
    default:
        console.log('usuario não encotrado.');
}