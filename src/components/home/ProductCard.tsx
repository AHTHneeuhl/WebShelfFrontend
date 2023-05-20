import { useNavigate } from "react-router-dom";
import {
  Body,
  CardBackground,
  Picture,
  ProductCardItem,
  Title,
} from "./ProductCard.styles";

type TProps = {
  name: string;
  picture: string;
  path: string;
};

const ProductCard: React.FC<TProps> = ({ name, picture, path }) => {
  const navigate = useNavigate();
  return (
    <ProductCardItem>
      <CardBackground>
        <Picture src={picture} alt={name} />
      </CardBackground>
      <Body onClick={() => navigate(path)}>
        <Title>{name}</Title>
        <p>SHOP NOW</p>
      </Body>
    </ProductCardItem>
  );
};

export default ProductCard;
