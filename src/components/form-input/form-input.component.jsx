import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* input is above because of styling solution to shrink on focus */}
      {label && ( //if label exists renders label
        <label className={`
          ${otherProps.value.length > 0 ? 'shrink' : null} form-input-label
        `}>
        {/* if user types in adds shrink class */}
          {label}
        </label>
      )}
      <label className={`
        ${otherProps.value.length > 0 ? 'shrink' : null} form-input-label
      `}>
        {label}
      </label>
    </div>
  )
}

export default FormInput