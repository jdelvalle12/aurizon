import React, {useState} from 'react';

import '../index.css';
import '../App.css';

const FAQ = () => {
    //Define an array of FAQ items, each containing a question and an answer
    const faqs = [
        {
            question: 'What is Aurizon and what does it do?',
            answer: 'Aurizon is not just another tech company; we are the architects of digital innovation. Our primary mission is to lead the charge in technological advancements by crafting cutting-edge software solutions. But we are more than just lines of code; we are your partner in progress.',
        },
        {
            question: 'What services does Aurizon offer?',
            answer: 'We offer services such as, web development, API development, and customer software solutions.',
        },
        {
            question: 'Does Aurizon offer Mobile App Development?',
            answer: 'At this time no, however, there are plans to offer mobile app development in the near future. An update will be provided. Check back at a later time or subscribe to our newsletter to get updates.',
        },
        {
            question: 'What is the typical turnaround time for a project?',
            answer: 'Depending on the scope of the project, can be between 2-6 weeks.',
        },
        {
            question: 'Are the websites created to be mobile friendly and responsive?',
            answer: 'The websites we create are designed to work seamlessly across all devices.',
        },
        {
            question: 'What industries or sectors does Aurizon work with?',
            answer: 'We work all industries whether in real-estate, sports, entertainment, travel, etc.',
        },
        {
            question: 'What technologies and programming languages does Aurizon work with?',
            answer: 'We work with HTML, CSS, JavaScript, MERN Stack (MongoDB, Express.js, REACT, Node.js), MySQL, GraphQL, Apache, Next.js, Bootstrap, Tailwind CSS, Bulma. These are just a few we work with as of now, but we would be implementing new technologies in the near future.',
        },
        {
            question: 'What sets Aurizon apart from other software development companies?',
            answer: 'What sets Aurizon apart from other software development companies is not only do we constantly develop new software or apps, but we also provide the service to custom make a website for you business to meet your needs with innovative approaches, dedicated support, focus on quality, to make sure it functions properly and maintain the website and/or software for you.',
        },
        {
            question: 'How can I get in touch with Aurizon?',
            answer: 'You can send the nature of your inquiry to info@aurizontech.com or fill out a form in our contact page with your name, the nature of your inquiry, and contact info. and expect a response withiin 72 hrs.',
        },
        {
            question: 'What is the typical process for working with Aurizon on a software project?',
            answer: 'For customer web and/or software development inquiries, send us an email for free consultation and provide a description of the project, design, preferences, desired features, content, timeline & who your target audience. We strategize & plan, then design & develop, we test & launch, and then after is completed, we continue to maintain it for you.',
        },
        {
            question: 'What industries have you worked with in the past?',
            answer: '',
        },
        {
            question: 'Are there examples of previous work?',
            answer: '',
        },
        {
            question: 'What is your approach to data privacy and security?',
            answer: '',
        },
        {
            question: 'What is your pricing structure for software development service?',
            answer: '',
        },
        {
            question: 'What support and maintenance services do you offer post-project completion?',
            answer: '',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    //Function to toggle the display of answers
    const toggleAnswer = (index) => {
        if (openIndex === index) {
            //Clicking on an open question closes it
            setOpenIndex(null);
        } else {
            //Clicking on a closed question opens it
            setOpenIndex(index);
        }
    };
    
    return (
        <div className='faq-section'>
            <h3>FAQs</h3>
            {faqs.map((faq, index) => (
                <div key={index} className='question' onClick={() => toggleAnswer(index)}>
                    <h4>{faq.question}
                        <span className='toggle-icon'>{openIndex === index ? ' -' : ' +'}</span>
                    </h4>
                    {openIndex === index && (
                        <div className='answer'>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>    
            ))}
        </div>
    );
}

export default FAQ;