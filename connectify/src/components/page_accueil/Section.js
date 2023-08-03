import '../styles/main.css';

function Section (props) {
    return(
        <div className="section">
            <div className={props.cName}>
                <img src={props.sectImg} alt="" />
            </div>
            <div className="texte">
                <h2>{props.title}</h2>
                <p>{props.texte}</p>
            </div>
        </div>
    );
}

export default Section ; 

