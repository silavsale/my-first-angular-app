import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  password = 'Tuna';
  timeStamp = [];
  date = Date();
  showSecret = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);

  }

  ngOnInit() {
  }

  hideP() {

  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.timeStamp.push(new Date());
  }


  onCreateServer() {
    this.serverCreated = true;
    // this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onResetUserName() {
    this.username = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
