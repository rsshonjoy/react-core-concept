const todoTitle = 'Call Family';
const todoDesc = "My name is Shonjoy Das. I'am a full stark web developer.";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card() {
    return (
        <div className="card">
            <h3 className="cardTitle">{todoTitle}</h3>
            <p className="cardDesc">{todoDesc}</p>
            <p className="cardFooter">{`${dateName} ${monthName} ${currentYear}`}</p>
        </div>
    );
}

export default Card;
