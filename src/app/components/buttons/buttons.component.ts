import { Component, OnInit } from "@angular/core";
import { ListService } from "~/app/services/list.service";

@Component({
    selector: 'buttons-component',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
    
})

export class ButtonsComponent implements OnInit {
    
    constructor(private listService: ListService ){}


    ngOnInit() {

    }

    addFolder() {
        this.listService.addFolder({
                            title: "Folder name",
                            date: "Nov 12, 2018, 11:18:55 AM", 
                            lastModification: 2,
                            option: false,
                            id: ++this.listService.id
                        })
    }

}