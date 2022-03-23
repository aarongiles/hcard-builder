import { useRef, useState } from "react";
import "./CardBuilderPage.css";
import defaultAvatar from "../default_avatar.PNG";
import { CardDetails } from "../hCard/CardDetails";
import InputSection from "../Input/InputSection.tsx";
import Input from "../Input/Input.tsx";
import Card from "../hCard/Card.tsx";
import { inputFields } from "./InputFields.ts";

export const CardBuilderPage = () =>{

  const[details,setDetails] = useState<CardDetails>(
      {
          givenName:"",
          surname:"",
          avatar:defaultAvatar,
          email:"",
          phone:"",
          house:"",
          street:"",
          suburb:"",
          state:"",
          postCode:"",
          country:""
      }
  );

  const fileInputRef = useRef(null);

  const handleUpload = (event) =>{
      fileInputRef.current.click();
      setDetails({...details, ["avatar"]:URL.createObjectURL(event.target.files[0])})
  }

  const handleCreate = () =>{
      console.log(details)
      //do something with our hCard
  }

  return (
    <div className="card-builder-container">
      <div className="card-builder-form">
        <h1 className="main-title">hCard Builder</h1>
        {inputFields.map((section)=>(
            <InputSection key={`section-${section.sectionTitle}`} title={section.sectionTitle}>
                 {section.inputs.map((input)=>(
                <Input 
                    label={input.label} 
                    value={details[input.mapped]} 
                    onChange={(changed)=>{
                        setDetails({...details, [input.mapped]:changed})
                    }}
                    key={`input-${input.mapped}`}
                />
                ))}
            </InputSection>
        ))}
        <div className="buttons-container">
            <input hidden ref={fileInputRef} type="file" onChange={(event)=> handleUpload(event)}/>
            <button className="upload-button" onClick={handleUpload}>
                Upload Avatar
            </button>
            <button className="create-button" onClick={handleCreate}>
                Create hCard
            </button>
        </div>
      </div>

      <div className="card-builder-preview">
          <div className="card-container">
            <h3 className="preview-title">HCARD PREVIEW</h3>
            <Card {...details}/>
        </div>
      </div>
    </div>
  );
}

export default CardBuilderPage;