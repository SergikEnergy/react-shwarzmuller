import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'something', details: 'Details about product 1' },
  { id: 2, title: 'something2', details: 'Details about product 2' },
  { id: 3, title: 'something3', details: 'Details about product 3' },
];
function Products() {
  return (
    <>
      <div>This is a products page!</div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.details}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
