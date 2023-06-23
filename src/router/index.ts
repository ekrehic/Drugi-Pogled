import Vue from 'vue';
import VueRouter from 'vue-router'

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
            path: '/drugiPogled',
            name: 'About',
            component: LandingPage,
            meta: {element: '#about'}
        },
        {
            path: '/oMeni',
            name: 'AboutMe',
            component: LandingPage,
            meta: {element: '#aboutMe'}
        },
        {
            path: '/oGestaltTerapiji',
            name: 'AboutGestalt',
            component: LandingPage,
            meta: {element: '#aboutGestalt'}
        },
        {
            path: '/usluge',
            name: 'UslugeCjenik',
            component: LandingPage,
            meta: {element: '#services'}
        },
        {
            path: '/suradnja',
            name: 'Suradnja',
            component: LandingPage,
            meta: {element: '#collaboration'}
        },
        {
            path: '/kontakt',
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
