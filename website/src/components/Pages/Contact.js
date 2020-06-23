import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*' },
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*' }
        ]
    ]
}

class Contact extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         message: ''
    //     }
    // }

    // submitForm = (e) => {
    //     alert("Form submitted. Thank you so much");
    // }

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, index) => {
                                            return (
                                                <Field
                                                    {...field}
                                                    key={index}
                                                    value={this.props.values[field.name]}
                                                    name={field.name}
                                                    onChange={this.props.handleChange}
                                                    onBlur={this.props.handleBlur}
                                                    touched={this.props.touched[field.name]}
                                                    errors={this.props.errors[field.name]}
                                                />)
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button
                                className="btn btn-primary btn-xl text-uppercase"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Your name should more than 3 characters.").required("You must give us your name."),
        email: Yup.string().email("You need to give us a valid email").required("We need your email"),
        phone: Yup.string().matches(/^[0-9]*$/, "Phone number should be digit")
            .min(10, "Phone number should be more than 10 digits")
            .max(15, "Your phone number is too long").required("we need your phone number"),
        message: Yup.string().min(100, "You need to provide us more detail information").required("Message is required")

    }),
    // validate: values => {
    //     const errors = {};
    //     Object.keys(values).map(v => {
    //         if (!values[v]) {
    //             errors[v] = "Required";
    //         }
    //     })
    //     return errors;
    // },
    handleSubmit: (values, { setSubmitting }) => {
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);



