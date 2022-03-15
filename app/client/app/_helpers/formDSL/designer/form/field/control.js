app.formDSL.designer.form.field.control = (f) => a['app-form-field-control']([
  f.field( {
    key: 'key',
    required: true,
    horizontal: true,
  } ),
  f.field( {
    key: 'control',
    label: 'Type',
    as: 'select',
    placeholder: 'Default',
    horizontal: true,
    selections: [
      // { value: 'string', label: 'String' },
      { value: 'select', label: 'Select' },
      { value: 'text', label: 'Text' },
      { disabled: 'hr' },
      { value: 'checkbox', label: 'Checkbox' },
      { value: 'checkboxes', label: 'Checkboxes' },
      { value: 'radios', label: 'Radio buttons' },
      { value: 'multiselect', label: 'Multiselect' },
      // { value: 'combobox', label: 'Combo box' },
      { disabled: 'hr' },
      // { value: 'hidden', label: 'Hidden' },
      { value: 'password', label: 'Password' },
      { disabled: 'hr' },
      { value: 'number', label: 'Number' },
      { value: 'url', label: 'URL' },
      { value: 'email', label: 'Email' },
      { value: 'color', label: 'Color' },
      { value: 'date', label: 'Date' },
      { value: 'tel', label: 'Telephone' },
      { value: 'time', label: 'Time' },
      { disabled: 'hr' },
      { value: 'markdown', label: 'Markdown' },
      { value: 'code', label: 'Code' },
      { disabled: 'hr' },
      { value: 'country', label: 'Country' },
      { value: 'language', label: 'Language' },
      { value: 'timezone', label: 'Timezone' },
      // { disabled: 'hr' },
      // { value: 'json', label: 'JSON' },
      // { disabled: 'hr' },
      // { value: 'one', label: 'One' },
      // { value: 'many', label: 'Many' },
      // { value: 'table', label: 'Table' },
    ],
  } ),
])
