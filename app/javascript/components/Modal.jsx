import React from 'react'
import ReactModal from 'react-modal'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Modal extends React.PureComponent {

  state = {showModal: false}

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleOpenModal = () => {
    this.setState({ showModal: true});
  }

  render() {
    console.log(this.state.showModal)
    return (
      <React.Fragment>

        <div className="navbar-item is-hidden-desktop burger-container">
          <button  className="burger" onClick={this.handleOpenModal} >
            <span className="icon title is-4">
              <i className="fa fa-bars has-text-link"></i>
            </span>
          </button>
        </div>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="Modal has-background-info"
          overlayClassName="Overlay"
          >
          <button className="button is-white is-pulled-right has-background-info" onClick={this.handleCloseModal}>
            <span className="icon has-text-white is-size-6"><i className="fa fa-times"></i></span>
          </button>

          <Link replace to="./"><button className="modal-item" onClick={this.handleCloseModal}>
            Home
          </button></ Link>
          <Link replace to="./projects"><button className="modal-item" onClick={this.handleCloseModal}>
            Projects
          </button></ Link>
          <Link  replace to="./about"><button className="modal-item"onClick={this.handleCloseModal}>
            About
          </button></ Link>
          <Link  replace to="./contact"><button className="modal-item" onClick={this.handleCloseModal}>
            Contact
          </button></ Link>
        </ReactModal>

      </React.Fragment>
  )}
}

export default Modal