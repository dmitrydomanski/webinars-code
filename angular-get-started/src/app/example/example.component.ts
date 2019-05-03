import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  OnDestroy,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {
  testHook: any;

  constructor() {
    console.log('constructor...')
  }
  
  ngOnInit() {
     this.testHook = document.querySelector('.test')
    console.log('ngOnInit...');
    console.log(`Initial color: ${this.testHook.style.color}`);
    
  }

  ngOnChanges (changes: SimpleChanges) {
    console.log('ngOnChanges...')
  }

  ngDoCheck () {
    console.log('ngDoCheck...')
    // console.log(this.testHook);
    console.log(`Check color: ${this.testHook.style.color}`);

  }

  ngAfterContentInit () {
    console.log('ngAfterContentInit...')
    // console.log(this.testHook);
    console.log(`Content Init color: ${this.testHook.style.color}`);
  }

  ngAfterViewInit () {
    console.log('ngAfterViewInit...')
    // this.testHook.style.color = 'red';
    // console.log(this.testHook.style);

  }

  ngOnDestroy () {
    console.log('Destroy...')
  }

}
