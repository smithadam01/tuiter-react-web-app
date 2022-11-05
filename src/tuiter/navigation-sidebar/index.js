import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <a href="/tuiter/" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
       <i class="fas fa-home"></i> Home
     </a>
     <a href="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
       <i class="fa fa-hashtag" aria-hidden="true"></i> Explore
     </a>
     <a href="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <i class="fa-regular fa-asterisk"></i> Labs
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i class="fa-regular fa-bell"></i> Notifications
     </a>

     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
      <i class="fa-regular fa-envelope"></i> Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i class="fa-regular fa-bookmark"></i> Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <i class="fa-solid fa-table-list"></i> Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i class="fa-regular fa-user"></i> Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       <i class="fas fa-ellipsis"></i> More
     </a>
   </div>
 );
};
export default NavigationSidebar;