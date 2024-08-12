import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from '../layout';
import NotFound from '../pages/notfound';
import Home from '../pages/home';

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route index element={<Home/>} />
            <Route path='*' component={NotFound} />
        </Route>
    )
)
export default RouterPaths;