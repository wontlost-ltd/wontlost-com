import type { Plan } from '../types';

/**
 * AG-UI for Vaadin Pro 的套餐。价格与 agui-vaadin-pro/docs/PRICING.md 一致：
 * 按开发者席位收年费，部署与终端用户不限（Vaadin 商业组件同一模型）。
 * 有了 Stripe Payment Link 后把 checkoutUrl 填上，按钮就从邮件下单变成在线支付；两条路都会拿到 key。
 */
export const aguiPlans: Plan[] = [
  {
    name: 'Solo',
    seats: '1 developer',
    price: '$149',
    period: 'per year',
    description: 'One developer, unlimited deployments.',
    features: ['All Pro modules', 'Email support', 'Patch releases'],
  },
  {
    name: 'Team',
    seats: '5 developers',
    price: '$599',
    period: 'per year',
    description: 'A product team shipping one or more assistants.',
    features: ['All Pro modules', 'Email support', 'Minor and patch releases'],
    highlighted: true,
  },
  {
    name: 'Business',
    seats: '20 developers',
    price: '$1,990',
    period: 'per year',
    description: 'Several teams on a shared platform.',
    features: ['All Pro modules', 'Priority support, 2 business days', '2 hours of architecture consulting'],
  },
  {
    name: 'Enterprise',
    seats: 'Unlimited developers, per application',
    price: 'Custom',
    period: 'per application, per year',
    description: 'Pro plus the six Enterprise modules for security, compliance and finance.',
    features: [
      'Identity and tool authorization, approval policies',
      'Metering and quotas, governance, observability, console',
      'Source escrow, SLA, custom adapters',
    ],
  },
];

export const salesEmail = 'service@wontlost.com';

/** 邮件下单：主题带套餐，正文列出签发 key 需要的三样信息。 */
export function orderMailto(plan: Plan): string {
  const subject = `AG-UI for Vaadin Pro — ${plan.name} (${plan.seats})`;
  const body = [
    `Plan: ${plan.name} (${plan.seats}, ${plan.price} ${plan.period})`,
    'Licensee (company or person, printed in the key):',
    'Invoice email:',
    'Number of developers:',
    'Notes:',
  ].join('\n');
  return `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buyHref(plan: Plan): string {
  return plan.checkoutUrl ?? orderMailto(plan);
}
