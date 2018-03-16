import { IBlackCard } from "./IBlackCard";
import { IWhiteCard } from "./IWhiteCard";

export interface ICardPack {
    id: string;
    name: string;
    shortName: string;
    description: string;
    category: string;
    icon?: any;
    isActive: boolean;
    isCustomPack: boolean;
    weight: number;
    sortOrder: number;
    blackCards: IBlackCard[];
    whiteCards: IWhiteCard[];
}
