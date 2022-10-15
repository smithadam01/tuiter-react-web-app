import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                    <div class="col-11">
                        <div id="input_container">
                            <input type="text" class="form-control form-control-sm border border-1 rounded-pill" id="input" placeholder="Search Tuiter">
                            <i class="fas fa-search fa-sm" id="input_img"></i>
                        </div>
                    </div>
                    <div class="col-1 text-primary">
                        <i class="fas fa-cog fa-2x"></i>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                                              <li class="nav-item">
                                                  <a class="nav-link active" aria-current="page" href="#">For you</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" href="#">Trending</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" href="#">News</a>
                                              </li>
                                              <li class="nav-item">
                                                  <a class="nav-link" href="#">Sports</a>
                                              </li>
                                              <li class="nav-item ">
                                                  <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                                              </li>
           </ul>
           <div class="row mb-2">
                               <div class="position-relative">
                                   <img src="../../images/spacex_spaceship.png" class="img-fluid " >
                                   <span class="position-absolute start-0 ms-4 h3 bottom-0">SpaceX's Starship</span>
                               </div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
