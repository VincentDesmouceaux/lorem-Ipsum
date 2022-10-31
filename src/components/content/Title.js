const Title = (props) => {
  console.log(props);

  return <h1 className={`title-size`}>{props.name}</h1>;
};

export default Title;
