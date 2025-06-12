import type { Route } from './+types/home';
import { ProfileCard } from '~/components/home/ProfileCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <ProfileCard />
    </div>
  );
}
