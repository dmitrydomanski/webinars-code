import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-pipe-observable',
  templateUrl: './async-pipe-observable.component.html',
  styleUrls: ['./async-pipe-observable.component.scss']
})
export class AsyncPipeObservableComponent implements OnInit {
observableData: Subscription
subscription: Object = null;
v: any = 5;

  constructor() { }

  ngOnInit() {
  }

  //Create observable
  getObservable() {
    // return interval(1000).subscribe(this.v = this.v + 5)
  }

  subscribeToIntervalData () {
    this.observableData = interval(500).subscribe(this.v = this.v + 5)
  }

  //Subscribe to observable
  subscibeObservable() {
    // this.subscription = this.getObservable().subscribe()
  }

}
