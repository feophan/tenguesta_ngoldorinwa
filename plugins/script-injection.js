export default function myScriptInjection() {
  return {
    name: 'my-script-injection',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('page', `import "/src/scripts/id-creator.js";`);
      },
    },
  };
}