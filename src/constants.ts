import {
  Globe,
  Smartphone,
  Palette,
  Layers,
  Cpu,
  Zap,
  Users,
  TrendingUp,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook
} from 'lucide-react';

import charlz from './assets/CHARLZ.jpg';
import leandro from './assets/LEANDRO.png';
import micah from './assets/MICAH.png';
import joan from './assets/JOAN.png';
import emmie from './assets/EMMIE.png';
import reo from './assets/REO.png';



// Example of how to import local images:
// import charlzImg from './assets/18.png';
// import elenaImg from './assets/19.png';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'At 8finity Elite Solutions our Digital Marketing specialists are focused on helping businesses increase visibility, generate qualified leads, and scale consistently through data-driven strategies. Our team delivers premium support in paid advertising, content marketing, SEO optimization, email campaigns, and brand positioning tailored to each client’s industry and goals. We combine creativity with analytics to ensure every campaign produces measurable results, stronger engagement, and long-term business growth.',
    icon: Globe,
  },
  {
    id: 2,
    title: 'Social Media Management',
    description: 'Our Social Media Management team provides premium brand management designed to help businesses build a powerful online presence and maintain meaningful engagement with their audience. From content creation and scheduling to audience interaction, analytics tracking, and platform growth strategies, our VAs ensure that every social media channel reflects professionalism and consistency. We help clients stay active, relevant, and competitive while saving them valuable time to focus on scaling their business.',
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'Customer Service Role',
    description: 'At 8finity Elite Solutions, our Customer Service Virtual Assistants are trained to deliver exceptional client experiences with professionalism, efficiency, and empathy. We provide premium support through live chat, email handling, inbound and outbound communication, ticket management, and customer follow-ups. Our goal is to help businesses maintain strong customer relationships, improve client satisfaction, and create a positive brand reputation through reliable and responsive support.',
    icon: Palette,
  },
  {
    id: 4,
    title: 'Marketing And Sales',
    description: 'Our Marketing and Sales specialists are dedicated to helping businesses maximize revenue opportunities through strategic outreach, lead nurturing, and conversion-focused communication. We provide premium support in prospecting, sales pipeline management, follow-ups, CRM handling, and client acquisition strategies. By combining persuasive communication with market research and sales expertise, our VAs help businesses strengthen their brand presence while consistently driving growth and closing opportunities.',
    icon: Layers,
  },
  {
    id: 5,
    title: 'Cold Calling / Appointment Setting',
    description: 'At 8finity Elite Solutions, our Cold Calling and Appointment Setting team is trained to represent businesses professionally while generating high-quality leads and booked appointments. Our VAs focus on confident communication, objection handling, lead qualification, and relationship-building to ensure every interaction creates value. We help businesses maintain a steady flow of opportunities by connecting them directly with potential clients who are genuinely interested in their services.',
    icon: Cpu,
  },
  {
    id: 6,
    title: 'Executive Assistants / General VA',
    description: 'Our Executive Assistants and General Virtual Assistants provide premium administrative support designed to improve productivity and operational efficiency for business owners and executives. From calendar management, email organization, data entry, research, scheduling, and project coordination to day-to-day administrative tasks, our VAs ensure smooth business operations with attention to detail and professionalism. We aim to become reliable extensions of our client`s teams, allowing them to focus on high-level growth and decision-making.',
    icon: Zap,
  },
];

export const TEAM_FOUNDERS = [
  {
    id: 1,
    name: 'Charlz Louisse Ramos',
    role: 'Head Director ',
    bio: `As the Founder and Director of 8finity Elite Solutions I lead with a vision built on discipline, performance, and people-first leadership. I strongly believe that true business success is created through work equality, operational efficiency, mutual respect, and a culture that empowers individuals to grow beyond expectations.

At 8ES, we believe that every successful business is powered by people who crave success, embrace accountability, and consistently strive for excellence. Our mission is not only to provide skilled professionals and high-level support services, but to build long-term partnerships that drive measurable growth for every client we work with.

With a strong background in sales, client relations, and business development, I have built teams that thrive under pressure, adapt quickly, and deliver results with precision. My leadership style is rooted in high standards, clear communication, and relentless execution — creating an environment where talent is developed, ambition is rewarded, and performance becomes the standard.

I believe strong leadership is about creating opportunities, setting the tone for excellence, and inspiring people to operate at their highest level. At 8finity Elite Solutions, we are committed to becoming a trusted force in the outsourcing and virtual staffing industry by combining professionalism, innovation, and a winning mindset.`,
    // To use a local image, replace the URL with the imported variable, e.g., image: charlzImg
    image: charlz,
    social: {
      linkedin: 'https://www.linkedin.com/in/charlz-louisse-ramos-5484b0358/',
      facebook: 'https://www.facebook.com/ramos.charlzlouisse'
    }
  },
  {
    id: 2,
    name: 'Joan Samson',
    role: 'Head Facilitator/Training Head ',
    bio: `As the Head Facilitator and Training Head of 8FINITY ELITE SOLUTIONS

    I am dedicated to developing highly skilled, confident, and professional Virtual Assistants equipped to thrive in today’s fast-paced digital industry. My role focuses on training development, team mentoring, leadership coaching, and performance enhancement to ensure every VA delivers exceptional service and professionalism.

With a strong passion for education, growth, and continuous improvement, I create structured training programs that enhance communication, productivity, client management, and operational excellence. I believe that empowering individuals with the right knowledge, mindset, and skills creates stronger teams and long-term business success.

At 8FINITY ELITE SOLUTIONS, our mission is to build a community of capable and growth-driven Virtual Assistants who are prepared to provide reliable, innovative, and results-oriented support for businesses worldwide.`,
    image: joan,
    social: {
      linkedin: 'https://www.linkedin.com/in/joanna-obejas-3512262a7/',
      facebook: 'https://www.facebook.com/joan.samson.212113'
    }
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Leandro Calderon',
    role: 'Tech Head',
    bio: `As the Head Tech of 8FINITY ELITE SOLUTIONS

    I lead the technical operations and digital innovation that support our Virtual Assistance services and business solutions. My role focuses on managing technology systems, optimizing workflows, implementing modern tools, and ensuring smooth and efficient operations for both clients and team members.

With a strong passion for technology, problem-solving, and continuous innovation, I specialize in streamlining processes, improving digital efficiency, and supporting business growth through smart and reliable technical solutions. I am committed to maintaining secure, organized, and high-performing systems that help businesses operate effectively in today’s fast-paced digital environment.

At 8FINITY ELITE SOLUTIONS, we combine technology, strategy, and professional Virtual Assistance to deliver dependable and results-driven support that empowers businesses to scale with confidence.`,

    image: leandro,
    social: {
      facebook: 'https://www.facebook.com/leandro.calderon.978276',
      linkedin: 'https://www.linkedin.com/in/leandro-joshua-calderon-53845433b/'
    }
  },
  {
    id: 2,
    name: 'Reo Dangan',
    role: 'HR / Outsourcing Specialist',
    bio: `As the Human Resources lead in our team, where my focus is on people, clarity, and collaboration. I ensure that every member feels supported, valued, and empowered to contribute their best. From recruitment and onboarding to guiding professional growth, I approach HR with empathy and structure, balancing policies with a human touch.

    I specialize in workflow clarity and delegation, making sure responsibilities are well-defined while encouraging creativity and teamwork. My role is not just about managing processes, it’s about building an inclusive environment where communication flows smoothly, challenges are addressed constructively, and success is shared collectively.

    At the heart of my work is a simple goal: to keep our team connected, motivated, and aligned, so we can thrive together.
`,
    image: reo,
    social: {
      facebook: 'https://www.facebook.com/wiyoosaurus/',
      linkedin: 'https://www.linkedin.com/in/reo-dangan-44343426b/'
    }
  },
  {
    id: 3,
    name: 'Emmie Rose',
    role: 'Finance Head',
    bio: `As the Head of Finance at 8finity Elite Solution, I oversee the financial health and strategic growth of our organization. My role centers on ensuring transparency, accuracy, and sustainability in every financial decision—from budgeting and forecasting to resource allocation and performance analysis. 

With a commitment to clarity and collaboration, I work closely with other departments to maintain smooth operations, optimize investments, and uphold accountability. My goal is to keep our finances strong, our processes streamlined, and our vision achievable. 
`,
    image: emmie,
    social: {
      facebook: 'https://www.facebook.com/emmierose.correos',
      linkedin: 'https://www.linkedin.com/in/emmie-rose-correos-1735053ba/'
    }
  },
  {
    id: 4,
    name: 'Micah Angelie Pascua',
    role: 'HR / Onboarder',
    bio: 'Experienced Onboarding Specialist with a strong background in customer service and team support. Skilled in helpin clients and new team members transition smoothly through clear communication, organization, and ongoing support. Passionate about creating positive onboarding experiences and building strong professional relationships. ',
    image: micah,
    social: {
      facebook: 'https://www.facebook.com/cutiemicah.pascua#',
      linkedin: 'https://www.linkedin.com/in/micah-angelie-pascua/'
    }
  },

];

export const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'hello@8infinity.com' },
  { icon: Phone, label: 'Phone', value: '+63 9151526251' },
  { icon: MapPin, label: 'Address', value: 'Philippines' },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@8infinity.com' },
];