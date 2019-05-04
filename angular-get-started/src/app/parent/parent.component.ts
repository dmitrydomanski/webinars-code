import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: './parent.component.html',
  // template: `
  //   <h3>Parent component</h3>
  //   <hr />
  //   <app-child></app-child>
  // `,
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  name = '';
  parentName = '';

  constructor() {
    //Inject service here
    // const dataService = dataService;
    // console.log('constructor...');
    // const testName = document.querySelector('.name');
    // console.log(testName);
  }
  
  ngOnInit() {
    // Fetch data from service
    //const data = this.dataService.fetchData();
    // console.log('ngOnInit...');
    // const testName = document.querySelector('.name');
    // console.log(testName);
  }

  ngOnChanges (changes: SimpleChanges) {
    // console.log(changes);
  }

  ngDoCheck () {
    // console.log('ngDoCheck...');
    // console.log(this.name);
  }

  ngAfterContentInit () {
    // console.log('ngAfterContentInit...')
  }

  ngAfterViewInit () {
    // console.log('ngAfterViewInit...')
  }

  ngOnDestroy () {
    // console.log('Destroy...')
  }

  onParentNameSubmit($event) {
    console.log($event);
    this.parentName = $event;
  }
}
