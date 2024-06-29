import retorna_signo from './service/servico.js';
import colecao_signos from './service/dados.js';

let data_app = new Date();
const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);
