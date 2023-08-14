import '../styles/main.css';

function SectionQsn(props) {
    return (
        <div className="sectionQsn">
            <div className="texteQsn">
                <h2>{props.title}</h2>
                <p>{props.texte}</p>
            </div>
            <div className={props.cName}>
                <img src={props.sectImg} alt="" />
            </div>
        </div>
    );
}

export default SectionQsn;

