import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header({ title }) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
