import React from 'react'
import APPManager from '../components/APPManager'
import ProdList from "../components/productmgr/List"
import Specif from "../components/productmgr/Specif"
import Attribute from "../components/productmgr/Attribute"
import CateList from "../components/categorymgr/List"
import StockList from '../components/stockmgr/List'
import AddNews from "../components/renrengo/AddNews"
import NewsManager from "../components/renrengo/NewsManager"

const ProductManagerRoute = {
    path: "productmgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: ProdList
        },
        {
            path: "specif",
            component: Specif
        },
        {
            path: "attr",
            component: Attribute
        }
    ]
}
const CategoryManagerRoute = {
    path: "categorymgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: CateList
        }
    ]
}

const NewsManagerRoute = {
    path: "newsmgr",
    component: APPManager,
    childRoutes: [
        {
            path: "add",
            component: AddNews
        },
        {
            path: "list",
            component: NewsManager
        }
    ]
}

const StockManagerRoute = {
    path: "stockmgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: StockList
        }
    ]
}

export { ProductManagerRoute, CategoryManagerRoute, StockManagerRoute, NewsManagerRoute}