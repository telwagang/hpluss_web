import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AccountComponent} from './account.componet';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    AccountComponent
  ]
})
export class AccountModule {}
