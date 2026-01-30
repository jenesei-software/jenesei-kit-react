import { ThemeComponent, ThemeGlobalValue } from "./theme.vanilla-extract.css";

export type IThemeGenreTypeRange = typeof ThemeComponent.colors.range;
export type IThemeGenreTypeButton = typeof ThemeComponent.colors.button;
export type IThemeScreen = typeof ThemeGlobalValue.screen;
export type IThemeGlobal = typeof ThemeGlobalValue;
export type IThemeBreakpointKey = keyof typeof ThemeGlobalValue.screen.breakpoint;
export type IThemeOrientationKey = keyof typeof ThemeGlobalValue.screen.orientation;