import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() text: string;
  @Output() btnClick = new EventEmitter();
  constructor() {
    this.text = "Change Me";
  }

  ngOnInit(): void {
  }
  onClick() { 
    this.btnClick.emit();
  }

}
