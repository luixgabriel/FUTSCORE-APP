import axios from 'axios';

export default axios.create({
  baseURL: 'https://futscore.onrender.com/',
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo das requisições
    // Cabeçalho de autenticação
    'Access-Control-Allow-Origin': '*', // Permite acesso de origem cruzada para o site https://seu-site.com
  },
});
