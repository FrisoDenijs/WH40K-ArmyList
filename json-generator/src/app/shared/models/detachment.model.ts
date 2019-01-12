import { Role as BattlefieldRole } from './role.model';

export class Detachment {
    name: string;
    minRoles: MinRole[];
    maxRoles: MaxRole[];
    dedicatedTransportsForEach: number;
    restrictions: DetachmentRestriction[];
    benefits: CommandBenefits;
}

export class MinRole {
    battlefieldRole: BattlefieldRole;
    amount: number;
}

export class MaxRole {
    battlefieldRole: BattlefieldRole;
    amount: number;
}

export enum DetachmentRestriction {
    Faction
}

export class CommandBenefits {
    commandPoints: number;
}
