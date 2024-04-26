import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { PlansComponent } from '../plans/plans.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { StatsComponent } from '../stats/stats.component';
import { InvitationComponent } from '../invitation/invitation.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [InfoComponent, PlansComponent, PresentationComponent, StatsComponent, InvitationComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
