import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ListService } from "~/app/services/list.service";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DeleteComponent } from "../modals/delete.component";


interface documentTemplate {
    title: string;
    date: number;
    lastModification: number;
    option: boolean;
    id: number;
}

@Component({
    selector: "list-component",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
    providers: [ModalDialogService]
}) 

export class ListComponent implements OnInit {

    dotsActive: boolean;

    myList: documentTemplate[] = [];

    constructor(private listService: ListService, private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef){
    }

    showModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: true,
            context: {}
        };
        this.modalService.showModal(DeleteComponent, options);
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
    

    showOption(item: number) {
        
    }

    deleteFolder (listItem: number) {
        this.listService.deleteFolder(listItem);
        this.listService.isEmpty();
    }


}