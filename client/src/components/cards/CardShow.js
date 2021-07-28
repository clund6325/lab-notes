import { Card, Dropdown, DropdownButton, Image, Modal, } from 'react-bootstrap';
import CardForm from './CardForm';
import { useState } from 'react';
import { ColColor, OptButton, ColWrap, NewCol, CardPageGrid } from '../styledComponents/ColStyles';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CardShow = ({ ColId,  deleteCard, history, id, title, notes, end_time, updateCard, }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Card style={{ width: '15rem', marginBottom: "5px" }} key={id}>
        <Card.Body onClick={() => setShow(true)}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {notes}
          </Card.Text>
          <Card.Footer>
            {end_time}
          </Card.Footer>
        </Card.Body>
        <OptButton color="white">
          <DropdownButton
            variant="light" 
            align="end"
            title={
              <Image className="options" 
                src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1626999816/Options_tvohvn.png"
                width="30"
                height="12" 
                alt="options button"
              />
              }
              id="dropdown-basic-button">
            <Dropdown.Item eventKey={1}/>
              <CardForm
                ColId={ColId}
                id={id}
                title={title}
                notes={notes}
                end_time={end_time}
                history={history}
                updateCard={updateCard}
              />
            <Dropdown.Item divider />
            <Dropdown.Item eventKey={2}>
              <Link onClick={() => deleteCard(ColId, id, history)}>Delete</Link>
            </Dropdown.Item>
          </DropdownButton>
        </OptButton>
        {/* <Button style={{backgroundColor: 'rgba(152, 71, 255, 0.06)', color: 'black'} } onClick={() => deleteCard(ColId, id, history)}>  */}
          {/* Delete
        </Button> */}
        
      </Card>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title} {end_time}
          </Modal.Title>
          <Modal.Body>
            {notes}
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default CardShow;