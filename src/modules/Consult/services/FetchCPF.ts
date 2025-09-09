export default class FetchCPF {
  async get({ cpf, birthDate }: { cpf: string, birthDate: string }) {
    return {
      "success": true,
      "data": {
        "name": "XXXXXXXX XXXXXXXX XXXXXX",
        "status": "Rejeitado",
        "situation": "TITULAR FALECIDO",
        "birthDate": "02/02/1962",
        "deathYear": "2024",
        "cpfNumber": "XXXXXXXXXXX",
        "registrationDate": "anterior a 10/11/1990",
        "verificationDigit": "03",
        "receipt": {
          "emissionTime": "22:08:26",
          "emissionDate": "13/01/2025",
          "controlCode": "XXXX.XXXX.XXXX.XXXX"
        },
        "validationUrl": "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ca/ResultadoAut.asp?cp=XXXXXXXXXXX&cc=XXXXXXXXXXXXXXXX&de=13012025&he=220826&dv=03&em=01",
        "validationHtmlUrl": "https://api.cpfhub.io/api/view-proof/XXXXXXXXXXX/XXXXXXXXXXXXX"

      }
    }
  }
}
