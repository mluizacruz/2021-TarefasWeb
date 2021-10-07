import React from "react";

const AppCardBullets = ({date, bullets}) => (
    <div>
      <hr></hr>
      <h5>
        {date}
      </h5>
      <ul>
        {bullets.map (bullet =>(<li><strong>{bullet.type}</strong> {bullet.title}</li>))}
      </ul>
      <hr></hr>
    </div>
    );
    
export default AppCardBullets;