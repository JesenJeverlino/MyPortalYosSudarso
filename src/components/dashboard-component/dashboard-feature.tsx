import FeatureCard from "@/components/dashboard-component/dashboard-sub-component/feature-card";

export default function DashboardFeature() {
  return (
    <>
        <div className="flex flex-col">
          <p className="md:self-end text-center text-2xl mt-4 mb-5">
            Everything You Need, Simplified
          </p>
          <FeatureCard value="Access student info easily in one secure system." icon="ph:student"></FeatureCard>
          <FeatureCard value="Get real-time updates on schedules and events." icon="mdi:calendar-outline"></FeatureCard>
          <FeatureCard value="Choose and manage courses quickly and easily." icon="solar:book-outline"></FeatureCard>
        </div>
    </>
  );
}