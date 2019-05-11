import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  birthday = new Date(1982, 9, 6)
  progress = 0.2345
  formattedString = 'This long string shows pipes power'

  constructor() { }

  ngOnInit() {
  }

}
