const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index'); 
});

const produto = [
  {id: 1, nome: "Café Bistro", 
          preco: "7.99", 
          imagem: "esmalte1.png", 
          descricao: "Ele proporciona secagem rápida (efeito drying ultrasseco), alta cobertura, brilho intenso (efeito high shine) e duradouro. As cores variam entre coberturas cremosas e peroladas. O esmalte conta com pincel Big Brush, que possui 900 fios e cerdas arredondadas."},

  {id: 2, nome: "Puro Cacau", 
          preco: "7.99", 
          imagem: "esmalte2.png", 
          descricao: "O Esmalte Dailus Puro Cacau é utilizado para a decoração e embelezamento das unhas das mãos e dos pés. O produto possui alta durabilidade, pigmentação e brilho intenso, deixando o visual mais bonito e atraente. Secagem rápida. A embalagem contém 8ml."},

  {id: 3, nome: "Café", 
          preco: "7.99", 
          imagem: "esmalte3.png", 
          descricao: "O esmalte Risqué Marrom Café Brasileiro é cremoso, de secagem rápida e com ultra brilho, além de ter longa duração nas unhas. Sua fórmula é hipoalergênica, isto é, livre de componentes que costumam causar alergias e seu pincel proporciona aplicação perfeita e alta cobertura."},
  
  {id: 4, nome: "Semente de Romã", 
          preco: "7.99", 
          imagem: "esmalte4.png", 
          descricao: "O Semente de Romã, no seu tom vermelho com fundo rosado, atrai a prosperidade que a gente deseja. Ele tem alta cobertura (e você não vai precisar aplicar várias camadas para chegar na cor ¿ ufa!), acabamento cremoso e é bem brilhante."},
  
  {id: 5, nome: "Taça de Cristal", 
          preco: "7.99", 
          imagem: "esmalte5.png", 
          descricao: "Ele tem alta cobertura, acabamento cremoso e brilho intenso. Você vai adorar a praticidade da dupla tampa anatômica e pincel big flat brush, com cerdas cheias, na hora da esmaltação! E tem mais: o esmalte seca bem rapidinho e dura muito tempo nas unhas!"},
  
  {id: 6, nome: "To de Home", 
          preco: "7.99", 
          imagem: "esmalte6.png", 
          descricao: "O esmalte tem acabamento cremoso, fórmula vegana e alta cobertura. A dupla anatômica + pincel big flat brush é implacável, nossa grande aliada para facilitar a esmaltação."},
  
  {id: 7, nome: "A mãe tá On", 
          preco: "7.99", 
          imagem: "esmalte7.png",
          descricao: "Com glitter rosinha e diferentes partículas coloridas, conquiste um efeito holográfico nas unhas para dar aquele close na sala de casa. O produto tem brilho intenso e fórmula 100% vegana. Alguma dúvida que esse esmalte já nasceu hit? Descubra também os outros tons glamourosos da coleção!"},
  
  {id: 8, nome: "Black Tie", 
          preco: "7.99", 
          imagem: "esmalte8.png", 
          descricao: "Com acabamento cremoso e efeito brilhante nas unhas, o esmalte faz parte da coleção Queridinhos, que reúne os best-sellers da Dailus em um só lugar! Ele também tem alta cobertura, secagem rápida e dura muito tempo nas unhas."},
   
  {id: 9, nome: "Baseada em fatos reais", 
          preco: "7.99", 
          imagem: "esmalte9.png", 
          descricao: "Os esmaltes têm alta cobertura (e você não vai precisar aplicar várias camadas para chegar na cor ¿ ufa!), acabamento cremoso e são bem brilhantes. A dupla tampa anatômica + pincel big flat brush é implacável, nossa grande aliada para facilitar a esmaltação."},
  
  {id: 10, nome: "Haja Paciência", 
           preco: "7.99", 
           imagem: "esmalte10.png", 
           descricao: "O esmalte tem alta cobertura (e você não vai precisar aplicar várias camadas para chegar na cor), acabamento cremoso e brilho intenso. A dupla tampa anatômica + pincel big flat brush é implacável e facilita muito a esmaltação. E mais: o esmalte seca bem rápido e dura muito!"},
  
  {id: 11, nome: "Sentimental sou Dessas", 
           preco: "7.99", 
           imagem: "esmalte11.png", 
           descricao: "Este rosa-queimado é inspirado nas sentimentais do rolê! Um tom clássico, importado diretamente do Deserto do Atacama, o esmalte tem alta cobertura, acabamento cremoso, secagem rápida e brilho intenso."},
  
  {id: 12, nome: "Só vim pela Comida", 
           preco: "7.99", 
           imagem: "esmalte12.png", 
           descricao: "Um verde escuro que marca presença não só pela cor dramática, mas também pelo nome bem-humorado! O esmalte, que faz parte da coleção Lhamastê, tem alta cobertura, acabamento cremoso, brilho intenso, secagem rápido e longa duração."},
]

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Página do produto!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});