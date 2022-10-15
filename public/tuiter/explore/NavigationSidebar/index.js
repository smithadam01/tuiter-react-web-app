const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item bg-primary" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-hashtag "></i> Explore </span>
                <i class="fas fa-hashtag d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-bell"></i>  Notifications </span>
                <i class="fas fa-bell d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-envelope"></i> Messages </span>
                <i class="fas fa-envelope d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-bookmark"></i> Bookmarks </span>
                <i class="fas fa-bookmark d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-list"></i> Lists </span>
                <i class="fas fa-list d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-user"></i> Profile </span>
                <i class="fas fa-user d-xl-none"></i>
            </a>
            <a class="list-group-item" href="/">
                <span class="d-none d-xl-block"> <i class="fas fa-minus-circle"></i> More </span>
                <i class="fas fa-minus-circle d-xl-none"></i>
            </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;