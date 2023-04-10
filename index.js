// // document.querySelector("button").addEventListener("click",clicked)

// // function clicked(){
// //    alert("button is pressed")
// // }
// // const buttons = document.querySelectorAll('button'); // select all buttons

// // buttons.forEach(button => {
// //   button.addEventListener('click', handleClick); // add 'click' event listener to each button
// // });

// // function handleClick() {
// //   alert('Button clicked!'); // display alert when button is clicked
// // }
// // const buttons = document.querySelectorAll('button'); // select all buttons

// // for (let i = 0; i < buttons.length; i++) {
// //   buttons[i].addEventListener('click', handleClick); // add 'click' event listener to each button
// // }

// // function handleClick() {
// //   alert('your Button clicked!'); // display alert when button is clicked
// // }
const buttons = document.querySelectorAll('button'); // select all buttons

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // add unique event listener to each button
    switch(i) {
      case 0:
        alert('Button W clicked!');
        break;
      case 1:
        alert('Button a clicked!');
        break;
      case 2:
        alert('Button s clicked!');
        break;
      case 3:
        alert('Button d clicked!');
        break;
      case 4:
        alert('Button j clicked!');
        break;
      case 5:
        alert('Button k clicked!');
        break;
      default:
        alert('Button l clicked!');
        break;
    }
  });
}
// document.querySelector(".drum").addEventListener("click",abc)
// function abc(){
//     alert("Button is pressed")
// }







// const buttons = document.querySelectorAll('button');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', handleClick); // add 'click' event listener to each button
// }

// function handleClick() {
//   alert('your Button clicked!'); // display alert when button is clicked
// }