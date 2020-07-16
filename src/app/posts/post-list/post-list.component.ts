import { Component, Input } from "@angular/core";

import { Post } from "../post.model";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
    // posts=[ 
    //     {title:'First Post', content: 'This is the first post\'s conent'},
    //     {title:'Second Post', content: 'This is the second post\'s conent'},
    //     {title:'Third Post', content: 'This is the third post\'s conent'}
    // ];
    @Input() posts: Post[]=[];
}