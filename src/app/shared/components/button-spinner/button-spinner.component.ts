import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-spinner',
  templateUrl: './button-spinner.component.html',
  styleUrls: ['./button-spinner.component.scss']
})
export class ButtonSpinnerComponent implements OnInit {
  @Input() loading?: boolean = false;
  @Input() color?: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
