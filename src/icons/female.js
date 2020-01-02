import React from 'react';
import PropTypes from 'prop-types';

const Female = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M376.264,290.173c66.314-66.293,66.314-174.16,0-240.453c-66.314-66.294-174.214-66.294-240.529,0
			c-66.314,66.293-66.314,174.16,0,240.453c28.07,28.061,63.591,44.24,100.254,48.546v56.923h-40.018
			c-11.051,0-20.009,8.956-20.009,20.003s8.958,20.003,20.009,20.003h40.018v56.348c0.001,11.047,8.959,20.003,20.011,20.003
			c11.051,0,20.009-8.956,20.009-20.003v-56.348h40.019c11.051,0,20.009-8.956,20.009-20.003s-8.958-20.003-20.009-20.003h-40.019
			V338.72C312.673,334.413,348.194,318.234,376.264,290.173z M164.033,261.884c-50.711-50.695-50.711-133.181,0-183.876
			c50.71-50.693,133.221-50.696,183.934,0c50.711,50.695,50.711,133.181,0,183.876C297.256,312.578,214.744,312.578,164.033,261.884
			z"/>
    </svg>
  );
};

Female.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Female.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Female;
