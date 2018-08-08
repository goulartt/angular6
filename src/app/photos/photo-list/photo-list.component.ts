import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  constructor(private params: ActivatedRoute, private service: PhotoService) { }

  ngOnInit(): void {
    this.username = this.params.snapshot.params.userName;
    this.photos = this.params.snapshot.data['photos'];
  }



  load() {
    this.service.listFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
