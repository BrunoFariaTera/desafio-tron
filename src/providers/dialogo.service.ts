import { Injectable } from '@angular/core';
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class DialogoService {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  ExibaToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }

  ExibaAlertaDeInconsistencia(mensagem: string) {
    this.ExibaAlerta(mensagem, "Atenção!");
  }

  ExibaAlerta(mensagem: string, titulo: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem || '',
      buttons: ['Ok'],
      cssClass: 'alerta'
    });

    alert.present();
  }

}
