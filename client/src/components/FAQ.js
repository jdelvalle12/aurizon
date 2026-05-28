import React, {useState} from 'react';


import '../App.css';
import '../styles/About.css';

const FAQ = () => {
    //Define an array of FAQ items, each containing a question and an answer
    const faqs = [
  {
    question: 'What is Aurizon Technologies?',
    answer:
      'Aurizon Technologies is a technology solutions company focused on building, supporting, and exploring digital systems, infrastructure, and emerging technologies through applied engineering and research-driven development.'
  },
  {
    question: 'What type of solutions does Aurizon provide?',
    answer:
      'We provide technology-based solutions including IT support, system maintenance, infrastructure planning, digital systems development, and exploratory research into emerging technologies.'
  },
  {
    question: 'Do you provide IT support and maintenance?',
    answer:
      'Yes. Aurizon offers IT support and system maintenance services designed to help ensure stability, performance, and reliability across digital environments and technical systems.'
  },
  {
    question: 'Is Aurizon focused only on software?',
    answer:
      'No. Aurizon operates across both software and broader technology areas, including infrastructure, systems design, applied engineering concepts, and exploratory development in emerging fields.'
  },
  {
    question: 'Does Aurizon work on future or experimental technologies?',
    answer:
      'Yes. Part of Aurizon’s mission includes research and development into future technologies such as automation systems, cybersecurity concepts, and hardware innovation.'
  },
  {
    question: 'Does Aurizon build products or only provide services?',
    answer:
      'Aurizon operates in both areas. We provide technical services such as IT support and system maintenance while also developing and exploring future technology products and concepts.'
  },
  {
    question: 'What industries does Aurizon support?',
    answer:
      'Aurizon works with and designs systems that can be applied across multiple industries including business operations, digital infrastructure, research environments, and technology-driven organizations.'
  },
  {
    question: 'Is cybersecurity part of Aurizon’s future direction?',
    answer:
      'Yes. Cybersecurity is part of Aurizon’s long-term roadmap as the company continues to expand into secure systems, infrastructure protection, and advanced digital safety solutions.'
  },
  {
    question: 'Does Aurizon build hardware or only digital systems?',
    answer:
      'Aurizon is exploring long-term research directions that include both digital systems and potential hardware innovation as part of its broader technology ecosystem vision.'
  },
  {
    question: 'How can someone work with or contact Aurizon?',
    answer:
      'You can contact Aurizon through the official website contact page for inquiries related to collaboration, services, or potential technology partnerships.'
  }
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