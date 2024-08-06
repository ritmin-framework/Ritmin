import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './dist/index.js', // تأكد من أن هذا هو الملف الذي يحتوي على الكود الذي تريد تجميعه
  output: {
    dir: './path', // إخراج الملفات إلى مجلد `dist`
    format: 'esm', // تنسيق الملف المجمع
    entryFileNames: '[name].js', // اسم ملف الإخراج
    sourcemap: true, // لتضمين خرائط المصدر
  },
  plugins: [
    resolve(), // لحل الوحدات من `node_modules`
    commonjs(), // لتحويل الوحدات CommonJS إلى ESM
    json() // لتحميل ملفات JSON
  ],
  external: ['fs', 'path'] // استبعاد الوحدات غير المدعومة مثل `fs` و `path`
};
