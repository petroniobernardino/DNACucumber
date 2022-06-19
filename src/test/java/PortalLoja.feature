#language: pt
Funcionalidade: Execucoes automaticas do Customer DNA
	Como Tester
	Eu quero inserir dados no portal Lojas
	Para Utiliza-los nos testes

Cenario: Deve validar os cartoes
	Dado Que acesso a pagina do Portal Loja
	Quando Informo o Usuario, senha e inicia a Sessao
	Entao Valido "<cartao>"
	
	Examples:
 |cartao|
 |Lakshay|