import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-names',
  templateUrl: './select-names.component.html',
  styleUrls: ['./select-names.component.scss'],
})
export class SelectNamesComponent implements OnInit {
  names: string[] = [];

  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onAddClick(): void {
    if (!this.inputValue) {
      return;
    }
    this.names.push(this.inputValue);

    this.inputValue = '';
  }

  onFinalizeClick(): void {
    console.log(this.names);
  }
}
