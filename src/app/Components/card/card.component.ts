import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";

import { ICard } from "../../Models/Interfaces/ICard";
import { IBlackCard } from "../../Models/Interfaces/IBlackCard";
import { IWhiteCard } from "../../Models/Interfaces/IWhiteCard";

@Component({
    selector: "app-card",
    templateUrl: "card.component.html",
    styleUrls: ["card.component.css"],
    animations: [
        trigger("selected", [
            state(
                "1",
                style({ "transform": "scale(1.1) translate(0, -2.5rem)", "background-color": "{{ backgroundColor }}", "color": "#ffffff" }),
                { params: { backgroundColor: "#007bff" } }
            ),
            state(
                "0",
                style({ "transform": "scale(1.0) translate(0, 0)", "background-color": "*", "color": "*" })
            ),
            transition("* => 1", animate("250ms ease-in")),
            transition("* => 0", animate("250ms ease-out")),
        ])
    ]
})
export class CardComponent implements OnInit {

    @Input()
    public card: ICard;

    @Output()
    public cardChange = new EventEmitter<ICard>();

    @Input()
    public small = false;

    @Input()
    public muted = false;
    @Input()
    public disabled = false;

    @Input()
    public showPickOrder = true;

    public supressSelect = false;

    public cardSelected = new EventEmitter<ICard>();
    public cardDeselected = new EventEmitter<ICard>();

    get pick(): number {
        if (this.card == null || !this.card.isBlackCard) { return undefined; }
        return (this.card as IBlackCard).pick;
    }

    get draw(): number {
        if (this.card == null || !this.card.isBlackCard) { return undefined; }
        return (this.card as IBlackCard).draw;
    }

    get pickOrder(): number {
        if (this.card == null || this.card.isBlackCard) { return 0; }

        return this.card.pickOrder;
    }

    get backgroundColor(): string {
        switch (this.pickOrder) {
            case 2: return "#dc3545";
            case 3: return "#ffc107";
            case 4: return "#28a745";
            case 5: return "#20c997";
            default: return "#007bff";
        }
    }

    constructor() { }

    public ngOnInit(): void {
        if (this.card != null && !this.card.isBlackCard) {
            const c = this.card as IWhiteCard;
            if (c.isBlank) { console.log("Blank card."); }
        }
    }

    public clicked(event: MouseEvent): void { }

    public animationStart(event: AnimationEvent) { }

    public animationEnd(event: AnimationEvent) { }

    private toggle(): void {
        // handle select state change.
    }

    private select(): void {
        // set as selected.
    }

    private deselect(): void {
        // set as deselected.
    }
}
