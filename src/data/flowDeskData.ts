import {
  FeatureItem,
  PricingTier,
  PricingFeatureComparison,
  Testimonial,
  FAQItem,
  IntegrationItem,
  WorkflowDemoPreset
} from '../types';

export const BRAND_CONFIG = {
  name: 'FlowDesk AI',
  tagline: 'Turn scattered work into intelligent workflows.',
  subtagline: 'The unified AI workspace that synchronizes tasks, cross-app automations, calendar schedules, and team collaboration into one cohesive operating system.',
  portfolioNotice: 'Portfolio Project: FlowDesk AI is a fictional SaaS concept designed for a UI/UX and web design showcase. No commercial subscription is processed.',
  githubRepoUrl: 'https://github.com/example/flowdesk-ai-portfolio',
  designerRole: 'Senior Product Designer & Frontend Architect Portfolio',
  socialProofLogos: ['Stripe', 'Linear', 'Vercel', 'Supabase', 'Ramp', 'Retool']
};

export const STATS = [
  { value: '4.4 hrs', label: 'Deep Focus Reclaimed', detail: 'Average weekly time saved per knowledge worker' },
  { value: '88%', label: 'Less Status Meetings', detail: 'Reduction in manual cross-tool status updates' },
  { value: '140k+', label: 'Workflows Executed', detail: 'Autonomous actions coordinated across user stacks weekly' },
  { value: '99.98%', label: 'Verified SLA Uptime', detail: 'Enterprise-grade reliability with zero data training' }
];

export const TRUSTED_COMPANIES = [
  { name: 'Vanguard Tech', symbol: 'VT' },
  { name: 'Synthetix', symbol: 'SX' },
  { name: 'Loomis Cloud', symbol: 'LC' },
  { name: 'Aether Design', symbol: 'AD' },
  { name: 'Novus Data', symbol: 'ND' },
  { name: 'Orbit Labs', symbol: 'OL' }
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'ai-task-planning',
    title: 'AI Task Planning',
    category: 'Planning & Strategy',
    tagline: 'Context-aware task scheduling and priority synthesis.',
    description: 'FlowDesk continuously parses conversation threads, design comments, and pull requests to build a prioritized, dependency-mapped task backlog without manual grooming.',
    iconName: 'Sparkles',
    capabilities: [
      'Automatic effort estimation based on team velocity',
      'Cross-project dependency mapping & blocker prediction',
      'Dynamic reprioritization when roadmap goals shift',
      'Natural language task decomposition into sub-tasks'
    ],
    metric: {
      value: '3.2x',
      label: 'Faster sprint planning cycles'
    },
    previewVisualType: 'task-planning'
  },
  {
    id: 'smart-workflow-automation',
    title: 'Smart Workflow Automation',
    category: 'Autonomous Operations',
    tagline: 'Connect your toolchain into multi-step self-healing flows.',
    description: 'Trigger autonomous actions across Slack, GitHub, Linear, and Figma. FlowDesk handles error retries, condition branching, and human-in-the-loop approvals seamlessly.',
    iconName: 'Workflow',
    capabilities: [
      'Zero-code canvas with natural-language prompt editor',
      'Multi-app state sync with bi-directional webhooks',
      'Human-in-the-loop approval thresholds for critical events',
      'Pre-built templates for sprint triage, releases, and incident response'
    ],
    metric: {
      value: '76%',
      label: 'Less context-switching overhead'
    },
    previewVisualType: 'workflow-automation'
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    category: 'Multiplayer Alignment',
    tagline: 'Shared context surfaces for cross-functional pods.',
    description: 'Give design, engineering, and product leaders a single unified view. Real-time multiplayer canvas, threaded decision logs, and contextual comments keep everyone synced.',
    iconName: 'Users',
    capabilities: [
      'Multiplayer presence with real-time cursor sync',
      'Decision records linked directly to active work items',
      'Smart activity stream filtering noise from signal',
      'Granular role-based workspaces and guest access'
    ],
    metric: {
      value: '45%',
      label: 'Fewer redundant sync meetings'
    },
    previewVisualType: 'team-collaboration'
  },
  {
    id: 'project-analytics',
    title: 'Project Analytics',
    category: 'Intelligence & Insights',
    tagline: 'Objective velocity trends, health scores, and bottleneck alerts.',
    description: 'Stop guessing team capacity. FlowDesk synthesizes cycle times, review turnaround speeds, and PR lag times into executive-ready dashboards with actionable guidance.',
    iconName: 'BarChart3',
    capabilities: [
      'Predictive sprint completion forecasting (Monte Carlo)',
      'Team cognitive load and burnout risk indicators',
      'Flow efficiency and lead-time distribution charts',
      'Exportable executive summaries in PDF or Slack digest'
    ],
    metric: {
      value: '94%',
      label: 'Delivery date forecast accuracy'
    },
    previewVisualType: 'project-analytics'
  },
  {
    id: 'ai-summaries',
    title: 'AI Summaries',
    category: 'Synthesis & Briefs',
    tagline: 'Catch up on 200 unread messages and 4 specs in 45 seconds.',
    description: 'Extract crisp executive summaries from verbose Slack channels, Figma comment threads, and Zoom transcripts with cited sources and assigned action items.',
    iconName: 'FileText',
    capabilities: [
      'Daily morning brief tailored to your specific role and priorities',
      'Instant thread summarizer with key decisions highlighted',
      'Automatic extraction of action items with assignees & due dates',
      'Zero hallucinations guaranteed via grounded retrieval (RAG)'
    ],
    metric: {
      value: '45 min',
      label: 'Saved every morning per lead'
    },
    previewVisualType: 'ai-summaries'
  },
  {
    id: 'calendar-integration',
    title: 'Calendar Integration',
    category: 'Focus Time & Scheduling',
    tagline: 'Intelligent focus block preservation and meeting optimizer.',
    description: 'FlowDesk synchronizes with Google Calendar and Outlook to automatically defend 2-to-4 hour deep work blocks, consolidate fragmented meetings, and resolve scheduling conflicts.',
    iconName: 'Calendar',
    capabilities: [
      'Autonomous 2-hour deep work focus defense',
      'Smart 1-on-1 rescheduling based on high-priority deadlines',
      'Preparation brief auto-generated 10 minutes before calls',
      'Cross-timezone load balancing for remote engineering teams'
    ],
    metric: {
      value: '+6.5 hrs',
      label: 'Reclaimed uninterrupted focus time weekly'
    },
    previewVisualType: 'calendar-sync'
  }
];

export const WORKFLOW_PRESETS: WorkflowDemoPreset[] = [
  {
    id: 'sprint-triage',
    title: 'Sprint Blocker Auto-Triage',
    trigger: 'Critical bug reported in #prod-alerts channel',
    description: 'Ingests bug report, analyzes stack trace, correlates commit history, creates GitHub issue, and schedules triage sync.',
    steps: [
      {
        id: 1,
        actor: 'integration',
        title: 'Detect Incident in Slack',
        detail: 'Captured error report from #prod-alerts: "TypeError: null user token in auth pipeline"',
        timeMs: '0.2s',
        status: 'completed'
      },
      {
        id: 2,
        actor: 'ai',
        title: 'Synthesize Context & Correlate Commits',
        detail: 'Identified PR #4812 merged 28 mins ago by @elena; traced stack trace to authMiddleware.ts',
        timeMs: '0.8s',
        status: 'completed'
      },
      {
        id: 3,
        actor: 'system',
        title: 'Generate GitHub Issue with Fix Hint',
        detail: 'Created P1 issue #5021 with reproduce steps, payload curl, and suggested diff',
        timeMs: '0.4s',
        status: 'completed'
      },
      {
        id: 4,
        actor: 'ai',
        title: 'Book 15-min War Room & Notify On-Call',
        detail: 'Pushed calendar invite to @elena and @marcus; defended sprint goal in Jira',
        timeMs: '0.3s',
        status: 'completed'
      }
    ],
    outputSummary: 'Incident isolated, root cause correlated to PR #4812, high-priority ticket dispatched, and on-call team synced in 1.7 seconds.',
    impactSavedTime: '45 minutes of manual triage'
  },
  {
    id: 'release-notes',
    title: 'Release Notes & Changelog Synthesizer',
    trigger: 'Git tag v2.4.0 pushed to production branch',
    description: 'Scans 42 closed PRs, categorizes user-facing vs internal enhancements, generates markdown release document, and drafts customer email.',
    steps: [
      {
        id: 1,
        actor: 'integration',
        title: 'Harvest Closed Pull Requests',
        detail: 'Pulled 42 merged PRs, 18 commit messages, and 9 Figma specs from current milestone',
        timeMs: '0.3s',
        status: 'completed'
      },
      {
        id: 2,
        actor: 'ai',
        title: 'Translate Code Changes to Customer Value',
        detail: 'Deduplicated engineering PRs into 5 user features, 3 performance fixes, and 4 security upgrades',
        timeMs: '1.2s',
        status: 'completed'
      },
      {
        id: 3,
        actor: 'system',
        title: 'Publish GitHub Release & Notion Spec',
        detail: 'Drafted semantic release notes formatted in clean markdown with author callouts',
        timeMs: '0.5s',
        status: 'completed'
      },
      {
        id: 4,
        actor: 'ai',
        title: 'Queue Marketing Slack Announcement',
        detail: 'Sent draft preview to #product-marketing for one-click broadcast approval',
        timeMs: '0.2s',
        status: 'completed'
      }
    ],
    outputSummary: '42 raw pull requests transformed into customer-facing release documentation, changelog, and marketing digest with zero manual copy-pasting.',
    impactSavedTime: '2.5 hours per release'
  },
  {
    id: 'daily-briefing',
    title: 'Morning Executive Context Brief',
    trigger: 'Scheduled at 08:30 AM local time daily',
    description: 'Aggregates yesterday’s decisions across 14 channels, checks upcoming milestone deadlines, and sets 3 highest-leverage tasks for the day.',
    steps: [
      {
        id: 1,
        actor: 'integration',
        title: 'Scan Asynchronous Communication',
        detail: 'Indexed 186 Slack messages, 14 Jira comments, and 3 recorded meeting transcripts',
        timeMs: '0.4s',
        status: 'completed'
      },
      {
        id: 2,
        actor: 'ai',
        title: 'Filter Noise & Isolate Core Decisions',
        detail: 'Identified 2 unblocked items, 1 budget approval needed, and 1 client launch delay risk',
        timeMs: '0.9s',
        status: 'completed'
      },
      {
        id: 3,
        actor: 'system',
        title: 'Recalculate Today’s Calendar Blocks',
        detail: 'Shifted afternoon optional check-in to clear 3.5 hours for high-priority architecture review',
        timeMs: '0.3s',
        status: 'completed'
      },
      {
        id: 4,
        actor: 'ai',
        title: 'Deliver 60-Second Daily Audio & Text Digest',
        detail: 'Structured bullet briefing delivered to FlowDesk Home and mobile notification',
        timeMs: '0.2s',
        status: 'completed'
      }
    ],
    outputSummary: 'Daily noise eliminated. Clean 3-point briefing delivered with pre-arranged focus blocks.',
    impactSavedTime: '55 minutes of inbox catch-up'
  }
];

export const INTEGRATIONS: IntegrationItem[] = [
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    description: 'Turn messages into structured tasks and receive concise daily workflow summaries.',
    iconName: 'MessageSquare',
    popular: true
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Development',
    description: 'Bi-directional sync between pull requests, code reviews, and project milestone roadmaps.',
    iconName: 'GitPullRequest',
    popular: true
  },
  {
    id: 'linear',
    name: 'Linear',
    category: 'Development',
    description: 'Synchronize sprint cycles, issue prioritization, and automated backlog refinement.',
    iconName: 'CheckSquare',
    popular: true
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'Calendar',
    description: 'Autonomous focus block defense and smart meeting rescheduling based on real-time task load.',
    iconName: 'Calendar',
    popular: true
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    description: 'Extract design decisions and feedback threads directly into engineering specifications.',
    iconName: 'Layers',
    popular: true
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Docs',
    description: 'Auto-sync project documentation, product requirement docs, and architectural briefs.',
    iconName: 'FileText',
    popular: true
  },
  {
    id: 'jira',
    name: 'Jira Software',
    category: 'Development',
    description: 'Enterprise ticket state synchronization and automatic epic progress tracking.',
    iconName: 'FolderGit2',
    popular: false
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'Communication',
    description: 'Seamless task migration and cross-departmental portfolio alignment.',
    iconName: 'Trello',
    popular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'FlowDesk AI fundamentally changed how our engineering and product pods operate. Sprint planning used to take four hours every Monday—now the AI prepares the entire dependency graph in advance, cutting our meetings down to 45 minutes.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Fintech Scaleup (Series B)',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    impactMetric: {
      value: '72% faster',
      label: 'Sprint cycle turnaround'
    },
    verified: true
  },
  {
    id: 'test-2',
    quote: 'The calendar focus defense feature alone is worth ten times the price. I went from having a fragmented workday of 30-minute gaps to enjoying continuous 3-hour deep work mornings. Our team shipped two weeks ahead of schedule.',
    author: 'Marcus Vance',
    role: 'Head of Product Design',
    company: 'Aether Studios',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    impactMetric: {
      value: '+8 hrs',
      label: 'Unbroken design focus / week'
    },
    verified: true
  },
  {
    id: 'test-3',
    quote: 'We replaced five disparate automation bots with FlowDesk. Having natural language workflow generation that reliably hooks into GitHub and Slack without brittle webhook scripts has saved our DevOps team countless hours of maintenance.',
    author: 'Devon Patel',
    role: 'Staff Infrastructure Architect',
    company: 'Novus Cloud Systems',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    impactMetric: {
      value: '14 hrs',
      label: 'Saved per team member / week'
    },
    verified: true
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Essential AI task organization for individual builders.',
    monthlyPrice: 0,
    annualPrice: 0,
    badge: 'Forever Free',
    ctaText: 'Get Started Free',
    ctaVariant: 'outline',
    targetAudience: 'Solo founders, freelancers, and students optimizing daily flow',
    keyFeatures: [
      'Up to 3 connected workspaces',
      '50 AI task syntheses per month',
      'Basic calendar focus blocking (1 block/day)',
      'Slack & GitHub community integrations',
      '7-day workflow execution history',
      'Community forum support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Intelligent automation and focus defense for ambitious professionals.',
    monthlyPrice: 24,
    annualPrice: 19,
    popular: true,
    badge: 'Most Popular',
    ctaText: 'Start 14-Day Free Trial',
    ctaVariant: 'primary',
    targetAudience: 'Fast-moving operators, senior engineers, and team leads',
    keyFeatures: [
      'Unlimited personal workspaces & boards',
      'Unlimited AI task planning & summaries',
      'Autonomous calendar defense (unlimited)',
      'All 8 standard integrations (Slack, Linear, GitHub, Figma, etc.)',
      'Advanced multi-step autonomous workflows',
      'Natural language workflow prompt builder',
      '30-day workflow audit logs & history',
      'Priority email & chat support (<4hr response)'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Collaborative AI operations and predictability for scaling teams.',
    monthlyPrice: 49,
    annualPrice: 39,
    badge: 'Recommended for Teams',
    ctaText: 'Start Team Trial',
    ctaVariant: 'secondary',
    targetAudience: 'Cross-functional squads, fast-growing startups, and agencies',
    keyFeatures: [
      'Everything in Pro, plus:',
      'Multiplayer team workspaces with live presence',
      'Shared company context graph & RAG search',
      'Monte Carlo predictive sprint analytics & velocity forecast',
      'Custom webhook triggers & bi-directional API access',
      'Role-based access control (Admin, Member, Guest)',
      'Unlimited workflow audit logs & exportable compliance reports',
      'Dedicated Customer Success Manager & onboarding workshop'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Custom security, sovereign AI hosting, and dedicated SLA support.',
    monthlyPrice: 99,
    annualPrice: 85,
    badge: 'Custom Architecture',
    ctaText: 'Contact Enterprise Sales',
    ctaVariant: 'outline',
    targetAudience: 'Organizations with rigorous security, SOC2, and compliance mandates',
    keyFeatures: [
      'Everything in Business, plus:',
      'SAML 2.0 / Okta SSO & SCIM user provisioning',
      'Zero-data retention guarantee on AI model training',
      'Custom SLA with 99.99% uptime guarantee',
      'Dedicated private VPC deployment options',
      'Custom integration development by FlowDesk engineers',
      'Enterprise audit logs & SIEM integration (Splunk, Datadog)',
      'Quarterly executive roadmap reviews & 24/7 phone SLA'
    ]
  }
];

export const PRICING_COMPARISON: PricingFeatureComparison[] = [
  {
    category: 'AI Capabilities & Workflows',
    features: [
      {
        name: 'AI Task Planning & Auto-Prioritization',
        description: 'Context-aware task scheduling and priority ranking',
        free: '50 runs/mo',
        pro: 'Unlimited',
        business: 'Unlimited',
        enterprise: 'Unlimited + Custom Model Fine-tuning'
      },
      {
        name: 'Autonomous Multi-Step Workflows',
        description: 'Multi-app chained triggers and actions',
        free: '3 active flows',
        pro: '25 active flows',
        business: 'Unlimited',
        enterprise: 'Unlimited + Dedicated Worker Queues'
      },
      {
        name: 'Morning Executive Brief & Summaries',
        description: 'Role-based automated audio and text context digest',
        free: 'Weekly only',
        pro: 'Daily',
        business: 'Real-time & on-demand',
        enterprise: 'Custom scheduled pods'
      },
      {
        name: 'Contextual Document Synthesis',
        description: 'Extract decisions from PRs, Slack, and Figma specs',
        free: false,
        pro: true,
        business: true,
        enterprise: true
      }
    ]
  },
  {
    category: 'Calendar & Time Defense',
    features: [
      {
        name: 'Autonomous Focus Block Scheduling',
        description: 'Defend deep work blocks automatically in Google Calendar/Outlook',
        free: '1 block/day',
        pro: 'Unlimited blocks',
        business: 'Team-wide sync',
        enterprise: 'Team-wide + Multi-tenant'
      },
      {
        name: 'Pre-Meeting Context Briefs',
        description: 'Auto-compiled summaries delivered 10 mins before calls',
        free: false,
        pro: true,
        business: true,
        enterprise: true
      },
      {
        name: 'Meeting Load Balancer',
        description: 'Identifies redundant recurring meetings and suggests consolidation',
        free: false,
        pro: 'Basic',
        business: 'Advanced analytics',
        enterprise: 'Custom organization policy'
      }
    ]
  },
  {
    category: 'Team Collaboration & Analytics',
    features: [
      {
        name: 'Multiplayer Real-Time Canvas',
        description: 'Collaborative planning board with live cursor presence',
        free: 'View only',
        pro: 'Up to 5 members',
        business: 'Unlimited members',
        enterprise: 'Unlimited + Guest portals'
      },
      {
        name: 'Predictive Velocity & Burnout Forecasting',
        description: 'Monte Carlo milestone forecasts and workload distribution metrics',
        free: false,
        pro: 'Personal metrics',
        business: 'Team & Squad level',
        enterprise: 'Cross-organization rollups'
      },
      {
        name: 'Decision History & Audit Trail',
        description: 'Searchable timeline of architecture and product decisions',
        free: '7 days',
        pro: '30 days',
        business: '1 year',
        enterprise: 'Unlimited retention'
      }
    ]
  },
  {
    category: 'Security & Enterprise Compliance',
    features: [
      {
        name: 'Data Encryption',
        description: 'AES-256 at rest and TLS 1.3 in transit',
        free: true,
        pro: true,
        business: true,
        enterprise: true
      },
      {
        name: 'Zero-Training Privacy Guarantee',
        description: 'Customer data is never used to train public foundational AI models',
        free: true,
        pro: true,
        business: true,
        enterprise: 'Enforced via BAA / DPA'
      },
      {
        name: 'SAML 2.0 / Okta SSO & SCIM',
        description: 'Single sign-on and automated user provisioning',
        free: false,
        pro: false,
        business: 'Optional add-on',
        enterprise: 'Included'
      },
      {
        name: 'Dedicated Support SLA',
        description: 'Guaranteed response times and support tier',
        free: 'Community',
        pro: '< 4 hours',
        business: '< 1 hour priority',
        enterprise: '24/7 dedicated Slack channel'
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does FlowDesk AI differ from traditional project management tools like Jira or Asana?',
    answer: 'Traditional tools are passive databases that require manual input, status updates, and endless grooming. FlowDesk AI acts as an active intelligence layer that connects to your existing toolchain. It watches your communication channels (Slack), code changes (GitHub), and calendar, and autonomously drafts tasks, links dependencies, updates statuses, and protects focus time.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Does FlowDesk train AI models on my team’s proprietary code and private conversations?',
    answer: 'No. FlowDesk operates on a strict zero-data retention and zero-training policy. Your workspaces, task descriptions, code references, and messages are processed strictly ephemerally through private, enterprise-tier LLM endpoints. Your proprietary data is never used to train public or foundational models.',
    category: 'security'
  },
  {
    id: 'faq-3',
    question: 'How does the 14-day free trial work?',
    answer: 'You receive full access to all FlowDesk Pro and Business tier features for 14 days without entering a credit card. At the end of your trial, you can choose to upgrade to Pro, Business, or downgrade to the Forever Free tier with no lock-in or surprise charges.',
    category: 'pricing'
  },
  {
    id: 'faq-4',
    question: 'How long does it take to connect our existing tools?',
    answer: 'Initial onboarding takes less than three minutes. With standard OAuth connections, you can connect your Google Calendar, Slack, and GitHub with one click. FlowDesk begins analyzing your workflow graph and generates your first smart suggestions within five minutes of setup.',
    category: 'integrations'
  },
  {
    id: 'faq-5',
    question: 'Can human approval be required before automated actions are dispatched?',
    answer: 'Yes. Every automated workflow supports configurable human-in-the-loop approval gates. For high-impact actions—like updating sprint roadmaps, notifying clients, or merging deployment branches—FlowDesk sends a 1-click interactive prompt in Slack or the web UI before proceeding.',
    category: 'features'
  },
  {
    id: 'faq-6',
    question: 'Is FlowDesk AI a real commercial product or a portfolio design project?',
    answer: 'FlowDesk AI is a fictional SaaS concept created as a high-fidelity UI/UX design and frontend engineering portfolio showcase. It illustrates modern product design, accessibility, conversion architecture, and full-stack interactive engineering for evaluation purposes.',
    category: 'general'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Connect your active toolchain',
    subtitle: 'Zero configuration setup in 180 seconds',
    description: 'Grant secure, read-write access to your team’s Slack, GitHub, Linear, Figma, and Google Calendar workspaces via one-click OAuth.',
    detailPoints: ['Granular OAuth scopes', 'Bank-grade AES-256 encryption', 'Immediate metadata indexing']
  },
  {
    step: '02',
    title: 'FlowDesk builds your unified context graph',
    subtitle: 'Real-time synthesis across communication silos',
    description: 'Our proprietary context engine continuously correlates pull requests with Figma frames, Slack discussions, and calendar commitments to map actual project state.',
    detailPoints: ['Identifies hidden dependencies', 'Flags impending milestone blockers', 'Deduplicates cross-team tasks']
  },
  {
    step: '03',
    title: 'Execute intelligent workflows autonomously',
    subtitle: 'Turn scattered signals into coordinated output',
    description: 'FlowDesk schedules focus blocks, writes release notes, prioritizes sprint backlogs, and delivers personalized morning executive briefs directly where your team works.',
    detailPoints: ['Human-in-the-loop approvals', 'Predictive delivery analytics', 'Continuous workflow optimization']
  }
];

export const ABOUT_LEADERSHIP = [
  {
    name: 'Elena Rostova',
    role: 'Co-Founder & Chief Product Officer',
    bio: 'Former VP of Design at leading enterprise SaaS companies. Focused on cognitive ergonomics, human-AI interaction patterns, and eliminating digital clutter.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Marcus K. Vance',
    role: 'Co-Founder & Chief Architect',
    bio: 'Ex-distributed systems lead at cloud infrastructure providers. Built multi-tenant event pipelines handling billions of webhooks with sub-second latency.',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80'
  },
  {
    name: 'Dr. Priya Ramanathan',
    role: 'Head of Applied AI Research',
    bio: 'Ph.D. in Computer Science with focus on grounded reasoning, retrieval-augmented generation (RAG), and deterministic orchestration engines.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80'
  }
];

export const DESIGN_PRINCIPLES = [
  {
    title: 'Design with Intention',
    description: 'Every pixel, margin, and interaction state is mathematically calculated. We ban unmotivated decorative gradients and noisy animations to ensure zero cognitive fatigue.'
  },
  {
    title: 'Invisible AI, Visible Results',
    description: 'AI should not be an intrusive chatbot hovering over your screen. It should function like an expert executive chief of staff working quietly in the background.'
  },
  {
    title: 'Human Sovereignty',
    description: 'Autonomy without accountability breeds chaos. We guarantee human-in-the-loop control, audit trails, and transparent reasoning for every automated action.'
  },
  {
    title: 'Sovereign Privacy by Design',
    description: 'Zero customer data retention for model training, end-to-end encryption, and rigorous RBAC permissions are foundational requirements, never afterthoughts.'
  }
];

// Convenience aliases
export const TRUST_STATS = STATS;
export const FEATURES_DATA = CORE_FEATURES;
export const TESTIMONIALS_DATA = TESTIMONIALS;
export const INTEGRATIONS_DATA = INTEGRATIONS;
export const FAQ_ITEMS = FAQS;
export const TEAM_MEMBERS = ABOUT_LEADERSHIP.map(m => ({
  name: m.name,
  role: m.role,
  bio: m.bio,
  avatar: m.avatarUrl
}));

