app.blueprints.design.blueprint.repositories.edit = (route, blueprint) => app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint,
  form: f => [
    f.field({
      key: 'repositories',
      as: 'many',
      singular: 'repository',
      addable: true,
      removeable: true,
      moveable: true,
      collection: true,
      form: f => [
        f.field({
          key: "url",
          label: 'URL',
          type: "url",
          required: true,
          horizontal: true,
        }),
        f.field({
          key: 'key',
          as: 'one',
          label: false,
          form: ff => [
            ff.field({
              key: "url",
              label: 'Key URL',
              type: "url",
              required: true,
              horizontal: true,
            }),
            ff.field({
              key: "id",
              label: 'Key ID',
              pattern: "[a-fA-F0-9]+",
              invalid: 'Please enter a hexadecimal string using characters a-f, A-F and 0-9.',
              required: true,
              horizontal: true,
            }),
          ]
        }),
      ],
    }),
  ],
  digest: (form) => {
    if (form.repositories.length) {
      blueprint.repositories = form.repositories
    } else {
      delete blueprint.repositories
    };
    return {model: blueprint};
  },
})
