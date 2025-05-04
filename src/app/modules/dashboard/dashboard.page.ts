import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AddActionSheetComponent } from '../../components/add-action-sheet/add-action-sheet.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  pendingRequests: number = 3;
  dueServicing: number = 2;
  upcomingServicing: number = 5;
  amcExpiringSoon: number = 1;
  amcActive: number = 4;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController,private modalCtrl: ModalController,) {}

  ngOnInit() {
  }
  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          handler: () => {
            // Clear auth/session if needed
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
}

async openAddPane() {
  const modal = await this.modalCtrl.create({
    component: AddActionSheetComponent,
    breakpoints: [0, 0.3, 0.6],
    initialBreakpoint: 0.3,
    handle: true,
    cssClass: 'bottom-sheet',
  });

  modal.onDidDismiss().then(({ data }) => {
    if (data) {
      console.log('Selected action:', data);
      // Navigate or open corresponding page:
      switch (data) {
        case 'request':
          this.navCtrl.navigateForward('/add-request');
          break;
        case 'household':
          this.navCtrl.navigateForward('/add-household');
          break;
        case 'amc':
          this.navCtrl.navigateForward('/add-amc');
          break;
        case 'insurance':
          this.navCtrl.navigateForward('/add-insurance');
          break;
      }
    }
  });

  await modal.present();
}

}
