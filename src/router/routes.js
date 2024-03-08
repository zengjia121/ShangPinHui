//路由组件
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import myOrder from '@/views/Center/myOrder'
import groupOrder from '@/views/Center/groupOrder'
export default [
  {
    path: '/home',
    component: Home,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/center',
    component: Center,
    meta: {
      ShowFooter: true
    },
    children: [
      {
        path: '/center/myorder',
        component: myOrder,
        meta: {
          ShowFooter: true
        },
      }, {
        path: '/center/groupOrder',
        component: groupOrder,
        meta: {
          ShowFooter: true
        }
      },
      {
        path: "/center",
        redirect: '/center/myorder'
      }
    ]
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      ShowFooter: true
    },
    beforeEnter: (to, from, next) => {
      if (from.path === '/pay') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      ShowFooter: true
    },
    beforeEnter: (to, from, next) => {
      if (from.path === '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/trade',
    component: Trade,
    name: 'trade',
    meta: {
      ShowFooter: true
    },
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path === '/shopCart') {
        next()
      } else {
        next(false)

      }
    }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    name: 'search',
    meta: {
      ShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      ShowFooter: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      ShowFooter: false
    }
  },
  {
    path: '/Detail/:skuid',
    component: Detail,
    meta: {
      ShowFooter: false
    }
  },
  {
    path: '/AddCartSuccess',
    component: AddCartSuccess,
    name: 'addCartSuccess',
    meta: {
      ShowFooter: false
    }
  },
  {
    path: '/ShopCart',
    component: ShopCart,
    name: 'ShopCart',
    meta: {
      ShowFooter: false
    }
  },
  {
    path: '',
    component: Home,
    meta: {
      ShowFooter: true
    }
  }
]