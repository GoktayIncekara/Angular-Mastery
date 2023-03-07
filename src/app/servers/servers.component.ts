import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  disabled = false;
  serverCreationStatus = "No server was created!";
  serverName = "Initial Name";
  userName="";
  showPassword = false;
  clicks: Date[] = [];

  constructor() {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Server name is ${this.serverName}`;
  }

  resetUserName() {
    this.userName ="";
  }

  handleClick() {
    this.showPassword = !this.showPassword;
    this.clicks.push(new Date());
    
  }

  /*
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  */

}
