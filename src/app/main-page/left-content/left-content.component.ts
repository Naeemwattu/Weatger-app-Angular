import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit
{
  search = new FormControl('');
  list: any[] = [];

  constructor() { }

  ngOnInit(): void
  {
  }

  addWeather()
  {
    this.list.push({id: this.list.length + 1, name: this.search.value});
    console.warn(this.list);

    this.search.setValue('');
  }

}
