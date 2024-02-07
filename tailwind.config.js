/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      cursor: {
        'move': 'image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBnZPRDYIwEIav6AAd4dgAN9AN9NE33UAnQCZQN3ED3UBcgOAG9c0n6o8phmCBtl9yoRTuS+8PEDPPURsKRMRxrM0611qvSuDRT1FrnQghrjgNkwdR554hucOxI0ciy56E5AhJSg60M/h/KMSlqqotYlHkcYIfCHVpRuIggYFNuEmooJFYw3UVfLGFOxjiADfkU4dbhgpqSkgWXiN0YFQ6HXnpger7Bur9rFeA480wYk4jWEdA2nuXZqsAzVlRFCdyJOo0n9F8IA/aghzNzr9xw0RK+cT1hVorpd7kyQdGaE+t8VSmvQAAAABJRU5ErkJggg==)), auto',
        'grab': 'image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0wN1QxNzoyNzo1MyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDItMDdUMTc6MzE6NTErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDItMDdUMTc6MzE6NTErMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0NTllYzU4LWY1YzEtYTE0ZC05YTg4LWJlNzJjZGIzNTc5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphMmM0NmRhYS04MmU1LTgzNDMtYTgyNC04NDg5MGU3OWNkZjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMmM0NmRhYS04MmU1LTgzNDMtYTgyNC04NDg5MGU3OWNkZjgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEyYzQ2ZGFhLTgyZTUtODM0My1hODI0LTg0ODkwZTc5Y2RmOCIgc3RFdnQ6d2hlbj0iMjAyNC0wMi0wN1QxNzoyNzo1MyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDU5ZWM1OC1mNWMxLWExNGQtOWE4OC1iZTcyY2RiMzU3OTUiIHN0RXZ0OndoZW49IjIwMjQtMDItMDdUMTc6MzE6NTErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7tg0CCAAADKUlEQVQ4jY2Uz0vkZhjHP5kf0SRTIxPZmTVDJ6VdikMP2pUWqh481ErZhWKxKPZUEMHDetSDULx4KgtLoR32Yv+BHjwV21IYEG9epLKeyh4slZkebJ1fSSZ595A3ZVxmnH7hhTck7yfP832e94HBUgY831Lyf0As4CvgETAEvATCfvBeQAVIAR8CS8CnxWLxyeTk5MzV1dV0EARZ4B3gb6AOiLsijvVBNpv9fXZ21gMam5ub/1xfX7ccx2k7juNNT0+3gWcy4ltK9IhOAz6en59/9+joiFKp1PB93zdNc1jTtHBjY+Pf/f390DCMOeAL4CNgOE6/H7Cg63pK1/W0qqqBEEIBSKfTwjAMYZqmr6rq22NjY99alvUD8Jm0T+kFTMs/AhDD4n0YhjSbTUZHRzk4OEiur6/bwGMg0wsYEJmsKkrEabVawnXd6GUQCNd1heu6ZDIZYdt2YFmWAAqADiRSXZEpQF4uTYioeBMTE0qxWFQACoVC4DiOOjIykjRN09N1Xe10Ooq0LhVbmJDrMfATUAFerK6uCiGEuLy8bNRqtbbv++H5+Xk9DMOw2WwGx8fHN0KIcG9vrw4cA28BQymZ4nuJROLrra2th7Zt+9vb24HneQDYtq3HfpRKJQNA0zRlZmYmAxCGcY9HSslU3zQMw1pYWKgvLi7q+Xw+uLi4COh/k/oqRVTVP25ubl7u7u4WxsfHO2tra8ONRiMcdBggLp7MVMRVrgJPT09PT5aXl8NKpdIyDOPOIRCrWq0GRNcw7hCSwBtADvgE+DWfz3uHh4eeEKIjBmhpaakBfAPckxn/l/oIcB+YB360LEuUy+W27/tuP1ilUmnncrk/gS/l+Vuex5HeB94HvldVNdjZ2am7rtt+jRWcnJy4U1NTLeA58ICosZXXfUoQ3eWMtOCJpmmfr6ysZObm5pRsNtv2fT91dnaWKpfL1Vqt9hvwHfACaABeL+O7ofeAWeCRoigPksnkcKfTuQYugZ+BX2RBm3KJfpVMEM06Xa6ctEIDWhLyVxeojZzid7VGPLmHiHo12fW9D3QAT+5F96FBUiSsezKFdPVdt14BPepjloL8nS0AAAAASUVORK5CYII=)), auto',
        'grabbing': 'image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0wN1QxNzoyNzo1NiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDItMDdUMTc6MzI6MTYrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDItMDdUMTc6MzI6MTYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4NWQ5ZGI0LTE3ZGItMTU0Zi1hZjhiLWU3ZmI4YjliMTZjYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODVkOWRiNC0xN2RiLTE1NGYtYWY4Yi1lN2ZiOGI5YjE2Y2MiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozODVkOWRiNC0xN2RiLTE1NGYtYWY4Yi1lN2ZiOGI5YjE2Y2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM4NWQ5ZGI0LTE3ZGItMTU0Zi1hZjhiLWU3ZmI4YjliMTZjYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMi0wN1QxNzoyNzo1NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtcTpSQAAAKzSURBVDiNtZQ/SBtRHMc/7yW5nLlLlGJitGKNUkGIRS2Fy1IopYrSoYsFsYODg9Slewdnp5JBBF06tFQ6uXUoDoIF3QoiSil0KJJCLaH4JzmT3OtwL5CI1lDsD47fu7v3+/D9/XlPKKW4TpPXSvsfwKtMaG8AUS3gryICDUBDwB2gDzgGjv4FGAQ6NOSRbdvZeDz+rFAo3PY87xfQApwCbgOCAOgTQqyapvkVOJiamjre2dkp9vT0HAPfTdP8LIR4CdwDOnWMgIvrEQIeZjKZx2tra/Guri4zFou56XQ6bJqmnJ6elvPz8zcNw3ghpXwXCoVeA+M6W3EeKIAmoLe3t9caHR2NNTc3n7mun5mUUg0MDIQcxwklEgljaWmpbWZm5j4wBUQAEbxAodQqAVBKVaSUJQDDMLAsi0gkYqRSqcrIyIjK5/OuTtsCTmuBQv94CgxXKhUAVlZWbrS0tAiAxcXFcCqVCsZisVA2m6W7uxvXdU91ugYga4EWMJtOp5/btl2MRqMFoMlxnKbqBsdxAjqYwcFBADzPqxVEUC8U0AbcnZubs2dnZ+29vb2GRkIIUfdebYoAToDdbDartre3ZX9/v9UI8PDwUAF5oAKoKlACBeDN/v7+6sTERHljY6MRHrlcLgB8A87qlOOPSxwYBt52dHSozc1NpZTy1CW2vr5+0tra+gWYBJrxS1iXvoVfywzwvr29/WxhYeH46OioeA7sbW1tuUNDQwXgFXALPYf1FfWhTYCtN00Gg8GJ8fHx5NjYmEgmk8VSqSR3d3fDy8vLv3O53EcN3MM/22fngbVQC/8SeAA8EUJ0BgKBaLlczgMHwCfgg16f6B6oi4BVaFinEQES+rF14E/gh1Z1qr951WZcZgK/yGHtawteAUr4nS1XYVcBa9WKGo8GVPAPRJ39AUCO6vELiVNiAAAAAElFTkSuQmCC)), auto',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        "112": "28rem",
        "120": "30rem"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}