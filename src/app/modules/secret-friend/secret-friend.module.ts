import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretFriendRoutingModule } from './secret-friend-routing.module';
import { SelectNamesComponent } from './components/select-names';
import { LinksComponent } from './components/links';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectNamesComponent, LinksComponent],
  imports: [CommonModule, FormsModule, SecretFriendRoutingModule],
})
export class SecretFriendModule {}
