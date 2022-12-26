# Sistema Web Defesa Civil

## Projeto inicial feito em ReactJs para criação de um sistema web

O projeto foi criado com a ferramenta React Js, uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. O objetivo desse projeto foi para criar um site administrativo para a Defesa Civil Municipal, onde tivesse uma tela de login, tela inicial que mostrasse titulos de noticias e outras informações pertinentes, uma tela com listagem de ocorrencias feitas para a Defesa Civil, tela de relatorio com as ocorrencias solicitadas de acordo com bairro e outros parametros, tela que consumisse dados para criação de gráficos interativos.

O sistema está na fase inicial (fase 0), porém com bastante espaço para melhorias, sejapara melhorar seu design ou para inclusão de novas telas de acordo com a necessidade do cliente. É um projeto simples e intuitivo que foi pensado para ajudar a Defesa Civil Municipal de Oriximiná a ter um sistema que pudesse ser usado para auxiliar nas atividades diárias.

## Colaboradores

[Matheus Carvalho](https://www.linkedin.com/in/matheus-carvalho-dev/)

[Luciana Sousa](https://www.linkedin.com/in/luciana-sousa-93a510243/)

[Crystian Cativo](https://www.linkedin.com/in/crystian-printes-b052691b7/)

[Marcos Prints](https://www.linkedin.com/in/mvprintes/)

[Carlos Sarubi](https://www.linkedin.com/in/carlos-sarubi/)

[Izabela Carvalho](https://www.linkedin.com/in/izabelaccarvalho/)

[Raiane Coimbra](https://www.linkedin.com/in/raianecoimbra/)

[Francisco Marconi](https://www.linkedin.com/in/francisco-marconi-257a93252/)

[Lucas Eleutério](linkedin.com/in/lucas-eleutério-1a9759254)

[Kairo Hudson]


## Versel

O projeto foi colocado para visualização na [Vercel](https://vercel.com/). Uma plataforma voltada para hospedagem de projetos webs, além de ser a empresa criadora do framework Next JS. Sua forma simples erápida de deploy de projetos é uma ótima escolha para mostrar seus peojetos pessoais para mostrar a outras pessoas seu desenvolvimento. E por conta de sua fácil integração com a plataforma Github, podemos fazer esse deploy de forma intuitiva! Em poucos passos conseguimos colocar em nuvem qualquer projeto web.

## Como funciona o projeto?

Nosso Sistema Web, além do uso do [React App](https://github.com/facebook/create-react-app) em sua construção, foi utilizada a biblioteca [Axios](https://axios-http.com/ptbr/docs/intro) para consumo de APIs. Como é um projeto inicial, e carecendo de novas refatorações, a forma como foi feita essa comunicação com API foi feita de forma simples, não havendo a abstração para uma pasta separada. Logo cada tela que consome a API possui um hook que faz essa conecção e puxa os dados para a tela. Para a API, foi feita uma Fake Api com [Json Server](https://github.com/typicode/json-server), uma biblioteca capaz de criar uma API Fake em 30 segundos e sem precisar escrever nenhuma linha de código.

## Como rodar o projeto?

### Json server
Para fazer a Fake API funcionar, previamente, deverá ter instalado em sua máquina a biblioteca, além de ter o [NodeJS](https://nodejs.org/en/) instalado. Caso não tenha o Node, clique no [aqui](https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi) para baixar a versão mais recente. Em seguida à instalação, instale o `json-server` através do CMD (Prompt de Comando) ou Powershell, colocando o comando `npm install json-server`.
Apos às instalações, crie um arquivo .json (db.json, por exemplo), e cole dentro dele o seguinte trecho:
```
{
  "ocorrencias": [
    {
      "id": 1,
      "tipo_ocorrencia": "Queimada",
      "data_ocorrido": "25/11/2022",
      "hora_ocorrido": "12:00:00",
      "anexo": "https://s2.glbimg.com/k-dGa2mO-_GB0uCgLnmNuahb4i0=/0x0:1032x774/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/8/r/UqE89cQUikfJtAxvpidA/queimada-orixi.jpg",
      "nome_autor_crime": "Matheus Carvalho",
      "local_ocorrido": "Avenida Independencia, 1742, Fátima",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ],
  "noticias": [
    {
      "titulo": "Governo federal reconhece situação de emergência de Oriximiná",
      "corpo": "A situação de emergência de Oriximiná, foi reconhecida pelo governo Federal, por meio do Ministério do Desenvolvimento Regional (MDR). A portaria foi publicada na edição do Diário Oficial da União (DOU) da última sexta-feira 25. Oriximiná e outras seis cidades brasileiras tiveram situação reconhecida por conta de serem afetadas por desastres naturais.\n\nApós a concessão do status de situação de emergência pela Defesa Civil Nacional, os municípios atingidos por desastres estão aptos a solicitar recursos do MDR para atendimento à população afetada. No município de Oriximiná, as chuvas intensas motivaram o reconhecimento, enquanto Pium, no Tocantins, houve registro de alagamentos.\n\nAs ações envolvem restabelecimento de serviços essenciais e reconstrução de equipamentos de infraestrutura danificados. A solicitação deve ser feita por meio do Sistema Integrado de Informações sobre Desastres (S2iD). Com base nas informações enviadas, a equipe técnica da Defesa Civil Nacional avalia as metas e os valores solicitados.\n\nCom a aprovação, é publicada portaria no DOU com a especificação do montante a ser liberado.",
      "urlImagem": "https://firebasestorage.googleapis.com/v0/b/reactuploads-382c9.appspot.com/o/images%2FCapa238%20(1).jpg?alt=media&token=08fe24ab-ce40-401d-8f4b-f8e7b3bf5c81",
      "dataPublicacao": "2022-11-30T05:28:08.622Z",
      "id": 1
    },
    {
      "titulo": "Defesa Civil oferece suporte a Oriximiná, Trairão e Baião, atingidos pelas cheias",
      "corpo": "Os municípios de Oriximiná, no Baixo Amazonas; Trairão, na região Tapajós; e Baião, na Tocantins, tiveram seus decretos de situação de emergência, em função das cheias, homologados e assinados pelo governador Helder Barbalho, e publicados na edição do Diário Oficial do Estado (DOE) da última sexta-feira (07). \n\nPara mitigar os danos às famílias atingidas, a Coordenação Estadual da Defesa Civil articula com os municípios para garantir proteção e segurança às populações. \n\n",
      "urlImagem": "https://firebasestorage.googleapis.com/v0/b/reactuploads-382c9.appspot.com/o/images%2Fup_ag_28123_70479947-604d-f30e-ac5e-2dcaec69c4fb.jpg?alt=media&token=aa78bdab-f4bb-41be-9ea3-b006b807216f",
      "dataPublicacao": "2022-11-30T05:29:24.945Z",
      "id": 2
    }
  ],
  "estatistica":{
    "dados":[
      {"name": "Page A", "pv": 2400, "amt": 2400},
      {"name": "Page B", "pv": 1398, "amt": 2210},
      {"name": "Page C", "pv": 9800, "amt": 2290},
      {"name": "Page D", "pv": 3908, "amt": 2000},
      {"name": "Page E", "pv": 4800, "amt": 2181},
      {"name": "Page F", "pv": 3800, "amt": 2500},
      {"name": "Page G", "pv": 4300, "amt": 2100}
    ]
  }
}
```
Ou, simplesmente rode o arquivo `db.json` que está dentro do projeto. Os valores dentro do arquivos podem ser alterados seguindo o padrão que já está estabelecido (Como mostrado acima), exceto pelos nomes dos objetos (ocorrencias,noticias, estatisticas), que, enquanto está rodando o servidor que será criado com o json-server, servirá como rotas a serem usadas pelo sistema web.

Finalmente, para rodar o arquivo db.json, e fazê-lo funcionar como uma fake API, rode o comando `json-server --watch db.json` no CMD ou Powershell no mesmo local em que se encontra o arquivo db.json, e verá o json-server criar um servidor que funcionará como uma API, podendo usar varios tipos de requests (GET, PUT, DELETE, POST, PATCH). Para saber mais, [clique aqui](https://www.fabricadecodigo.com/json-server/)

`http://localhost:3000`

`http://localhost:3000/ocorrencias`

`http://localhost:3000/noticias`

`http://localhost:3000/estatistica`


### Sistema Web

Após instalar e colocar para rodar a Fake Api através do json-server. Acesse esse [link](https://defesa-civil.vercel.app/), que te levará para o nosso projeto hospedado no Vercel. Com a API rodando, você poderar acessar as páginas criadas. Por ser um projeto inicial e utilizar um Fake API para funcionar, o sistema está "funcionando" apenas para visualização. Porém, futuramente, o projeto estará recebendo atualização para torná-lo mais completo e ser considerado como um produto finalizado.
Caso queira rodar localmente, deverá instalar as bibliotecas que foram utilizadas no projeto, para isso, basta rodar no prompt de comando `npm install`. Após isso, ao rodar o comando `npm start`, o servidor NodeJs abrirá um browser com a rota [http://localhost:3000](http://localhost:3000). Caso o Json-Serve esteja rodando antes disso, havera um conflito de porta, porém o Node perguntará se deseja rodar com outra porta, basta colocar `y` no prompt de comando, e ele rodará o sistema web na porta [http://localhost:3001](http://localhost:3001). Ou, caso deseje construir o servidor do json-serve em outra rota, basta rodar o comando `npm run server` no mesmo local que o arquivo db.json, que ele irar rodar na porta 5000:

`http://localhost:5000`

`http://localhost:5000/ocorrencias`

`http://localhost:5000/noticias`

`http://localhost:5000/estatistica`



## Leia mais sobre React, Axios e Json-Server

[Create React App documentation](https://create-react-app.dev/docs/getting-started).

[React documentation](https://reactjs.org/).

[Divisão de Código](https://create-react-app.dev/docs/code-splitting/)

[Criando uma Api Falsa com Json Server](https://code.tutsplus.com/pt/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871)

[Requisições HTTP utilizando o AXIOS](https://www.alura.com.br/artigos/requisicoes-http-utilizando-axios)
