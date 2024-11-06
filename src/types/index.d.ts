declare type Card = {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
  bio: string;
  linkdin_link: string;
  x_link: string;
  dribble_link: string;
};

declare type WebsiteCardProps = {
  id: string;
  title: string;
  tags: string[];
  primaryAuthor: UserCollection;
  coverImage: string;
  // profile: string;
};

declare type PageProps = { params: { slug: string } };

declare type AuthModalProps = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

declare type FAQ = {
  id: number;
  question: string;
  answer: string;
};

declare type TestimonialProps = {
  id: number;
  rating: number;
  text: string;
  profile: string;
  author: string;
  position: string;
};

declare type websiteCardFormat = {
  id: number;
  image: string;
  title: string;
  author_name: string;
  author_image: string;
  link: string;
};

declare type UserCollection = {
  userId: string;
  username: string;
  email: string;
  profileImage: string;
};

declare type WebsiteDataFetch = {
  id?: string;
  owner: UserCollection;
  cover: string;
  title: string;
  description: string;
  vision: string;
  publishDate: number;
  tags: string[];
  typography: string[];
  colorPalette: string[];
  authors: UserCollection[];
  screens: string[];
};

declare type WebsiteData = {
  owner: string;
  cover: string;
  title: string;
  description: string;
  vision: string;
  publishDate: number;
  tags: string[];
  typography: string[];
  colorPalette: string[];
  authors: string[];
  screens: string[];
};

declare type UserData = {
  name: string;
  profilePicture: string;
  id: string;
  about: string;
  profession: string;
  socials: string[];
};

export type APIResponse<T = object> =
  | { success: true; data: T }
  | { success: false; error: string };
