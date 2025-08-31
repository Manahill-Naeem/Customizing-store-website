'use client';

import { Suspense } from 'react';
import CustomOrdersForm from './CustomOrdersForm';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomOrdersForm />
    </Suspense>
  );
}
