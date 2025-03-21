import {create} from 'zustand'

const useCategory=create((set)=>({
    category:'',
    setCategory:(value)=>set({category:value})
}));
export default useCategory