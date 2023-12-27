import MainNav from '../components/MainNav';

function ErrorPage() {
  return (
    <>
      <MainNav />
      <main className=''>
        <h1 className=''>An Error occurred!</h1>
        <p className=''>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
