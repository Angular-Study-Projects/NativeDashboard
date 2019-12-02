import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ListService } from "~/app/services/list.service";
import { Router } from "@angular/router";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

    folderTitle: string;

    constructor(private listService: ListService, private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.folderTitle=''
    }

    addFolder() {
        this.listService.addFolder({title: this.folderTitle, date: Date.now(), lastModification: Date.now(), option: false, id: ++this.listService.id})
        this.router.navigate(['/'])
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
