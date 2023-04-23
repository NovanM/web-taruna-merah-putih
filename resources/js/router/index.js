import {createRouter, createWebHistory } from "vue-router";
import Home from "../../components/home/Home.vue";
import About from "../../components/about/About.vue";
import News from "../../components/berita/News.vue";
import Merch from "../../components/merch/Merch.vue";
import Report from "../../components/aduan/Report.vue";
import Login from "../../components/auth/Login.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/tentang-kami",
        name: "about",
        component: About,
    },
    {
        path: "/berita",
        name: "news",
        component: News,
    },
    {
        path: "/merch-store",
        name: "merch",
        component: Merch,
    },
    {
        path: "/form-aduan",
        name: "report",
        component: Report,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;