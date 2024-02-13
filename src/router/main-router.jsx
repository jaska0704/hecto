import { Home } from "../pages/home"
import { Contact } from "../pages/contact"
import { Block } from "../pages/block"
import { Pages } from "../pages/pagess"
import { Shop } from "../pages/shop"
import { Products } from "../pages/products"

export const main_pages = [
    {
        component: <Home/>,
    },
    {
        component: <Pages/>,
        path: "Pages",
    },
    {
        component: <Products/>,
        path: "Products",
    },
    {
        component: <Block/>,
        path: "Block",
    },
    {
        component: <Shop/>,
        path: "Shop",
    },
    {
        component: <Contact/>,
        path: "Contact",
    },
]