import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const params = useParams();
  const id = params.productId; //productId is the name after :in route

  return (
    <>
      <h1 className=''>Product Details.</h1>
      <p className=''>This is a product Num. {id}</p>
    </>
  );
}

export default ProductDetailPage;
