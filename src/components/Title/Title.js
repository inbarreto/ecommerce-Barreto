export const Title = (props) => {

  return <h1 onClick={props.onTitle}>{props.text || "React"}</h1>;
};
