import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';



@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private auth: Auth){}

    async register({email, password}:any){
        try{
            const user = createUserWithEmailAndPassword(this.auth, email, password);
            return user;
        }catch(err){
            return null;
        }
    }

    async login({email, password}:any){
        try{
            const user = signInWithEmailAndPassword(this.auth, email, password);
            return user;
        }catch(err){
            return null;
        }
    }

    logout(){
        return signOut(this.auth);
    }
}