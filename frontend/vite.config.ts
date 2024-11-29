import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [svgr(), react()],
	server: {
		proxy: {
			'/api': 'http://localhost:3000',
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
			},
		},
	},
});
