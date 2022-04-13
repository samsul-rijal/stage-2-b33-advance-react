// create style here
const styles = {
  form: {
    margin: '16px'
  },
  formGroup: {
    marginBottom: '16px'
  },
  formLabel: {
    marginBottom: '8px',
    display: 'inline-block'
  },
  formInput: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    color: 'grey',
    backgroundColor: 'white',
    border: '1px solid grey',
    borderRadius: '5px'
  }
}

// create Form component
function Form() {
  return (
    // code inside div
    <div style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="" style={styles.formLabel}>Username</label>
        <input type="text" style={styles.formInput} placeholder="Input username" />
      </div>
    </div>
  )
}

export default Form
