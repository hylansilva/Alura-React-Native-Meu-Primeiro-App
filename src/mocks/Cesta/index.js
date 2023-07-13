import logo from "../../../assets/logo.png";

import tomate from "../../../assets/frutas/Tomate.png";
import brocolis from "../../../assets/frutas/Brócolis.png";
import batata from "../../../assets/frutas/Batata.png";
import pepino from "../../../assets/frutas/Pepino.png";
import abobora from "../../../assets/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhe da Cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    buttonName: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        id:0,
        nome: "Tomate",
        imagem: tomate,
      },
      {
        id:1,
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        id:2,
        nome: "Batata",
        imagem: batata,
      },
      {
        id:3,
        nome: "Pepino",
        imagem: pepino,
      },
      {
        id:4,
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
