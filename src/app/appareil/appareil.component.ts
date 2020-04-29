import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  myClassLi: object = {
      'list-group-item': true,
    }

  constructor() {}

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }

  getColor(){
    if(this.appareilStatus === 'éteint'){
      return 'red'
    } else {
      return 'green'
    }
  }

  getClassLi(){
    
    if(this.appareilStatus === 'éteint'){
      this.myClassLi = {...this.myClassLi, 'list-group-item-danger': true}
    } else {
      this.myClassLi = {...this.myClassLi, 'list-group-item-success': true}
    }
    return this.myClassLi
  }

}
