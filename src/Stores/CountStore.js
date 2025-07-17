import { create } from "zustand";

const counterStore = create((set)=>({
    count:10,
    increase:(value)=>set((state)=>({count:state.count + value}))
}))

export default counterStore 