import "../css/GameButton.css"

const GameButton = (props) => {
    return (
        <button onClick={() => props.handleClick(props.color)}>{props.color}</button>
    )
}

export default GameButton;