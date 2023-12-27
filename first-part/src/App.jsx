import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

// const routesElements = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
]);

// const router2 = createBrowserRouter(routesElements);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
