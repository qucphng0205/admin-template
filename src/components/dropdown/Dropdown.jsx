import React from 'react';
import styles from './dropdown.module.scss';

export const DropdownItem = ({ name, children, updateToggleCallback }) => {
  return (<div className={styles.dropdownItem} onClick={(event) => { event.preventDefault(); updateToggleCallback(name); }}>
    { children}
  </div>);
}

DropdownItem.defaultProps = {
  name: 'unknown',
  updateToggleCallback() { }
}

const DropdownMenu = ({ children }) => {
  return <div className={styles.dropdownMenu}>{children}</div>
}

const DropdownToggle = ({ children }) => {
  return <div className={styles.dropdownToggle}>{children}</div>
}

export class Dropdown extends React.Component {
  constructor(props) {
    console.log("Dropdown constructor called");
    super();
    this.dropdownRef = React.createRef();
    this.state = { title: props.initialTitle, open: false };
  }

  setOpen = (open) => {
    this.setState({ open: open });
  }

  onTitleChange = (title) => {
    this.setState({ title: title, open: false });
  }

  handleOpenChange = (event) => {
    event.preventDefault();
    this.setOpen(!this.state.open);
  }

  handleClickOutside = (event) => {
    if (this.state.open && this.dropdownRef && !this.dropdownRef.current.contains(event.target)) {
      this.setOpen(false);
    }
  }

  //TODO: Optimize
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.title != props.initialTitle) {
      return { title: props.initialTitle };
    }
    return null;
  }

  componentDidUpdate() {
    console.log("Dropdown componentDidUpdate called");
  }

  render() {
    const { children, className } = this.props;
    const childrenWithProps = React.Children.map(children, (child) => {
      const props = { updateToggleCallback: this.onTitleChange };
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    });

    return (<div className={`${styles.dropdown} ${className}`} onClick={this.handleOpenChange} ref={this.dropdownRef}>
      <DropdownToggle>{this.state.title}</DropdownToggle>
      {(this.state.open &&
        <DropdownMenu>
          {childrenWithProps}
        </DropdownMenu>
      )}
    </div>);
  }
}

Dropdown.defaultProps = {
  className: '',
}