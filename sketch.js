var sea, ship;
var seaImg, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png",);
}

function setup(){
  createCanvas(400,400);
  background("blue");


  // Plano de fundo móvel
  /* Criar sprite
  Adicionar imagem
  Adicionar velocidade
  Diminuir tamanho */
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -10;
  sea.scale = 0.3;
  
  // Adicionar navio
  ship = createSprite(150,160,20,50);
  ship.addAnimation("navioFlutuando", shipImg);
  ship.scale = 0.3;
  
  
}

function draw() {
  
  background(0);
  // Velocidade do plano de fundo
  sea.velocityX = -3;
 // código para redefinir o plano de fundo
  // dica: width
  if (sea.x < 0){
    sea.x = sea.width / 8;
  }
  drawSprites();
}
