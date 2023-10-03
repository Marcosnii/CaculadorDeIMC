/*Operadores Logicos

&& -> AND -> E = Todas as expressoes precisam ser true para retornar true. se uma for falsa todas vão ser false.
|| -> OR  -> OU = No caso do OR é o contrario do AND
!  -> NOT -> NÃO  
*/

// Exemplo
const usuario = 'marcosnii'; // Login que o usuario digitou
const senha = '123456'; // senha que o usuario digitou
             
const vailogar = usuario === 'marcosnii' && senha === '123456'; // Banco de dados
console.log(vailogar);
