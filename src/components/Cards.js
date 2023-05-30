import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  const {title , thumbnailUrl , showDataFunc , item} = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={()=>showDataFunc(item)}>Open</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;