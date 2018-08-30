import React, { Fragment } from 'react';

const HeaderButton = ({content, className}) => {
  return (
    <Fragment>
      <button className={className}>{content}</button>
    </Fragment>
  )
}

export default HeaderButton;