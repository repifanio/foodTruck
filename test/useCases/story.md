## User cases da aplicação

1. Como usuário da aplicação
eu abro a aplicação,
e escaneio o qrcode de um foodtruck em específico
e sou levado para o cardápio desse foodTruck.

2. Como um usuário da aplicação
eu devo escolher um ou mais item para realizar o pedido
e incluo ele no carrinho

3. Como um usuário da aplicação
eu posso visualizar o meu carrinho
e finalizar o pedido do mesmo

4. Como um usuário da aplicação
eu preciso realizar o pagamento do pedido
através do cartão de crédito

5. Como um proprietário do foodtruck
eu preciso receber o pedido e identificar
todas as informações desse pedido

6. Como um proprietário do foodtruck
eu preciso aceitar ou rejeitar o pedido.
Quando aceito, o status do pedido deve
passar para "Em preparação" e o usuário
deve receber uma notificação com essa informação

7. Como um proprietário do foodtruck 
eu posso a qualquer momento passar
o status do pedido para "Concluído"
e o usuário deve receber uma notificação 
com essa informação

8. Como um proprietário do foodtruck
eu posso realizar o cadastro do meu
cardápio através da visualização de 
gerencial da aplicação

9. Como um proprietário do foodtruck
eu posso a qualquer momento desativar
um item do meu cardápio

10. Como um proprietário do foodtruck 
eu posso a qualqer momento fechar a loja 
para pedidos.

## Entidades da aplicação
&nbsp;

### pointOfSale
field              | type
----------         | -------
id                 | string
name               | string
isOpen             | boolean
image              | string
linkQrCode         | string
&nbsp;
### catalog
field              | type
----------         | -------
id                 | string
name               | string
image              | string
linkQrCode         | string
&nbsp;
### items
field              | type
----------         | -------
id                 | string
name               | string
image              | string
price              | number
isActive           | boolean
linkQrCode         | string
&nbsp;
### orders
field              | type
----------         | -------
id                 | string
name               | string
numberOfOrder      | number
totalAmount        | number
isIntegrated       | boolean
linkQrCode         | string
&nbsp;
### users
field              | type
----------         | -------
id                 | string
name               | string
image              | string
password           | string
isActive           | boolean
linkQrCode         | string
