app.blueprints.design.specification.about.edit = (route, specification) =>
app.blueprints.design.specification.form({
  route: route,
  object: specification,
  form: f => [
    f.field({
      key: 'about',
      as: 'one',
      form: ff => [
        ff.field({
          key: 'title',
        }),
        ff.field({
          key: 'explanation',
        }),
      ],
    }),
  ],
  update: (form) => {
    let about = app.compact(form.about)
    if (Object.keys(about).length) {
      specification.about = about
    } else {
      delete specification.about
    };
    return {specification: specification};
  },
})