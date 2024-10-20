import { useState } from 'react';
import { initialTravelPlan } from '../places';
import { PlaceTree } from './PlaceTree';

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree key={id} id={id} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
