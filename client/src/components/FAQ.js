import React, {useState} from 'react';

import '../index.css';
import '../App.css';

const FAQ = () => {
    //Define an array of FAQ items, each containing a question and an answer
    const faqs = [
        {
            question: 'What is Aurizon?',
            answer: 'Aurizon is a tech company, mainly focused on software development. We provide services for businesses and develop products for everyone',
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