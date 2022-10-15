import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const GroupWrapper = (input) => {
    return (`
    <div class="list-group-item">
    ${input}
    </div>
    `)
}

const WhoToFollowList = () => {
    let whohtml = who.map(WhoToFollowListItem).map(GroupWrapper)
    let wholist = ""
    for (const row of whohtml) {
        wholist += row
    }
    return (`
           <ul class="list-group">
               <div class="list-group-item">
                    Who to follow
               </div>
               ${wholist}

           </ul>
`); }

export default WhoToFollowList