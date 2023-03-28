import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { GroupService } from "src/app/group.service";

export const GroupCanActivate: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const groupService = inject(GroupService);
    const router = inject(Router);

    const groups = groupService.groups;
    if (!groups || !groups.length) {
        const router = inject(Router);
        return router.createUrlTree(['/']);
    }

    return true;
}