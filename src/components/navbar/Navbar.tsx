import { AppLogo, AuthLink, Authentication, Container } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <AppLogo>WebShelf</AppLogo>
      <Authentication>
        <AuthLink>Sign Up</AuthLink>
        <AuthLink>Sign In</AuthLink>
      </Authentication>
    </Container>
  );
};

export default Navbar;
