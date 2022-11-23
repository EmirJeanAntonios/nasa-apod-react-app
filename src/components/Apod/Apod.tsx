import classNames from "classnames";
import logo from "../../assets/nasa.svg"
import "./Apod.scss";
interface Props {
  explanation: string | undefined;
  title: string | undefined;
  background: string | undefined;
  className?: string;
}

const Apod = ({ explanation, title, background, className }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${(/\.(gif|jpg|jpeg|tiff|png)$/i).test(background || "") ? background : logo})` }}
      className={classNames("apod", className)}
    >
      <div className="content">
        <h2>{title}</h2>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default Apod;
