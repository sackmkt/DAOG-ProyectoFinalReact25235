import ListadoProductos from "../components/ListadoProductos";

const Categoria = () => {
  return (
    <div className="container">
      <h1>Categoria: Electronica</h1>
      <ListadoProductos categoria={2} />
    </div>
  );
};

export default Categoria;