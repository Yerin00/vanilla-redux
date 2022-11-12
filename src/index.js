import { createStore } from 'redux';
// ------------- vanilla JS_Counter -------------
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// ------------- Pure Redux_Counter -------------


// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// countStore.subscribe(onChange); // store 변화 감지


// //  버튼을 클릭하면 익명함수로 액션 전달
// add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// ------------- Vanilla JS_ToDoList -------------


// ------------- Pure Redux_ToDoList -------------


// ------------- React Redux -------------


// ------------- Redux Toolkit(RTK) -------------