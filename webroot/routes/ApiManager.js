import APIManager from '../components/APIManager'
import Edit from '../components/apimanager/Edit'
import Deploy from '../components/apimanager/Deploy'
const APIManagerRoute = {
    path: "apimanager",
    component: APIManager,
    childRoutes: [
        {
            path: "edit",
            component: Edit
        },{
            path: 'deploy',
            component: Deploy
        }
    ]
}

export default APIManagerRoute;