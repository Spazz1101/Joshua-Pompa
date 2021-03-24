import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  employeeArray: string[];
  newEmployee: string = "";
  incrementor: number = 0;
  onClick(): void {
    this.employeeArray[this.incrementor] = this.newEmployee;
    this.incrementor += 1;
  }
}
