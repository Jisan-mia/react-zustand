import { createStore } from "zustand/vanilla";

window.onload = () => {
  document.querySelector("#root").innerHTML += `<div id="counterContainer">
      <h1 id="counter"></h1>

      <button id="incrementBtn">increment</button>
      <button id="decrementBtn">decrement</button>
      <button id="resetBtn">reset</button>
    </div>`;
  // select elements
  const $counter = document.getElementById("counter");
  const $incrementBtn = document.getElementById("incrementBtn");
  const $decrementBtn = document.getElementById("decrementBtn");
  const $resetBtn = document.getElementById("resetBtn");

  const counterStore = createStore((set) => ({
    counter: 0,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
    reset: () => set({ counter: 0 }),
  }));

  function incrementCounter() {
    counterStore.getState().increment();
  }

  function decrementCounter() {
    counterStore.getState().decrement();
  }

  function resetCounter() {
    counterStore.getState().reset();
  }

  $incrementBtn.addEventListener("click", () => {
    incrementCounter();
  });

  $decrementBtn.addEventListener("click", () => {
    decrementCounter();
  });
  $resetBtn.addEventListener("click", () => {
    resetCounter();
  });

  const render = (state) => {
    console.log(state);
    $counter.innerHTML = state.counter;
  };

  render(counterStore.getInitialState(), counterStore.getInitialState());

  counterStore.subscribe(render);
};
