import React from 'react';
import "./navbox.scss";

const STYLES = {
  hoverBlack: 'navbox--block',
  hoverPrimary: 'navbox--primary',
}

const NavBox = ({ text, textFirst, icon, onlyIcon, className, variant, iconSize }) => {
  const Icon = icon;
  const setButtonStyle = STYLES[variant] ? STYLES[variant] : STYLES['hoverBlack'];

  return (
    <div className={`navbox navbox--black ${setButtonStyle} ${className}`}>
      {
        textFirst ? (
          <React.Fragment>
            {!onlyIcon ? (<p className="navbox__text">{text}</p>) : null}
            <Icon size={iconSize} color='var(--color-text)' className='navbox__icon' />
          </React.Fragment>
        ) : (
            <React.Fragment>
              <Icon size={iconSize} color='var(--color-text)' className='navbox__icon' />
              {!onlyIcon ? (<p className="navbox__text">{text}</p>) : null}
            </React.Fragment>
          )
      }
    </div>
  )
}

NavBox.defaultProps = {
  iconSize: '2rem',
  onlyIcon: false,
  text: 'unknown',
  textFirst: false,
}

export default NavBox;