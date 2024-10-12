import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { addContact } from "../redux/contactsSlice"
import { Field, Form, Formik } from "formik"

const AddContact = () => {
  const initialValues = { name: "", phone: "" }
  const dispatch = useDispatch()

  const onSubmit = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      phone: values.phone,
    }

    dispatch(addContact(newContact))
    options.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <Field
            type="text"
            name="phone"
            placeholder="Enter phone number"
          />
          <button type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddContact
