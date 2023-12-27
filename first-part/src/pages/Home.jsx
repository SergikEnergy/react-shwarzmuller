import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 className=''>My Homepage</h1>
      <p className=''>
        Go to the
        <a href='/products' className=''>
          {/* if we use simple a link - we will get reload page - it's not, what we need */}
          products list
        </a>
        Go to the
        <Link to='/products'>the list of product</Link>.
      </p>
    </>
  );
}

export default Home;
