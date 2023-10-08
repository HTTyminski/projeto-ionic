import { Component, OnInit } from '@angular/core';
import {Atendimento, Atuacao, Propriedade } from './todo';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public atendimento: Atendimento;
  public registrationForm: FormGroup;
  public formAtuacao: FormGroup;
  isSubmitted = false;
  submitError = '';
  tab:string;

  nomeProdutor: string = 'Henrique Tiago Tyminski';
  cpfCnpjAtendimento: string = '12345678910';
  rg: string = '1234567-8';
  inscricaoEstadual: string = '123456789';
  numeroIncra: string =  '12345678912345678912';
  tipoLogradouro: string = 'Avenida';
  propriedadeRural: string = 'Fazenda';
  logradouro: string = 'Avenida Getúlio Vargas';
  numero: string = '123';
  bairro: string = 'Centro';
  localidade: string = 'Irati';
  distrito: string = 'Distritos de Irati';
  municipio: string = 'Irati';
  cep: string = '84500-000';
  uf: string = 'PR';
  pessoa: string = 'fisica';

  municipioCorrespondencia: string = 'Irati';
  numeroCorrespondencia:string = '123';
  bairroCorrespondencia: string = 'Centro';
  localidadeCorrespondecia: string = 'Irati';
  distritoCorrespondencia: string = 'Distritos de Irati';
  logradouroCorrespondencia: string = 'Avenida Getúlio Vargas';
  cepCorrespondencia: string = '84500-000';
  ufCorrespondencia: string = 'PR';
  telefoneCorrespondencia: string = '123456789';
  caixaPostalCorrespondencia: string = '123';
  emailCorrespondencia: string = 'email@email.com';

  atuacoes: Atuacao[] = [];
  areaAtuacao: string;
  especieAtuacao: string;
  totalAtuacao: string;
  exploracaoAtuacao: string;

   propriedades: Propriedade[] = [];
   proprietario: string;
   endereco: string;
   cpfCnpj: string;
   codigo: string;
   contrato: string;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.tab = "default";
  }

  isChange(event:any){
    this.pessoa = event.detail.value;
  }

  savePropriedade() {
    let propriedade = new Propriedade();
    propriedade.proprietario = this.proprietario;
    propriedade.endereco = this.endereco;
    propriedade.cpfCnpj = this.cpfCnpj;
    propriedade.codigo = this.codigo;
    propriedade.contrato = this.contrato;
    this.propriedades.push(propriedade);
    this.proprietario = '';
    this.endereco = '';
    this.cpfCnpj = '';
    this.codigo = '';
    this.contrato = '';
  }

  saveAtuacao() {
    let item = new Atuacao();
    item.areaAtuacao = this.areaAtuacao;
    item.especieAtuacao = this.especieAtuacao;
    item.totalAtuacao = this.totalAtuacao;
    item.exploracaoAtuacao = this.exploracaoAtuacao;
    this.atuacoes.push(item);
    console.log(this.atuacoes);

  }

  removeAtuacao(id: number) {
    this.atuacoes = this.atuacoes.filter((v, i) => i != id);
  }
  removePropriedade(id: number) {
    this.propriedades = this.propriedades.filter((v, i) => i != id);
  }

  createAtucao(){
    this.formAtuacao = this.formBuilder.group({
      areaAtuacao: new FormControl(),
      especieAtuacao: new FormControl(),
      exploracaoAtuacao: new FormControl(),
      totalAtuacao: new FormControl(),
    });
  }
  
  createForm() {
    this.registrationForm = this.formBuilder.group({
      pessoa: new FormControl(),
      cpfCnpjAtendimento: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ])
      ),
      rg: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
        ])
      ),
      inscricaoEstadual: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
        ])
      ),
      numeroIncra: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(20),
        ])
      ),
      nomeProdutor: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      tipoLogradouro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      propriedadeRural: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      logradouro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      numero: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
        ])
      ),
      bairro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      localidade: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      distrito: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      municipio: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      cep: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ])
      ),
      uf: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ])
      ),
      municipioCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      numeroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
        ])
      ),
      bairroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      localidadeCorrespondecia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      distritoCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      logradouroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      cepCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
        ])
      ),
      ufCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
        ])
      ),
      telefoneCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ])
      ),
      caixaPostalCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
        ])
      ),
      emailCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
    });
  }
  async submitAtuacao() {
    console.log(this.formAtuacao.value);
  }

  async onSubmit() {
    console.log(this.registrationForm.value);
  }
}
