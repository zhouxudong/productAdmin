import React from 'react'

import APPManager from '../components/APPManager'
import APP_Index from '../components/appmanager/basicofig/Index'
import APP_Publish from '../components/appmanager/basicofig/Publish'
import Accessurl from  '../components/appmanager/outnet/Accessurl'
import IPSecure from '../components/appmanager/outnet/IPSecure'
import InNet_Accessurl from '../components/appmanager/innernet/Accessurl'
import InNet_Securegroup from '../components/appmanager/innernet/Securegroup'
import InNet_SecretManager from '../components/appmanager/innernet/SecretManager'
const AppManagerRoute = {
    path: "appmanager",
    component: APPManager,
    childRoutes: [
        {
            path: "basicofig",
            component: APPManager,
            childRoutes: [
                {path: "index", component: APP_Index},
                {path: "publish", component: APP_Publish}
            ]
        },
        {
            path: "outnet",
            component: APPManager,
            childRoutes: [
                {path: "accessurl", component: Accessurl},
                {path: "ipsecure", component: IPSecure}
            ]
        },
        {
            path: "innernet",
            component: APPManager,
            childRoutes: [
                {path: "accessurl", component: InNet_Accessurl},
                {path: "securegroup", component: InNet_Securegroup},
                {path: "secretManager",component: InNet_SecretManager}
            ]
        }
    ]
}
export default AppManagerRoute;