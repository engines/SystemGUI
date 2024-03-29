app.button = (options = {}) => 
  x.button({
    ...options,
    buttonTag: {
      id: options.id,
      class: options.class || "btn app-btn",
      disabled: options.disabled,
      title: options.title,
      data: options.data,
      ...options.buttonTag,
    },
  });
