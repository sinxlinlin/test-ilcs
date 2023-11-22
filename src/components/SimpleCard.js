import React from 'react';
import PropTypes from 'prop-types';

function SimpleCard({
  title,
  children,
  rightContent,
  footer,
  style,
  styleBody,
  styleFooter,
  className,
  classNameHeader,
}) {
  return (
    <div className={`card ${className}`} style={style}>
      {title == null ? (
        ''
      ) : (
        <div className="card-header">
          <h3 className={`card-title ${classNameHeader}`}>
            {title}
          </h3>
          {rightContent}
        </div>
      )}
      <div className="card-body" style={styleBody}>
        {children}
      </div>
      {footer == null ? (
        ''
      ) : (
        <div className="card-footer" style={styleFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}

SimpleCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  rightContent: PropTypes.node,
  footer: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
  styleBody: PropTypes.oneOfType([PropTypes.object]),
  styleFooter: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  classNameHeader: PropTypes.string,
};

SimpleCard.defaultProps = {
  title: null,
  children: null,
  rightContent: null,
  footer: null,
  style: null,
  styleBody: null,
  styleFooter: null,
  className: '',
  classNameHeader: '',
};

export default SimpleCard;