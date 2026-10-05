import { createPublicLpLeadHandler } from '@/lib/public-lp-lead';

export const POST = createPublicLpLeadHandler({
  slug: 'mvp-development',
  title: 'MVP Development',
  fieldLabel: 'Project Stage',
});
