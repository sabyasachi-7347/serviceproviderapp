import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
ngOnInit() {
  
}
  async login() {
    if (this.email && this.password) {
      // Add real login logic here
      const toast = await this.toastCtrl.create({
        message: 'Login Successful!',
        duration: 1500,
        color: 'success',
      });
      toast.present();
      this.navCtrl.navigateRoot('/dashboard');
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Please enter email and password.',
        duration: 1500,
        color: 'danger',
      });
      toast.present();
    }
  }

  forgotPassword() {
    // Navigate or show modal
    alert('Forgot Password tapped');
  }

  goToSignup() {
    this.navCtrl.navigateForward('/signup');
  }

}
