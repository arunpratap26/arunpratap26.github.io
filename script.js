const { createApp } = Vue;

createApp({
    data() {
        return {
            mobileMenuOpen: false,
            selectedSkillCategory: 'Backend & Frameworks',
            selectedProjectCategory: null,
            contactForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },

            skillCategories: [
                'Backend & Frameworks',
                'Databases',
                'Architecture & Patterns',
                'DevOps & Tools',
                'Frontend',
                'Testing & Methodologies'
            ],

            skills: {
                'Backend & Frameworks': [
                    '.NET Core',
                    'C#',
                    'ASP.NET Core MVC',
                    'Microservices',
                    'gRPC',
                    'Entity Framework Core',
                    'Dependency Injection',
                    'Fluent Validation'
                ],
                'Databases': [
                    'SQL Server',
                    'PostgreSQL',
                    'Redis',
                    'Database Design',
                    'Performance Tuning',
                    'Query Optimization'
                ],
                'Architecture & Patterns': [
                    'CQRS',
                    'MediatR',
                    'RabbitMQ',
                    'Mass Transit',
                    'Apache Kafka',
                    'SAGA Pattern',
                    'Clean Architecture',
                    'YARP API Gateway'
                ],
                'DevOps & Tools': [
                    'Docker',
                    'Azure DevOps',
                    'CI/CD Pipelines',
                    'Git/GitHub',
                    'Scrutor',
                    'Linux',
                    'Cloud Infrastructure'
                ],
                'Frontend': [
                    'Angular',
                    'JavaScript',
                    'HTML5/CSS3',
                    'Razor Views',
                    'RESTful APIs',
                    'LINQ',
                    'Bootstrap'
                ],
                'Testing & Methodologies': [
                    'Unit Testing',
                    'Test-Driven Development',
                    'Agile/Scrum',
                    'Code Reviews',
                    'Mentorship',
                    'Problem Solving'
                ]
            },

            experiences: [
                {
                    title: 'Tech Lead',
                    company: 'Tech Mahindra',
                    date: 'Dec 2024 – Present',
                    highlights: [
                        'Leading cross-functional teams in .NET Core and Angular development',
                        'Driving Agile/Scrum ceremonies and technical decision-making',
                        'Mentoring junior engineers and establishing coding standards',
                        'Architecting microservices solutions for enterprise clients'
                    ],
                    tech: ['.NET Core', 'Angular', 'Microservices', 'Leadership']
                },
                {
                    title: 'Senior Software Engineer',
                    company: 'GlobalLogic',
                    date: 'Apr 2021 – Nov 2024',
                    highlights: [
                        'Designed and implemented RESTful APIs for complex business domains',
                        'Conducted code reviews and mentored junior team members',
                        'Active participation in Agile ceremonies and sprint planning',
                        'Built scalable applications using clean architecture principles'
                    ],
                    tech: ['.NET Core', 'C#', 'SQL Server', 'Azure DevOps']
                },
                {
                    title: 'Software Engineer',
                    company: 'Chetu India Pvt Ltd',
                    date: 'Jul 2019 – Apr 2021',
                    highlights: [
                        'Built responsive UIs with Razor Views and Angular',
                        'Implemented CI/CD pipelines using Azure DevOps',
                        'Ensured code quality through unit testing and TDD practices',
                        'Collaborated with cross-functional teams on product features'
                    ],
                    tech: ['ASP.NET Core', 'Angular', 'TDD', 'Azure DevOps']
                },
                {
                    title: 'Software Developer',
                    company: 'Kazma Technology',
                    date: 'Dec 2018 – Jun 2019',
                    highlights: [
                        'Developed web applications using ASP.NET Core and C#',
                        'Managed database design and implementation with Entity Framework',
                        'Optimized SQL queries for improved performance',
                        'Participated in code reviews and knowledge sharing sessions'
                    ],
                    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework']
                },
                {
                    title: 'Software Developer',
                    company: 'Medtelerad Healthcare Pvt Ltd',
                    date: 'Jul 2017 – Nov 2018',
                    highlights: [
                        'Developed healthcare applications using .NET Core and C#',
                        'Integrated third-party APIs for front-end and back-end communication',
                        'Implemented database migrations and schema management',
                        'Maintained code quality through unit testing and documentation'
                    ],
                    tech: ['.NET Core', 'Healthcare APIs', 'SQL Server']
                }
            ],

            projects: [
                {
                    id: 1,
                    title: 'Thesis Student Management System',
                    category: 'Enterprise',
                    role: 'Senior Software Engineer',
                    description: 'A comprehensive Student Information System serving multiple U.S. and Canadian universities with real-time student record management and reporting.',
                    outcomes: [
                        'Built APIs for student records management, serving 50,000+ students',
                        'Implemented microservices architecture for scalability',
                        'Reduced query execution time by 40% through optimization',
                        'Deployed containerized solution using Docker and Kubernetes'
                    ],
                    tech: ['.NET Core', 'C#', 'SQL Server', 'EF Core', 'Microservices', 'Angular', 'Docker', 'Azure DevOps']
                },
                {
                    id: 2,
                    title: 'Doxim Customer Communications Management',
                    category: 'Enterprise',
                    role: 'Senior Software Engineer',
                    description: 'A customer communications management (CCM) platform for regulated industries, handling document generation, delivery, and compliance tracking.',
                    outcomes: [
                        'Designed APIs for customer engagement workflows',
                        'Implemented document generation engine processing 1M+ documents/month',
                        'Built compliance audit trails for regulatory requirements',
                        'Achieved 99.9% uptime through CI/CD automation'
                    ],
                    tech: ['.NET Core', 'MVC', 'C#', 'SQL Server', 'EF Core', 'Azure DevOps', 'Bootstrap', 'JavaScript']
                },
                {
                    id: 3,
                    title: 'Microservices Event-Driven Platform',
                    category: 'Backend',
                    role: 'Senior Software Engineer',
                    description: 'Built an event-driven architecture for real-time data processing using message brokers and CQRS patterns.',
                    outcomes: [
                        'Implemented event-driven system using RabbitMQ and MassTransit',
                        'Designed CQRS pattern for complex business logic',
                        'Reduced latency by 60% through optimization',
                        'Enabled horizontal scaling handling 10x traffic'
                    ],
                    tech: ['RabbitMQ', 'MassTransit', 'CQRS', 'MediatR', '.NET Core', 'PostgreSQL', 'Docker']
                },
                {
                    id: 4,
                    title: 'API Gateway & Service Orchestration',
                    category: 'Backend',
                    role: 'Senior Software Engineer',
                    description: 'Developed a centralized API gateway using YARP for routing, load balancing, and service orchestration across microservices.',
                    outcomes: [
                        'Implemented YARP reverse proxy for intelligent routing',
                        'Reduced response times by 35% through caching',
                        'Unified API versioning across 10+ services',
                        'Automated service discovery and load balancing'
                    ],
                    tech: ['YARP API Gateway', '.NET Core', 'C#', 'Azure', 'Docker', 'gRPC']
                },
                {
                    id: 5,
                    title: 'Real-Time Dashboard with Angular',
                    category: 'Frontend',
                    role: 'Software Engineer',
                    description: 'Created an interactive real-time analytics dashboard providing live insights into system performance and user behavior.',
                    outcomes: [
                        'Built responsive Angular dashboard with WebSocket updates',
                        'Implemented real-time charting with dynamic data',
                        'Optimized performance for 1000+ concurrent users',
                        'Achieved 95+ Lighthouse score'
                    ],
                    tech: ['Angular', 'TypeScript', 'WebSocket', 'Bootstrap', 'Chart.js', 'REST APIs']
                },
                {
                    id: 6,
                    title: 'CI/CD Pipeline Automation',
                    category: 'DevOps',
                    role: 'Senior Software Engineer',
                    description: 'Designed and implemented comprehensive CI/CD pipelines using Azure DevOps for automated testing, building, and deployment.',
                    outcomes: [
                        'Automated deployments reducing manual work by 90%',
                        'Implemented automated testing covering 85% code coverage',
                        'Reduced deployment time from 2 hours to 15 minutes',
                        'Enabled 50+ deployments per day with zero-downtime'
                    ],
                    tech: ['Azure DevOps', 'Docker', 'Kubernetes', 'Git', 'PowerShell', 'Terraform']
                }
            ],

            projectCategories: ['Enterprise', 'Backend', 'Frontend', 'DevOps']
        };
    },

    computed: {
        filteredSkills() {
            return this.skills[this.selectedSkillCategory] || [];
        },

        filteredProjects() {
            if (!this.selectedProjectCategory) {
                return this.projects;
            }
            return this.projects.filter(p => p.category === this.selectedProjectCategory);
        }
    },

    methods: {
        handleContactSubmit() {
            const { name, email, subject, message } = this.contactForm;

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Using Formspree or similar service
            const mailtoLink = `mailto:contact@arunsingh.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            window.location.href = mailtoLink;

            // Reset form
            this.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };

            alert('Thank you for reaching out! I will get back to you soon.');
        }
    },

    mounted() {
        // Add smooth scroll behavior for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && this.mobileMenuOpen) {
                this.mobileMenuOpen = false;
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all skill badges and project cards
        document.querySelectorAll('.skill-badge, .project-card, .exp-highlights').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}).mount('#app');
