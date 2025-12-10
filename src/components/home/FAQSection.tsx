import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How is this different from Siri or Alexa?",
      answer: "Those assistants send your voice to the cloud for processing. Soul Interface processes everything locally—your words never leave your device, and you don't need an internet connection."
    },
    {
      question: "What if I need updated information?",
      answer: "You can push one-way updates from your phone when connected. Data flows in, never back out. Your offline knowledge vault stays current on your terms."
    },
    {
      question: "Can I create custom personas?",
      answer: "Absolutely! We don't limit you to 4 options, mix and blend different voice, accent and character traits until you create your ideal AI companion's persona. And create and save as many as you like!"
    },
    {
      question: "Is it really completely offline?",
      answer: "Yes. A cutting-edge GPU handles all inference locally, but is also capable of filtering web searches when connected to the internet, to give you the information you want, and none of the junk."
    },
    {
      question: "How do I back up my data?",
      answer: "Secure encrypted backups can be stored locally or on your own storage. Transfer your AI personas and preferences to a new device whenever you upgrade."
    },
    {
      question: "What languages are supported?",
      answer: "Soul Interface can understand over 100 languages and speak over 30—all processed offline. Perfect for travel, learning, or multilingual households."
    }
  ];

  return (
    <section className="reveal py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Questions? Answers.
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#1bbdc5]/30"
            >
              <AccordionTrigger className="text-white hover:text-[#1bbdc5] text-left py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
