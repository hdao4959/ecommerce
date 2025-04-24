import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


// export default {
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         client: '/hahaha.html',
//         // admin: './public/admin.html'
//       }
//     }
//   }
// }


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         client: path.resolve(__dirname, 'public/index.html'),
//         admin: path.resolve(__dirname, 'public/admin.html')
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   }
// })
