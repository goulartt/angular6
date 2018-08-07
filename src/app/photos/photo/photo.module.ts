import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        PhotoComponent
    ],imports: [CommonModule],
    exports: [ PhotoComponent ]
})
export class PhotoModule {}