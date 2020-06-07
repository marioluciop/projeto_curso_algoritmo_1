/*passou := falso
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 01 do aluno: ")
leia(nota01)
escreval("Digita a nota 02 do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

//condicional (se ... então), bicondicional (duas condições), negação (!=)
//

se media >= 50 entao
   passou := verdadeiro
fimse

se !passou entao //negação
   escreval("Reprovado!", nome)
senao
   escreval("Aprovado!", nome)
fimse

//conjunção
se media >= 50 entao
   passou := verdadeiro
fimse

se !passou && media == 0 entao //ambas devem ser verdadeiras (&& = e)
   escreval("Reprovado!", nome)
senao
   escreval("Aprovado!", nome)
   
//disjunção
se media >= 50 entao
   passou := verdadeiro
fimse                            // (|| = ou)
                                //um basta para verificar se é verdadeiro
se !passou || media >= 70 entao //"se diferente de passou ou media == 70 ..."
   escreval("Aprovado!", nome)
senao
   escreval("Reprovado!", nome)

//disjunção exclusiva
se media >= 50 entao
   passou := verdadeiro
fimse

se (passou) && (media >= 50 || media <= 70) entao //
   escreval("Aprovado!", nome)
senao
   escreval("Reprovado!", nome)*/

var nome, nota1, nota2;

passou = false;

nome = prompt("Digite o nome do aluno:");
nota1 = prompt("Digite a nota 1 do aluno:");
nota2 = prompt("Digite a nota 2 do aluno:");

media = (parseInt(nota1) + parseInt(nota2)) / 2;

/* condicional */
if (media >= 50)
    passou = true;

if (passou)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome);

/* conjunção */
if (media >= 50)
    passou = true;

if (passou && media >= 70)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome);

/* disjunção */ 
if (media || media >= 50)
    passou = true;

if (passou && media >= 70)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome);

/* disjunção exclusiva */
/*if (passou && (media >= 70 && media <= 90)
    alert(Ok)

if (passou && media >= 70)
    alert("Aprovado!" + nome);
else
    alert("Reprovado!" + nome);*/
