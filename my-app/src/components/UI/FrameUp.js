import "./FrameUp.css";

export default function FrameUp(props){
    const classes = "cont" + props.className;
    return <div className="cont">{props.children}</div>
    
}