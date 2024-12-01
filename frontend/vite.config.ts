import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [svgr(), react()],
	server: {
		proxy: {
			'/api': 'http://localhost:3005',
		},
	},
	resolve: {
		alias: {
			app: '/src/app',
			entities: '/src/entities',
			features: '/src/features',
			pages: '/src/pages',
			shared: '/src/shared',
			widgets: '/src/widgets',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `@use "/src/shared/assets/styles/_colors.scss"  as *; 
				@use "/src/shared/assets/styles/_functions.scss"  as *; 
				@use "/src/shared/assets/styles/_variables.scss"  as *; 
				@use "/src/shared/assets/styles/_mixins.scss"  as *; 
				`, //Автоматически импорт переменных в каждый SCSS файл
			},
		},
	},
});
