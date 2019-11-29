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

}