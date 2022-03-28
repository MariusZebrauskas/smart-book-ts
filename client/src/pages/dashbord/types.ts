export type DasboardTypes = {
    navigateRoutes: (params: string) => void;
    user: {
        name: string;
        todos: {
            all: string;
            custom: {
                name: string;
                monday: string;
            }[];
        }[];
    }
}