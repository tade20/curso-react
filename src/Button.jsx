import PropTypes from 'prop-types'
export function Button(props){
    return <button>
        {props.text}
    </button>
}

Button.prototype = {
    text: PropTypes.string
}