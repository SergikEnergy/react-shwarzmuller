import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Products from './pages/Products';
import ErrorPage from './pages/Error';

// const routesElements = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
]);

// const router2 = createBrowserRouter(routesElements);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
