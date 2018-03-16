import { ICard } from "./ICard";

export interface IBlackCard extends ICard {
    draw: number;
    pick: number;
    sortOrder: number;
}
