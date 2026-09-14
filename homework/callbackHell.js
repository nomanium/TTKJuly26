    console.log("Starting callback hell example...");
function callbackHell(component, callback) {
   setTimeout(() => {
      console.log("component: " + component);
      callback();
   }, 1000);
}
callbackHell("user", () => {
   callbackHell("profile", () => {
      callbackHell("Orders", () => {
         console.log("All components processed.");
      });
   });
});