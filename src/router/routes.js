//配置路由
export default [{
        path: '/home',
        //路由懒加载
        component: ()=>import('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword',
        component: ()=>import('@/pages/Search'),
        meta: {
            show: true
        },
        name: "search"
    },
    {
        path: '/login',
        component: ()=>import('@/pages/Login'),
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: ()=>import('@/pages/Register'),
        meta: {
            show: false
        }
    },
    {
        path: '/detail/:skuid',
        //skuid为商品的id，点击图片的时候要带个params参数过去，才可以显示对应的商品详情
        component: ()=>import('@/pages/Detail'),
        meta: {
            show: true
        }
    },
    //重定向，在项目跑起来的时候，访问/立马定向导首页
    {
        path: '*',
        redirect: "/home"
    }
]