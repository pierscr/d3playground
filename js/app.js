console.log("appfile");
define(function(){
  console.log("require app");
  function app(){
    console.log("dentro la funzione app");
  }
  return {
    app:app
  }
});
