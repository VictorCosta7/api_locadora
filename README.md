# Cadastro de Carro

**RF** => Requesitos Funcionais
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN** => Regras de negócios
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar uma placa de carro já cadastrado.
O Carro deve ser cadastrado com disponibilidade por padrão.
Apenas usuários administradores podem cadastrar o carro.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisa estar logado no sistema para avaliar carros disponíveis.

# Cadastro de especificação no carro

**RF**
Deve ser posível cadastrar uma especificação para um carro.
Deve ser possível listar dodas as especificações
Deve ser possível listar todos os carros

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma mesma especificação já existente para o mesmo carro.
Deve ser possível listar todas as especificações
O Carro deve ser cadastrado com disponibilidade por padrão.
Apenas usuários administradores podem cadastrar o carro.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar multer para upload dos arquivos

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
A imagem do carro deve ser cadastrado com disponibilidade por padrão.
Apenas usuários administradores podem cadastrar o carro.

# Alugel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possível cadastrar um novo aluguel para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
