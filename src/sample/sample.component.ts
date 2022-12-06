import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/user';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  @Input() user:user
         


  constructor() {}

  ngOnInit(): void {
    
  }
  

}
