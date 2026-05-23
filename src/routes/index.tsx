import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "../components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Sneha Kapilavayi — Creative Technologist" },
      {
        name: "description",
        content:
          "Sneha Kapilavayi — creative technologist, designer, editor, and AI web application builder. Cinematic, experimental digital experiences.",
      },
    ],
  }),
});
