import '../styles/main.css';

function SectionContact (props) {
    return(
        <div className="section">
            <div className={props.cName}>
                <img src={props.sectImg} alt="" />
            </div>
            <div className="texte">
                <h2>{props.title}</h2>
                
            </div>
        </div>
    );
}

export default SectionContact ; 

