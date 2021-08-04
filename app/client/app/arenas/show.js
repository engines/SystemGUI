app.arenas.show = (route) => (a,x) => [
  app.fetch({
    url: `/api/arenas/@${route.params.arenaIdentifier}`,
    placeholder: app.spinner(`Loading ${route.params.arenaIdentifier}`),
    success: (arena) => [
      app.float({
        left: [
          a.i([
            a.h3([
              (arena.about || {}).title || app.placeholder('No title')
            ]),
            a.p((arena.about || {}).explanation || app.placeholder('No explanation')),
          ]),
        ],
        right: [
          app.button({
            label: app.icon('fas fa-edit', 'Edit'),
            onclick: () => route.open('edit'),
          }),
        ],
      }),
      app.report({
        object: arena,
        report: r => [
          r.field({
            key: 'bindings',
            collection: true,
            ingest: value => (value || []).map(item => item.target_identifier),
          }),
          r.field({
            key: 'configuration',
            as: 'table',
            ingest: value => Object.keys(value || {}).map(key => ({key: key, value: value[key]})),
            report: rr => [
              rr.field({
                key: 'key',
              }),
              rr.field({
                key: 'value',
              }),
            ],
          }),
          r.field({
            key: 'domain',
            as: 'one',
            report: rr => [
              rr.field({
                key: 'identifier',
                label: false,
              }),
            ]
          }),
        ]
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-microscope', 'Resolve'),
            title: 'Resolve arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/resolve`),
          }),
          app.button({
            label: app.icon('fas fa-suitcase', 'Pack'),
            title: 'Pack arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/pack`),
          }),
          app.button({
            label: app.icon('fas fa-luggage-cart', 'Provision'),
            title: 'Provision arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/provision`),
          }),
          ' ',
          app.button({
            label: app.icon('far fa-flag', 'Init'),
            title: 'Init arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/init`),
          }),
          app.button({
            label: app.icon('fas fa-flag', 'Plan'),
            title: 'Plan arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/plan`),
          }),
          app.button({
            label: app.icon('fas fa-flag-checkered', 'Apply'),
            title: 'Apply arena',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/apply`),
          }),
        ],
        right: [
          app.button({
            label: app.icon('fa fa-trash'),
            title: 'Delete arena',
            class: 'btn btn-outline-danger',
            onclick: () => route.open(`/arenas/@${route.params.arenaIdentifier}/delete`),
          }),
        ],
      }),
    ]
  }),
]
