import { DashboardNavigation } from "dashboard/service";
import { MessengerNavigation } from "messenger/service";
import { AuthNavigation } from "auth/service";
import { useStore } from "store/service";

export const Navigation = () => {
  const { user } = useStore();

  console.log(user);
  return (
    <>
      <DashboardNavigation />

      <MessengerNavigation />

      <AuthNavigation />
    </>
  );
};