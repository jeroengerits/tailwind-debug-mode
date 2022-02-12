const plugin = require('tailwindcss/plugin')

const debug = plugin.withOptions(function (
  options = {
    wireColor: 'black',
    textColor: 'transparent',
    svgColor: 'black',
  }
) {
  return function ({ addComponents, theme }) {
    // Inspired by: https://github.com/jorenvanhee/tailwindcss-debug-screens
    const screens = {
      [`body.debug::before`]: Object.assign({
        content: `'<sm'`,
        bottom: '0 !important',
        right: '0 !important',
        margin: '.5rem !important',
        border: 'none !important',
        outline: 'none !important',
        fontSize: '25px !important',
        position: 'fixed !important',
        borderRadius: '1rem !important',
        height: '50px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'end !important',
        background: `${options.wireColor} !important`,
        padding: '0 1rem !important',
        fontWeight: '500 !important',
        boxShadow: 'none !important',
        textAlign: 'right !important',
        zIndex: '2147483647 !important',
        textTransform: 'uppercase !important',
        color: `white !important`,
      }),
    }

    Object.entries(theme('screens')).forEach(
      ([screen]) =>
        (screens[`@screen ${screen}`] = {
          [`body.debug::before`]: {
            content: `'${screen}'`,
          },
        })
    )

    // Inspired by: https://twitter.com/w3bits_/status/1443901426292326407
    const wires = {
      'body.debug img': {
        opacity: '0 !important',
        filter: 'grayscale(100) !important',
        transition: 'all .5s ease-in-out !important',
      },
      'body.debug img:hover': {
        opacity: '0.5 !important',
      },
      'body.debug *, body.debug *::before, body.debug *::after, body.debug, body.debug::before, body.debug::after':
        {
          userDrag: 'none !important',
          textShadow: 'none !important',
          userSelect: 'none !important',
          borderColor: 'transparent !important',
          background: 'none #fbfbf8 !important',
          transition: 'all .5s ease-in-out !important',
          color: `transparent !important`,
          outline: `1px solid ${options.wireColor} !important`,
        },
      'body.debug *:hover > *': {
        color: `${options.textColor} !important`,
        zIndex: '1000 !important',
        outline: `2px solid ${options.wireColor} !important`,
      },
      'body.debug svg, body.debug svg:hover': {
        outline: 'none !important',
        boxShadow: 'none !important',
      },
      'body.debug svg *, body.debug svg *:hover': {
        color: `${options.svgColor} !important`,
        outline: 'none !important',
        boxShadow: 'none !important',
      },
      'body.debug input, body.debug input:hover': {
        backgroundColor: `${options.inputColor} !important`,
        outline: 'none !important',
        boxShadow: 'none !important',
      },
    }
    addComponents([wires, screens])
  }
})

module.exports = debug
