export const Title = (props) => {
  console.log(props);
  return <h1 onClick={props.onTitle}>{props.text || "React"}</h1>;
};
