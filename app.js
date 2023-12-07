const express = require('express');
const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',  (req, res) =>{
        res.render('index', { produtos })
})

const produtos = [
  {id: 1, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte1.png", 
          descricao: "Ele proporciona secagem rápida (efeito drying ultrasseco), alta cobertura, brilho intenso (efeito high shine) e duradouro."},

  {id: 2, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte2.png", 
          descricao: "O Esmalte Dailus Puro Cacau é utilizado para a decoração e embelezamento das unhas das mãos e dos pés."},

  {id: 3, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte3.png", 
          descricao: "O esmalte Risqué Marrom Café Brasileiro é cremoso, de secagem rápida e com ultra brilho, além de ter longa duração nas unhas."},
  
  {id: 4, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte4.png", 
          descricao: "O Semente de Romã, no seu tom vermelho com fundo rosado, atrai a prosperidade que a gente deseja."},
  
  {id: 5, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte5.png", 
          descricao: "Ele tem alta cobertura, acabamento cremoso e brilho intenso."},
  
  {id: 6, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte6.png", 
          descricao: "O esmalte tem acabamento cremoso, fórmula vegana e alta cobertura. "},
  
  {id: 7, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte7.png",
          descricao: "Com glitter rosinha e diferentes partículas coloridas, conquiste um efeito holográfico nas unhas para dar aquele close na sala de casa."},
  
  {id: 8, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte8.png", 
          descricao: "Com acabamento cremoso e efeito brilhante nas unhas, o esmalte faz parte da coleção Queridinhos."},
   
  {id: 9, nome: "", 
          preco: "7.99", 
          imagem: "/esmalte9.png", 
          descricao: "Os esmaltes têm alta cobertura (e você não vai precisar aplicar várias camadas para chegar na cor ufa!), acabamento cremoso e são bem brilhantes."},
  
  {id: 10, nome: "", 
           preco: "7.99", 
           imagem: "/esmalte10.png", 
           descricao: "O esmalte tem alta cobertura (e você não vai precisar aplicar várias camadas para chegar na cor), acabamento cremoso e brilho intenso. "},
  
  {id: 11, nome: "", 
           preco: "7.99", 
           imagem: "/esmalte11.png", 
           descricao: "Este rosa-queimado é inspirado nas sentimentais do rolê! Um tom clássico, importado diretamente do Deserto do Atacama."},
  
  {id: 12, nome: "", 
           preco: "7.99", 
           imagem: "/esmalte12.png", 
           descricao: "Um verde escuro que marca presença não só pela cor dramática, mas também pelo nome bem-humorado! "},
]

function buscarProdutoPorId(id){
        const produto = produto.find(produto => produto.id == id);
        return produto || null 
}

app.get('/produtos/:id', (req, res) =>{
  const produto = buscarProdutoPorId(req.params.id)
  res.render("produto", { produto })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
});