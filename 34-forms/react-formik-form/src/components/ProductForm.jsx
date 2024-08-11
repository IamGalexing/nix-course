import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

export const ProductForm = () => {
  const [isSubmitted, setSubmitted] = useState(false)
  const initialValues = {
    title: '',
    description: '',
    isFavorite: '',
    category: '',
    shop: '',
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(5, 'Title must be at least 5 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(5, 'Description must have at least 5 characters')
      .max(50, 'Description cannot exceed 50 characters'),
    isFavorite: Yup.string().required('IsFavorite is required'),
    category: Yup.string().required('Please select a category'),
    shop: Yup.string().required('Shop is required').min(5, 'Shop name must be at least 5 characters'),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage className="error-message" name="title" component="div" />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <Field as="textarea" id="description" name="description" />
              <ErrorMessage className="error-message" name="description" component="div" />
            </div>

            <div>
              Is Favorite
              <label>
                <Field type="radio" name="isFavorite" value="yes" /> Yes
              </label>
              <label>
                <Field type="radio" name="isFavorite" value="no" /> No
              </label>
              <ErrorMessage className="error-message" name="isFavorite" component="div" />
            </div>

            <div>
              <label htmlFor="category">Categories</label>
              <Field as="select" id="category" name="category">
                <option value="">Select...</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </Field>
              <ErrorMessage className="error-message" name="category" component="div" />
            </div>

            <div>
              <label htmlFor="shop">Shop</label>
              <Field type="text" id="shop" name="shop" />
              <ErrorMessage className="error-message" name="shop" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {isSubmitted ? <p>Form values submitted successfully</p> : ''}
    </>
  )
}
