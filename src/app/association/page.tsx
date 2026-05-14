import { AboutAssociation } from "@/components/association/AboutAssociation";
import { AboutAssociationHeading } from "@/components/association/AboutAssociationHeading";
import { MissionsAndObjectives } from "@/components/association/MissionsAndObjectives";

export default function AssociationPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <AboutAssociationHeading />
      <AboutAssociation />
      <MissionsAndObjectives />
    </main>
  );
}
