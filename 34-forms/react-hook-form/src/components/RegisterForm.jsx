import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(20, 'First name must not exceed 20 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(20, 'Last name must not exceed 20 characters'),
  subscribe: yup.string().required('Choose any subscribe'),
  gender: yup.string().required('Choose any gender'),
  birthday: yup.date().typeError('Birthday is required').required(),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  email: yup.string().required('Email is required').email('Invalid email format'),
})

export const RegisterForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    navigate('/user')
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Name</label>
        <input type="text" id="firstName" {...register('firstName')} />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register('lastName')} />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="subscribe">Subscribe</label>
        <select id="subscribe" {...register('subscribe')}>
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        {errors.subscribe && <p className="error-message">{errors.subscribe.message}</p>}
      </div>

      <div className="gender-container">
        <span>Gender</span>
        <div>
          <label>
            <input type="radio" value="male" {...register('gender')} />
            Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender')} />
            Female
          </label>
          <label>
            <input type="radio" value="other" {...register('gender')} />
            Other
          </label>
        </div>
        {errors.gender && <p className="error-message">{errors.gender.message}</p>}
      </div>

      <div>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday" {...register('birthday')} />
        {errors.birthday && <p className="error-message">{errors.birthday.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register('confirmPassword')} />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  )
}
