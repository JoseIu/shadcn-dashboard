'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
const CheckboxPage = () => {
  const [term, setTerm] = useState(false);
  return (
    <div>
      CheckboxPage
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" onCheckedChange={(value: boolean) => setTerm(value)} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      {term ? <Badge variant="default">Great!</Badge> : <Badge variant="destructive">Bad!</Badge>}
    </div>
  );
};

export default CheckboxPage;
