app.blueprints.design.blueprint.bindingTarget.edit = (route, blueprint) => (a,x) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'binding_target',
      label: false,
      as: 'table',
      singular: 'parameter',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      control: {
        value: Object.keys(f.object.binding_target || {}).map((key) => ({
          key: key,
          value: f.object.binding_target[key],
        })),
      },
      form: (ff) => [
        ff.field({
          key: 'key',
          label: false,
          required: true,
          placeholder: 'Key',
        }),
        ff.field({
          key: 'value',
          label: false,
          placeholder: 'Value',
        }),
      ]
    }),
  ],
  digest: (form) => {
    if (form.binding_target.length) {
      let binding_target = {}
      for (let parameter of form.binding_target) {
        binding_target[parameter.key] = parameter.value
      }
      blueprint.binding_target = binding_target
    } else {
      delete blueprint.binding_target
    };
    return {model: blueprint};
  },
})
