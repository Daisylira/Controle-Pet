import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interface';
  faAngleRight = faAngleRight

  // $(function() {
  //   // Sidebar toggle behavior
  //   $('#sidebarCollapse').on('click', function() {
  //     $('#sidebar, #content').toggleClass('active');
  //   });
  // });
}
