app.blueprints.design.form.show = (route) => a.div([
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-edit', 'Edit'),
        onclick: (e) => route.open('edit'),
      }),
    ]
  }),
  a.hr,
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    placeholder: app.spinner('Loading blueprint form'),
    success: (form) => a.div([
      app.formDSL.builder.form({
        components: form.components,
        cancel: {
          icon: 'times',
          label: {display: 'custom', custom: 'Reset'},
          onclick: (e) => e.currentTarget.$('^ax-appkit-asyncform').$render(),
        },
        submit: {
          icon: 'check',
          label: {display: 'custom', custom: 'Test'},
        },
      }, {}, {
        authenticity: false,
        action: (submission) => {
          modal.$open({
            title: `Test ${route.params.blueprintIdentifier} form`,
            body: [submission.form.$output()],
          })
          return true
        },
      }),
      a.hr,
      app.button({
        label: '{} JSON',
        title: 'Raw form JSON',
        onclick: (e) => {
          modal.$open({
            title: `Raw ${route.params.blueprintIdentifier} form JSON`,
            body: [form],
          })
        },
      }),
    ]),
  }),
])
