import {Component} from '@angular/core';

@Component({
  selector: 'app-lazy-feature',
  template: `
      <div class="card pt-2 pl-3 m-3 pb-5 bg-light border-primary">
          <h4 class="card-text text-left text-primary">Lazy Module</h4>
          <div class="card m-3 pt-2 pl-3 pb-5 border-success">
              <h4 class="card-text text-left text-success">Lazy Component</h4>
          </div>
      </div>
  `
})
export class LazyFeatureComponent {
}
