'use client';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  console.log({ multipleDate });
  return (
    <div>
      CalendarPage
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date < new Date()}
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date > new Date()}
        />
        <Calendar
          mode="multiple"
          selected={multipleDate}
          onSelect={setMultipleDate}
          className="rounded-md border shadow"
        />
      </div>
      <h2>Información</h2>
      <span className="block">Single</span>
      <span className="block">{smallDate}</span>
    </div>
  );
};

export default CalendarPage;
