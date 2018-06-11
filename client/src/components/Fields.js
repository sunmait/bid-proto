import React from 'react';
import { Field } from 'redux-form';
import {
  Form,
  Input as InputComponent,
  // Radio as RadioComponent,
  // Checkbox as CheckboxComponent,
  Select as SelectComponent,
  TextArea as TextAreaComponent,
  // Dropdown as DropdownComponent,
  Label
} from 'semantic-ui-react';

const InnerInputField = ({
  input,
  label,
  required,
  width,
  inline,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const InputField = props => <Field name={props.name} component={InnerInputField} {...props} />

const InnerTextAreaField = ({
  input,
  label,
  required,
  width,
  inline,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <TextAreaComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const TextAreaField = props => <Field name={props.name} component={InnerTextAreaField} {...props} />

export const LabelInputField = ({input, required, width, meta: { touched, error }, ...rest}) => ( //eslint-disable-line
  <Form.Field error={!!(touched && error)} required={required} width={width}>
    <InputComponent required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
)



export const TextArea = ({ input, required, meta: { touched, error }, ...rest }) => (
  <TextAreaComponent required={required} {...input} {...rest} />
);

const InnerSelectField = ({
  input,
  label,
  required,
  width,
  inline,
  options,
  meta: { touched, error },
  ...custom
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <SelectComponent
      search
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      {...custom}
    />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

export const SelectField = props => <Field name={props.name} component={InnerSelectField} {...props} />

// export const Select = ({
//   input,
//   required,
//   options,
//   meta: { touched, error },
//   ...rest
// }) => (
//   <SelectComponent
//     search
//     value={input.value}
//     required={required}
//     options={options}
//     onChange={(event, data) => input.onChange(data.value)}
//     {...rest}
//   />
// );

// export const ToggleField = ({ input, label, defaultChecked, width }) => (
//   <Form.Field
//     control={RadioComponent}
//     toggle
//     label={label}
//     checked={!!input.value}
//     defaultChecked={defaultChecked}
//     onClick={(event, data) => input.onChange(data.checked)}
//     width={width}
//   />
// );

// export const Toggle = ({ input, label, defaultChecked }) => (
//   <RadioComponent
//     toggle
//     label={label}
//     checked={!!input.value}
//     defaultChecked={defaultChecked}
//     onClick={(event, data) => input.onChange(data.checked)}
//   />
// );

// export const Radio = ({ input, label, meta: { touched, error }, ...custom }) => (
//   <RadioComponent
//     label={label}
//     checked={!!input.value}
//     onClick={(event, data) => input.onChange(data.checked)}
//     {...custom}
//   />
// );

// export const RadioField = ({ input, label, width, meta: { touched, error }, ...custom }) => (
//   <Form.Field
//     control={RadioComponent}
//     label={label}
//     width={width}
//     checked={!!input.value}
//     onClick={(event, data) => input.onChange(data.checked)}
//     {...custom}
//   />
// );

// export const Checkbox = ({ input, label, meta: { touched, error }, ...custom }) => (
//   <CheckboxComponent
//     label={label}
//     checked={!!input.value}
//     onClick={(event, data) => input.onChange(data.checked)}
//     {...custom}
//   />
// );

// export const CheckboxField = ({
//   input,
//   label,
//   width,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <Form.Field
//     control={CheckboxComponent}
//     label={label}
//     width={width}
//     checked={!!input.value}
//     onClick={(event, data) => input.onChange(data.checked)}
//     {...custom}
//   />
// );

// export const RangeField = ({
//   input,
//   label,
//   width,
//   inline,
//   min,
//   max,
//   required,
//   meta: { touched, error },
//   ...rest
// }) => (
//   <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
//     <label>
//       {label} : {input.value}
//     </label>
//     <input type="range" required={required} min={min} max={max} {...input} {...rest} />
//     {touched && error ? (
//       <Label basic color="red" pointing>
//         {error}
//       </Label>
//     ) : null}
//   </Form.Field>
// );

// export const Range = ({
//   input,
//   min,
//   max,
//   required,
//   meta: { touched, error },
//   ...rest
// }) => (
//   <input type="range" required={required} min={min} max={max} {...input} {...rest} />
// );

// export const DropdownField = ({
//   input,
//   label,
//   required,
//   width,
//   inline,
//   options,
//   meta: { touched, error },
//   ...custom
// }) => (
//   <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
//     {label && <label>{label}</label>}
//     <DropdownComponent
//       search
//       value={input.value}
//       required={required}
//       options={options}
//       onChange={(event, data) => input.onChange(data.value)}
//       {...custom}
//     />
//     {touched && error ? (
//       <Label basic color="red" pointing>
//         {error}
//       </Label>
//     ) : null}
//   </Form.Field>
// );

// export const Dropdown = ({
//   input,
//   required,
//   options,
//   meta: { touched, error },
//   ...rest
// }) => (
//   <DropdownComponent
//     search
//     value={input.value}
//     required={required}
//     options={options}
//     onChange={(event, data) => input.onChange(data.value)}
//     {...rest}
//   />
// );

// export const UploadField = ({
//   label,
//   input,
//   required,
//   width,
//   inline,
//   meta: { touched, error },
//   ...rest
// }) => {
//   delete input.value; //Delete value from input
//   return (
//     <Form.Field error={touched && error} required={required} width={width} inline={inline}>
//       {label && <label>{label}</label>}
//       <InputComponent
//         type="file"
//         {...input}
//         {...rest}
//       />
//       {touched && error ? (
//         <Label basic color="red" pointing>
//           {error}
//         </Label>
//       ) : null}
//     </Form.Field>
//   )
// };

// export const Upload = ({ input, required, meta: { touched, error }, ...rest }) => {
//   delete input.value;
//   return(
//     <InputComponent
//       required={required}
//       type="file"
//       {...input}
//       {...rest}
//     />
//   )
// };