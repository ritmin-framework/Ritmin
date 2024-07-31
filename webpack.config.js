const path = require('path');

module.exports = {
  entry: './*.ts', // ملف الدخول الرئيسي
  output: {
    filename: './*.js', // اسم ملف الخروج
    path: path.resolve(__dirname, 'dist'), // المسار إلى مجلد الخروج
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // نوع الملفات (TypeScript هنا)
        use: 'ts-loader', // اللودر المستخدم لتحميل TypeScript
        exclude: /node_modules/, // استثناء مجلد node_modules
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // أنواع الامتدادات التي سيبحث عنها Webpack
  },
  mode: 'development', // وضع التطوير (يمكنك تغييره إلى 'production' للتصغير والتحسين)
};
