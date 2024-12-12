import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '',
	build: {
		chunkSizeWarningLimit: 700,
		rollupOptions: {
			output: {
				sourcemap: false,
				manualChunks: {
					react: ['react'],
					three: ['three'],
					fiber: ['@react-three/fiber'],
					drei: ['@react-three/drei'],
				},
			},
		},    
	}
});
