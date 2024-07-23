import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    { name: 'Meizu 18 Pro', description: 'O Meizu 18 Pro é, sem dúvida, um dos smartphones Android mais avançados e abrangentes disponíveis no mercado, graças ao seu rico equipamento e recursos multimídia avançados. ', image: 'celular.png' },
    { name: 'Razer Kraken Bluetooth Kitty Headset Gaming', description: 'Exprima livremente o seu instinto de caçador felino com o Razer Kraken BT Kitty Edition, um headset Bluetooth sem fios com orelhas de gato personalizadas e iluminação integrada, com diafragmas de 40mm e som cristalino.', image: 'razer.jpg'},
    { name: 'Portátil Lenovo IdeaPad Gaming 3  Shadow Black', description: 'Os GPUs para notebooks NVIDIA® GeForce RTX™ 30 Series oferecem o melhor desempenho para jogadores e criadores. Eles são alimentados por Ampere - a arquitetura RTX de 2ª geração da NVIDIA - com novos Ray Tracing, Tensor Cores e multiprocessadores de streaming para um grande salto no desempenho.', image: 'notebooks.jpg'}
  ];

  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;