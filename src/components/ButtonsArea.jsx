import GameButton from "./GameButton";
import "../css/ButtonsArea.css";

const ButtonsArea = (props) => {
    const buttons = props.colors.map((color, index) => <GameButton key={index} color={color} handleClick={props.handleClick} />)
    return (
        <div className="ButtonsArea">
            {buttons}
        </div>
    )
}

export default ButtonsArea;