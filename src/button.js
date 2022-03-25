import PropTypes from 'prop-types';

//create a const of a button that takes in various props and can be used anywhere I want with different functions attached to each
//setting the return of this to have the onClick fn, the color and some text I can pass in each time I use it
const Button = ({ color, text, onClick }) => {

    return (
        <button 
            onClick={onClick} 
            style={{ backgroundColor: color }} 
            className="btn">
            {text}
        </button>
    )
}
//sets a default color just so I can see it working
Button.defaultProps = {
    color: 'blue'
}
//these propTypes are here to give a warning in console that I have not passed props in correctly, including defaults
//only works in dev mode-ignored during a full build-will use this more in the future to check myself when passing props
//left in because it isn't harming the app
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button