import AboutPage from "../pages/AboutPage";
import BasketPage from "../pages/BasketPage";
import BlogPage from "../pages/BlogPage";
import CommunityPage from "../pages/CommunityPage";
import GardenPage from "../pages/GardenPage";
import ShopPage from "../pages/ShopPage";
import WalletPage from "../pages/WalletPage";
import AuthPage from "../pages/AuthPage";
import CategoryPage from "../pages/ShopPage/components/CategoryPage";
import PlantPage from "../pages/PlantPage";
import AccountPage from "../pages/AccountPage";
import { 
    ABOUT_ROUTE, ACCOUNT_ROUT, BASKET_ROUT, BLOG_ROUT, 
    COMMUNITY_ROUT, GARDEN_ROUT, LOGIN_ROUTE, 
    PLANT_ROUT, REGISTRATION_ROUTE, SHOP_ROUT, 
    WALLET_ROUT } from "./const";


export const authRoutes = [
    {
        path: SHOP_ROUT,
        Component: ShopPage,
        title: 'Маркет',
    },
    {
        path: WALLET_ROUT,
        Component: WalletPage,
        title: 'Кошелек',
    },
    {
        path: BASKET_ROUT,
        Component: BasketPage,
        title: 'Корзина',
    },
    {
        path: GARDEN_ROUT + '/:id',
        Component: GardenPage,
        title: 'Грядки',
    },
    {
        path: PLANT_ROUT + '/:id',
        Component: PlantPage,
        title: 'Растение',
    },
    {
        path: SHOP_ROUT + '/:id',
        Component: CategoryPage,
        title: 'Категория',
    },
    {
        path: ACCOUNT_ROUT,
        Component: AccountPage,
        title: 'Личный кабинет'
    }
];

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: AboutPage,
        title: 'О проекте',
    },
    {
        path: BLOG_ROUT,
        Component: BlogPage,
        title: 'Блог',
    },
    {
        path: COMMUNITY_ROUT, // main page authUser
        Component:CommunityPage,
        title: 'Сообщество',
    },
    {
        path: '/',
        Component: CommunityPage,
        title: 'Главная',
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage,
        title: 'afs1',
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage,
        title: '1sadf',
    },
];