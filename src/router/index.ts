import Vue from 'vue';
import VueRouter from 'vue-router'

import ComingSoon from "@/components/ComingSoon.vue";
import LandingPage from "@/components/LandingPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // -->  history mode leverages the history.pushState API to achieve URL navigation without a page reload
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage,
        },
        {
            path: '*',
            redirect: () => {
                return '/'
            }
        },
        {
            path: '/coming-soon',
            name: 'ComingSoon',
            component: ComingSoon,
        },
        {
            path: '/about',
            name: 'About',
            component: LandingPage,
            meta: {element: '#about'}
        },
        {
            path: '/apartments',
            name: 'Apartments',
            component: LandingPage,
            meta: {element: '#apartments'}
        },
        {
            path: '/wellness',
            name: 'Wellness',
            component: LandingPage,
            meta: {element: '#wellness'}
        },
        {
            path: '/pool',
            name: 'Pool',
            component: LandingPage,
            meta: {element: '#pool'}
        },
        {
            path: '/location',
            name: 'Loaction',
            component: LandingPage,
            meta: {element: '#location'}
        },
        {
            path: '/contact',
            name: 'Contact',
            component: LandingPage,
            meta: {element: '#contact'}
        },
    ],
    scrollBehavior: function (to) {
        if (to.meta?.element) {
            return {
                selector: to.meta.element,
                behavior: 'smooth',
                offset: { x: 0, y: 80 },
            }
        }
        else {
            return {
                x: 0,
                y: 0,
            }
        }
    }
})
