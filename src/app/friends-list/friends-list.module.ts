import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FriendlistComponent } from './friendlist/friendlist.component';



@NgModule({
  declarations: [AddFriendComponent, FriendlistComponent],
  imports: [
    CommonModule
  ]
})
export class FriendsListModule { }
