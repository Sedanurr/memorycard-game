import { createWebHistory, createRouter } from 'vue-router';
import GameInfo from '@/components/GameInfo.vue';
import HomePage from '@/components/HomePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/game-info', name: 'game-info', component: GameInfo },
];

const router = createRouter({
    history: createWebHistory(), // Use WebHistory for browser apps
    routes,
});

export default router;