import { ConsultRegisterRepository } from "../../repositories/ConsultRepository";
import FetchCPF from "../../services/FetchCPF";

// UseCase responsável pro fazer as chamadas sync.
export default class ConsultUseCase {
  constructor(
    private fetchCPF: FetchCPF,
    private consultRegisterRepository: ConsultRegisterRepository
  ) {
    this.fetchCPF = fetchCPF;
    this.consultRegisterRepository = consultRegisterRepository
  }

  async execute({ cpf, organizationId }: { cpf: string, organizationId: string }) {
    const result = await this.fetchCPF.get({ birthDate: 'asdf', cpf });

    await this.consultRegisterRepository.create({
      cpf: result.data.cpfNumber,
      birthDate: result.data.birthDate,
      organizationId,
      metadata: result
    })

    // TODO: Pensar em como calcular os créditos
    // TODO: Vamos logar algo?
    // TODO: Remover as coisas que estão hardcoded

    return result;
  }
}
