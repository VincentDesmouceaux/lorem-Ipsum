import Title from "./Title";
import Description from "./Description";
const Content = (props) => {
  return (
    <div className="color">
      <Title name={props.title} />
      <Description name={props.description} />
    </div>
  );
};

export default Content;
