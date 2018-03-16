import { Injectable } from "@angular/core";

import { ICardPack } from "../Models/Interfaces/ICardPack";
import { IWhiteCard } from "../Models/Interfaces/IWhiteCard";

import { Guid } from "../Helpers/guid";

import * as data from "../../../data.json";

@Injectable()
export class CardService {

    private _cards: ICardPack[];
    private _blankCards: IWhiteCard[];

    constructor() {
        this._cards = data as any as ICardPack[];

        this._cards.forEach(p => p.whiteCards.forEach(c => {
            c.isSelected = false;
            c.isBlackCard = false;
        }));

        this._blankCards = new Array<IWhiteCard>();

        const blankCount = (Math.random() * 300) + 300;
        for (let i = 0; i <= blankCount; i++) {
            const card = {} as IWhiteCard;
            card.id = Guid.newGuid();
            card.text = "___";
            card.watermark = "___";
            card.isWriteIn = true;
            card.isBlankCard = true;
            card.customText = "";
            card.isBlackCard = false;
            card.isSelected = false;
            card.sortOrder = 0;
            this._blankCards.push(card);
        }
    }

    public get(index: number): ICardPack {
        return this._cards[index];
    }

    public randomWhiteCard(): IWhiteCard {
        const pack = this._cards[Math.floor(Math.random() * this._cards.length) + 1];
        return pack.whiteCards[Math.floor(Math.random() * pack.whiteCards.length) + 1];
    }

    public getBlank(): IWhiteCard {
        return this._blankCards.pop();
    }

}
