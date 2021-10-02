import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products'); 
  const [products] = useState ([
    {
      name: 'Rod and Reel',
      cost: '$79.00',
      image: 'https://www.sportsmans.com/medias/cat101045-1.jpg?context=bWFzdGVyfHJvb3R8NDM3MDZ8aW1hZ2UvanBlZ3xoNTUvaDk3Lzg3OTYxNzY0ODIzMzQuanBnfGFjMTA5ZDliMjdlNDMwNGRiMjA2ZDQxMWYyMDljYzk4MTcyNGY3YmI0NDBkZjY1ZjY2MzIyYTY3YzMwNTdiYTA"',


    },
    {
    name: 'Fishing Lures',
    cost: '$29.95',
    image: 'https://m.media-amazon.com/images/I/71g5ZbjlYeL._AC_SL1001_.jpg',




    },
    {
      name: 'Fishing Lures',
      cost: '$29.95',
      image: 'https://m.media-amazon.com/images/I/71g5ZbjlYeL._AC_SL1001_.jpg',
  
  
  
  
      },
      {
        name: 'Fishing Lures',
        cost: '$29.95',
        image: 'https://m.media-amazon.com/images/I/71g5ZbjlYeL._AC_SL1001_.jpg',
    
    
    
    
        },
        {
          name: 'Rod and Reel',
          cost: '$79.00',
          image: 'https://www.sportsmans.com/medias/cat101045-1.jpg?context=bWFzdGVyfHJvb3R8NDM3MDZ8aW1hZ2UvanBlZ3xoNTUvaDk3Lzg3OTYxNzY0ODIzMzQuanBnfGFjMTA5ZDliMjdlNDMwNGRiMjA2ZDQxMWYyMDljYzk4MTcyNGY3YmI0NDBkZjY1ZjY2MzIyYTY3YzMwNTdiYTA"',
    
    
        },
  ]);


  const addToCart = (product) => {
    
    setCart([...cart, product]);
  };

  




  return ( 
  <div className="App">
    <header>
      <button>Go to Cart({cart.length})</button>
    </header>
    
   
    
    <h1>Eastern Shore Tackle Shop</h1>
    <div className="products">
    {products.map((product) => (
      
      <div>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.image} />
      <div class="center">
      <button onClick={() => addToCart(product)}> Add to Cart
      </button>
      </div>
      </div>
      ))}
    
    </div>

     

     </div>

    );
    

    
   
     
    

   
     
    }
     
    
   
    


export default App;