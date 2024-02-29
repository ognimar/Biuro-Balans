import "./Para.modules.css";

export default function Para(props) {
  const classes = "p" + props.className;
  return <div className="p">{props.children}</div>;
}
