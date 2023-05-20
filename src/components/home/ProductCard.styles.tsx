import { styled } from "@stitches/react";

const ProductCardItem = styled("div", {
  position: "relative",
  minWidth: "30%",
  height: "15rem",
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  "&:hover": {
    cursor: "pointer",
  },
});

const Picture = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",

  "&:hover": {
    transform: "scale(1.025)",
    transition: "all 500ms ease-in-out",
  },
});

const CardBackground = styled("div", {
  opacity: "0.9",
  overflow: "hidden",
});

const Body = styled("div", {
  height: "90px",
  padding: "0 25px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
  opacity: "0.7",
  position: "absolute",

  "& p": {
    fontWeight: "normal",
    fontSize: "16px",
  },
});

const Title = styled("h2", {
  fontWeight: "bold",
  margin: "0 4px 0",
  fontSize: "22px",
  color: "#4a4a4a",
  textTransform: "uppercase",
});

export { ProductCardItem, CardBackground, Picture, Body, Title };
