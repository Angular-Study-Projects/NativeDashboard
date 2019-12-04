import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListService } from "./services/list.service";

import { DeleteComponent } from "./components/modals/delete.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        AppComponent,
        DeleteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ListService
    ]
})
export class AppModule { }
