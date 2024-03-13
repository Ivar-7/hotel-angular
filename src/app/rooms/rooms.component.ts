import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
    @Input() title: any;

    @Output() sayHello = new EventEmitter<string>();
    sayHelloToParent() {
        this.sayHello.emit('Hello from the RoomsComponent');
    }
}
