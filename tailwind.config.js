/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js", "./app/**/*.ts", "./app/**/*.jsx", "./app/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        sfPro: ["SF Pro Display", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#1D272F",
        secondary: "#016a70",
        body_text_1: "#919BB3",
        body_text_2: "#7E84A3",
        main_text: "#0b204c",
        form_border: "#E8EAEB",
        error: "#EF4444",
        success: "#22C55E",
        warning: "#EFA241",
        info: "#3B82F6",
        peachLight: '#ffe3d8',
        primary_text: '#595959',
        secondary_text: '#202020',
        bg_gray: '#F5F6FA',
        primary_btn: "#DED943",
        text_blue: "#131523",
        body_text: "#D7DBEC",
      },
      fontSize: {
        h1: ["96px", {
          lineHeight: "98px",
          fontWeight: "175",
        }],
        h2: ["48px", {
          lineHeight: "57.28px",
          fontWeight: "700",
        }],
        h3: ["32px", {
          lineHeight: "38.4px",
          fontWeight: "700",
        }],
        heading2: ["40px", {
          lineHeight: "55.02px",
          fontWeight: "485",
        }],
        heading7: ["18px", {
          lineHeight: "23.4px",
          fontWeight: "600",
        }],
        title_md: ["28px", {
          lineHeight: "32.87px",
          fontWeight: "700",
        }],
        title_sm: ["20px", {
          lineHeight: "26.67px",
          fontWeight: "500",
        }],
        sh: ["20px", {
          lineHeight: "23.4px",
          fontWeight: "400",
        }],
        s: ["14px", {
          lineHeight: "23.4px",
          fontWeight: "400",
        }],
        p1: ["16px", {
          lineHeight: "24px",
          fontWeight: "400",
        }],
      },
      height: {
        'calc-custom': 'calc(100% - 300px)',
      },
      boxShadow: {
        'custom': '0px 0px 16px 0px rgba(0, 0, 0, 0.03)',
        'custom-large': '0px 72px 132px 0px rgba(15, 28, 51, 0.06)',
        'ride': '0px 80px 200px -12px rgba(15, 28, 51, 0.12)',
        'ride_2': '0px 0px 0px 4px rgba(29, 39, 47, 0.20)',
        'ride-massage': '0px 80px 200px -12px rgba(15, 28, 51, 0.12)',
        'cancel': '0px 72px 132px 0px rgba(15, 28, 51, 0.06)',
        'pickup': '0px 80px 200px -12px rgba(15, 28, 51, 0.12)'
      },

    },
    fontFamily: {
      'martian-b-thai': ['Martian-B-Thai', 'sans-serif'],
    },
  },
  plugins: [],
};
