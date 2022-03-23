import "./Card.css";
import { CardDetails } from "./CardDetails";

export const Card = ({givenName,surname,avatar,email,phone,house,street,suburb,state,postCode,country}:CardDetails) =>{
    return(
        <div className="vcard">
            <div className="card-header">
                <h2 className="fn">{givenName} {surname}</h2>
                <img className="photo" alt="User Avatar" src={avatar}/>
            </div>
            <div className="card-body">
                <div className="card-section">
                    <h5 className="section-title">EMAIL</h5>
                    <h4 className="email">{email}</h4>
                </div>
                <div className="card-section">
                    <h5 className="section-title">PHONE</h5>
                    <h4 className="tel">{phone}</h4>
                </div>
                <span className="adr">
                    <div className="card-section">
                        <h5 className="section-title">ADDRESS</h5>
                            <h4 className="street-address">{house} {street}</h4>
                    </div>
                    <div className="card-section">
                        <h4 className="address-line-two">
                            <span className="locality">{suburb ? suburb+", ": ""}</span>
                            <span className="region">{state}</span>
                        </h4>
                    </div>
                </span>
                <div className="card-section">
                    <div className="half-section">
                        <h5 className="section-title">POSTCODE</h5>
                        <h4 className="postal-code">{postCode}</h4>
                    </div>
                    <div className="half-section">
                        <h5 className="section-title">COUNTRY</h5>
                        <h4 className="country-name">{country}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;