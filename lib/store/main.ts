import store from './api';

const api = store();
console.log('Current Count:', api.get()); // قراءة القيمة الحالية

api.add(); // زيادة القيمة
console.log('After Increment:', api.get());

api.decrease(); // تقليل القيمة
console.log('After Decrement:', api.get());

api.set(10); // تعيين قيمة جديدة
console.log('After Setting Value:', api.get());

api.reset(); // إعادة تعيين القيمة
console.log('After Reset:', api.get());

// اشتراك في التحديثات
const unsubscribe = api.updates((state) => {
  console.log('State Updated:', state);
});

// يمكنك إلغاء الاشتراك لاحقاً
unsubscribe();
