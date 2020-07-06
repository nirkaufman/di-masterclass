import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <div class="card m-2 p-2 border-secondary bg-light">
          <h4 class="card-text text-left text-secondary">Child Component</h4>
      </div>
  `
})
export class ChildComponent {}
