import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { Atuacao, Propriedade, Atendimento } from './model';


@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.page.html',
  styleUrls: ['./fomulario.page.scss'],
})
export class FomularioPage {
  
  constructor() { }

  public tempStudentFormData: Atendimento[] = [];

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'confirmar',
      role: 'confirm',
      handler: () => {
        this.getFormData();
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  public producerForm: FormGroup = new FormGroup({
    propertyList: new FormArray([this.getPropertyFields()]),
  });

  getPropertyFields(): FormGroup {
    return new FormGroup({
      pessoa: new FormControl('fisica'),
      nomeProdutor: new FormControl('Henrique Tiago Tyminski'),
      cpfCnpjProdutor: new FormControl('04712345677'),
      rgProdutor: new FormControl('90369857'),
      numeroIncra: new FormControl('1325362521145'),
      InscricaoEstadualProdutor: new FormControl('1234567891236'),
      tipoLogradouro: new FormControl('Avenida'),
      numeroEndProdutor: new FormControl('390'),
      bairroProdutor: new FormControl('Fósforo'),
      localidadeProdutor: new FormControl('Sudeste PR'),
      distritoProdutor: new FormControl('Distrito de Irati'),
      cepProdutor: new FormControl('84500-000'),
      municipioProdutor: new FormControl('Irati'),
      propriedadeRural: new FormControl('42 hectares'),
      logradouroCorrespondencia: new FormControl('Avenída Getúlio Vargas'),
      numeroCorrespondencia: new FormControl('390'),
      bairroCorrespondencia: new FormControl('Fósforo'),
      localidadeCorrespondecia: new FormControl('Sudeste PR'),
      distritoCorrespondencia: new FormControl('Distrito de Irati'),
      municipioCorrespondencia: new FormControl('Irati'),
      cepCorrespondencia: new FormControl('84500-000'),
      ufCorrespondencia: new FormControl('Paraná'),
      telefoneCorrespondencia: new FormControl('(41) 98472-7090'),
      caixaPostalCorrespondencia: new FormControl('84500-000'),
      emailCorrespondencia: new FormControl('tyminski2011@gmail.com'),
      nomeResponsavel: new FormControl('Henrique Tiago Tyminski'),
      cpfResponsavel: new FormControl('04758956844'),
      rgResponsavel: new FormControl('90369857'),
      atuacoesSubjects: new FormGroup({
        atuacoesSubjectArray: new FormArray([this.newAtuacao()]),
      }),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }

  newAtuacao() {
    return new FormGroup({
      area: new FormControl('20 hectares'),
      especie: new FormControl('Soja'),
      saldoTotal: new FormControl('1200'),
      exploracaoComercial: new FormControl('sim'),
    });
  }

  putNewSubject() {
    return new FormGroup({
      terreno: new FormControl('propria'),
      proprietario: new FormControl('Henrique Tiago Tyminski'),
      cpfCnpj: new FormControl('04758956844'),
      endereco: new FormControl('Ligação / Prudentópolis'),
      contrato: new FormControl('1234'),
      codigo: new FormControl('123456'),
    });
  }

  addStudent() {
    this.propertyListArray().push(this.getPropertyFields());
  }
  //atuacao
  atuacoesListArray() {
    return this.producerForm.get('propertyList') as FormArray;
  }
  atuacoesFormGroup(t: number) {
    return this.propertyListArray().at(t).get('atuacoesSubjects') as FormGroup;
  }
  atuacaoArray(t: number) {
    return this.atuacoesFormGroup(t).get('atuacoesSubjectArray') as FormArray;
  }
  addNewAtuacao(t: number) {
    this.atuacaoArray(t).push(this.putNewSubject());
  }
  removeNewAtuacao(t: number, g: number) {
    this.atuacaoArray(t).removeAt(g);
  }
  // removeAtuacao(t:number) {
  //   this.atuacoesListArray().removeAt(t);
  // }

  //propriedade
  propertyListArray() {
    return this.producerForm.get('propertyList') as FormArray;
  }
  subjectsFormGroup(i: number) {
    return this.propertyListArray().at(i).get('studentSubjects') as FormGroup;
  }
  subjectsArray(i: number) {
    return this.subjectsFormGroup(i).get('studentSubjectArray') as FormArray;
  }
  addNewSubject(i: number) {
    this.subjectsArray(i).push(this.putNewSubject());
  }
  removeNewSubject(i: number, j: number) {
    this.subjectsArray(i).removeAt(j);
  }

  removeProperty(i: number) {
    this.propertyListArray().removeAt(i);
  }

  getFormData() {
    this.propertyListArray().push(this.getPropertyFields());
    this.tempStudentFormData = this.producerForm.value.propertyList;
    console.log(this.tempStudentFormData);
  }
}
