import * as React from 'react';
import { Select, Form, Input } from 'semantic-ui-react';
import MaskedInput from 'react-text-mask';

export function FieldInput(props: any) {
  return (
    <Form.Field>
      <label>{props.label}</label>
      <Input
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChangeInput}
      />
    </Form.Field>
  );
}

export function FieldFileLoader(props: any) {
  return (
    <Form.Field>
      <label>{props.label}</label>
      <input
        type="file"
        name={props.name}
        // value={props.value ? props.value: ''}
        onChange={props.onChangeFile}
        multiple={false}
        accept="image/*"
      />
    </Form.Field>
  );
}

export function FieldMaskInput(props: any) {
  return (
    <Form.Field>
      <label>{props.label}</label>
      <MaskedInput
        placeholder={props.placeholder}
        name={props.name}
        mask={props.mask}
        onChange={props.onChangeInput}
      />
    </Form.Field>
  );
}

export function FieldSelect(props: any) {
  return (
    <Form.Field>
      <label>{props.label}</label>
      <Select
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
        disabled={props.disabled}
        onChange={props.onChangeSelect}
      />
    </Form.Field>
  );
}