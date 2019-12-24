import Cookie from 'js-cookie'

export const routePath = {
    default: '/',
    home: '/home',
    login: '/login',
    superMan: '/superman'
}

export const domain = 'http://localhost:3000'

export const headers = {
    headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
        'Content-Type': 'application/json'
    }
}

export const apiURL = {
    login: domain + '/login',
    getProductCategory: domain + '/productscategory',
    getProducts: domain + '/products'
}

