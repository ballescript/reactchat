import React from "react";



function UserTable(){




    const users = ["jesus", "maria", "jose"];
    const table = [];

    for(var i = 0; i < users.length; i++){
        table.push(<div><button onClick={()=>alert("was clicked")}
        >{users[i]}</button></div>)
    }

    return(
        <div id="stage">
<div id="traveler">

<div class="bouncer">{table}</div>
</div>
</div>
        
    );
}

export default UserTable;