export class Atuacao {
    area: string;
    especie: string;
    saldoTotal: string;
    exploracaoComercial: string;
  }
  
  export class Propriedade {
    terreno: string;
    proprietario: string;
    cpfCnpj: string;
    endereco: string;
    contrato: string;
    codigo: string;
  }
  
  export class Registro {
    distritoProdutor: string;
    pessoa: string;
    nomeProdutor: string;
    cpfCnpjProdutor: string;
    rgProdutor: string;
    numeroIncra: string;
    InscricaoEstadualProdutor: string;
    tipoLogradouro: string;
    numeroEndProdutor: string;
    bairroProdutor: string;
    localidadeProdutor: string;
    cepProdutor: string;
    municipioProdutor: string;
    propriedadeRural: string;
    logradouroCorrespondencia: string;
    numeroCorrespondencia: string;
    bairroCorrespondencia: string;
    localidadeCorrespondecia: string;
    distritoCorrespondencia: string;
    municipioCorrespondencia: string;
    cepCorrespondencia: string;
    ufCorrespondencia: string;
    telefoneCorrespondencia: string;
    caixaPostalCorrespondencia: string;
    emailCorrespondencia: string;
    nomeResponsavel: string;
    cpfResponsavel: string;
    rgResponsavel: string;
    atuacao: Atuacao[];
    propriedade: Propriedade[];
  }
  