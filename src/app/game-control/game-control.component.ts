import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  num = 0;
  interval;
  @Output() increment = new EventEmitter<number>();

  startGame() {
    this.interval = setInterval(() => {
      this.increment.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  endGame() {
    clearInterval(this.interval);
  }
}
