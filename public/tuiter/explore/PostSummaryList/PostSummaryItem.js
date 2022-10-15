import posts from "./posts.js"
const PostSummaryItem = (post) => {
                        let topic = ``
                        let tweets = ``
                        if ("topic" in post && post.topic.length > 0) {
                            topic = `<span class="text-muted">${post.topic}</span>
                            <br/>`
                        }
                        if ("tweets" in post && post.tweets.length > 0) {
                            let tweets = `<span class="text-muted">${post.tweets} Tweets</span>
                                          <br/>`
                        }

                         return(`
                         <div class="list-group-item">
                         <div class="row p-1">
                              <div class="col-9">
                                  ${topic}
                                  <span class="text-white fw-bold">${post.userName} <i class='fas fa-check-circle'></i></span>  <span class="text-muted">  - ${post.time} </span>
                                  <br/>
                                  <span class="text-white fw-bold">${post.title}</span>
                                  <br/>
                                  ${tweets}
                              </div>
                              <div class="col-1">
                                  <img src="${post.image}" class="tuit_img"/>
                              </div>
                         </div>
                         </div>
                         `)
                     }

export default PostSummaryItem

