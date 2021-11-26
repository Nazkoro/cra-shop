import { makeAutoObservable } from "mobx"
import { toJS } from 'mobx';

class StoreCounter {

    count = 0
    counts = [{id:1, count:1},{id:5, count:5}]
    constructor() {
        makeAutoObservable(this)
        console.log(toJS(this.counts));

    }
// counts {
//     id: 12312,
//     count: 1
// }

    create(item){
        this.counts.push(item)
    }
    removeItem(id){
       this.counts = this.counts.filter(item => item.id !== id)
    }


    inc(id, count) {
        this.counts = this.counts.map(item => item.id === id ?{...item, count: count +1}: item )
        // this.count = this.count + 1
        // console.log(this.count);
        
        console.log(id,count);
	}

	dec(id,count) {
        this.counts = this.counts.map(item => item.id === id ?{...item, count: count -1}: item )
		// this.count === 0? this.count = 0 : this.count -= 1
        console.log(this.counts);
	}
	reset() {
        this.counts = []
		
	}


    
}

export default new StoreCounter()