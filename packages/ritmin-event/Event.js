export default class EventManager {
  mouse(callback) {
    document.addEventListener('mousemove', function (e) {
      callback(e.clientX, e.clientY);
    });
  }
  key(callback) {
    document.addEventListener('keydown', function (event) {
      callback(event);
    });
  }
}
//# sourceMappingURL=Event.js.map
