import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-action-sheet',
  standalone:false,
  templateUrl: './add-action-sheet.component.html',
  styleUrls: ['./add-action-sheet.component.scss'],
})
export class AddActionSheetComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  select(action: string) {
    this.modalCtrl.dismiss(action);  // returns selected action to parent
  }
  ngOnInit() {}

}
