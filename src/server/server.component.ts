import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  alloweNewServer = false;
  serverStatus = "No server created..";
  serverName = "";
  serverCreated = false;
  serverOnlineStatus = Math.random() < 0.5 ? "offline" : "online";

  Constructor() {
    setTimeout(myFunction, 2000);
  }

  myFunction() {
    this.alloweNewServer = true;
  }

  onServerCreation() {
    this.serverStatus = "A server is created naming :  " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColour() {
    return this.serverOnlineStatus === "online" ? "green" : "red";
  }
}
