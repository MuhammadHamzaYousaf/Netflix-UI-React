import React,{useRef, useState} from 'react';
import "./List.scss";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Listitem from '../listItem/Listitem';
const List = () => {
    
    const [slideNumber,setSlideNumber]=useState(0);
    const [isMoved,setIsMoved]=useState(false);

    const listRef = useRef()
    
    const handleClick=(direction)=>{
        setIsMoved(true);
        let distance =listRef.current.getBoundingClientRect().x - 50
        if(direction==="left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction==="right" && slideNumber < 5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className="list">
            <span className="listtitle">
                Continue to Watch
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className="siderarrow left"
                 onClick={()=>handleClick("left")}
                 style={{display:isMoved ? "" : "none"}}
                 />
                <div className="container" ref={listRef}>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    <Listitem/>
                    
                </div>
                <ArrowForwardIosOutlinedIcon className="siderarrow right" onClick={()=>handleClick("right")}/>
            </div>    
        </div>
    )
}

export default List
