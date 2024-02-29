import './Text.css';

export default function Text(props){
    const classes = "tt" + props.className;
    return <div className="tt">{props.children}</div>
}