app.close = (router) => (a, x) =>
  a["div.float-right"](
    app.button({
      label: app.icon("fa fa-times", "Close"),
      onclick: () => router.open('..'),
    })
  );
