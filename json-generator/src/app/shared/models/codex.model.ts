export class Codex {
    name: string;
    factions: string[];
    abilities: Ability[];
    wargearLists: string[];
    wargear: Wargear[];
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
    list: string;
}
