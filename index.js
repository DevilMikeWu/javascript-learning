function t() {
  console.log('元素上面绑定 dom 绑定');
}

// document.getElementById('1').onclick = () => {
//   console.log('元素上面绑定 with onclick');
// };

document.getElementById('1').addEventListener('click',()=>{
  console.log('元素上面绑定 with standard model');
},false);


document.getElementById('1').addEventListener('customizedEvent',()=>{
  console.log('元素上面绑定 with Customized Event');
},false);