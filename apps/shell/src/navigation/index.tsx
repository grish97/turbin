import { DashboardNavigation } from "dashboard/service";
import { MessengerNavigation } from "messenger/service";
import { AuthNavigation } from "auth/service";

export const Navigation = () => {
  return (
    <>
      <DashboardNavigation />

      <MessengerNavigation />

      <AuthNavigation />
    </>
  );
};
