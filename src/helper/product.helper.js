import { store } from "../app/store";
import { setProductList, setSortedList } from "../features/product/product.slice";


export function listProducts(data){
   store.dispatch(setProductList(data));
}

export  function sortedProducts(data, type) {
   let list;
    if(type === 'high-rating'){
        list = [...data].sort((a,b)=> a.ratings > b.ratings ? -1 : 1)
        store.dispatch(setSortedList(list));
    }
    else if (type === 'low-price') {
        list = [...data].sort((a,b)=> a.price < b.price ? -1 : 1)
        store.dispatch(setSortedList(list));
    }
    else if (type === 'high-price') {
        list = [...data].sort((a,b)=> a.price > b.price ? -1 : 1)
        store.dispatch(setSortedList(list));
    }
    else if (type === 'under-2k') {
        list = [...data].filter((a)=> 2000 >= a.price)
        store.dispatch(setSortedList(list));
    }
    else if (type === 'btwn-2000-3500') {
        list = [...data].filter((a)=> 2000 <= a.price && a.price <= 3500)
        store.dispatch(setSortedList(list));
    }
    else if (type === 'above-3500') {
        list = [...data].filter((a)=> 3500 <= a.price)
        store.dispatch(setSortedList(list));
    }
    else {
        store.dispatch(setSortedList(data))
    }
}