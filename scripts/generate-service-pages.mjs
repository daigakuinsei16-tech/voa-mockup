import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.resolve('dist/services');

const services = [
  {
    slug: 'mortgage-loans-processing-support',
    menu: 'Mortgage & Loans Processing Support',
    title: 'Mortgage Processing Virtual Assistant Support',
    keyword: 'mortgage processing virtual assistant',
    category: 'Finance & property',
    meta: 'Work with a mortgage processing virtual assistant experienced in Australian loan administration, broker CRMs, lodgement and settlement support.',
    hero: 'Build dependable loan-processing capacity without adding the staffing burden to your brokerage.',
    summary: 'Virtual Office Angels matches mortgage businesses with an experienced mortgage processing virtual assistant who can support application-to-settlement administration within your approved procedures. Recruitment, onboarding, HR, payroll, IT and ongoing team support are managed for you.',
    image: '/assets/service-mortgage.webp',
    alt: 'Faceless mortgage processing workspace with property documents, a laptop and calculator',
    tags: ['Application administration', 'Broker CRM updates', 'Settlement coordination'],
    tasks: [
      ['CRM and file setup', 'Create and maintain client records, application stages, notes and document status in the broker’s nominated CRM.'],
      ['Document coordination', 'Prepare checklists, follow up approved document requests and organise records for broker review.'],
      ['Serviceability preparation', 'Enter supplied information into approved calculators and prepare outputs for review by the mortgage broker.'],
      ['Forms and valuations', 'Coordinate valuation orders and prepare discharge, FHOG and other required forms using the brokerage’s process.'],
      ['Lender research support', 'Compile product or policy information against criteria supplied by the broker without making a credit recommendation.'],
      ['Lodgement to settlement', 'Support file lodgement, status tracking, stakeholder updates and settlement administration.']
    ],
    systems: ['Connective', 'Mercury', 'Podium', 'Salestrekker', 'Symmetry', 'Flex', 'AdviserLogic', 'COIN'],
    fit: ['Application administration is limiting the time available for client conversations.', 'Files require more consistent document tracking and status updates.', 'You need support from someone familiar with mortgage terminology and broker workflows.', 'You want the employment relationship and day-to-day support managed by one provider.'],
    boundary: 'The virtual assistant supports administration under your documented procedures. Credit decisions, product recommendations, responsible-lending judgements and regulated advice remain with the broker or appropriately authorised professional.',
    faqs: [
      ['What can a mortgage processing virtual assistant do?', 'A mortgage processing virtual assistant can maintain CRM records, coordinate documents, prepare calculator inputs, organise forms, track lodgements and support settlement updates under the broker’s direction.'],
      ['Can the virtual assistant work in our broker CRM?', 'Yes. Matching considers the systems used by your business. VOA’s existing experience includes Connective, Mercury, Podium, Salestrekker, Symmetry, Flex, AdviserLogic and COIN.'],
      ['Does the virtual assistant provide credit advice?', 'No. The role supports mortgage administration. The broker retains responsibility for client advice, lender selection, credit decisions and regulatory obligations.']
    ]
  },
  {
    slug: 'financial-planning-admin-support',
    menu: 'Financial Planning & Admin Support',
    title: 'Financial Planning Virtual Assistant Support',
    keyword: 'financial planning virtual assistant',
    category: 'Finance & property',
    meta: 'Add a financial planning virtual assistant for client administration, Xplan data, meeting packs and advice-document preparation under adviser direction.',
    hero: 'Keep advice workflows moving with specialised administration managed around your business.',
    summary: 'A financial planning virtual assistant supports advisers with client records, meeting preparation and advice administration under the direction of the licensed practice. Virtual Office Angels matches for relevant systems experience and manages the employment, onboarding and ongoing support around the role.',
    image: '/assets/service-financial-planning.webp',
    alt: 'Faceless financial planning administration workspace with reports, charts and a laptop',
    tags: ['Client administration', 'Xplan support', 'Meeting preparation'],
    tasks: [
      ['Client record maintenance', 'Update approved client details, file notes, workflow stages and outstanding actions in the practice system.'],
      ['Meeting packs', 'Collate existing client information, reports, handouts and supporting documents before adviser meetings.'],
      ['Presentation preparation', 'Format PowerPoint templates and supporting material using the practice’s approved content and branding.'],
      ['Advice-document support', 'Assist with data entry, formatting and document preparation under the instructions and review of an authorised adviser.'],
      ['Appointment coordination', 'Manage calendars, confirmations and approved follow-up communications for client meetings.'],
      ['Implementation administration', 'Track approved implementation actions, document receipt and workflow completion for adviser review.']
    ],
    systems: ['Xplan', 'Risk Researcher', 'WealthSolver', 'CALM', 'Midwinter', 'AdviserLogic', 'Microsoft Office'],
    fit: ['Advisers are losing client time to repetitive administration.', 'Meeting preparation and client records need a more consistent process.', 'The role requires familiarity with financial-planning terminology and software.', 'You need managed support around recruitment, payroll, IT and performance.'],
    boundary: 'The virtual assistant provides administrative support to the practice. They do not provide personal financial advice, select strategies, make recommendations or replace the review and authorisation required from a licensed adviser.',
    faqs: [
      ['What does a financial planning virtual assistant support?', 'A financial planning virtual assistant can maintain client records, prepare meeting packs, coordinate appointments, format approved advice documents and track implementation administration under adviser direction.'],
      ['Can matching include Xplan experience?', 'Yes. VOA considers your required systems during recruitment. Relevant experience may include Xplan modules such as Risk Researcher, WealthSolver and CALM, as well as Midwinter and AdviserLogic.'],
      ['Can the virtual assistant provide financial advice?', 'No. The virtual assistant supports administration. Advice, recommendations, strategy decisions and regulated sign-off remain with appropriately authorised professionals.']
    ]
  },
  {
    slug: 'accounting-bookkeeping-support',
    menu: 'Accounting & Bookkeeping Support',
    title: 'Accounting and Bookkeeping Virtual Assistant Support',
    keyword: 'accounting and bookkeeping virtual assistant',
    category: 'Finance & property',
    meta: 'Match with an accounting and bookkeeping virtual assistant experienced in Xero, MYOB, Saasu, invoicing, reconciliation and reporting preparation.',
    hero: 'Give routine financial administration the accuracy and continuity it requires.',
    summary: 'An accounting and bookkeeping virtual assistant can support transaction records, invoicing, reconciliations and reporting preparation within your established controls. Virtual Office Angels matches candidates for relevant software and task experience, then manages the employment and support around the role.',
    image: '/assets/service-accounting.webp',
    alt: 'Faceless accounting workspace with reconciliation records, a calculator and laptop',
    tags: ['Reconciliation support', 'Payables and receivables', 'Reporting preparation'],
    tasks: [
      ['Invoicing support', 'Prepare and issue approved invoices, update payment status and maintain supporting records.'],
      ['Accounts payable', 'Organise supplier bills, enter approved information and prepare payment schedules for authorisation.'],
      ['Accounts receivable', 'Maintain debtor records and send approved payment reminders using the business’s communication process.'],
      ['Payroll administration', 'Prepare payroll inputs, employee records and supporting reports for review and approval.'],
      ['Bank reconciliation', 'Match transactions, flag exceptions and prepare reconciliation records for the nominated reviewer.'],
      ['Reporting preparation', 'Maintain ledgers and prepare balance-sheet or management-report inputs from approved source data.']
    ],
    systems: ['Xero', 'MYOB', 'Saasu', 'Microsoft Excel', 'Client document systems'],
    fit: ['Transaction processing is taking time away from analysis or client service.', 'Reconciliations and supporting records need more consistent attention.', 'The business needs support familiar with its accounting platform.', 'You want role continuity backed by managed HR, payroll and IT support.'],
    boundary: 'The virtual assistant works within your approvals and internal controls. Tax advice, audit opinions, statutory sign-off and decisions reserved for a registered accountant, tax agent or business owner remain with those authorised parties.',
    faqs: [
      ['What can an accounting and bookkeeping virtual assistant do?', 'They can support invoicing, payables, receivables, payroll administration, transaction entry, bank reconciliations and report preparation within the business’s approval process.'],
      ['Which accounting platforms can be considered during matching?', 'VOA can match for relevant software experience. The existing service scope identifies Xero, MYOB and Saasu, with other requirements discussed during role planning.'],
      ['Who reviews and approves the work?', 'Your nominated business owner, accountant or authorised reviewer retains approval and sign-off. The virtual assistant completes the assigned administration within those controls.']
    ]
  },
  {
    slug: 'real-estate-admin-support',
    menu: 'Real Estate & Admin Support',
    title: 'Real Estate Virtual Assistant Support',
    keyword: 'real estate virtual assistant',
    category: 'Finance & property',
    meta: 'Work with a real estate virtual assistant for CRM administration, lead follow-up, inbox support, property records and document coordination.',
    hero: 'Keep property administration moving while your local team stays focused on clients and listings.',
    summary: 'A real estate virtual assistant supports the recurring administration behind prospecting, client communication and property workflows. Virtual Office Angels matches the role to your agency’s tasks, systems and working style, with ongoing HR, payroll, IT and team support included.',
    image: '/assets/service-real-estate.webp',
    alt: 'Faceless real estate administration workspace with a CRM, floor plan and checklist',
    tags: ['CRM administration', 'Prospect follow-up', 'Property documentation'],
    tasks: [
      ['CRM upkeep', 'Update contact details, lead stages, property notes, activities and approved follow-up dates.'],
      ['Lead administration', 'Research and organise prospect information, maintain lead lists and record outreach outcomes.'],
      ['Approved follow-up', 'Complete calls or messages using agency-approved scripts, processes and escalation rules.'],
      ['Inbox and calendar support', 'Sort enquiries, coordinate appointments and keep the team’s schedules current.'],
      ['Listing administration', 'Prepare draft listing information, organise media or documents and track required approvals.'],
      ['Property file coordination', 'Maintain checklists, supporting records and milestone updates across the agency workflow.']
    ],
    systems: ['Your property CRM', 'Email and calendar platforms', 'Cloud document storage', 'Agency workflow tools'],
    fit: ['Agents are spending too much selling time on CRM and inbox administration.', 'Prospect records and approved follow-ups require consistent attention.', 'Property files need clearer document and milestone tracking.', 'The agency wants an experienced remote professional with managed support.'],
    boundary: 'The virtual assistant follows the agency’s approved scripts, authorities and escalation process. Licensed activity, negotiation, legal interpretation and decisions requiring a local or authorised professional stay with the appropriate team member.',
    faqs: [
      ['What tasks can a real estate virtual assistant handle?', 'A real estate virtual assistant can maintain CRM records, organise lead data, coordinate appointments, support approved follow-ups and maintain listing or property documentation.'],
      ['Can the role be matched to our property CRM?', 'Yes. VOA reviews the platforms and workflows used by your agency and includes relevant systems experience in the candidate requirements.'],
      ['Will the virtual assistant replace licensed real estate work?', 'No. The role supports administration. Licensed activity, negotiation, legal interpretation and local responsibilities remain with appropriately authorised staff.']
    ]
  },
  {
    slug: 'back-office-admin-support',
    menu: 'Back Office & Admin Support',
    title: 'Administrative Virtual Assistant Services',
    keyword: 'administrative virtual assistant services',
    category: 'Business operations',
    meta: 'Use administrative virtual assistant services for inboxes, calendars, customer support, research, transcription and back-office workflows.',
    hero: 'Create reliable back-office capacity around the way your business already operates.',
    summary: 'VOA’s administrative virtual assistant services provide experienced support for recurring business administration, executive coordination and customer workflows. The role is scoped around your priorities, then backed by managed recruitment, onboarding, HR, payroll and IT support.',
    image: '/assets/voa-services-overview.webp',
    alt: 'Faceless remote administration workspace with laptop, documents and organised task lists',
    tags: ['Executive administration', 'Inbox and calendar support', 'Customer coordination'],
    tasks: [
      ['Executive assistance', 'Prepare schedules, action lists, meeting material and routine correspondence for business leaders.'],
      ['Inbox management', 'Sort messages, apply agreed priorities and prepare or send responses within approved guidelines.'],
      ['Calendar coordination', 'Organise appointments, meeting logistics, reminders and schedule changes.'],
      ['Customer support', 'Respond to routine enquiries, record issues and escalate requests using the business’s service process.'],
      ['Research and data support', 'Compile approved business information from sources such as LinkedIn, directories or internal records.'],
      ['Document administration', 'Support transcription, travel or event coordination, insurance administration and recurring back-office records.']
    ],
    systems: ['Your CRM', 'Email and calendar platforms', 'Microsoft 365 or Google Workspace', 'Cloud document storage', 'Task-management tools'],
    fit: ['Leaders are carrying recurring administration that does not need their judgement.', 'Customer, calendar or inbox tasks need dependable daily coverage.', 'The role spans several connected back-office workflows.', 'You want a right-fit professional without managing employment administration alone.'],
    boundary: 'The role follows your documented permissions, approval levels and escalation points. Commercial commitments, legal decisions, sensitive approvals and work outside the agreed authority remain with your nominated team members.',
    faqs: [
      ['What is included in administrative virtual assistant services?', 'The scope may include executive assistance, inbox and calendar management, customer coordination, research, transcription, travel support and recurring back-office records.'],
      ['Can one role cover several administrative workflows?', 'Yes, when the tasks require compatible skills and fit within a realistic workload. Role planning defines priorities, systems, working hours and approval levels before recruitment.'],
      ['How is an administrative virtual assistant managed?', 'VOA manages recruitment, onboarding, HR, payroll, IT and ongoing team support. Your business directs the role’s priorities, processes and expected outcomes.']
    ]
  },
  {
    slug: 'digital-marketing-assistance',
    menu: 'Digital Marketing Assistance',
    title: 'Digital Marketing Virtual Assistant Support',
    keyword: 'digital marketing virtual assistant',
    category: 'Growth & technology',
    meta: 'Add a digital marketing virtual assistant for campaign administration, social publishing, analytics reports, website updates and content production.',
    hero: 'Turn approved marketing plans into consistent campaign and content execution.',
    summary: 'A digital marketing virtual assistant supports the production, publishing and reporting work behind your marketing plan. VOA matches for the channels and practical skills you require, then manages the employment and ongoing support around the role.',
    image: '/assets/voa-managed-support.webp',
    alt: 'Faceless digital marketing workspace with content planning, reporting and campaign tools',
    tags: ['Campaign administration', 'Social publishing', 'Analytics reporting'],
    tasks: [
      ['Content production support', 'Prepare approved graphics, videos, simple animations and campaign assets from supplied briefs.'],
      ['Social media publishing', 'Schedule and maintain approved posts across the platforms selected by the business.'],
      ['Campaign coordination', 'Maintain calendars, asset status, links, approvals and delivery checklists for digital campaigns.'],
      ['Analytics reporting', 'Compile traffic, engagement and campaign data into recurring reports for the marketing lead.'],
      ['Website updates', 'Upload approved page, article or media changes and complete routine content maintenance.'],
      ['Search support', 'Assist with approved SEO, search advertising and social optimisation tasks under the campaign owner’s direction.']
    ],
    systems: ['Google Analytics', 'Facebook and Instagram', 'TikTok', 'YouTube', 'Your CMS', 'Approved design and campaign tools'],
    fit: ['Campaign plans are ready but execution is inconsistent.', 'Content publishing and reporting are taking strategic time from the marketing lead.', 'The role requires a defined mix of channel and production experience.', 'You need ongoing support around the person as well as the work.'],
    boundary: 'The virtual assistant executes approved tasks and reports results. Brand strategy, budgets, claims, campaign approvals and access permissions remain with your authorised marketing or business lead.',
    faqs: [
      ['What can a digital marketing virtual assistant do?', 'A digital marketing virtual assistant can support asset production, social publishing, campaign administration, analytics reporting, website updates and approved search-marketing tasks.'],
      ['Can the role focus on selected channels?', 'Yes. Matching starts with the channels, content formats, systems and level of production experience your marketing plan requires.'],
      ['Who approves campaigns and published content?', 'Your authorised marketing or business lead retains responsibility for strategy, budgets, claims, final approvals and platform permissions.']
    ]
  },
  {
    slug: 'sales-marketing-support',
    menu: 'Sales & Marketing Support',
    title: 'Sales and Marketing Virtual Assistant Support',
    keyword: 'sales and marketing virtual assistant',
    category: 'Growth & technology',
    meta: 'Use a sales and marketing virtual assistant for lead research, CRM upkeep, approved outreach, customer support and order administration.',
    hero: 'Give lead and customer workflows the consistent follow-through they need.',
    summary: 'A sales and marketing virtual assistant supports the recurring research, CRM, communication and order tasks around your revenue team. VOA matches the role to your process and systems, then manages onboarding, HR, payroll, IT and ongoing support.',
    image: '/assets/voa-services-overview.webp',
    alt: 'Faceless sales support workspace with CRM records, communication tasks and reports',
    tags: ['Lead research', 'CRM administration', 'Customer follow-up'],
    tasks: [
      ['Lead research', 'Build and maintain prospect lists using the markets, criteria and sources approved by the business.'],
      ['CRM administration', 'Update contact records, opportunity stages, activities, next steps and data-quality fields.'],
      ['Inbound support', 'Respond to routine enquiries, qualify required information and route opportunities to the right team member.'],
      ['Approved outbound activity', 'Complete calls or messages using approved scripts, contact rules and escalation points.'],
      ['Order validation', 'Check required order information, flag discrepancies and coordinate internal follow-up.'],
      ['Order fulfilment support', 'Maintain status records, customer updates and hand-offs across the approved fulfilment process.']
    ],
    systems: ['Your CRM', 'Approved email and calling tools', 'Lead-research sources', 'Order-management platforms', 'Reporting templates'],
    fit: ['Leads are entering the business without consistent follow-up.', 'CRM records need stronger accuracy and next-action discipline.', 'Sales staff are spending too much time on research or order administration.', 'You want process support backed by managed staffing.'],
    boundary: 'The virtual assistant works from your approved scripts, offers, permissions and contact policies. Pricing decisions, commercial commitments, contract approval and regulated marketing responsibilities stay with authorised staff.',
    faqs: [
      ['What does a sales and marketing virtual assistant handle?', 'The role can support lead research, CRM updates, approved inbound or outbound activity, customer administration, order validation and fulfilment coordination.'],
      ['Can the role work with our existing sales process?', 'Yes. Role planning documents your stages, systems, scripts, permissions, hand-offs and reporting expectations before matching begins.'],
      ['Does the virtual assistant make commercial decisions?', 'No. Pricing, contracts, commitments and other approval decisions remain with authorised members of your business.']
    ]
  },
  {
    slug: 'it-services-technology',
    menu: 'IT Services & Technology',
    title: 'IT Virtual Assistant Services and Technology Support',
    keyword: 'IT virtual assistant',
    category: 'Growth & technology',
    meta: 'Match with an IT virtual assistant for WordPress maintenance, website updates, troubleshooting, interface support and technical administration.',
    hero: 'Add practical technical capacity for the website and systems work that needs regular attention.',
    summary: 'An IT virtual assistant supports defined website, maintenance and technical-administration workflows within your access controls. VOA matches candidates to the required platforms and level of experience, with managed employment and ongoing support included.',
    image: '/assets/voa-managed-support-hero.png',
    alt: 'Faceless technology support workspace with laptop, secure access and task monitoring',
    tags: ['Website maintenance', 'WordPress support', 'Technical administration'],
    tasks: [
      ['Website updates', 'Implement approved content, layout and media updates within the existing website environment.'],
      ['WordPress maintenance', 'Support routine plugin, theme and content maintenance within documented change controls.'],
      ['Issue investigation', 'Reproduce reported website problems, document findings and complete approved troubleshooting steps.'],
      ['Interface support', 'Assist with web graphics, mock-ups and user-interface updates based on supplied requirements.'],
      ['Traffic monitoring', 'Compile website traffic and performance information for review by the business or technical lead.'],
      ['Product support administration', 'Assist with documented installation, configuration and upgrade tasks within approved permissions.']
    ],
    systems: ['WordPress', 'Website content systems', 'Analytics platforms', 'Approved design tools', 'Task and issue trackers'],
    fit: ['Routine website work is waiting behind larger technical priorities.', 'The business needs defined maintenance and update coverage.', 'Issues require consistent documentation and follow-through.', 'You need technical experience matched to an agreed access level.'],
    boundary: 'Access, change approval, backups, security controls and escalation paths are defined by your technical owner. High-risk infrastructure changes, security decisions and work outside the agreed technical authority remain with qualified authorised personnel.',
    faqs: [
      ['What can an IT virtual assistant support?', 'An IT virtual assistant can assist with website updates, WordPress maintenance, issue documentation, approved troubleshooting, interface tasks and technical administration.'],
      ['Can the role be matched to our technology stack?', 'Yes. VOA reviews the platforms, task types, access requirements and experience level needed before candidate sourcing starts.'],
      ['How is access to systems controlled?', 'Your business defines permissions, security requirements, change approvals and escalation points. Access should be limited to what the agreed role requires.']
    ]
  },
  {
    slug: 'creative-writing-assistance',
    menu: 'Creative Writing Assistance',
    title: 'Copywriting Virtual Assistant Support',
    keyword: 'copywriting virtual assistant',
    category: 'Growth & technology',
    meta: 'Use a copywriting virtual assistant for articles, website copy, proofreading, content research and publishing administration.',
    hero: 'Build a more consistent content workflow without placing every draft and upload on your core team.',
    summary: 'A copywriting virtual assistant supports research, drafting, editing and publishing from an approved brief and brand guidelines. VOA matches the required writing and content-management experience, then manages the employment and ongoing support around the role.',
    image: '/assets/voa-services-overview.webp',
    alt: 'Faceless content writing workspace with laptop, editorial notes and publishing plan',
    tags: ['Article support', 'Website copy', 'Proofreading and publishing'],
    tasks: [
      ['Article drafting', 'Prepare structured drafts from approved topics, sources, audience guidance and editorial briefs.'],
      ['Website content', 'Draft or update page copy around supplied positioning, service information and calls to action.'],
      ['Proofreading', 'Review grammar, consistency, spelling and formatting using the nominated English variant and style guide.'],
      ['Content research', 'Compile source material, questions and supporting information for review before drafting.'],
      ['Blog administration', 'Format approved articles, add supplied media and prepare posts in the content-management system.'],
      ['Publishing support', 'Maintain content calendars, version status, approvals and scheduled publication tasks.']
    ],
    systems: ['Your content-management system', 'Shared document platforms', 'Editorial calendars', 'Research sources', 'Brand and style guidelines'],
    fit: ['Subject-matter experts have ideas but limited drafting time.', 'Website and blog updates are being published inconsistently.', 'Content needs a defined research, review and approval workflow.', 'You need writing support matched to your audience and English style.'],
    boundary: 'The virtual assistant works from approved briefs and sources. Your business retains responsibility for factual claims, legal or compliance review, brand approval and final publication decisions.',
    faqs: [
      ['What can a copywriting virtual assistant produce?', 'A copywriting virtual assistant can support articles, website copy, proofreading, research, blog administration and content publishing from approved briefs.'],
      ['Can the writer follow our brand voice?', 'Yes. Matching considers writing samples and relevant subject experience, while onboarding covers your audience, terminology, English variant, examples and approval process.'],
      ['Who checks claims before publication?', 'Your nominated reviewer retains responsibility for factual accuracy, legal or compliance checks, brand approval and the final decision to publish.']
    ]
  }
];

const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

function navigation(currentSlug = '') {
  const serviceLink = service => `<a href="/services/${service.slug}/"${service.slug === currentSlug ? ' aria-current="page"' : ''}>${esc(service.menu)}</a>`;
  const financeLinks = services.slice(0, 4).map(serviceLink).join('');
  const businessLinks = services.slice(4).map(serviceLink).join('');
  return `<div class="proposal-strip"><div class="wrap"><strong>Virtual Office Angels · Service-page proposal</strong><span>SEO and GEO service structure</span><a href="/">Homepage proposal</a></div></div>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="/" aria-label="Virtual Office Angels homepage"><img src="/assets/voa-logo-light.png" alt="Virtual Office Angels — Making Life Easier"></a>
      <nav class="site-nav" aria-label="Primary navigation">
        <div class="nav-dropdown">
          <a href="/services/"${currentSlug === 'index' ? ' aria-current="page"' : ''}>Services</a>
          <button class="dropdown-toggle" aria-expanded="false" aria-label="Show service pages"><span aria-hidden="true"></span></button>
          <div class="service-dropdown">
            <div class="dropdown-column"><span class="dropdown-label">Finance &amp; property</span>${financeLinks}</div>
            <div class="dropdown-column"><span class="dropdown-label">Business &amp; growth</span>${businessLinks}</div>
            <aside class="dropdown-summary"><span class="dropdown-kicker">Specialised experience</span><h3>Choose support that already understands the work.</h3><p>Compare role scope, systems experience and the managed support included around each virtual assistant.</p><a data-page-no-edit class="dropdown-summary-link" href="/services/">View all services →</a></aside>
          </div>
        </div>
        <a href="/managed-virtual-support/"${currentSlug === 'managed' ? ' aria-current="page"' : ''}>Manage Virtual Support</a><a href="/#about">About</a><a href="/#insights">Insights</a><a href="/#faq">FAQs</a><a class="header-cta" href="/#contact">Get in touch</a>
      </nav>
      <button class="menu-button" aria-label="Open menu" aria-expanded="false">☰</button>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="wrap"><div class="footer-grid">
    <div><a class="footer-brand" href="/"><img src="/assets/voa-logo-orange.png" alt="Virtual Office Angels — Making Life Easier"></a><p>Specialised virtual assistants with managed support for Australian businesses.</p></div>
    <div><strong>Services</strong><a href="/services/mortgage-loans-processing-support/">Mortgage &amp; loans</a><a href="/services/financial-planning-admin-support/">Financial planning</a><a href="/services/accounting-bookkeeping-support/">Accounting &amp; bookkeeping</a><a href="/services/real-estate-admin-support/">Real estate</a></div>
    <div><strong>Company</strong><a href="/managed-virtual-support/">Manage virtual support</a><a href="/#about">About us</a><a href="/#insights">Insights</a><a href="/#faq">FAQs</a></div>
    <div><strong>Contact</strong><a href="tel:1300737883">1 300 737 883</a><a href="mailto:clientcare@virtualofficeangels.com.au">clientcare@virtualofficeangels.com.au</a><a href="/#contact">Chatswood, NSW</a></div>
  </div><div class="footer-note">Service-page content proposal · Service boundaries, platform experience and claims should receive final operational and compliance review before publication.</div></div></footer>`;
}

function pageHead(title, description, schema) {
  return `<!DOCTYPE html><html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="stylesheet" href="/service-pages.css"><link rel="stylesheet" href="/service-editor.css"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script></head>`;
}

function servicePage(service) {
  const faqSchema = service.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } }));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: service.title, serviceType: service.keyword, description: service.meta, provider: { '@type': 'Organization', name: 'Virtual Office Angels', url: 'https://virtualofficeangels.com.au/' }, areaServed: { '@type': 'Country', name: 'Australia' }, audience: { '@type': 'BusinessAudience', audienceType: 'Australian businesses' } },
    { '@type': 'FAQPage', mainEntity: faqSchema }
  ] };
  const tasks = service.tasks.map(([title, description], index) => `<article class="task-card"><span class="task-number">0${index + 1}</span><h3>${esc(title)}</h3><p>${esc(description)}</p></article>`).join('');
  const systems = service.systems.map(item => `<span>${esc(item)}</span>`).join('');
  const fit = service.fit.map(item => `<li>${esc(item)}</li>`).join('');
  const faqs = service.faqs.map(([question, answer]) => `<div class="faq-item"><button class="faq-question" aria-expanded="false"><span>${esc(question)}</span><span class="faq-plus">+</span></button><div class="faq-answer">${esc(answer)}</div></div>`).join('');
  const tags = service.tags.map(tag => `<span>${esc(tag)}</span>`).join('');

  return `${pageHead(`${service.title} | Virtual Office Angels`, service.meta, schema)}<body>${navigation(service.slug)}<main>
    <section class="service-hero"><div class="wrap hero-grid"><div><p class="breadcrumbs"><a href="/">Home</a> / <a href="/services/">Services</a> / ${esc(service.menu)}</p><p class="eyebrow">${esc(service.keyword)}</p><h1>${esc(service.title)}</h1><p class="hero-lead">${esc(service.summary)}</p><div class="hero-actions"><a class="button" href="/#contact">Find the Right Fit</a><a class="button-outline" href="#tasks">See What You Can Delegate</a></div><div class="scope-tags">${tags}</div></div><figure class="hero-visual"><img src="${service.image}" alt="${esc(service.alt)}"></figure></div></section>
    <section id="tasks" class="section section--ice"><div class="wrap"><div class="section-intro"><p class="eyebrow">Role scope</p><h2>${esc(service.hero)}</h2><p>The service starts with the outcomes, recurring work and systems that need coverage. The role is then defined around tasks that can be documented, reviewed and integrated into your existing team.</p></div><div class="task-grid">${tasks}</div></div></section>
    <section class="section"><div class="wrap"><div class="systems-panel"><div><p class="eyebrow">Systems experience</p><h2>Match the role to the tools behind the work.</h2><p>System requirements are confirmed during role planning and assessed during candidate matching.</p></div><div class="system-list">${systems}</div></div></div></section>
    <section class="section section--ice"><div class="wrap fit-grid"><div><p class="eyebrow">When this role fits</p><h2>Choose specialised support when the workflow needs more than general administration.</h2><ul class="check-list">${fit}</ul></div><aside class="boundary-card"><p class="eyebrow">Clear role boundaries</p><h3>Support works best with defined authority and review.</h3><p>${esc(service.boundary)}</p></aside></div></section>
    <section class="section section--navy"><div class="wrap"><div class="managed-heading"><div><p class="eyebrow">Managed virtual support</p><h2>The person, onboarding and ongoing support are managed around the role.</h2></div><p>VOA covers the staffing relationship so your team can focus on priorities, workflows and quality. The process remains specific to the service, systems and working standards you require.</p></div><div class="managed-steps"><article class="managed-step"><span>01</span><h3>Plan the role</h3><p>Define tasks, systems, working hours, permissions and expected outcomes.</p></article><article class="managed-step"><span>02</span><h3>Match experience</h3><p>Assess candidates against the practical demands and working style of the role.</p></article><article class="managed-step"><span>03</span><h3>Integrate support</h3><p>Introduce the virtual assistant to your systems, team and documented procedures.</p></article><article class="managed-step"><span>04</span><h3>Support delivery</h3><p>Receive ongoing HR, payroll, IT and team support after placement.</p></article></div></div></section>
    <section class="section"><div class="wrap faq-wrap"><div class="faq-intro"><p class="eyebrow">Questions about the service</p><h2>What businesses need to know before matching.</h2><p>Role planning confirms the final scope, systems and responsibilities for your business.</p></div><div class="faq-list">${faqs}</div></div></section>
    <section class="contact-band"><div class="wrap"><div><p class="eyebrow">Start with the role</p><h2>Find the right specialised virtual assistant for your business.</h2><p>Tell us what needs coverage, which systems you use and where relevant experience matters most.</p></div><div class="contact-actions"><a class="button" href="/#contact">Get in touch</a><a class="button-outline" href="tel:1300737883">Call 1 300 737 883</a></div></div></section>
  </main>${footer()}<script src="/service-pages.js" defer></script><script src="/service-editor.js" defer></script></body></html>`;
}

function servicesIndex() {
  const description = 'Compare specialised virtual assistant services for Australian businesses across mortgage, finance, accounting, real estate, administration, marketing, IT and content.';
  const itemList = services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.menu, url: `/services/${service.slug}/` }));
  const schema = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Virtual Office Angels specialised virtual assistant services', itemListElement: itemList };
  const cards = services.map(service => `<a class="directory-card" href="/services/${service.slug}/"><span class="category">${esc(service.category)}</span><h2>${esc(service.menu)}</h2><p>${esc(service.meta)}</p><span class="arrow" aria-hidden="true">→</span></a>`).join('');
  return `${pageHead('Specialised Virtual Assistant Services | Virtual Office Angels', description, schema)}<body>${navigation('index')}<main>
    <section class="service-hero"><div class="wrap hero-grid"><div><p class="breadcrumbs"><a href="/">Home</a> / Services</p><p class="eyebrow">Professional virtual assistant services</p><h1>Specialised Virtual Assistant Services for Australian Businesses</h1><p class="hero-lead">Virtual Office Angels provides experienced virtual assistants for Australian businesses across finance, property, administration, marketing, technology and content. Each role is scoped around the work and systems you need, with recruitment, onboarding, HR, payroll, IT and ongoing team support managed for you.</p><div class="hero-actions"><a class="button" href="/#contact">Find the Right Fit</a><a class="button-outline" href="#service-directory">Compare Services</a></div></div><figure class="hero-visual"><img src="/assets/voa-services-overview.webp" alt="Faceless virtual support workspace with specialist business workflows and organised task lists"></figure></div></section>
    <section id="service-directory" class="section"><div class="wrap"><div class="section-intro"><p class="eyebrow">Service directory</p><h2>Start with the workflow that needs experienced support.</h2><p>These specialised virtual assistant services are organised by business function. Each page explains the typical task scope, relevant systems, role boundaries and managed support model.</p></div><div class="service-directory">${cards}</div></div></section>
    <section class="section section--ice"><div class="wrap choice-band"><h2>Not sure which service fits the work?</h2><div class="choice-list"><a href="/services/mortgage-loans-processing-support/">Loan files and settlements →</a><a href="/services/financial-planning-admin-support/">Advice administration →</a><a href="/services/accounting-bookkeeping-support/">Financial records and reconciliation →</a><a href="/services/real-estate-admin-support/">Property and CRM administration →</a><a href="/services/back-office-admin-support/">Daily business administration →</a><a href="/services/digital-marketing-assistance/">Campaign and content execution →</a></div></div></section>
    <section class="section section--navy"><div class="wrap"><div class="managed-heading"><div><p class="eyebrow">One managed model</p><h2>Specialised experience, supported beyond recruitment.</h2></div><p>The right service page helps define the work. VOA then helps plan the role, source relevant experience, support onboarding and manage the employment relationship around your virtual assistant.</p></div><div class="managed-steps"><article class="managed-step"><span>01</span><h3>Define</h3><p>Clarify the work, systems, hours and expected outcomes.</p></article><article class="managed-step"><span>02</span><h3>Match</h3><p>Assess relevant industry, task and platform experience.</p></article><article class="managed-step"><span>03</span><h3>Integrate</h3><p>Connect the person to your team, workflows and standards.</p></article><article class="managed-step"><span>04</span><h3>Manage</h3><p>Receive ongoing HR, payroll, IT and team support.</p></article></div></div></section>
    <section class="section"><div class="wrap faq-wrap"><div class="faq-intro"><p class="eyebrow">Choosing a service</p><h2>Start with what the role needs to know.</h2><p>Specific experience matters when the work uses industry terminology, regulated processes or specialist systems.</p></div><div class="faq-list"><div class="faq-item"><button class="faq-question" aria-expanded="false"><span>Should I choose a general or specialised virtual assistant?</span><span class="faq-plus">+</span></button><div class="faq-answer">Choose specialised support when the role depends on industry terminology, specific software, established documentation or compliance-sensitive workflows. General administration may suit broader routine tasks.</div></div><div class="faq-item"><button class="faq-question" aria-expanded="false"><span>How are virtual assistants matched to a service?</span><span class="faq-plus">+</span></button><div class="faq-answer">VOA first defines the role, systems and working expectations. Candidates are then assessed against the relevant task experience, industry background and working fit.</div></div><div class="faq-item"><button class="faq-question" aria-expanded="false"><span>Can one role combine tasks from more than one service?</span><span class="faq-plus">+</span></button><div class="faq-answer">Yes, when the responsibilities require compatible skills and fit within a realistic workload. Role planning identifies the priorities and experience the combined position needs.</div></div></div></div></section>
    <section class="contact-band"><div class="wrap"><div><p class="eyebrow">Discuss the role</p><h2>Tell us where specialised support would make the greatest difference.</h2><p>Share the recurring work, systems and experience your business requires.</p></div><div class="contact-actions"><a class="button" href="/#contact">Get in touch</a><a class="button-outline" href="tel:1300737883">Call 1 300 737 883</a></div></div></section>
  </main>${footer()}<script src="/service-pages.js" defer></script><script src="/service-editor.js" defer></script></body></html>`;
}

function managedSupportPage() {
  const faqs = [
    ['What is managed virtual support?', 'Managed virtual support combines role planning, candidate matching, onboarding and ongoing employment support around a virtual assistant. Your business directs the work while Virtual Office Angels manages HR, payroll, IT and team support.'],
    ['How is this different from hiring a freelance virtual assistant?', 'The service continues after recruitment. Virtual Office Angels remains involved in the employment relationship, onboarding support, payroll, HR administration, IT coordination and performance support.'],
    ['Who manages the virtual assistant’s daily priorities?', 'Your business sets the role’s priorities, workflows, approvals and expected outcomes. Virtual Office Angels manages the employment and support structure around the person.'],
    ['Can the role require industry or software experience?', 'Yes. Role planning documents the terminology, tasks, systems and level of experience required before candidates are assessed and shortlisted.']
  ];
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: 'HR-Managed Virtual Support', serviceType: 'managed virtual support services', description: 'Managed virtual support for Australian businesses, including role planning, specialised recruitment, onboarding, HR, payroll, IT and ongoing team support.', provider: { '@type': 'Organization', name: 'Virtual Office Angels', url: 'https://virtualofficeangels.com.au/' }, areaServed: { '@type': 'Country', name: 'Australia' }, audience: { '@type': 'BusinessAudience', audienceType: 'Australian businesses' } },
    { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
  ] };
  const faqMarkup = faqs.map(([question, answer]) => `<div class="faq-item"><button class="faq-question" aria-expanded="false"><span>${esc(question)}</span><span class="faq-plus">+</span></button><div class="faq-answer">${esc(answer)}</div></div>`).join('');
  return `${pageHead('Managed Virtual Support Services | Virtual Office Angels', 'Managed virtual support services for Australian businesses, covering role planning, specialised recruitment, onboarding, HR, payroll, IT and ongoing support.', schema)}<body>${navigation('managed')}<main>
    <section class="service-hero"><div class="wrap hero-grid"><div><p class="breadcrumbs"><a href="/">Home</a> / Managed Virtual Support</p><p class="eyebrow">Managed virtual support services</p><h1>HR-Managed Virtual Support for Australian Businesses</h1><p class="hero-lead">An HR-managed virtual support solution gives your business a specialised virtual assistant backed by role planning, recruitment, onboarding and ongoing employment support. You direct the work while Virtual Office Angels manages HR, payroll, IT and the support structure around the person.</p><div class="hero-actions"><a class="button" href="/#contact">Get in touch</a><a class="button-outline" href="#managed-process">See What Is Managed</a></div><div class="scope-tags"><span>Role-first planning</span><span>Specialised matching</span><span>Ongoing support</span></div></div><figure class="hero-visual"><img src="/assets/voa-managed-support.webp" alt="Faceless managed virtual support workspace showing onboarding, team support and task coordination"></figure></div></section>
    <section class="section"><div class="wrap definition-grid"><div class="definition-copy"><p class="eyebrow">More than recruitment</p><h2>What is an HR-managed virtual support solution?</h2><p>It is a complete staffing relationship rather than a candidate introduction. Virtual Office Angels helps define the position, assesses applicants against the work and systems involved, supports onboarding and remains involved after placement.</p><p>The model gives Australian businesses access to professional virtual assistant services while reducing the internal administration attached to recruiting and supporting remote staff.</p></div><aside class="managed-includes"><p class="eyebrow">What VOA manages</p><h3>Support around the person and the role</h3><ul><li>Role scope and candidate requirements</li><li>Recruitment and experience assessment</li><li>Employment administration and payroll</li><li>Onboarding and IT coordination</li><li>Performance and client-care support</li><li>Replacement pathway when required</li></ul></aside></div></section>
    <section id="managed-process" class="section section--ice"><div class="wrap"><div class="section-intro"><p class="eyebrow">End-to-end support</p><h2>The four parts of managed virtual support</h2><p>Each stage addresses a different part of building and maintaining a productive virtual support relationship.</p></div><div class="support-detail-grid">
      <article class="support-detail-card"><span class="task-number">01</span><h3>Workforce Consulting</h3><p>Define the position around the outcomes, recurring tasks and working structure your business needs.</p><ul><li>Role scope and task priorities</li><li>Working hours and reporting lines</li><li>Industry and system requirements</li></ul></article>
      <article class="support-detail-card"><span class="task-number">02</span><h3>Talent Sourcing</h3><p>Assess candidates against the role’s practical, industry and behavioural requirements.</p><ul><li>Focused candidate sourcing</li><li>Interviews and experience checks</li><li>Relevant shortlist for your review</li></ul></article>
      <article class="support-detail-card"><span class="task-number">03</span><h3>Onboarding and Integration</h3><p>Prepare the virtual assistant to work within your systems, team structure and documented procedures.</p><ul><li>Role and business orientation</li><li>Systems and access checklist</li><li>Communication and review rhythm</li></ul></article>
      <article class="support-detail-card"><span class="task-number">04</span><h3>Ongoing Delivery Support</h3><p>Maintain an active support structure around employment, performance, technology and communication.</p><ul><li>HR and payroll administration</li><li>Client care and performance support</li><li>IT coordination and continuity planning</li></ul></article>
    </div></div></section>
    <section class="section section--navy"><div class="wrap"><div class="managed-heading"><div><p class="eyebrow">Shared responsibilities</p><h2>Clear ownership keeps the working relationship effective.</h2></div><p>Your business remains in control of the work. Virtual Office Angels manages the employment relationship and support structure around the virtual assistant.</p></div><div class="responsibility-grid"><article class="responsibility-card"><h3>Your business manages</h3><p>The priorities, instructions and decisions specific to your organisation.</p><ul><li>Daily tasks and business priorities</li><li>Documented procedures and approvals</li><li>Access permissions and quality standards</li><li>Role-specific feedback and outcomes</li></ul></article><article class="responsibility-card"><h3>Virtual Office Angels manages</h3><p>The people, employment and support responsibilities surrounding the role.</p><ul><li>Recruitment and employment administration</li><li>Payroll, leave and HR support</li><li>IT coordination and working continuity</li><li>Client care and performance support</li></ul></article></div></div></section>
    <section class="section"><div class="wrap faq-wrap"><div class="faq-intro"><p class="eyebrow">Managed support questions</p><h2>What to know before building the role</h2><p>The final structure depends on the work, systems, experience and working relationship your business requires.</p></div><div class="faq-list">${faqMarkup}</div></div></section>
    <section class="contact-band"><div class="wrap"><div><p class="eyebrow">Start with the role</p><h2>Build managed virtual support around the work your business needs.</h2><p>Tell us which responsibilities need coverage and where industry or systems experience matters.</p></div><div class="contact-actions"><a class="button" href="/#contact">Get in touch</a><a class="button-outline" href="tel:1300737883">Call 1 300 737 883</a></div></div></section>
  </main>${footer()}<script src="/service-pages.js" defer></script><script src="/service-editor.js" defer></script></body></html>`;
}

fs.mkdirSync(outputRoot, { recursive: true });
fs.writeFileSync(path.join(outputRoot, 'index.html'), servicesIndex());
for (const service of services) {
  const directory = path.join(outputRoot, service.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), servicePage(service));
}

const managedOutputRoot = path.resolve('dist/managed-virtual-support');
fs.mkdirSync(managedOutputRoot, { recursive: true });
fs.writeFileSync(path.join(managedOutputRoot, 'index.html'), managedSupportPage());

console.log(`Generated ${services.length + 2} service and managed-support pages.`);
