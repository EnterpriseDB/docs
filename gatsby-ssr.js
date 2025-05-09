const React = require("react");

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(
    React.createElement("script", {
      key: "injectedDarkModeScript",
      dangerouslySetInnerHTML: {
        __html: `
          const storedDark = window.localStorage.getItem('dark');
          const inferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (storedDark === 'true' || (storedDark !== 'false' && inferredDark)) {
            document.documentElement.classList.add('dark');
            document.documentElement.dataset['bsTheme'] = 'dark';
          }
        `,
      },
    }),
  );
};
