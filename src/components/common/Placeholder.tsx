import { styled } from "@stitches/react";

const Container = styled("div", {
  display: "grid",
  height: "100vh",
  placeItems: "center",
});

const Placeholder: React.FC = () => {
  return <Container>Coming Soon!</Container>;
};

export default Placeholder;
