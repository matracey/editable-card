import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./Components/app//app.component";
import { CardComponent } from "./Components/card/card.component";

import { CardService } from "./Services/card.service";
import { AutofocusDirective } from "./Directives/autofocus/autofocus.directive";


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        AutofocusDirective,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [
        CardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
