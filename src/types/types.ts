export type Category = {
  value: string;
  label: string;
};

export type Provider = {
  value: string;
  label: string;
};

export type Game = {
  id: string;
  name: string;
  category: string;
  provider: string;
  isHot: boolean;
  image: string;
};

export type NavBarItem = {
  icon: string;
  value: string;
  label: string;
};
