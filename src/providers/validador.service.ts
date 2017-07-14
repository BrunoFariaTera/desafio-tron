import { DialogoService } from './dialogo.service';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidadorService {
  constructor(private dialogo: DialogoService) { }

  valideIgualdadeDeSenha(propridadeSenha: string) {
    return (controleCorrente: FormGroup): { [key: string]: any } => {
      if (!controleCorrente.parent) return;
      var controle = controleCorrente.parent.controls[propridadeSenha];
      if (controle.value !== controleCorrente.value) {
        return {
          senhaNaoEhIgual: true
        };
      } else {
        return null;
      }
    }
  }

  temInconsistencia(form: FormGroup, formErrors: any, validationMessages: any): boolean {
    var mensagem = "";
    for (var erro in formErrors) {
      formErrors[erro] = '';
      var controle = form.get(erro);

      if (controle && !controle.valid) {
        var mensagens = validationMessages[erro];
        for (var chave in controle.errors) {
          formErrors[erro] += mensagens[chave] + ' ';
          mensagem += '<p>' + formErrors[erro] + ' </p> ';
        }
      }
    }

    if (mensagem) {
      this.dialogo.ExibaAlertaDeInconsistencia(mensagem);
    }

    return mensagem.length > 0;
  }
}
