import { Component, OnInit, ViewContainerRef, OnChanges } from "@angular/core";
import { ListService } from "~/app/services/list.service";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DeleteComponent } from "../modals/delete.component";
import { SearchBar } from "tns-core-modules/ui/search-bar";


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
    searchPhrase: string;
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



    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        

        setTimeout(()=> {
            const text = searchBar.text;

            if( text != "" ) {
                this.myList = [... this.listService.myList.filter( it => it.title.toLowerCase().startsWith(text)) ]
            }
            else{
                this.myList = [... this.listService.myList]
            }
        }, 100)

        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
    

    showOption(item: number) {
        
    }

    deleteFolder (listItem: number) {
        this.listService.deleteFolder(listItem);
        this.listService.isEmpty();
    }


}