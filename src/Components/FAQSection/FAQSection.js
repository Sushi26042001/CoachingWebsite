import React, { useState } from 'react'

const FAQSection = () => {

  const [openFaq, setOpenFaq] = useState(null);


    const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

 const faqs = [
    {
      question: "Which is the best coaching for IAS in Delhi?",
      answer: "Elite IAS Academy is consistently rated as one of the top IAS coaching institutes in Delhi. With experienced faculty, comprehensive study material, personalized mentorship, and a proven track record of producing top rankers, we provide the complete ecosystem for UPSC success."
    },
    {
      question: "How do I choose the right optional subject for UPSC?",
      answer: "Choose your optional subject based on your academic background, interest, and the availability of quality guidance. At Elite IAS, we provide detailed counseling sessions and previous year success analysis to help you make an informed decision about your optional subject."
    },
    {
      question: "What is the success rate of Elite IAS Academy?",
      answer: "Elite IAS Academy has consistently maintained a high success rate with over 500+ selections in civil services in the past 5 years. Our students have secured top ranks including AIR 12, 27, 44, and 65 in recent years, making us one of the most successful coaching institutes."
    },
    {
      question: "Do you provide online classes for working professionals?",
      answer: "Yes, we offer flexible online and hybrid learning options specifically designed for working professionals. Our recorded lectures, live interactive sessions, and digital study materials allow you to prepare effectively while managing your professional commitments."
    }
  ];


  return (
    <div>
         <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Best IAS Coaching FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                  }`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`px-6 pb-5 transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'
                }`}>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQSection