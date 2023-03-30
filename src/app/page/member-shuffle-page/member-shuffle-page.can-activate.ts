import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { GroupService } from "src/app/services/group/group.service";
import { MembersService } from "src/app/services/members/members.service";

export const memberShufflePageCanActivate: CanActivateFn = (route, state) => {
    const members = inject(MembersService);
    const group = inject(GroupService);

    if (!members.count || !group.count || group.count > members.count) {
        window.alert('Defina os membros e a quantidade de grupos antes');
        return false;
    }

    return true;
}