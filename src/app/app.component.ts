import { Component,
  OnInit //added it
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'angular-project';

  public components = [1,2,3,4];
}
