// import package for property types
import { PropTypes } from "prop-types";

// create component here

// define property type for this component here
function DetailAbout(props) {
  return (
    <div>
        <h1>name : {props.name}</h1>
        <h1>email : {props.email}</h1>
        <h1>old : {props.old}</h1>
    </div>
  )
}



export default DetailAbout

DetailAbout.propTypes= {
    name : PropTypes.string.isRequired,
    email : PropTypes.string,
    old : PropTypes.number,
}