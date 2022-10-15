import PostSummaryItem from "./PostSummaryItem.js"
import posts from "./posts.js"

const PostSummaryList = () => {
    let postList = ``;
    for (const post of posts) {
        postList += PostSummaryItem(post);
    }
    return (`
    <div class="list-group mb-2">
        ${postList}
    </div>
    `)
}

export default PostSummaryList