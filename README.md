# Prodyna

I decided to use Angular to do this coding chalange, because tasks required dynamic loading, deleting, and adding data, so i thought angular was ideal for this purpose. For styling I have used bootstrap.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Technical spec:
This is the Mock up service for your coding challenge app:
(http://jsonplaceholder.typicode.com/posts).
It is a fake REST API which returns all JSON data you need, more specific - list of posts, and it
supports all HTTP verbs (f.e. GET,POST,DELETE,PUT).The features we expect you to
implement are:
1. List all the posts in your UI and show titles of the posts, every post should be an
expandable field which will show body when you click on it.(Implement hide/show logic)
2. Implement keyword search.(As soon as user types something into input field - the list of
posts should be filtered).
3. Create a form which is used to create a new post and adding it to the list. Add basic
validation for the form(both title and body are required).
4. Any post can be removed from the list at any time, updating the list accordingly.
5. Implement loading spinner which is an indicator if the page is loading for any service
call.
** Additional feature: Implement lazy loading infinite scroll(as user scrolls down the page –
more posts are loaded until all posts are loaded.)

## Solution
1. Solution of this task is in the posts/post-list.component and in core/data.service.ts. First, GET http://jsonplaceholder.typicode.com/posts is used to collect data from the server. Then that data are showned in post-list.component, for that is used angular structural directive ngFor, to loop trough all posts, for every post is created bootstrap card component, to show only title of post, and afthe click on the title, body of the post is showed.
2. Keyword search is implemented in the filter-textbox.component and posts-list.component. As user types, list with posts is automaticaly updated, word from search is proccessed to post-list.component, and in the filter function every entry that contains in it's title or body given word, is listed in the filtered posts list.
3. At the top of the page is the form for adding new post. It works with POST http://jsonplaceholder.typicode.com/posts request. Data is sent on the server. Since the data on the server is not updated, I add a new post to the list of posts that I store in the application itself, and thus display it on the page.
4. At the right side of every post is "X" button, that removes post from the list. For that I call DELETE http://jsonplaceholder.typicode.com/posts/id, since the data on the server is not updated, I remove a post from the list of posts that I store in the application itself, and thus remove it from the page.
5. Loading spinner is showned before data is received from the server. Also, when new post is added to the page, loading spinner is showned, till the data come from server.

## More time
I didn't have enough time to finish this lazy loading infinite scroll, I hope to do it till the end of a day and commit it than.
Also, if I had more time, I would try to organize components better.
