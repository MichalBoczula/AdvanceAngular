import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-components-and-databinding',
  templateUrl: './manager-components-and-databinding.component.html',
  styleUrls: ['./manager-components-and-databinding.component.css']
})
export class ManagerComponentsAndDatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
