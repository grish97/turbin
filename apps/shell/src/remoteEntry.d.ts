/// <reference types="react" />

declare module "dashboard/service" {
  export const Dashboard: React.ComponentType;
  export const DashboardNavigation: React.ComponentType;
  export const useAuth: () => {
    user: null | string;
    setupUser: (user: string) => void;
  };
  export const useDashboard: () => {};
}

declare module "messenger/service" {
  export const Messenger: React.ComponentType;
  export const MessengerNavigation: React.ComponentType;
  export const useAuth: () => {
    user: null | string;
    setupUser: (user: string) => void;
  };
}

declare module "auth/service" {
  export const Login: React.ComponentType;
  export const Register: React.ComponentType;
  export const AuthNavigation: React.ComponentType;
}

declare module "store/service" {
  export const useStore: () => {
    user: null | string;
    setupUser: (user: string) => void;
  };
}