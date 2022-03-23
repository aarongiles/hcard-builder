import { InputProps } from "./InputProps";
import "./Input.css";

export const Input = ({label,value,onChange,type,id}:InputProps) =>{
    return(
        <div className="input-details">
            <label className="input-label">{label}</label>
            <input id={id} className="input-box" type={type ?? "text"} value={value} onChange={(event) => onChange(event.target.value)}/>
        </div>
    )
}

export default Input;