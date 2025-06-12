import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from '~/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Typewriter } from 'react-simple-typewriter';

export function ProfileHeader() {

    function HeroHeader() {
  return (
      <h1 className="text-3xl font-bold text-gray-900">
          Hi, I'm Daniel Corrales
          <span className="text-emerald-500">
    <Typewriter
        words={[' Senior Engineer', ' React Developer', ' Backend Expert']}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={1200}
    />
  </span>
      </h1>
  );
    }

    return (
        <CardHeader>
            <CardTitle>@devniel</CardTitle>
            <CardDescription>{HeroHeader()}</CardDescription>
            <CardAction>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardAction>
        </CardHeader>
    );
}
