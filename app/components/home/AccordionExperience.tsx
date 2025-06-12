import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

import { Badge } from '~/components/ui/badge';

export function AccordionExperience() {
  const list_experiences = [
    {
      title: 'SoftServe - Senior Software Engineer',
      badge: ['Python', 'Django', 'React', 'Celery', 'Dwolla'],
      description: () => (
        <div>
          <b>Atlassian – One Atlas</b>
          <br />
          - Built and maintained fully provisioned demo environments for Jira,
          Bitbucket, etc.
          <br />
          - Designed reusable components to streamline demo creation.
          <br />
          - Ensured consistency across environments to support accurate customer
          demos.
          <br />
          - Collaborated with cross-functional teams to improve the provisioning
          pipeline.
          <br />
          <br />
          <b>Take Command Health</b>
          <br />
          - Developed features for fund movement systems using Bank-as-a-Service
          providers.
          <br />
          - Designed components tailored to health insurance requirements.
          <br />- Debugged and maintained integrations with Dwolla for service
          payments.
        </div>
      ),
    },
    {
      title: 'Globant - Software Developer',
      badge: ['Python', 'Flask', 'Django', 'React', 'GraphQL', 'GCP', 'Terraform'],
      description: () => (
        <div>
          <b>SmileDirectClub</b>
          <br />
          - Built microservices and messaging flows with SNS/SQS.
          <br />
          - Created Terraform modules to support new logistics regions.
          <br />
          - Implemented process validations and feature improvements.
          <br />
          <br />
          <b>WellSky</b>
          <br />
          - Created EVV as a Service to migrate providers from a monolith.
          <br />
          - Developed UI features in React.
          <br />- Built GraphQL APIs and integrated HL7 FHIR standards.
        </div>
      ),
    },
    {
      title: 'LIFTIT S.A.S - Software Developer',
      badge: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Redux', 'GCP'],
      description: () => (
        <div>
          <b>Costing Automation</b>
          <br />
          - Built ETLs and REST APIs for daily freight cost calculations (5k+
          tx/day).
          <br />
          - Led feature design and model understanding for clients like Walmart
          Chile, Rappi, Tugo.
          <br />
          <br />
          <b>Base Project Development</b>
          <br />
          - Full-stack dev with Flask, SQLAlchemy, React, Redux Saga, and
          TypeScript.
          <br />- Managed deployments via Google Cloud Run and Schedulers.
        </div>
      ),
    },
    {
      title: 'Novangea Group S.A.S - Software Developer',
      badge: ['Java', 'Spring Boot', 'Docker', 'Django', 'MERN', 'Kubernetes', 'Python'],
      description: () => (
        <div>
          <b>Enterprise & Web Development</b>
          <br />
          - Built EBS systems with Java EE, Spring Boot, Docker, Kubernetes.
          <br />
          - Developed web apps using the MERN stack.
          <br />- Created REST services with Django and integrated Apache Camel
          pipelines.
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Experience</h2>
      <Accordion type="single" collapsible className="w-full">
        {list_experiences.map((experience, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{experience.title}</AccordionTrigger>
            <AccordionContent>{experience.description()}
                <br/>
               {experience.badge.map((badge, badgeIndex) => (
              <Badge key={badgeIndex} variant="outline" className="mr-2">
                {badge}
              </Badge>
            ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
