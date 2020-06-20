// import React from 'react'
// // import {actions, Field, Control, Errors, Form, track} from 'react-redux-form'
// // import {sendEmail} from '../actions/contact'
// // import { hideContactForm } from '../actions/portfolio'

// const required = (val) => val && val.length

// class ContactForm extends React.Component {

//   constructor (props) {
//     super(props)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit (input) {
//     const { dispatch } = this.props
//     dispatch(sendEmail(input.name, input.message, input.email, input.message))
//     dispatch(actions.reset('form_message'))
//     dispatch(hideContactForm())
//     window.scrollTo(0, 0)
//   }

//   render(props) {
//     return (
//       <React.Fragment>
//         <p>Interested in working with me? If so, send me a message.</p>
//         <Form model="form_message" onSubmit={this.handleSubmit}>
//           <div className="field">
//             <label className="label">Name:</label>
//               <div className="control">
//                 <Control.text
//                     model=".name" className="input has-background-white-ter"
//                     validators={{
//                     required
//                     }}
//                 />
//                 <Errors
//                     className="help has-text-info"
//                     model=".name"
//                     show="touched"
//                     messages={{
//                     required: 'Required'
//                     }}
//                 />
//               </div>
//           </div>

//           <div className="field">
//             <label className="label">Subject:</label>
//               <div className="control">
//                 <Control.text
//                     model=".subject" className="input has-background-white-ter"
//                     validators={{
//                     required
//                     }}
//                 />
//                 <Errors
//                     className="help has-text-info"
//                     model=".subject"
//                     show="touched"
//                     messages={{
//                     required: 'Required'
//                     }}
//                 />
//               </div>
//             </div>


//             <div className="field">
//               <label className="label">Email:</label>
//               <div className="control has-icons-left">
//                 <Control.text
//                     model=".email" className="input has-background-white-ter"
//                     validators={{
//                     required,
//                     validEmail: (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
//                     }}
//                 />
//                 <span className="icon is-small is-left">
//                   <i className="fa fa-envelope"></i>
//                 </span>
//                 <Errors
//                     className="help has-text-info"
//                     model=".email"
//                     show="touched"
//                     messages={{
//                       required: 'Required\n',
//                       validEmail: 'Invalid email address',
//                     }}
//                 />
//               </div>
//             </div>


//             <div className="field">
//               <label className="label">Message:</label>
//               <div className="control">
//                 <Control.textarea
//                     model=".message" className="textarea has-background-white-ter"
//                     validators={{
//                     required
//                     }}
//                 />
//                 <Errors
//                     className="help has-text-info"
//                     model=".message"
//                     show="touched"
//                     messages={{
//                     required: 'Required',
//                     }}
//                 />
//               </div>
//             </div>

//             <div className="control">
//               <button className="button is-link" type="submit">
//                 Submit
//               </button>
//             </div>

//         </Form>
//       </React.Fragment>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {portfolio: state.portfolio}
// }

// export default connect(mapStateToProps)(ContactForm)