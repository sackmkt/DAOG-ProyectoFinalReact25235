import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Productos from '../pages/Productos.jsx';

// { category = null }
const ListadoProductos = ({categoria = null}) =>
    {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);


    useEffect(() =>
    {
    let API = 'https://api.escuelajs.co/api/v1';
    let url;

      if (categoria) {
      url = `${API}/categories/${categoria}/products`;
      }
      else {
          url = `${API}/products`;
        }
    // if (category)
    // {
    //   url = `https://fakestoreapi.com/products/category/${category}`;
    // }

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Tenemos este problema:', error);
        setCargando(false);
      });
}, [categoria]);


    const handleAgregarAlCarrito = (producto) => {
    alert(`Producto ${producto.title} agregado al carrito`);
  };



  if (cargando) {
    return <div>Cargando...!!</div>;
  }


  return (
    <Row>
      {products.map((producto) => (
        <Col md={4} key={producto.id} className="mb-4">
          <Productos producto={producto} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ListadoProductos;