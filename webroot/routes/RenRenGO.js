import APPManager from '../components/APPManager'
import NoticePush from '../components/renrengo/NoticePush'
import ADAuthor from '../components/renrengo/ADAauthor'
import OrderManager from '../components/renrengo/OrderManager'
import NewsManager from "../components/renrengo/NewsManager"
import MemberManager from '../components/renrengo/MemberManager'
const RenRenGORoute = {
    path: "renrengo",
    component: APPManager,
    childRoutes: [
        {
            path: "noticepush",
            component: NoticePush
        },
        {
            path: "adauthor",
            component: ADAuthor
        },
        {
            path: "ordermanager",
            component: OrderManager
        },
        {
            path: "newsmanager",
            component: NewsManager
        },
        {
            path: "membermanager",
            component: MemberManager
        }
    ]
}

export default RenRenGORoute;