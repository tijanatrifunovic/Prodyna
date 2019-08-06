import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPost } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'http://jsonplaceholder.typicode.com/';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<IPost[]> {

        return this.http.get<IPost[]>(this.baseUrl + 'posts')
            .pipe(
                catchError(this.handleError)
            );
    }

    deletePost(id: number): Observable<{}> {
        return this.http.delete(this.baseUrl + 'posts/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    addPost(post: IPost): Observable<IPost> {
        return this.http.post<IPost>(this.baseUrl + 'posts', post)
            .pipe(
                catchError(this.handleError)
            );
    }


    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}