import { Button } from '@/components/ui/button';
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons';

const ButtonPage = () => {
  return (
    <div className="flex flex-col gap-2">
      ButtonPage
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button variant="default">default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">secondary</Button>
        <Button variant="success">secondary</Button>
        <Button variant="default" capitalize={false}>
          no capitalize
        </Button>
        <Button>
          <EnvelopeOpenIcon /> Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
