import Home from '../pages/home';
import Carousel from "../pages/carousel";

export default [{
    component: Home,
    path: '/',
    children: [],
    title: '首页',
}, {
    title: "轮播图",
    path: '/carousel',
    component: Carousel
}]