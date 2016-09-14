var NavMap = {
    //appmanager: {
    //    id: 'appmanager',
    //    title: "API后台管理",
    //    url: "/appmanager/basicofig/index",
    //    level: "nav-first-level",
    //    icon: "fa fa-th-large",
    //    subs: [
    //        {
    //            id: "appmanager",
    //            title: "应用管理",
    //            url: "/appmanager",
    //            icon: "fa fa-th-large",
    //            level: "nav-second-level",
    //            subs: [
    //                {
    //                    id: "basicofig",
    //                    title: "基本配置",
    //                    url: "/appmanager/basicofig",
    //                    level: "nav-third-level",
    //                    subs: [
    //                        {
    //                            id: "baseInfo",
    //                            title: "基本信息",
    //                            url: "/appmanager/basicofig/index",
    //                        },
    //                        {
    //                            id: "publish",
    //                            title: "服务器部署",
    //                            url: "/appmanager/basicofig/publish",
    //                        }
    //                    ],
    //                },
    //                {
    //                    id: "outnetcofig",
    //                    title: "外网配置",
    //                    url: "/appmanager/outnet",
    //                    level: "nav-third-level",
    //                    subs: [
    //                        {
    //                            id: "accessurl",
    //                            url: "/appmanager/outnet/accessurl",
    //                            title: "访问地址"
    //                        },
    //                        {
    //                            id: "ipsecure",
    //                            url: "/appmanager/outnet/ipsecure",
    //                            title: "IP安全"
    //                        }
    //                    ]
    //                },
    //                {
    //                    id: "innernet",
    //                    title: "内网配置",
    //                    url: "/appmanager/innernet",
    //                    level: "nav-third-level",
    //                    subs: [
    //                        { id: "accessurl", url: "/appmanager/innernet/accessurl", title: "访问地址"},
    //                        { id: "securegroup", url: "/appmanager/innernet/securegroup", title: "安全组"},
    //                        { id: "secretManager", url: "/appmanager/innernet/secretmanager", title: "密钥管理"}
    //                    ]
    //                }
    //
    //            ]
    //        },
    //        {
    //            id: "apimanager",
    //            url: "/apimanager",
    //            title: "API管理",
    //            icon: "fa fa-stethoscope",
    //            level: "nav-second-level",
    //            subs: [
    //                {
    //                    id: "edit",
    //                    url: "/apimanager/edit",
    //                    title: "编辑"
    //                },
    //                {
    //                    id: "deploy",
    //                    url: "/apimanager/deploy",
    //                    title: "部署"
    //                }
    //            ]
    //        },
    //        {
    //            id: "postman",
    //            title: "POSTMAN",
    //            url: '/postman',
    //            icon: "fa fa-globe",
    //            level: "nav-second-level",
    //            subs: [
    //                {
    //                    id: 'detail',
    //                    title: "详情",
    //                    url: "/postman/index",
    //                }
    //            ]
    //        },
    //        {
    //            id: "apidoc",
    //            title: "API文档",
    //            url: "/apidoc",
    //            icon: "fa fa-book",
    //            level: "nav-second-level",
    //            subs: [
    //                {
    //                    id: "index",
    //                    title: "首页",
    //                    url: "/apidoc/index",
    //                }
    //            ]
    //        },
    //        {
    //            id: "syscfg",
    //            title: "系统配置",
    //            url: "/syscfg",
    //            icon: "fa fa-laptop",
    //            level: "nav-second-level",
    //            subs: [
    //                {
    //                    id: 'Ngix',
    //                    title: "Ngix",
    //                    url: "/syscfg/ngix"
    //                },
    //                {
    //                    id: "apache",
    //                    url: "/syscfg/apache",
    //                    title: "Apache"
    //                }
    //            ]
    //        }
    //
    //    ]
    //},
    //renrengo: {
    //    id: "renrengo",
    //    title: "人人购管理",
    //    url: "/renrengo/noticepush",
    //    level: "nav-first-level",
    //    icon: "fa fa-th-large",
    //    subs: [
    //        {
    //            id: "noticepush",
    //            title: "公告推送",
    //            url: "/renrengo/noticepush",
    //            icon: "fa fa-th-large",
    //            level: "nav-second-level"
    //        },
    //        {
    //            id: "adauthor",
    //            title: "广告授权",
    //            url: "/renrengo/adauthor",
    //            icon: "fa fa-th-large",
    //            level: "nav-second-level"
    //        },
    //        {
    //            id: "ordermanager",
    //            title: "订单管理",
    //            url: "/renrengo/ordermanager",
    //            icon: "fa fa-th-large",
    //            level: "nav-second-level"
    //        },
    //        {
    //            id: "newsmanager",
    //            title: "新闻管理",
    //            url: "/renrengo/newsmanager",
    //            icon: "fa fa-th-large",
    //            level: "nav-second-level"
    //        },
    //        {
    //            id: "membermanager",
    //            title: "会员管理",
    //            url: "/renrengo/membermanager",
    //            icon: "fa fa-users",
    //            level: "nav-second-level"
    //        }
    //    ]
    //},
    productmgr: {
        id: "productmgr",
        title: "产品管理",
        url: "/productmgr/list",
        level: "nav-first-level",
        icon: "fa fa-th-large",
        subs: [
            {
                id: "list",
                title: "产品列表",
                url: "/productmgr/list",
                level: "nav-second-level",
                icon: "fa fa-th-large"
            },
            {
                id: "specif",
                title: "产品规格",
                url: "/productmgr/specif",
                level: "nav-second-level",
                icon: "fa fa-th-large"
            },
            {
                id: "attr",
                title: "产品属性",
                url: "/productmgr/attr",
                level: "nav-second-level",
                icon: "fa fa-th-large"
            }
        ]
    },
    categorymgr: {
        id: "category",
        title: "分类管理",
        url: "/categorymgr/list",
        level: "nav-first-level",
        icon: "fa fa-sitemap",
        subs: [
            {
                id: "categorylist",
                title: "分类列表",
                url: "/categorymgr/list",
                level: "nav-second-level",
                icon: "fa fa-sitemap"
            }
        ]
    },
    stockmgr: {
        id: "stock",
        title: "仓库管理",
        url: "/stockmgr/list",
        level: "nav-first-level",
        icon: "fa fa-cubes",
        subs: [
            {
                id: "stocklist",
                title: "仓库列表",
                url: "/stockmgr/list",
                level: "nav-second-level",
                icon: "fa fa-cubes"
            }
        ]
    }

}

export default NavMap;