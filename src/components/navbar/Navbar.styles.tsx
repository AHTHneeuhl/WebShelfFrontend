import { styled } from "@stitches/react";

const Container = styled("nav", {
  margin: "0 auto",
  width: "96%",
  background: "$gray800",
  padding: "$3 $4",
  borderBottom: "1px solid $gray600",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const AppLogo = styled("h2", {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#087f5b",
  cursor: "pointer",
});

const Authentication = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

const AuthLink = styled("p", {
  color: "#000000",
  cursor: "pointer",
});

export { Container, AppLogo, Authentication, AuthLink };
