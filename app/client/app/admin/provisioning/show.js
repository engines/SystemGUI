app.admin.provisioning.show = (router) => (a, x) => a.div([
  app.fetch({
    url: `/api/provisioning/${router.params.resolution_id}`,
    placeholder: app.spinner('Loading provisions'),
    success: (provisions, el) => [
      app.float({
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open(`/admin/provisioning/${router.params.resolution_id}/delete`),
            class: "btn btn-outline-danger",
          }),
        ]
      }),
      a.hr,
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-truck-loading", "Artifact"),
            onclick: () => router.open(`artifact`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-drafting-compass", "Resolution"),
            onclick: () => router.open(`/admin/resolutions/${router.params.resolution_id}`),
          }),
        ],
      }),
      a.hr,
      x.out(provisions),
    ],
  }),
]);
