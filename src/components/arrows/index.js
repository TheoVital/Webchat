import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

export const PrevArrow = ({ className, style, onClick }) => (
  <div className={cx('RecastAppArrow prev', className)} style={{ ...style }} onClick={onClick}>
    {'<'}
  </div>
)

export const NextArrow = ({ className, style, onClick }) => (
  <div className={cx('RecastAppArrow next', className)} style={{ ...style }} onClick={onClick}>
    {'>'}
  </div>
)

const arrowPropTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

PrevArrow.propTypes = arrowPropTypes
NextArrow.propTypes = arrowPropTypes
