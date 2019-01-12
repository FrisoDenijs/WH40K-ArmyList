import { Role as BattlefieldRole } from './role.model';

export class Detachment {
    name: string;
    min: DetachmentMin[];
    max: DetachmentMax[];
    dedicatedTransportsForEach: number;
    restrictions: DetachmentRestriction[];
    commandBenefits: CommandBenefits;
}

export class DetachmentMin {
    battlefieldRole: BattlefieldRole;
    amount: number;
}

export class DetachmentMax {
    battlefieldRole: BattlefieldRole;
    amount: number;
}

export enum DetachmentRestriction {
    Faction
}

export class CommandBenefits {
    commandPoints: number;
}
