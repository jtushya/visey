'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '@/components/ui/input';
import { startupDetailsSchema } from '@/schemas';
import Image from 'next/image';

const ApplyFundingOpportunityPart1 = ({
  defaultValues,
  onNext,
}: {
  defaultValues: z.infer<typeof startupDetailsSchema>;
  onNext: (values: z.infer<typeof startupDetailsSchema>) => void;
}) => {
  const form = useForm<z.infer<typeof startupDetailsSchema>>({
    resolver: zodResolver(startupDetailsSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof startupDetailsSchema>) => {
    onNext(values);
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Applying to Opportunity Name</h1>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Startup Details</h2>
        <p className="text-sm text-neutrals-700">
          Your profile won't be publicly listed, but shareable. Fill details to customize your experience.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Basic Details</h3>
            <div className="flex justify-center">
              <div className="border-2 rounded-lg px-14 py-2">
                <Image
                  src={defaultValues.image || 'https://res.cloudinary.com/dlriuadjv/image/upload/v1729353205/xbbb0zw6js60dxnq64qj.png'}
                  alt="Startup Logo"
                  width={150}
                  height={150}
                  className="cursor-pointer rounded-full"
                />
              </div>
            </div>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Startup Name*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="registrationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Company Registration Date (if applicable)</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="text-neutrals-700 mt-1"
                    {...field}
                    value={field.value ? field.value.toISOString().split('T')[0] : ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dpiitRecognized"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">DPIIT Recognized?</FormLabel>
                <FormControl>
                  <Input
                    type="checkbox"
                    className="text-neutrals-700 mt-1"
                    {...field}
                    value={field.value ? 'true' : 'false'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Industry*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="websiteUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Website URL</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Progress</h3>
          </div>

          <FormField
            control={form.control}
            name="productStage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Startup Product Stage*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fundingStage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Startup Funding Stage*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="trlLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">TRL Level*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Product</h3>
          </div>

          <FormField
            control={form.control}
            name="idea"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Idea (Max 100-150 words)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="problem"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">What is the problem you are trying to solve? (Max 200-300 words)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="marketSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Market Size / Potential Market Opportunity*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="twoMajorCompetitors"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">2 Major Competitors (For each competitor: Name, Description in 2 sentences)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Demo Video</h3>
          </div>

          <FormField
            control={form.control}
            name="demoVideoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Add link</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Pitch Deck</h3>
          </div>

          <FormField
            control={form.control}
            name="pitchDeckUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Add link</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Team</h3>
          </div>

          <FormField
            control={form.control}
            name="foundersDetail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Founders' Details (For each founder, in this format: Name, Role, About, LinkedIn URL)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="teamSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Team Size (including both part-time and full-time)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="noOfFte"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Number of full-time members*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="noOfInterns"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Number of part-time members (write 0 if not applicable)</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
          </div>

          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Contact Number*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutrals-700">Contact Email ID*</FormLabel>
                <FormControl>
                  <Input
                    className="text-neutrals-700 mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center mt-8">
            <Button type="submit" className="rounded-full">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyFundingOpportunityPart1;
