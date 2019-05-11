import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {

  // promiseData: any;
  promise: Promise<string>

  constructor() {
    // this.getPromise().then(v => this.promiseData = v)
    this.promise = this.getPromise()
  }

  ngOnInit() {
  }

  getPromise () {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('Promise resolved'), 1500)
    })
  }

}
