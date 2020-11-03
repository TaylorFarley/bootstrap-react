import React, { useState } from 'react';

const Dummy = () => {
    const [fakedata,setFakeData] = useState([{id:1,record:'123'}])
    return (
        <div>
            {fakedata.map((x)=>{
                return <li>{x.record}</li>
            })}
        </div>
    );
};

export default Dummy;