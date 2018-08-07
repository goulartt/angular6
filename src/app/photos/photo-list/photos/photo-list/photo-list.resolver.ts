import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PhotoService } from '../../../photo/photo.service';
import { Photo } from '../../../photo/photo';

@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Photo[]> {
    constructor(private service: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const username = route.params.userName;
        return this.service.listFromUserPaginated(username, 1);
    }
}