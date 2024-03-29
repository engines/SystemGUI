app.blueprints.design.blueprint.images.form =
(f) => [
  f.field({
    key: 'runtimes',
    horizontal: true,
    as: 'select',
    required: true,
    placeholder: 'Select a runtime',
    selections: {
      docker: 'Docker',
      aws_ec2: 'AWS EC2',
    },
    collection: true,
    addable: true,
    removeable: true,
    moveable: true,
  }),
  f.field({
    key: 'identifier',
    horizontal: true,
    required: true,
  }),
  f.field({
    key: 'target_identifier',
    horizontal: true,
  }),
]
