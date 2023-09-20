import { StyleProp, ViewStyle } from "react-native";
import { CardBody, CardFooter, CardHeader, CardStyled } from "./Card.style";

interface ICard {
  children: JSX.Element[] | JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style }: ICard) => {
  return <CardStyled style={style}>{children}</CardStyled>;
};

const Header = ({ children, style }: ICard) => {
  return <CardHeader style={style}>{children}</CardHeader>;
};
Card.Header = Header;

const Body = ({ children, style }: ICard) => {
  return <CardBody style={style}>{children}</CardBody>;
};
Card.Body = Body;

const Footer = ({ children, style }: ICard) => {
  return <CardFooter style={style}>{children}</CardFooter>;
};
Card.Footer = Footer;

export default Card;
