import { Card, Button, Stack } from 'react-bootstrap';
import '../App.css';


const Productos = ({ producto, agregarAlCarrito }) => {
    if (!producto) return null;
    const images = Array.isArray(producto?.images) ? producto.images : [];
    const imgSrc = images[0] || images[1] || images[2] || 'https://via.placeholder.com/400x200?text=Sin+imagen';

    const title = producto.title ?? 'Producto';
    const desc = producto.description ?? '';
    const price = producto.price ?? 0;

return (

    <Card className="h-100 border-0 rounded-4 shadow-sm product-card d-flex flex-column">
        <Card.Img
            variant="top"
            src={imgSrc}
            alt={producto?.title || title }
            className="card-img-top img-fluid" 
            style={{ height: '200px', objectFit: 'cover' }}
        />      
        <Card.Body className="d-flex flex-column">
        <Card.Title className="text-muted small mb-3 line-clamp-2">{producto?.title ?? title }</Card.Title>
        <Card.Text>
            {(producto?.description ?? desc ).slice(0, 100)}...
            {producto?.description && producto.description.length > 100 ? '…' : ''}
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="mb-3">
        <span className="h5 mb-0">${price}</span>
        </Stack>
        <div className="mt-auto d-flex gap-2">
        <Button variant="dark" className="flex-grow-1" onClick={() => agregarAlCarrito?.(producto)}>
            Agregar
        </Button>
        <Card.Text>Disponible</Card.Text>
        </div>
        </Card.Body>
    </Card>
);
};

export default Productos;