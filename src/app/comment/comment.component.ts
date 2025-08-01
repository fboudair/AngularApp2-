import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',  // Component selector used in HTML
  templateUrl: './comment.component.html',   // Associated template file
  styleUrls: ['./comment.component.css']  // Optional styles
})
export class CommentComponent implements OnInit {
  // Form input properties bound via [(ngModel)]
  email: string = '';
  title: string = '';
  comment: string = '';
  // Array to hold submitted comments
  comments: { email: string; title: string; comment: string }[] = [];
// Lifecycle hook that runs when the component is initialized
  ngOnInit(): void {
    // Attempt to load any previously saved comments from localStorage
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }
// Called when the user submits the comment form
  submitComment() {
    // Only proceed if all fields are filled
    if (this.email && this.title && this.comment) {
      const newComment = {
        email: this.email,
        title: this.title,
        comment: this.comment
      };
 // Add new comment to the beginning of the list
      this.comments.unshift(newComment);

      // Save to localStorage
      localStorage.setItem('comments', JSON.stringify(this.comments));

      // Clear form
      this.email = '';
      this.title = '';
      this.comment = '';
    }
  }
}
