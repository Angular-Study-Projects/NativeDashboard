import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";

interface documentTemplate {
    title: string;
    date: number;
    lastModification: number;
    option: boolean;
    id: number;
}

@Injectable({providedIn: 'root'})
export class ListService {

    folderBtn:boolean = false;
    id: number = 0;

    myList: documentTemplate[] = [{title: 'folder title', date: Date.now(), lastModification: Date.now(), option:false, id: this.id}]

    addFolder(newFolder: documentTemplate) {
        this.myList.push(newFolder);
    }

    deleteFolder( item: number ) {
        this.myList.splice(item, 1);
    }

    cleanClick(evt: any) {
        for (let i = 0; i < this.myList.length; i++) {
            this.myList[i].option=false;
        }
        evt.option = !evt.option;
    }
}