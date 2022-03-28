export type MediaCardTypes = {
  navigateRoutes: (params: string) => void;
  data: {
    id: number;
    title: string;
    decription: string;
    img: string;
    link: string;
  };
};
