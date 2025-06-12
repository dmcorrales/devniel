import { useState } from 'react';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { ProfileHeader } from './ProfileHeader';
import { CommandMenu } from './CommandMenu';
import { AccordionExperience } from './AccordionExperience';

export function ProfileCard() {
  const [selected, setSelected] = useState<string | null>(null);

  const renderContent = () => {
    switch (selected) {
      case 'experience':
        return <AccordionExperience />;
      case 'projects':
        return <p>Projects Content</p>;
      case 'calculator':
        return <p>Calculator Content</p>;
      default:
        return <p>Select an option from the menu.</p>;
    }
  };

  return (
    <Card className="w-full max-w-lvh">
      <ProfileHeader />
      <CardContent>
        <CommandMenu onSelect={setSelected} />
      </CardContent>
      <CardFooter>{renderContent()}</CardFooter>
    </Card>
  );
}
