import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption , IMultiSelectSettings} from './dropdown/types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    optionsModel: number[];
    myOptions: IMultiSelectOption[];
    title = 'app';
    mySettings: IMultiSelectSettings = {
    enableSearch: true
};

    ngOnInit() {
        this.myOptions = [
            { id: 1, name: 'Car brands', isLabel: true },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors', isLabel: true },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
        ];
    }
    onChange() {
        console.log(this.optionsModel);
    }
}

