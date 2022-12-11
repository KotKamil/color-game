import "../css/ColorPanel.css";

const ColorPanel = (props) => {
    return (
        <div className="ColorPanel" style={{ backgroundColor: props.color }}>
        </div>
    )
}

export default ColorPanel;