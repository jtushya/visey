'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { Business, Startup } from '@prisma/client';
import { startupDetailsSchema, fundingOpportunitySchema } from '@/schemas';
import ApplyFundingOpportunityPart1 from './ApplyFundingOpportunityPart1';
import ApplyFundingOpportunityPart2 from './ApplyFundingOpportunityPart2';
import * as z from 'zod';

const ApplyFundingOpportunityForm = ({
  business,
  startup,
  opportunity,
}: {
  business: Business;
  startup: Startup;
  opportunity: z.infer<typeof fundingOpportunitySchema> & { id: string };
}) => {
  const { data: session } = useSession();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<z.infer<typeof startupDetailsSchema>>({
    name: startup.name ?? '',
    image: startup.image ?? '',
    registeredName: startup.registeredName ?? '',
    registrationDate: startup.registrationDate ?? undefined,
    websiteUrl: startup.websiteUrl ?? '',
    email: startup.email ?? '',
    contactNumber: startup.contactNumber ?? '',
    location: startup.location ?? '',
    industry: startup.industry ?? '',
    sector: startup.sector ?? '',
    trlLevel: startup.trlLevel ?? '',
    description: startup.description ?? '',
    productStage: startup.productStage ?? '',
    fundingStage: startup.fundingStage ?? '',
    idea: startup.idea ?? '',
    problem: startup.problem ?? '',
    marketSize: startup.marketSize ?? '',
    dpiitRecognized: startup.dpiitRecognized ?? false,
    twoMajorCompetitors: startup.twoMajorCompetitors ?? '',
    demoVideoUrl: startup.demoVideoUrl ?? '',
    pitchDeckUrl: startup.pitchDeckUrl ?? '',
    foundersDetail: startup.foundersDetail ?? '',
    teamSize: startup.teamSize ?? '',
    noOfFte: startup.noOfFte ?? '',
    noOfInterns: startup.noOfInterns ?? '',
    // Remove competitors if not part of the schema
    // competitors: startup.competitors ?? '',
  });

  const router = useRouter();

  const handleNext = (values: z.infer<typeof startupDetailsSchema>) => {
    setFormValues(values);
    setStep(2);
  };

  const handleSubmit = async (values: z.infer<typeof startupDetailsSchema>) => {
    setLoading(true);
    setError('');
    setSuccess('');

    if (!session?.user?.id) {
      setError('User not authenticated');
      setLoading(false);
      return;
    }

    // Update the user's SavedOpportunities with the new opportunity ID
    const res = await fetch('/api/update-saved-opportunities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: session.user.id,
        opportunityId: opportunity.id,
      }),
    });

    const result = await res.json();

    if (result.error) {
      toast.error(result.error);
      setError(result.error);
    }

    if (result.success) {
      toast.success('Application submitted successfully.');
      setSuccess(result.success);
      router.push(`/profile/startup`);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Apply for Opportunity</h1>
        <p className="text-sm text-neutrals-700">
          Fill in the details to apply for the funding opportunity
        </p>
      </div>

      {step === 1 && (
        <ApplyFundingOpportunityPart1
          defaultValues={formValues}
          onNext={handleNext}
        />
      )}

      {step === 2 && (
        <ApplyFundingOpportunityPart2
          defaultValues={formValues}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ApplyFundingOpportunityForm;
