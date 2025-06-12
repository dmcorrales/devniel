import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '~/components/ui/command';

interface CommandMenuProps {
  onSelect?: (
    value: ((prevState: string | null) => string | null) | string | null,
  ) => void;
}

export function CommandMenu({ onSelect }: CommandMenuProps) {
  return (
    <Command>
      <CommandInput placeholder="Search projects, skills, or type a command…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            onSelect={() => (onSelect ? onSelect('experience') : '')}
          >
            Experience
          </CommandItem>
          <CommandItem onSelect={() => (onSelect ? onSelect('projects') : '')}>
            Recent Projects
          </CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
}
