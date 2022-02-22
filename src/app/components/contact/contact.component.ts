import { Component, OnInit } from '@angular/core';
import { Sender } from 'src/app/models/sender';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: Sender = new Sender();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('New message from new sender!')
  }

}
