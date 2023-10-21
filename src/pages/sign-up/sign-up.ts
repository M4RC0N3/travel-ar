import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html',
  styleUrls: ['sign-up.sass'],
})
export class SignUp implements OnInit {
  credentials!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  async signUp(){
    const loading = await this.loadingController.create();
    await loading.present();
    
    this.authService.register(this.credentials.value).then(()=>{
      loading.dismiss();
      this.router.navigateByUrl('/home', {replaceUrl: true});
    }).catch(()=>{
      loading.dismiss();
      this.showAlert('Registration failed', 'Please try again');
    });
  }
  async showAlert(header:any, message:any){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
