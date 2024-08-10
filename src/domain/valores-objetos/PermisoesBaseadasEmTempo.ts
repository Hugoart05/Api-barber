import { IPermissaoPorIntervaloTempo } from "../../types/IPermissaoPorIntervaloTempo";
import { IValidateTimedBased } from "../../types/IValidateTimedBased";

export default class PermissaoPorIntervaloTempo implements IPermissaoPorIntervaloTempo {

    public validatePermissao(intervaloEmMinutos: number, lastUpdated: Date): IValidateTimedBased {
        if (lastUpdated) {
            const now = new Date();
            const diferencaTempo = (now.getTime() - lastUpdated.getTime()) / (1000 * 60)
            console.log(diferencaTempo)
            
            const isValid = diferencaTempo > intervaloEmMinutos
            const rest = isValid ? 0 : Math.ceil((intervaloEmMinutos - diferencaTempo) * 60);
            return {
                isValid,
                rest,
            }
        }
        throw new Error("Erro ao calcular intervalo de tempo de update")
    }

}