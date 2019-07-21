import { ICard } from "./ICard";

export interface IWhiteCard extends ICard {
    isWriteIn: boolean;
    isBlankCard: boolean;
    sortOrder: number;
    isSelected: boolean;
}
