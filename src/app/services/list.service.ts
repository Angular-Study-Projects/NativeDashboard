import { Injectable } from "@angular/core";

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
    _isEmpty: boolean = true;
    id: number = 0;

    myList: documentTemplate[] = []
    
    folder = this.myList;
    filter = ""

    // {title: 'folder title', date: Date.now(), lastModification: Date.now(), option:false, id: this.id}

    searchFolder(title: string) {
        this.myList.filter((obj: documentTemplate) => {
            return obj.title === title;
        })
    }


    addFolder(newFolder: documentTemplate) {
        this.myList.push(newFolder);
    }

    deleteFolder( item: number ) {
        this.myList.splice(item, 1);
        
    }

    isEmpty() {
        this.myList.length == 0 ? this._isEmpty = true : this._isEmpty = false;
    }

    cleanClick(evt: any) {
        for (let i = 0; i < this.myList.length; i++) {
            this.myList[i].option=false;
        }
        evt.option = !evt.option;
    }
}