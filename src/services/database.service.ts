import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, query, equalTo, orderByChild } from '@angular/fire/database';


@Injectable({
    providedIn: 'root',
})

export class DatabaseService {
    public db = getDatabase();

    constructor() {}

    async getList(entity:any){
        const endpoint = ref(this.db, entity);
        return new Promise((resolve) =>{
            onValue(endpoint, (snapshot)=>{
                const data = snapshot.val();
                resolve(data);
            })
        })
    }
}