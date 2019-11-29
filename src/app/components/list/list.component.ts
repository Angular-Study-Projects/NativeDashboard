import { Component, OnInit, DoCheck } from "@angular/core";
import { ListService } from "~/app/services/list.service";

interface documentTemplate {
    title: string;
    date: string;
    lastModification: number;
}

@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
}) 

export class ListComponent implements OnInit {

    dotsActive: boolean;

    myList: documentTemplate[] = []

    constructor(private listService: ListService){
    }
    
    ngOnInit(): void {
        this.dotsActive = false;
        this.myList = this.listService.myList;
        // for(let i = 0; i < 25; i++){

        //     this.myList.push({
        //                         title: "Folder name",
        //                         date: "Nov 12, 2018, 11:18:55 AM", 
        //                         lastModification: 2
        //                     })
        // }
    }


    showDots(evt: number): void {
        this.dotsActive = !this.dotsActive;
        this.listService.myList[evt].option=true; 
        this.listService.folderBtn = true;
        console.log('clicked')
    }

    addFolder() {
        this.listService.addFolder({
                            title: "Folder name",
                            date: "Nov 12, 2018, 11:18:55 AM", 
                            lastModification: 2,
                            option: false
                        })
    }


}