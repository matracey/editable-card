import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./Components/app//app.component";
import { CardComponent } from "./Components/card/card.component";

import { CardService } from "./Services/card.service";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [
        CardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
