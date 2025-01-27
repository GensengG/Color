// import { Component } from 'react';
import { Star } from './Star.tsx';
import { starItem } from "../src/index.ts"

export const Stars = () => {
let count:number = 3;
let starsArr:starItem[] = [];
function starsFunk(count: number){
    starsArr = [];
    for(let i = 0; i < count; i += 1){
        starsArr.push(<Star key={i}/>);
    }
};

if(count < 6 && count > 0){
    starsFunk(count);
    return (
        <ul className="card-body-stars u-clearfix">
            {starsArr}
        </ul>
    );
}else {
    return (
        <ul className="card-body-stars u-clearfix">
        </ul>
    )
}

}

export default Stars