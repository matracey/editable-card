import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./Components/app//app.component";
import { CardComponent } from "./Components/card/card.component";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
