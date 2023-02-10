import { Group, FormInputLabel, Input } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {/* input is above because of styling solution to shrink on focus */}
      {label && ( //if label exists renders label
        <FormInputLabel shrink={otherProps.value.length}>{/* if user types in adds shrink class */}
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput