import {useState} from "react";

export const ColorForm = () => {
    let [state, setState] = useState("");
    let result: string = "";
    
    const handleChange = (e) => {
        let valueStart = e.target.value;
        if((valueStart.length === 7) && (valueStart[0] === "#")){
            let withoutFirst: string = valueStart.slice(1);
            let r = withoutFirst.slice(0,2);
            let g = withoutFirst.slice(2,4);
            let b = withoutFirst.slice(4,6);
            result = "rgb(" + parseInt(r, 16) + "," + parseInt(g, 16) + "," + parseInt(b, 16) + ")";
        } else if (valueStart.length > 7){
            result = "Ошибка!";
        } 
        setState(result);
    };

    return (
        <div className="color__background" style={{backgroundColor:state, height:"100vh"}}>
            <div className="color__interface">    
                <input 
                    type="text"
                    className="color__input"
                    onChange = {handleChange}
                ></input>
                <div className="color__result" style={{backgroundColor:state}}>
                    {state}
                </div>
            </div>
        </div>
    )
}
