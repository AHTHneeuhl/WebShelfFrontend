import { styled } from "@stitches/react";

const Backdrop = styled("div", {
  position: "relative",
  display: "inline-block",
  zIndex: "$max",
  outline: "none",
  width: "100%",
  margin: "$9 auto",
  verticalAlign: "middle",
  opacity: 0.75,
});

export { Backdrop };
