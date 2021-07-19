app.admin.blueprints.icon.edit = (route) => (a, x) => [
  a.h3('Icon'),
  app.float({
    left: [
      a({
        $tag: 'div',
        // style: 'display: inline-block; vertical-align: middle;',
        id: 'iconFrame',
        $nodes: (el) => [
          a.div([
            a.img([], {
              src: `/api/blueprints/${route.params.blueprintIdentifier}/icon/bordered?uuid=${x.lib.uuid.generate()}`,
              height: '50',
              width: '50',
            }),
            a.img([], {
              src: `/api/blueprints/${route.params.blueprintIdentifier}/icon/thumbnail?uuid=${x.lib.uuid.generate()}`,
              height: '0',
              width: '0',
            }),
          ], {
            class: 'p-1 d-inline-block align-middle',
          }),
          a.div([
            x.filepond({
              inputTag: {
                name: 'icon',
              },
              filepond: {
                credits: false,
                labelIdle: 'Drop icon file, or <span class="filepond--label-action">browse</span>.',
                labelTapToUndo: '',
                allowRevert: false,
                server: {
                  process: {
                    url: `/api/blueprints/${route.params.blueprintIdentifier}/icon`,
                    method: 'PUT',
                    onload: () => {
                      setTimeout(iconFrame.$render, 1000)
                    }
                  },
                }
              },
            })
          ], {
            style: 'width: 300px;',
            class: 'd-inline-block align-middle',
          }),
        ],
      }),

    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash', 'Delete icon'),
        onclick: () => route.open('delete'),
        class: 'btn btn-outline-danger',
      }),
    ],
  }),

  a.p(
    app.button({
      label: app.icon('fa fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }),
  )
]