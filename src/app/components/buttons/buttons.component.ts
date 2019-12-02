import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/services/list.service";
import { Router, RouterState } from "@angular/router";

@Component({
    selector: 'buttons-component',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
    
})

export class ButtonsComponent implements OnInit {
    
    constructor(private listService: ListService, private router: Router ){}


    ngOnInit() {

    }

    addFolder() {
        this.listService.addFolder({
                            title: "Folder name",
                            date: Date.now(), 
                            lastModification: Date.now(),
                            option: false,
                            id: ++this.listService.id
                        })
    }

    newPage() {
        this.router.navigate(['/browse'])
    }

}