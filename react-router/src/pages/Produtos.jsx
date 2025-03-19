import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Produtos.css'
import Card from '../components/Card';


function Produtos() {


  const [produtos, setProdutos] = useState([


  ]);
  

  return (
    <div className='produtos-app'>
      <Navbar />

    </div>
  );
}

export default Produtos;