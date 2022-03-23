import "./Input.css";
import { InputSectionProps } from "./InputProps";


export const InputSection = ({title,children}:InputSectionProps) =>{
    return(
        <div className="input-section">
            <div className="input-title">
                <h5>{title}</h5>
            </div>
            <div className="input-container">
                {children}
            </div>
        </div>
    )
}

export default InputSection;