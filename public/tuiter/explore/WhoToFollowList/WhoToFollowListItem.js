const WhoToFollowListItem = (who) => {
    return(`
                <div class="container-fluid m0 p0">
                    <div class="div row border-0">
                        <div class="col-3">
                            <img class="img-fluid rounded-pill" src="../../images/` + who.avatarIcon + `"/>
                        </div>
                        <div class="col-6">
                            <span class="fw-bol"> ` + who.userName + `  <i class="fas fa-circle"></i></span>
                            <br/>
                            <span> @` + who.handle + ` </span>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-primary btn-block rounded-pill mt-2"> Follow </button>
                        </div>
                    </div>
                </div>
    `)
}

export default WhoToFollowListItem