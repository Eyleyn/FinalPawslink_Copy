const styles = {
  "@import": [
    "https://fonts.googleapis.com/css2?family=Epilogue:wght@700&display=swap",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
  ],
  body: {
    margin: "0",
    lineHeight: "normal",
  },
  root: {
    // fonts
    "--font-inter": "Inter",
    "--font-epilogue": "Epilogue",

    // font sizes
    "--font-size-sm": "14px",
    "--font-size-base": "16px",
    "--font-size-21xl": "40px",
    "--font-size-13xl": "32px",
    "--font-size-5xl": "24px",

    // colors
    "--color-white": "#fff",
    "--color-gray": "#171a1f",
    "--color-lavenderblush": "#fcf3f6",
    "--color-palevioletred": "#d2628a",
    "--color-darkslateblue": "#774a7f",

    // gaps
    "--gap-13xl": "32px",
    "--gap-base": "16px",
    "--gap-xl": "20px",
    "--gap-6xs": "7px",
    "--gap-7xs": "6px",

    // paddings
    "--padding-13xl": "32px",
    "--padding-5xs": "8px",
    "--padding-10xl": "29px",
    "--padding-20xl": "39px",
    "--padding-xl": "20px",
    "--padding-6xs": "7px",
    "--padding-lg": "18px",
    "--padding-2xl": "21px",
    "--padding-3xs": "10px",
    "--padding-xs": "12px",
    "--padding-10xs": "3px",
    "--padding-2xs": "11px",

    // border radii
    "--br-5xl": "24px",
    "--br-7xs": "6px",
    "--br-9xs": "4px"
  }
};

// Additional export constants
export const FontFamily = {
  interRegular: "Inter-Regular",
  epilogueBold: "Epilogue-Bold",
  interLight: "Inter-Light"
};

export const FontSize = {
  size_sm: 14
};

export const Color = {
  colorWhite: "#fff",
  colorGray_100: "#171a1f",
  colorGray_200: "rgba(0, 0, 0, 0)",
  colorPalevioletred: "#d2628a",
  colorWhitesmoke: "#f3f4f6"
};

export const Border = {
  br_5xs: 8,
  br_9xs: 4
};
