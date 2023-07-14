import PropTypes from 'prop-types';

function Button(styles) {
  const { style } = styles
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${style} rounded-[10px]`}>Get Started</button>
  )
}

Button.prototype = {
  style: PropTypes.string.isRequired,
}

export default Button