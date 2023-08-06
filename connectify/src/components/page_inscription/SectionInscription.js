import '../styles/main.css';
import InscriptionForm from './InscriptionForm';

function SectionInscrption (props) {
    return(
        <div className="section">
            <div className={props.cName}>
                <img src={props.sectImg} alt="" />
            </div>
            <div className="texte">
                <h2>{props.title}</h2>
                <InscriptionForm/>
            </div>
        </div>
    );
}

export default SectionInscrption; 
