import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Roberto Pio Iannello",
  EMAIL: "s5201538@studenti.unige.it",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Sito personale di Roberto Pio Iannello, studente di Computer Engineering presso l'Università degli Studi di Genova.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Il mio blog personale dove a volte scrivo articoli",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Le mie esperienze lavorative",
};

export const EDUCATION: Metadata = {
  TITLE: "Education",
  DESCRIPTION: "Le mie esperienze formative",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Una collezione dei progetti personali e universitari",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/roby-ianny"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/roby-ianny",
  },
  {
    NAME: "mastodon",
    HREF: "https://mastodon.uno/@roby_ianny",
  },
  {
    NAME: "bluesky",
    HREF: "https://bsky.app/profile/roby-ianny.bsky.social",
  }
];
