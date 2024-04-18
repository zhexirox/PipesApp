import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "manuel";
  public nameUpper: string = "MANUEL";
  public fullName: string = "mAnUEl eSTeBaN";

  public customDate: Date = new Date();
}
