import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const navbarStyle = {
  backgroundColor: "lightblue",
};

function Header({ title }) {
  return (
    <Navbar data-bs-theme="light" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
