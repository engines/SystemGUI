app.polling.check = (route, success, options = {}) =>
  a["app-polling-check"](
    [
      app.spinner("Checking server status"),
      a["app-polling-check-http"]
    ],
    {
      $init: (el) =>
        setTimeout(() => {
          el.$("app-polling-check-http").$nodes = [
            app.fetch({
              url: route,
              success: (response, el) => (success(response, el) || ''),
              when: {
                404: (response, el) => el.$("^app-polling").$wait(),
                503: (response, el) => el.$("^app-polling").$wait(),
                ...options.when,
              },
              catch: (error, el) => {
                el.$("^app-polling").$wait();
              },
            }),
          ];
        }, 2000),
    }
  );
