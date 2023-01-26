import { ADMIN_ROUTE, USER_ROUTE, CART_ROUTE, CATEGORIES_ROUTE, BRANDS_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ORDERING_ROUTE } from './utils/routeConsts';
import Main from './pages/Main';
import Admin from './pages/Admin';
import User from './pages/User';
import Cart from './pages/Cart';
import Ordering from './pages/Ordering';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ProductPage from './pages/ProductPage';
import Categories from './pages/Categories';
import Brands from './pages/Brands';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: USER_ROUTE,
        Component: User,
    },
    {
        path: CART_ROUTE,
        Component: Cart,
    },
    {
        path: ORDERING_ROUTE,
        Component: Ordering,
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: CATEGORIES_ROUTE,
        Component: Categories,
    },
    {
        path: BRANDS_ROUTE,
        Component: Brands
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage,
    }
]