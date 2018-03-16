import { Injectable } from "@angular/core";

import { ICardPack } from "../Models/Interfaces/ICardPack";
import { IWhiteCard } from "../Models/Interfaces/IWhiteCard";

import * as data from "../../../data.json";

@Injectable()
export class CardService {

    private cards: ICardPack[];

    constructor() {
        this.cards = data as any as ICardPack[];

        this.cards.forEach(p => p.whiteCards.forEach(c => c.isSelected = false));
    }

    public get(index: number): ICardPack {
        return this.cards[index];
    }

    public randomWhiteCard(): IWhiteCard {
        const pack = this.cards[Math.floor(Math.random() * this.cards.length) + 1];
        return pack.whiteCards[Math.floor(Math.random() * pack.whiteCards.length) + 1];
    }

}
