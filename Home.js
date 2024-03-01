import React from 'react';

function Home(props) {
    return (
        <div>
            <h1>Welcome to Training - {props.name} {props.age} {props.obj.department} - {props.obj.college} {props.Arr.map((data)=>{return(<li>{data}</li>)})}</h1>
        </div>
    );
}

export default Home;