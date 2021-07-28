import { useState, useEffect } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';
import { OptButton } from '../styledComponents/ColStyles';
import { Link } from 'react-router-dom';

  const CardForm = ({ addCard, id, ColId, title, end_time, notes, updateCard }) => {
    const [card, setCard] = useState({ title: "", end_time: "", notes: "" })
    const [show, setShow] = useState(false)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  useEffect( ()  => {
    if (id) {
      setCard({ title, end_time, notes, })
    }
  }, [])
    
 const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateCard(ColId, id, card )
      handleClose()
    } 
    else {
      addCard(ColId, card)
      handleClose()
    }
    setCard({ title: "", end_time: "", notes: "" })
  }
  
  return (
    <>
        { id ?
         <Link onClick={handleShow}>Edit</Link>  
         : 
         <OptButton onClick={handleShow}> 
          <Image className="add" 
            src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1627152011/Screen_Shot_2021-07-24_at_12.38.51_PM_jc5dfm.png"
            roundedCircle
            align='right'
            width="30"
            height="30" 
            alt="add"/>
          </OptButton>
        }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            { id ? "Edit Card": "Create a New Card" }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              name="title"
              value={card.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              placeholder="title"
              required
            />
            <Form.Control
              name="end_time"
              type="time"
              value={card.end_time}
              onChange={(e) => setCard({ ...card, end_time: e.target.value })}
              placeholder="end_time"
              required
              // type="datetime-local"
            />
            <Form.Control
              name="notes"
              value={card.notes}
              onChange={(e) => setCard({ ...card, notes: e.target.value })}
              placeholder="notes"
              required
              as="textarea"
            />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default CardForm;