import {Button, Modal} from 'react-bootstrap';
import { DayConsumer } from '../../providers/DayProvider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DayForm from './DayForm';
import { Cols }from '../cols/Cols';
import { ColConsumer } from '../../providers/ColProvider';

const DayShow = ({getAllDays, bookId, days, location, match, deleteDay, history, cols }) => {

  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [deleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);

  const destroyDay = () => { deleteDay(location.state.book_id, location.state.id);}

  useEffect( () => {
    getAllDays(bookId)
  }, [])
  
  
  // let incId = parseInt(match.params.id) + 1;
  // let decId = parseInt(match.params.id) - 1;

  return(
    <>
      {/* <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id + "/days/" + decId, state: {...days}}}><ArrowBackIosIcon/></Link>
      <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id, state: {days}}}><CalendarTodayIcon/></Link>
      <Link book_id={location.state.book_id} to={{pathname: "/books/" + location.state.book_id + "/days/" + incId, state: {...days}}}><ArrowForwardIosIcon/></Link> */}
      <ArrowBackIosIcon/>
      {' '}
      <CalendarTodayIcon/>
      {' '}
      <ArrowForwardIosIcon/>
      {' '}
      <text style={{fontWeight: "bold"}}>{location.state.day_date}</text>
    {/* <Container>
      <Row> 
        {
          items.map( i => 
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={i.pic} />
                <Card.Body>
                  <Card.Title>Title: {i.title}</Card.Title>
                  <Card.Text>
                    Author: {i.author}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Genre: {i.genre}</ListGroupItem>
                  <ListGroupItem>Item Type: {i.item_type}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>  
          )
        }
      </Row>
    </Container> */} 
    <h4>Col component</h4>
    <Cols dayId={match.params.id} />
    <br/>
    <br/>
    {' '}
    <Button variant="danger" onClick={() => handleDeleteShow()}>Delete</Button>
    {' '}
    <Modal show={deleteShow} onHide={handleDeleteClose}>
      <Modal.Header closeButton/>
      <Modal.Body>
        <h1>WARNING!!</h1> <p>IF YOU DELETE THIS DAY, YOU WILL DELETE ALL GOALS AND NOTES ASSOCIATED WITH THIS DAY. THIS ACTION CANNOT BE UNDONE.</p><p>CLICK "Confirm" TO CONTINUE. TO GO BACK, CLICK "Close".</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => destroyDay()}>Delete</Button>
        <Button variant="secondary" onClick={handleDeleteClose}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  )
}

const ConnectedDayShow = (props) => (
  <DayConsumer>
    { value => ( <DayShow {...props} {...value} /> )}
  </DayConsumer>
)


export default ConnectedDayShow;