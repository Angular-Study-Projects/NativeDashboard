import { Injectable } from "@angular/core";

interface documentTemplate {
    title: string;
    date: string;
    lastModification: number;
    option: boolean;
    id: number;
}

@Injectable({providedIn: 'root'})
export class ListService {

    folderBtn:boolean = false;
    id: number = 0;

    myList: documentTemplate[] = [{title: 'folder title', date: '12 Fev 2019 AM', lastModification: 4, option:false, id: this.id}]

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