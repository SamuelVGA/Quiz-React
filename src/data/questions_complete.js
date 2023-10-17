const data = [
  {
    category: "prop",
    questions: [
      {
        question: "O que é uma prop no contexto do React?",
        options: ["Uma função dentro de um componente", "Uma variável privada de um componente", "Uma propriedade passada de um componente pai para um componente filho", "Um tipo especial de estado"],
        answer: "Uma propriedade passada de um componente pai para um componente filho",
        
       
      },
      {
        question: "Se você quiser definir um valor padrão para uma prop, você usaria:",
        options: ["defaultProps", "initialProps", "setProps", "propTypes"],
        answer: "defaultProps",
  
      },
      {
        question: "Em React, qual é a forma recomendada de passar funções de um componente pai para um componente filho?",
        options: ["state", "props", " Através de variáveis globais", "localStorage"],
        answer: "props",
      },
      {
        question: "Se você quiser assegurar que uma prop tenha um tipo específico, o que você deveria usar?",
        options: ["defaultProps", "checkProps", "propType", "typeProps"],
        answer: "propType",
      },
      {
        question: "Qual prop é passada automaticamente para qualquer componente que esteja dentro de um <Route> do react-router?",
        options: ["pathProp", "location", "routeDetails", "navigation"],
        answer: "location",
      },
    ],
  },
  {
    category: "react world",
    questions: [
      {
        question: "Por que o React foi criado?",
        options: ["Para ser uma alternativa ao Angular", "Para alimentar os recursos da interface do usuário do Facebook", "Para criar jogos web", "Para ser um substituto do jQuery"],
        answer: "Para alimentar os recursos da interface do usuário do Facebook",
    
      },
      {
        question: "Qual empresa é responsável pelo desenvolvimento do React?",
        options: ["Google", "Microsoft", "Apple", "Facebook"],
        answer: "Facebook",
      },
      {
        question: "Qual dos seguintes nomes foi considerado antes de se decidir por React?",
        options: ["FaceJS", "FBUI", "QuickUI", "InterfaceJS"],
        answer: "FaceJS",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "Qual é a principal função do JavaScript em desenvolvimento web?",
        options: [
          "Estilizar páginas web.",
          "Estruturar o conteúdo de páginas web",
          "Manipular e criar interatividade em páginas web",
          "Transferir dados entre o cliente e o servidor",
        ],
        answer: "Manipular e criar interatividade em páginas web",
      },
      {
        question: "Qual dos seguintes não é um tipo primitivo em JavaScript?",
        options: ["string", "object", "boolean", "number"],
        answer: "object",
      },
      {
        question: "Qual é a maneira correta de declarar uma variável em JavaScript que não mude seu valor ao longo do código?",
        options: ["var", "let", "const", "mutable"],
        answer: "const",
      },
      {
        question: "Qual objeto é usado principalmente para manipular datas e horários em JavaScript?",
        options: ["Time", "Hour", "Moment", "Date"],
        answer: "Date",
      },
      {
        question:
          "Quando foi lançado o ECMAScript 6 (ES6), uma importante atualização para o JavaScript?",
        options: [" 2005", "2010", "2015", "2020"],
        answer: "2015",
      },
    ],
  },
];

export default data;
