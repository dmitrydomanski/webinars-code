import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: '[app-child]',
  // selector: '.app-child',
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childName: string;
  @Output() parentName = new EventEmitter<string>();
  name: string = '';

  constructor() {
    console.log('constructor...');
  }

  ngOnInit() {
    console.log('ngOnInit...');
  }

  ngOnChanges (changes: SimpleChanges) {
    console.log('ngOnChanges...');
    console.log(changes);
  }

  onParentNameSubmit () {
    // console.log(this.name);
    this.parentName.emit(this.name);
  }

}
