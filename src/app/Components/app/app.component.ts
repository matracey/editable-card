import { Component, OnInit } from "@angular/core";

import { CardService } from "../../Services/card.service";
import { ICard } from "../../Models/Interfaces/ICard";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    public card: ICard;
    constructor(
        private _cards: CardService
    ) { }

    public ngOnInit(): void {
        this.card = this._cards.getBlank();
    }
}
