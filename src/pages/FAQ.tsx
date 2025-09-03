import { useSeoMeta } from '@unhead/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { MessageSquare, Github, BookOpen } from 'lucide-react';

const FAQ = () => {



  useSeoMeta({
    title: 'FAQ - Podstr',
    description: 'Frequently asked questions about Podstr, the community-powered podcast platform.',
  });

  const faqs = [
    {
      question: 'What is Podstr?',
      answer: 'Podstr is an open source platform that combines Podcasting 2.0 and Nostr to help podcasters build engaged communities. It provides tools for content distribution, community interaction, and monetization in a decentralized environment.'
    },
    {
      question: 'What is Podcasting 2.0?',
      answer: 'Podcasting 2.0 is the next evolution of podcasting that includes new features like value-for-value (Zaps), chapters, transcripts, and more. It\'s designed to create a more sustainable ecosystem for podcasters and listeners through permissionless Bitcoin payments.'
    },
    {
      question: 'How does Nostr integrate with podcasting?',
      answer: 'Nostr (Notes and Other Stuff Transmitted by Relays) provides the social layer for Podstr. It enables decentralized communication, community building, and content sharing without relying on centralized platforms. Podstr leverages Nostr to publish podcast metadata and track data to Nostr relays, making your podcast content discoverable across the Nostr ecosystem while keeping community interactions censorship-resistant and truly owned by your users.'
    },
    {
      question: 'Is Podstr really free and open source?',
      answer: 'Yes! Podstr is completely open source under the MIT license. You can view, modify, and deploy the code for your own community. There are no hidden fees, proprietary restrictions, or scams - just permissionless Bitcoin payments through Zaps.'
    },
    {
      question: 'What technical skills do I need to run Podstr?',
      answer: 'Basic knowledge of command line, Git, and web deployment is helpful. Our comprehensive guide walks you through the entire process, from setup to deployment. You don\'t need to be an expert developer to get started.'
    },
    {
      question: 'Can I monetize my podcast with Podstr?',
      answer: 'Absolutely! Podstr supports Podcasting 2.0\'s value-for-value model, allowing listeners to send Zaps (Bitcoin payments) directly to you. You can also receive donations and tips through Lightning Network integration.'
    },
    {
      question: 'Do I need to run my own server?',
      answer: 'You have full control. You can self-host Podstr on your own server, deploy it to cloud platforms like Vercel, Netlify, or DigitalOcean, or use any hosting provider that supports Node.js applications.'
    },
    {
      question: 'How is Podstr different from other podcast platforms?',
      answer: 'Unlike centralized platforms, Podstr gives you complete ownership and control. There are no algorithms deciding who sees your content, no data mining, and no risk of being deplatformed. Your community, your rules, your platform.'
    },
    {
      question: 'Can listeners interact with each other?',
      answer: 'Yes! Podstr includes built-in social features powered by Nostr. Listeners can comment, discuss episodes, share content, and build community around your podcast - all in a decentralized manner.'
    },
    {
      question: 'What about mobile apps?',
      answer: 'Podstr is built as a progressive web app (PWA), which means it works great on mobile devices. Users can add it to their home screen and use it like a native app. The responsive design ensures a great experience on all devices, including support for mobile Zaps and Lightning payments.'
    },
    {
      question: 'How do I get started?',
      answer: 'Check out our Installation Guide for step-by-step instructions. We\'ll walk you through setting up your development environment, configuring the platform, and deploying your first Podstr instance.'
    },
    {
      question: 'Is there support available?',
      answer: 'As an open source project, support is primarily community-driven. You can get help through our GitHub discussions, Nostr\'s Chorus.community forums, or by reaching out to other Podstr users. The documentation is comprehensive and regularly updated.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation title="Frequently Asked Questions" />

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about Podstr, Podcasting 2.0, and building decentralized podcast communities.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Click on any question to reveal the answer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can't find what you're looking for? Check out our comprehensive guide or reach out to the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/guide">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read the Guide
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://chorus.community" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join Nostr Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Podstr</h3>
              <p className="text-gray-400">Community-powered podcast platform</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/podstr/podstr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="/guide" className="text-gray-400 hover:text-white transition-colors">
                <BookOpen className="h-6 w-6" />
              </a>
              <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 space-y-2">
            <p>&copy; 2025 Podstr. Open source under MIT license.</p>
            <p className="text-sm">
              Vibed with <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">MKStack</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;