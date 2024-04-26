import { Component } from '@angular/core';
import { PlansChipComponent } from '../plans-chip/plans-chip.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [PlansChipComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}
