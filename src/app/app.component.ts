import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reactiveform';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnInit(): void {
    initFlowbite();
  }
}
