console.log("hello");

Vue.component ('todo-item', {
  template:'<p>This is a child component</p>'
});


Vue.component ('todo-footer', {
  template:'<p>This is another child global component</p>'
});


var app = new Vue({
  el:'#app',
  data:{
    message:'This is a parent component'
  }
})
