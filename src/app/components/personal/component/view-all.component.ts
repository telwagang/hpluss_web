import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhysicianModel } from '../../../models/physician.model';
import { ViewService } from '../service/view-all.service';
@Component({
    templateUrl: `app/components/personal/view/view-all.view.html`
})

export class ViewComponent  implements OnInit {
    physician: PhysicianModel;
    physicians: PhysicianModel[];
    selectedId: any;
     constructor(
    private service: ViewService,
    //private route: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit() {
    this.service.getPhysicians().then(physician => {
      this.physicians = physician;
      this.physician = physician[0];
    });
  }

  isSelected(physician: PhysicianModel) { return physician.id === this.selectedId; }

  onSelect(hero: PhysicianModel) {
    this.router.navigate(['/hero', hero.id]);
  }
}
