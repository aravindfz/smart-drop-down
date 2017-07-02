import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() addFresh: boolean = true;
  @Input() items: Array<any>;
  selectedItem: any = { selectedItem: "Select a Location" };
  showDropDown: boolean = true;
  searchText: string;
  addItem: boolean = false;

  data = [
    {
      "id": 1,
      "stateName": "Illinois"
    }, {
      "id": 2,
      "stateName": "Florida"
    }, {
      "id": 3,
      "stateName": "California"
    }, {
      "id": 4,
      "stateName": "Connecticut"
    }, {
      "id": 5,
      "stateName": "New York"
    }, {
      "id": 6,
      "stateName": "California"
    }, {
      "id": 7,
      "stateName": "Missouri"
    }, {
      "id": 8,
      "stateName": "Michigan"
    }, {
      "id": 9,
      "stateName": "Nevada"
    }, {
      "id": 10,
      "stateName": "Tennessee"
    }];
  ngOnInit() {
    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
    eventObservable.subscribe();
  }
  clicked(item: string) {
    this.selectedItem = item;
    this.showDropDown = !this.showDropDown;
  }
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  createItem(item: string) {
    if (_.findIndex(this.data, item) > -1 && this.addFresh) {
      this.addItem = true;
    } else {
      this.addItem = false;
    }
  }
  addAndSelect(item: string) {
    this.selectedItem.stateName = item;
    let newState = {
      id: -1,
      stateName: item
    }
    this.data.push(newState);
    this.clearContent();
    /**
     * service call to add the new item
     */
  }
  clearContent() {
    this.input.nativeElement.value = "";
  }
}
