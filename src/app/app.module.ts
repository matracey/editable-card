import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./Components/app//app.component";
import { CardComponent } from "./Components/card/card.component";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
