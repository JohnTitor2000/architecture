import { registerApplication, start } from 'single-spa';

// Регистрация каждого микрофронтенда
registerApplication({
	name: '@your-org/auth-microfrontend',
	app: () => System.import('@your-org/auth-microfrontend'),
	activeWhen: ['/auth'], // Маршрут для активации
});

registerApplication({
	name: '@your-org/feed-microfrontend',
	app: () => System.import('@your-org/feed-microfrontend'),
	activeWhen: ['/feed'],
});

registerApplication({
	name: '@your-org/likes-microfrontend',
	app: () => System.import('@your-org/likes-microfrontend'),
	activeWhen: ['/likes'],
});

registerApplication({
	name: '@your-org/profile-microfrontend',
	app: () => System.import('@your-org/profile-microfrontend'),
	activeWhen: ['/profile'],
});

// Запуск Single SPA
start();