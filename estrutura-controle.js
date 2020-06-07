/*escreval("Digite o seu nome:")
   leia(nome)
   escreval("Digite a sua nota1:")
   leia(nota1)
   escreval("Digite a sua nota2:")
   leia(nota2)
   media = (nota1 + nota2) / 2
   //mediaEscolar é uma variável recuperada do banco de dados da tabela aluno_nota
   if media >= 5 entao
      escreval("Aprovado!", nome)
   senao
        escreval("Reprovado!", nome)
   fimse*/


var nome, nota1, nota2;
nome = prompt("Digite o seu nome:");
nota1 = prompt("Digite a nota 1 do aluno:");
nota2 = prompt("Digite a nota 2 do aluno:");

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 50)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome);
