import { Component, OnInit, DoCheck } from "@angular/core";
import { ListService } from "~/app/services/list.service";

interface documentTemplate {
    title: string;
    date: string;
    lastModification: number;
    option: boolean;
    id: number;
}

@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
}) 

export class ListComponent implements OnInit {

    dotsActive: boolean;

    myList: documentTemplate[] = [];

    constructor(private listService: ListService){
    }
    
    ngOnInit(): void {
        this.dotsActive = false;
        this.myList = this.listService.myList;
    }


    showDots(evt: any): void {

        evt.option == true ? evt.option = false : this.listService.cleanClick(evt);

    }

    longPress(id: number) {
        console.log('working '+ id)
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

    deleteFolder (listItem: number) {
        this.listService.deleteFolder(listItem);
    }


}