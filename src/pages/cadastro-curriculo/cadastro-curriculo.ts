import { DialogoService } from './../../providers/dialogo.service';
import { CurriculoService } from './../../providers/curriculo.service';
import { ValidadorService } from './../../providers/validador.service';
import { Curriculo } from './../../negocio/models';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro-curriculo',
  templateUrl: 'cadastro-curriculo.html',
})
export class CadastroCurriculoPage {
  form: FormGroup;
  maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  curriculo: Curriculo = new Curriculo();
  private filePdf: File;

  formErrors = {
    'nome': '',
    'telefone': ''
  };

  validationMessages = {
    'nome': {
      'required': 'O nome é obrigatório.',
    },
    'telefone': {
      'required': 'O telefone é obrigatório.',
    }
  };


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private validador: ValidadorService,
    private curriculoService: CurriculoService,
    private events: Events,
    private dialogo: DialogoService) {

    this.form = this.fb.group({
      nome: [this.curriculo.Nome, Validators.required],
      dataNascimento: '',
      cpf: '',
      telefone: [this.curriculo.Telefone, Validators.required],
    });
  }

  telefoneMask(userInput) {
    let numbers = userInput.match(/\d/g);
    let numberLength = 0;
    if (numbers) {
      numberLength = numbers.join("").length;
    }

    if (numberLength > 10) {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else {
      return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
  }

  onPdf(event) {
    this.filePdf = event.target.files[0];
  }

  cadastrarCurriculo() {
    if (this.validador.temInconsistencia(this.form, this.formErrors, this.validationMessages)) {
      return false;
    }

    this.curriculoService.create(this.curriculo).then(curriculo => {
      this.carregueCurriculos();
      this.navCtrl.pop();
      this.dialogo.ExibaToast("Cadastro realizado com sucesso!")
    });

  }

  private carregueCurriculos(): void {
    this.curriculoService.findAll()
      .then((curriculos: Curriculo[]) => {
        this.events.publish('carregueCurriculos', curriculos);
      });
  }

}
