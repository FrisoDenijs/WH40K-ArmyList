export class Codex {
    name: string;
    factions: string[];
    abilities: Ability[];
    wargearLists: string[];
    wargear: Wargear[];
    warlordTraits: WarlordTrait[];
    relics: Relic[];
    psychicPowers: PsychicPower[];
}

export class Faction {
    name: string;
    ability: Ability;
}

export class Ability {
    name: string;
    description: string;
}

export class Wargear {
    name: string;
    points: number;
    range?: string;
    type?: string;
    strength?: string;
    armourPenetration?: string;
    damage?: string;
    abilities: string;
    lists?: string[];
}

export class WarlordTrait {
    name: string;
    description: string;
    faction?: string;
}

export class Relic {
    name: string;
    description: string;
    replacementWargear?: Wargear[];
    faction?: string;
}

export class PsychicPower {
    name: string;
    description: string;
    warpCharge: number;
}

export class Unit {
    
}