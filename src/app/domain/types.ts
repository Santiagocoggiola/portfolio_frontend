export interface Card {
    id?: number;
    logoUrl?: string;
    title?: string;
    position?: string;
    from?: string;
    to?: string;
    content?: string;
  }

export interface AboutMe {
  id?: number;
  title?: string;
  content?: string;
  imgUrl?: string;
}

export interface Footer {
  id?: number;
  gitHubUrl? : string;
  linkedInUrl? : string;
}