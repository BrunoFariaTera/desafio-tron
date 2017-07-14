webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurriculoService = (function () {
    function CurriculoService(http) {
        this.http = http;
        this.curriculosUrl = 'app/curriculos';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CurriculoService.prototype.findAll = function () {
        return this.http.get(this.curriculosUrl)
            .toPromise()
            .then(function (resposta) { return resposta.json().data; })
            .catch(this.handleError);
    };
    CurriculoService.prototype.create = function (contato) {
        return this.http
            .post(this.curriculosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(function (resposta) { return resposta.json().data; })
            .catch(this.handleError);
    };
    CurriculoService.prototype.handleError = function (err) {
        console.log("Error:", err);
        return Promise.reject(err.message || err);
    };
    return CurriculoService;
}());
CurriculoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], CurriculoService);

//# sourceMappingURL=curriculo.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogoService = (function () {
    function DialogoService(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    DialogoService.prototype.ExibaToast = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000
        });
        toast.present();
    };
    DialogoService.prototype.ExibaAlertaDeInconsistencia = function (mensagem) {
        this.ExibaAlerta(mensagem, "Atenção!");
    };
    DialogoService.prototype.ExibaAlerta = function (mensagem, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensagem || '',
            buttons: ['Ok'],
            cssClass: 'alerta'
        });
        alert.present();
    };
    return DialogoService;
}());
DialogoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], DialogoService);

//# sourceMappingURL=dialogo.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilitarioService = (function () {
    function UtilitarioService(http) {
        this.http = http;
    }
    UtilitarioService.prototype.PesquisaPartes = function (textoPesquisado, textoDaPesquisa) {
        var _this = this;
        textoPesquisado = this.GetStringNoAccents(textoPesquisado).toLowerCase();
        textoDaPesquisa = this.GetStringNoAccents(textoDaPesquisa).toLowerCase();
        var partes = textoDaPesquisa.split(' ');
        return partes.every(function (parte) { return _this.GetStringNoAccents(textoPesquisado).includes(parte.trim()); });
    };
    UtilitarioService.prototype.GetStringNoAccents = function (str) {
        if (!str)
            return '';
        var acentos = "çÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛºª°ø§";
        var semAcento = "cCaeiouyAEIOUYaeiouAEIOUaonaeiouyAEIOUAONaeiouAEIOU     ";
        for (var i = 0; i < acentos.length; i++) {
            str = str.replace(acentos[i], semAcento[i]);
        }
        return str;
    };
    return UtilitarioService;
}());
UtilitarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]])
], UtilitarioService);

//# sourceMappingURL=utilitario.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidadorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogo_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidadorService = (function () {
    function ValidadorService(dialogo) {
        this.dialogo = dialogo;
    }
    ValidadorService.prototype.valideIgualdadeDeSenha = function (propridadeSenha) {
        return function (controleCorrente) {
            if (!controleCorrente.parent)
                return;
            var controle = controleCorrente.parent.controls[propridadeSenha];
            if (controle.value !== controleCorrente.value) {
                return {
                    senhaNaoEhIgual: true
                };
            }
            else {
                return null;
            }
        };
    };
    ValidadorService.prototype.temInconsistencia = function (form, formErrors, validationMessages) {
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
    };
    return ValidadorService;
}());
ValidadorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__dialogo_service__["a" /* DialogoService */]])
], ValidadorService);

//# sourceMappingURL=validador.service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroCurriculoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dialogo_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_curriculo_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_validador_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__negocio_models__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CadastroCurriculoPage = (function () {
    function CadastroCurriculoPage(navCtrl, navParams, fb, validador, curriculoService, events, dialogo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.validador = validador;
        this.curriculoService = curriculoService;
        this.events = events;
        this.dialogo = dialogo;
        this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.curriculo = new __WEBPACK_IMPORTED_MODULE_3__negocio_models__["a" /* Curriculo */]();
        this.formErrors = {
            'nome': '',
            'telefone': ''
        };
        this.validationMessages = {
            'nome': {
                'required': 'O nome é obrigatório.',
            },
            'telefone': {
                'required': 'O telefone é obrigatório.',
            }
        };
        this.form = this.fb.group({
            nome: [this.curriculo.Nome, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            dataNascimento: '',
            cpf: '',
            telefone: [this.curriculo.Telefone, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
        });
    }
    CadastroCurriculoPage.prototype.telefoneMask = function (userInput) {
        var numbers = userInput.match(/\d/g);
        var numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }
        if (numberLength > 10) {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
        else {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
    };
    CadastroCurriculoPage.prototype.onPdf = function (event) {
        this.filePdf = event.target.files[0];
    };
    CadastroCurriculoPage.prototype.cadastrarCurriculo = function () {
        var _this = this;
        if (this.validador.temInconsistencia(this.form, this.formErrors, this.validationMessages)) {
            return false;
        }
        this.curriculoService.create(this.curriculo).then(function (curriculo) {
            _this.carregueCurriculos();
            _this.navCtrl.pop();
            _this.dialogo.ExibaToast("Cadastro realizado com sucesso!");
        });
    };
    CadastroCurriculoPage.prototype.carregueCurriculos = function () {
        var _this = this;
        this.curriculoService.findAll()
            .then(function (curriculos) {
            _this.events.publish('carregueCurriculos', curriculos);
        });
    };
    return CadastroCurriculoPage;
}());
CadastroCurriculoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'cadastro-curriculo',template:/*ion-inline-start:"C:\work_bruno\desafio_tron\src\pages\cadastro-curriculo\cadastro-curriculo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro de Currículo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (ngSubmit)="cadastrarCurriculo()" [formGroup]="form" class="cadastro-form">\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="curriculo.Nome" formControlName="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Data de nascimento</ion-label>\n      <ion-input type="text" [(ngModel)]="curriculo.DataNascimento" formControlName="dataNascimento"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>CPF</ion-label>\n      <ion-input type="tel" [(ngModel)]="curriculo.CPF" placeholder="000.000.000-00" [textMask]="{mask: maskCpf, guide: false}"\n        name="cpf" formControlName="cpf"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Telefone</ion-label>\n      <ion-input type="tel" [(ngModel)]="curriculo.Telefone" placeholder="(00) 00000-0000" [textMask]="{mask: telefoneMask, guide: false}"\n        formControlName="telefone"></ion-input>\n    </ion-item>\n    \n    <p>Currículo (pdf)</p>\n    <ion-item>\n      <!--<ion-label stacked item-end>Arquivo</ion-label>-->\n      <input type="file" accept="application/pdf" (change)="onPdf($event)"> \n    </ion-item>\n\n    <button ion-button full class="button-cadastro" type="submit">Cadastrar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\work_bruno\desafio_tron\src\pages\cadastro-curriculo\cadastro-curriculo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
        __WEBPACK_IMPORTED_MODULE_2__providers_validador_service__["a" /* ValidadorService */],
        __WEBPACK_IMPORTED_MODULE_1__providers_curriculo_service__["a" /* CurriculoService */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__providers_dialogo_service__["a" /* DialogoService */]])
], CadastroCurriculoPage);

//# sourceMappingURL=cadastro-curriculo.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utilitario_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_curriculo_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_curriculo_cadastro_curriculo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, curriculoService, events, utilitario, keyboard) {
        this.navCtrl = navCtrl;
        this.curriculoService = curriculoService;
        this.events = events;
        this.utilitario = utilitario;
        this.keyboard = keyboard;
        this.curriculos = [];
        this.curriculosBuscados = [];
        this.pesquisaVisivel = false;
        this.iconeBuscaVisivel = true;
        this.segSelecionado = "0";
        this.AjustaDescricaoDaPagina();
    }
    HomePage.prototype.ngOnInit = function () {
        this.carregueCurriculos();
    };
    HomePage.prototype.carregueCurriculos = function () {
        var _this = this;
        this.curriculoService.findAll()
            .then(function (curriculos) {
            _this.curriculos = curriculos;
            _this.events.publish('carregueCurriculos', curriculos);
        });
    };
    HomePage.prototype.segmentChanged = function () {
        this.AjustaDescricaoDaPagina();
        this.slides.slideTo(parseInt(this.segSelecionado), 500);
        this.limpePesquisa();
    };
    HomePage.prototype.AjustaDescricaoDaPagina = function () {
        if (this.segSelecionado == "0") {
            this.iconeBuscaVisivel = true;
            this.descricaoDaPagina = "Currículos";
        }
        else if (this.segSelecionado == "1") {
            this.iconeBuscaVisivel = false;
            this.descricaoDaPagina = "Dashboard";
        }
    };
    HomePage.prototype.vaParaPaginaCadastroDeCurriculo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_curriculo_cadastro_curriculo__["a" /* CadastroCurriculoPage */]);
    };
    HomePage.prototype.slideChanged = function () {
        this.segSelecionado = this.slides.getActiveIndex().toString();
    };
    HomePage.prototype.changeInput = function () {
        var _this = this;
        this.curriculosBuscados = this.curriculos.filter(function (curriculo) { return _this.utilitario.PesquisaPartes(curriculo.Nome, _this.inputPesquisa); });
        this.events.publish('carregueCurriculos', this.curriculosBuscados);
    };
    HomePage.prototype.searchCurriculos = function () {
        var _this = this;
        this.pesquisaVisivel = !this.pesquisaVisivel;
        setTimeout(function () {
            _this.keyboard.show();
            _this.myInput.setFocus();
        }, 150);
    };
    HomePage.prototype.limpePesquisa = function () {
        this.pesquisaVisivel = false;
        this.inputPesquisa = "";
        this.curriculosBuscados = this.curriculos;
        this.carregueCurriculos();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Slides */])
], HomePage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('inputSearch'),
    __metadata("design:type", Object)
], HomePage.prototype, "myInput", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\work_bruno\desafio_tron\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-row *ngIf="!pesquisaVisivel">\n      <ion-title>\n        {{descricaoDaPagina}}\n      </ion-title>\n      <ion-buttons end>\n        <button *ngIf="iconeBuscaVisivel" ion-button icon-only (click)="searchCurriculos()">\n        <ion-icon class="icons" name="search"></ion-icon>\n      </button>\n        <button ion-button icon-only (click)="vaParaPaginaCadastroDeCurriculo()">\n        <ion-icon class="icons" name="person-add"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-row>\n\n    <ion-searchbar #inputSearch class="pesquisa" (ionInput)="changeInput()" (ionCancel)="pesquisaVisivel = !pesquisaVisivel;limpePesquisa()"\n      (ionClear)="limpePesquisa()" *ngIf="pesquisaVisivel" showCancelButton="true" cancelButtonText="Cancelar" [(ngModel)]="inputPesquisa"\n      full debounce="500" animated="true" placeholder="Pesquisa">\n    </ion-searchbar>\n  </ion-toolbar>\n\n  <ion-segment color="secondary" [(ngModel)]="segSelecionado" (ionChange)="segmentChanged()">\n    <ion-segment-button value="0">\n      <ion-icon class="icon-segment" name="list"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="1">\n      <ion-icon class="icon-segment" name="clipboard"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <ion-slides (ionSlideDrag)="slideChanged()" (ionSlideNextStart)="slideChanged()" initialSlide="{{segSelecionado}}" (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n      <curriculos-lista></curriculos-lista>\n    </ion-slide>\n    <ion-slide>\n      <dash-board></dash-board>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\work_bruno\desafio_tron\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_curriculo_service__["a" /* CurriculoService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_0__providers_utilitario_service__["a" /* UtilitarioService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_utilitario_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dash_board_dash_board__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_curriculos_lista_curriculos_lista__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_curriculo_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_in_memory_data_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dialogo_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validador_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_curriculo_cadastro_curriculo__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_in_memory_web_api__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__util_rxjs_extensions__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_curriculo_cadastro_curriculo__["a" /* CadastroCurriculoPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_curriculos_lista_curriculos_lista__["a" /* CurriculosListaPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_dash_board_dash_board__["a" /* DashBoardPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_18_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__providers_in_memory_data_service__["a" /* InMemoryDataService */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_curriculo_cadastro_curriculo__["a" /* CadastroCurriculoPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_curriculos_lista_curriculos_lista__["a" /* CurriculosListaPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_dash_board_dash_board__["a" /* DashBoardPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__providers_validador_service__["a" /* ValidadorService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dialogo_service__["a" /* DialogoService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_curriculo_service__["a" /* CurriculoService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_utilitario_service__["a" /* UtilitarioService */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashBoardPage = (function () {
    function DashBoardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashBoardPage.prototype.ionViewDidLoad = function () {
    };
    return DashBoardPage;
}());
DashBoardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dash-board',template:/*ion-inline-start:"C:\work_bruno\desafio_tron\src\pages\dash-board\dash-board.html"*/'<ion-content padding>\n    <p class="não-consegui">\n        Não consegui terminar :(\n    </p>\n\n</ion-content>'/*ion-inline-end:"C:\work_bruno\desafio_tron\src\pages\dash-board\dash-board.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DashBoardPage);

//# sourceMappingURL=dash-board.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculosListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurriculosListaPage = (function () {
    function CurriculosListaPage(navCtrl, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.curriculos = [];
        events.subscribe('carregueCurriculos', function (curriculos) {
            _this.curriculos = curriculos;
        });
    }
    return CurriculosListaPage;
}());
CurriculosListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'curriculos-lista',template:/*ion-inline-start:"C:\work_bruno\desafio_tron\src\pages\curriculos-lista\curriculos-lista.html"*/'<ion-content>\n  <!--<p class="sem-curriculo" *ngIf="curriculos.length == 0">\n    Não existe currículo cadastrado!\n  </p>-->\n\n  <ion-card *ngFor="let curriculo of curriculos">\n    <ion-card-content class="card-style">\n      <ion-card-title>\n        {{curriculo.Nome}}\n      </ion-card-title>\n      <p>\n        {{curriculo.DataNascimento}} | {{curriculo.CPF}}\n      </p>\n      <p>\n        {{curriculo.Telefone}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\work_bruno\desafio_tron\src\pages\curriculos-lista\curriculos-lista.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], CurriculosListaPage);

//# sourceMappingURL=curriculos-lista.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var curriculos = [];
        return { 'curriculos': curriculos };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Curriculo; });
var Curriculo = (function () {
    function Curriculo() {
    }
    return Curriculo;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\work_bruno\desafio_tron\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\work_bruno\desafio_tron\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
// Observable class extensions


// Observable operators







//# sourceMappingURL=rxjs-extensions.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map