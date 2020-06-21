import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import {sendEmail} from '../actions/contact'
// import { hideContactForm } from '../actions/portfolio'


const Contact = () => (
  <React.Fragment>
    <p>Interested in working with me? If so, send me a message.</p>
    <Formik
      initialValues={{ name: '', subject: '', email: '', message: '' }}
      validate={values => {
        const fieldNames = ['name', 'subject', 'email', 'message']
        const errors = {};
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        Object.keys(values).map((fieldName) => {
          if (!values[fieldName]) {errors[fieldName] = 'Required'}
        })
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        fetch(`/api/v1/contact`, {
          method: 'post',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json'},
        }).
        then((response) => {
          alert('Email sent')

        })

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="field">
            <label className="label">Name:</label>
              <div className="control">
                <Field type="name" name="name" className="input has-background-white-ter" />
                <ErrorMessage name="name" component="div" className="help has-text-info" />
              </div>
          </div>

          <div className="field">
            <label className="label">Subject:</label>
              <div className="control">
                <Field type="subject" name="subject" className="input has-background-white-ter" />
                <ErrorMessage name="subject" component="div" className="help has-text-info" />
              </div>
          </div>

          <div className="field">
            <label className="label">Email:</label>
              <div className="control">
                <Field type="email" name="email" className="input has-background-white-ter" />
                <ErrorMessage name="email" component="div" className="help has-text-info" />
              </div>
          </div>

          <div className="field">
            <label className="label">Subject:</label>
              <div className="control">
                <Field type="message" name="message" className="input has-background-white-ter" />
                <ErrorMessage name="message" component="div" className="help has-text-info" />
              </div>
          </div>

          <div className="control">
            <button className="button is-link" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </React.Fragment>);

export default Contact;


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