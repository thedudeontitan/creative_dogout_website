
interface levers {
    key: number;
    title: string;
    description: string;
}

interface expertise {
    key: number;
    title: string;
}

interface testimonials {
    key: number;
    name: string;
    comment: string;
    role: string;
    company: string;
}

export const lever: levers[] = [
    {
        key: 1,
        title: "Inovation",
        description:
            "Position your brand with a fulfilling promise and purpose worth dealing with.",
    },
    {
        key: 2,
        title: "Inspiration",
        description:
            "Frame your business with disruptive ideas, bold moves and transformative brand experiences.",
    },
    {
        key: 3,
        title: "Evolution",
        description:
            "Keep moving fluidly to maintain relevancy in the market on the pulse of cultural changes and trends.",
    },
];

export const expertise_data: expertise[] = [
    {
        key: 1,
        title: "Brand Strategy",
    },
    {
        key: 1,
        title: "Innovation",
    },
    {
        key: 1,
        title: "Content Strategy",
    },
    {
        key: 1,
        title: "Technology",
    },
    {
        key: 1,
        title: "Design Strategy",
    },
    {
        key: 1,
        title: "Data & Insights",
    },
    {
        key: 1,
        title: "Brand Experience",
    },
    {
        key: 1,
        title: "Web & App Design",
    },
];

export const testimony_data: testimonials[] = [
    {
        key: 1,
        name: "Akash Wadhwa",
        comment: "Creative Dugout has a fantastic team of professionals. We associated with them for revamping our brand architecture and we were stunned to see their dedication and knowledge towards brand building and content strategy. The best part is their open-mindedness to understand the brand’s requirements and deliver basis on insightful data. Grateful for the partnership!",
        role: "Co-Founder and Director",
        company: "Bail Naturals",
    },
    {
        key: 2,
        name: "Sanya Bajaj",
        comment: "I am thankful to the Creative Dugout team for continuing to do brilliant work. We have an association of 7 long years and I love how these guys picked up the threads and essence of what Column Inches was looking for and put it together in a strategic and professional manner. Working with them was (and continues to be) an outstanding experience. We are looking forward to having their relevance in a rapidly evolving PR and Communications world.",
        role: "CEO & Founder",
        company: "Column Inches",
    },
    {
        key: 3,
        name: "Sheraz Saeed",
        comment: "Creative Dugout has impeccable knowledge of the best SEO practices and guidelines. The team is collaborative, passionate and committed to delivering quality content. They have worked on numerous projects of ours, sometimes going the extra mile to meet the business needs and deadlines and consequently, we recorded tangible outcomes. We highly recommend their services!",
        role: "Founder & CEO",
        company: "Websters, Dubai (UAE)",
    },
    {
        key: 4,
        name: "R Jitla",
        comment: "We always have a wonderful experience working with Creative Dugout. The job is always done right and exceeds our expectations. They are always ready to pivot to whatever is required for the brand’s growth and know it well how to take care of their clients. Dugout is your only solution provider for brand-related services. Thankful to the team for all the work they do for us, and every time.",
        role: "CEO & President",
        company: "Canam Limo, CA",
    },
];