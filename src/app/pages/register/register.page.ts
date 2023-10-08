import { Component, OnInit } from '@angular/core';
import { Atuacao, Propriedade, Atendimento } from './todo';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  public registrationForm: FormGroup;
  isSubmitted = false;
  submitError = '';

  createForm() {
    this.registrationForm = this.formBuilder.group({
      fisica: new FormControl(false),
      juridica: new FormControl(false),
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
          Validators.maxLength(100),
        ])
      ),
      telefone: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      enderecoAtendimento: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      propriedadeRuralAtendimento: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      tipoLogradouro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      logradouro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      enderecoNumero: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      bairro: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      localidade: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      distrito: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      municipio: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      estado: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      cep: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      logradouroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      numeroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      bairroCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      localidadeCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      distritoCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      municipioCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      estadoCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      cepCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      telefoneCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      emailCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
      caixaPostalCorrespondencia: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ])
      ),
    });
  }

  atuacoes: Atuacao[] = [];
  area: string;
  especie: string;
  saldoTotal: string;
  exploracao: string;

  propriedades: Propriedade[] = [];
  proprietario: string;
  endereco: string;
  cpfCnpj: string;
  codigo: string;
  contrato: string;
  fisica: boolean;
  juridica: boolean;
  cpfCnpjAtendimento: string;
  rg: string;
  inscricaoEstadual: string;
  numeroIncra: string;
  nomeProdutor: string;
  propriedadeRuralAtendimento: string;
  tipoLogradouro: string;
  logradouro: string;
  enderecoNumero: string;
  bairro: string;
  localidade: string;
  distrito: string;
  municipio: string;
  estado: string;
  cep: string;
  numeroCorrespondencia: string;
  municipioCorrespondencia: string;

  ngOnInit() {}

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
    let todo = new Atuacao();
    todo.area = this.area;
    todo.especie = this.especie;
    todo.saldoTotal = this.saldoTotal;
    todo.exploracao = this.exploracao;
    this.atuacoes.push(todo);
    this.area = '';
    this.especie = '';
    this.saldoTotal = '';
    this.exploracao = '';
  }

  removeAtuacao(id: number) {
    this.atuacoes = this.atuacoes.filter((v, i) => i != id);
  }
  removePropriedade(id: number) {
    this.propriedades = this.propriedades.filter((v, i) => i != id);
  }

  async onSubmit() {
    console.log(this.registrationForm.value);
  }
}
