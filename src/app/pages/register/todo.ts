export class Atuacao {
  area: string;
  especie: string;
  saldoTotal: string;
  exploracao: string;
}

export class Propriedade {
  proprietario: string;
  endereco: string;
  cpfCnpj: string;
  codigo: string;
  contrato: string;
}

export class Atendimento {
  fisica: boolean;
  juridica: boolean;
  cpfCnpjAtendimento: string;
  rg: string;
  inscricaoEstadual: string;
  numeroIncra: string;
  nomeProdutor: string;
  telefone: string;
  email: string;
  enderecoAtendimento: string;
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
  logradouroCorrespondencia: string;
  numeroCorrespondencia: string;
  bairroCorrespondencia: string;
  localidadeCorrespondencia: string;
  distritoCorrespondencia: string;
  municipioCorrespondencia: string;
  estadoCorrespondencia: string;
  cepCorrespondencia: string;
  telefoneCorrespondencia: string;
  emailCorrespondencia: string;
  caixaPostalCorrespondencia: string;
  atuacao: Atuacao[];
  propriedade: Propriedade[];
}
