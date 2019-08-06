import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { IPost } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: []
})
export class PostFormComponent implements OnInit {
    private _post: IPost;
    showSpinner = false;
    @Input() get post() {
        return this._post;
    }
    set post(val: IPost) {
        console.log("from set post", val);
        this._post = val;
        this.addedPost.emit(this.post);
    }
    @Output() addedPost: EventEmitter<IPost> = new EventEmitter<IPost>();

    postForm = new FormGroup({
        userId: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[0-9]+$')
        ])),
        title: new FormControl('', Validators.required),
        body: new FormControl('', Validators.required)
    });

    constructor(private dataService: DataService) {
    }

    onSubmit() {
        if (this.postForm.valid) {
            this.showSpinner = true;
            console.log(this.postForm.value);
            this.dataService
                .addPost(this.postForm.value)
                .subscribe(post => {
                    this.post = post
                    this.showSpinner = false;
                });
            this.postForm.reset();
        } else {
            this.validateAllFormFields(this.postForm);
        }

    }
    validateAllFormFields(formGroup: FormGroup) {         //{1}
        Object.keys(formGroup.controls).forEach(field => {  //{2}
            const control = formGroup.get(field);             //{3}
            if (control instanceof FormControl) {             //{4}
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        //{5}
                this.validateAllFormFields(control);            //{6}
            }
        });
    }
    ngOnInit() {

    }


}
