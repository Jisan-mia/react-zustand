import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: (newBears) => set({bears: newBears})
}))

function BearCounter() {
  const bears = useStore((state) => state.bears);

  return (
    <h1>
      {bears} around here
    </h1>
  )
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
  <div>
    <button onClick={increasePopulation}>
      one up
    </button>
    <button onClick={removeAllBears}>
      clear all
    </button>
  </div>
  )
}

function BearComponent() {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  )
}

export default BearComponent;