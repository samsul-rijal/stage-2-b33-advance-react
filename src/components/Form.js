// import React Bootstrap components here
import {Form, Row, Col} from 'react-bootstrap'

import Dumbways from '../images/dw.png'

// import css modules
import cssModules from "./Form.module.css";

const styles = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
  },
};


function FormComponent() {
  return (
    <div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            style={styles.formInput}
          />
        </div>
        <div className={`bg-white ${cssModules.formGroup}`}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Input email"
            className={cssModules.formInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select id="gender" className="form-select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {/* code here */}

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="city" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="state" />
              </Form.Group>
            </Col>
          </Row>

          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>City</label>
              <input type="text" className='form-control' />
            </div>

            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>City</label>
              <input type="text" className='form-control' />
            </div>
            <img src={Dumbways} alt="" />
          </div>

      </form>
    </div>
  )
}

export default FormComponent
