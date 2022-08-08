# **leiaBooks** 

## **Resumo**
O projeto foi pensado no usuário que deseja comprar um livro na internet, sendo a tela principal o momento em que o cliente confere os dados para entrega, o pedido em si e faz o preenchimento do pagamento através do cartão de crédito.

## **Projeto final**
![projeto final](https://user-images.githubusercontent.com/86502245/183319773-d3218f2c-30b4-4362-954d-3d3c0ddac6cc.png)

[Ver o site aqui!](https://ncrigo.github.io/SAP008-card-validation/)

## **Usuário**
O produto ajuda o usuário a concluir a compra validando seu cartão de crédito. Caso o número do cartão seja válido, será exibido a mensagem: "Parabéns, pedido efetuado com sucesso!", no entanto, se o cartão não for válido aparecerá a mensagem: "Número inválido, tente outro cartão!".

## **Validação do cartão**
Para validar o cartão usa-se o [Algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também chamado de módulo 10 que é um método de soma de verificação, seguindo os seguintes passos:
 
1. Recebe-se o número do cartão, sendo aceitos apenas dígitos de 0-9. (Ex.: 7 **9** 9 **2** 7 **3** 9 **8** 7 **1** 3);
2. Obtém-se o inverso do número a ser verificado. (Ex.: 3 **1** 7 **8** 9 **3** 7 **2** 9 **9** 7);
3. Todos os números que ocupam uma posição par são multiplicados por dois. (Ex.: 3 **2** 7 **16** 9 **6** 7 **4** 9 **18** 7);
4. Se esse número for maior ou igual a 10, deve-se adicionar os dígitos do resultado. (Ex.: 3 **2** 7 **7** 9 **6** 7 **4** 9 **9** 7);
5. O número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10. (Ex.: 3 + 2 + 7 + 7 + 9 + 6 + 7 + 4 + 9 + 9 + 7 = 70 % 10 === 0).


## **Primeiro protótipo**
![4 1  primeiro prototipo](https://user-images.githubusercontent.com/86502245/183319779-e49d69b1-9b08-47cd-b568-00bb6f64f4b9.jpeg)

## **Feedback**
O projeto foi iniciado e primeiramente testado contendo os dados para entrega ao cliente e o cartão para validação. Foram feitas melhorias na estrutura da página em si, reorganizando o resumo do pedido (colocando os dados da compra ao lado das informações do cliente), bem como adicionando/incluindo a imagem da capa do livro e a previsão de entrega.

No cartão, também foram feitas algumas mudanças, como: na parte de número e validade do cartão foram bloqueados caracteres de letras e, a mesma ideia foi seguida na parte de “nome impresso”, onde neste caso bloqueia-se a entrada de caracteres numéricos. E para concluir, também foi inserido uma mensagem (após preenchimento dos dados do cartão) que informa se o cartão é válido ou inválido.


## **Protótipo final**
![4 3 prototipo final](https://user-images.githubusercontent.com/86502245/183319782-d0e8d87f-de30-4a8a-882a-921eeee5b2af.jpeg)



