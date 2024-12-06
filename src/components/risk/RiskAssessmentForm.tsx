import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlertTriangle, Info } from 'lucide-react';

const riskSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1),
  impactLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
  probability: z.enum(['Unlikely', 'Possible', 'Likely', 'Almost Certain']),
  owner: z.string().min(1),
  mitigation: z.string().min(1),
  targetDate: z.string().min(1),
  status: z.enum(['Open', 'In Progress', 'Mitigated', 'Closed'])
});

type RiskFormData = z.infer<typeof riskSchema>;

interface RiskAssessmentFormProps {
  riskType: string;
  onSubmit: (data: RiskFormData) => void;
}

export function RiskAssessmentForm({ riskType, onSubmit }: RiskAssessmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm<RiskFormData>({
    resolver: zodResolver(riskSchema),
    defaultValues: {
      status: 'Open',
      impactLevel: 'Medium',
      probability: 'Possible'
    }
  });

  const handleFormSubmit = (data: RiskFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
          New {riskType} Risk Assessment
        </h2>
        {isDirty && (
          <span className="text-sm text-yellow-600 flex items-center">
            <Info className="h-4 w-4 mr-1" />
            Unsaved changes
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Risk Title
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Risk Owner
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('owner')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
          {errors.owner && (
            <p className="mt-1 text-sm text-red-600">{errors.owner.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Risk Description
            <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('description')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Impact Level
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register('impactLevel')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Probability
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register('probability')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="Unlikely">Unlikely</option>
            <option value="Possible">Possible</option>
            <option value="Likely">Likely</option>
            <option value="Almost Certain">Almost Certain</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Mitigation Measures
            <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('mitigation')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
          {errors.mitigation && (
            <p className="mt-1 text-sm text-red-600">{errors.mitigation.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Target Resolution Date
            <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('targetDate')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
          {errors.targetDate && (
            <p className="mt-1 text-sm text-red-600">{errors.targetDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
            <span className="text-red-500">*</span>
          </label>
          <select
            {...register('status')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Mitigated">Mitigated</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Save Assessment
        </button>
      </div>
    </form>
  );
}