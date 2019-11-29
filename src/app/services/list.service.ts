import { Injectable } from "@angular/core";

interface documentTemplate {
    title: string;
    date: string;
    lastModification: number;
    option: boolean;
}

@Injectable({providedIn: 'root'})
export class ListService {

    folderBtn:boolean = false;

    myList: documentTemplate[] = []

    addFolder(newFolder: documentTemplate) {
        this.myList.push(newFolder);
    }

    cleanClick(evt: any) {
        for (let i = 0; i < this.myList.length; i++) {
            this.myList[i].option=false;
        }
        evt.option = !evt.option;
    }
}