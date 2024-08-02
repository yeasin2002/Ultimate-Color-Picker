import { Dropper, PaintBrush, WebsiteResponsive } from "../components/icons";

import {
  MainColors,
  ListOfGradientColor,
  Palette,
  WebsiteColor,
} from "../pages";

export const routes = [
  {
    name: "A",
    value: "MainColors",
    components: MainColors,
    icon: Dropper,
  },
  {
    name: "B",
    value: "Palette",
    components: Palette,
    icon: Palette,
  },
  {
    name: "C",
    value: "WebsiteColor",
    components: WebsiteColor,
    icon: WebsiteResponsive,
  },
  {
    name: "D",
    value: "ListOfGradientColor",
    components: ListOfGradientColor,
    icon: PaintBrush,
  },
];
