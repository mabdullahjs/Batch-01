import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import app from '../config/firebase/firebaseConfig';

function Navbars() {
  const auth = getAuth(app);

  //navigate
  const navigate = useNavigate();

  const logoutUser = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error)
    });
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/home')}>Haseeb-Learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
            <Nav.Link onClick={() => logoutUser()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;