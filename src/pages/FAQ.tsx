import { useSeoMeta } from '@unhead/react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { MessageSquare, Github, BookOpen, Users, Shield, Zap, HelpCircle, CheckCircle } from 'lucide-react';

const FAQ = () => {



  useSeoMeta({
    title: 'FAQ - Podstr',
    description: 'Frequently asked questions about Podstr, the community-powered podcast platform.',
  });

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      faqs: [
        {
          question: 'What is Podstr?',
          answer: 'Podstr is an open-source platform that gives podcasters true ownership of their community. Built on Nostr and supporting Podcasting 2.0, it enables direct listener support through Bitcoin Lightning payments while ensuring your community can never be taken away from you.'
        },
        {
          question: 'How is Podstr different from other podcast platforms?',
          answer: 'Unlike centralized platforms, Podstr gives you complete ownership and control. There are no algorithms deciding who sees your content, no data mining, no platform fees, and no risk of being deplatformed. Your audience, your rules, your platform - forever.'
        },
        {
          question: 'What technical skills do I need?',
          answer: 'Basic familiarity with command line, Git, and web deployment is helpful. Our comprehensive guide walks you through everything step-by-step. You don\'t need to be an expert developer to get started.'
        },
        {
          question: 'How do I get started?',
          answer: 'Check out our Installation Guide for step-by-step instructions. We\'ll walk you through setting up your development environment, configuring the platform, and deploying your first Podstr instance in about 15 minutes.'
        }
      ]
    },
    {
      title: 'Community & Ownership',
      icon: Users,
      faqs: [
        {
          question: 'What does "owning your community" mean?',
          answer: 'With Podstr, you own the relationship with your audience. Built on the Nostr protocol, your content and community data can\'t be censored, deleted, or held hostage by any platform. Your audience follows you, not the platform.'
        },
        {
          question: 'How does Nostr enable community ownership?',
          answer: 'Nostr is a decentralized protocol where your identity and content are cryptographically yours. Your audience owns their identity too, creating a truly decentralized community that no corporation can control or shut down.'
        },
        {
          question: 'Can listeners interact with each other?',
          answer: 'Yes! Podstr includes robust social features powered by Nostr. Listeners can comment, discuss episodes, share content, and build community around your podcast - all while maintaining ownership of their identity and data.'
        },
        {
          question: 'What if I want to migrate from another platform?',
          answer: 'Podstr makes migration easy. Since you own your data and audience relationships, you can always move to new infrastructure while keeping your community intact. No vendor lock-in, ever.'
        }
      ]
    },
    {
      title: 'Monetization & Payments',
      icon: Zap,
      faqs: [
        {
          question: 'How do I receive payments from listeners?',
          answer: 'Podstr supports direct Bitcoin Lightning payments through Zaps. Listeners can send instant micropayments while listening, with 100% going directly to you. No platform fees, no payment processors taking a cut.'
        },
        {
          question: 'What are Zaps?',
          answer: 'Zaps are instant Bitcoin Lightning payments that listeners can send while engaging with your content. They\'re perfect for value-for-value podcasting, allowing supporters to send small amounts instantly as appreciation.'
        },
        {
          question: 'Do I need a Lightning wallet?',
          answer: 'Yes, you\'ll need a Lightning wallet to receive payments. Popular options include Alby, Wallet of Satoshi, and Phoenix. Many are free and take just minutes to set up.'
        },
        {
          question: 'Are there any platform fees?',
          answer: 'Zero platform fees. With Podstr, you keep 100% of what your audience sends you. The only fees are tiny Lightning Network transaction fees (typically less than 1 sat).'
        }
      ]
    },
    {
      title: 'Technical & Open Source',
      icon: Shield,
      faqs: [
        {
          question: 'Is Podstr really free and open source?',
          answer: 'Yes! Podstr is completely open source under the MIT license. You can view, modify, and deploy the code however you like. There are no hidden fees, vendor lock-in, or proprietary restrictions.'
        },
        {
          question: 'Where can I host Podstr?',
          answer: 'Anywhere you want! Deploy to Vercel, Netlify, your own server, or any hosting provider. Since you own the code, you have complete freedom over where and how you host your community.'
        },
        {
          question: 'What about mobile support?',
          answer: 'Podstr is built as a progressive web app (PWA) that works beautifully on mobile. Users can install it to their home screen for a native app experience, including mobile Lightning payments.'
        },
        {
          question: 'How do updates work?',
          answer: 'Since Podstr is open source, you control when and how to update. You can pull the latest features from the main repository or customize the platform for your specific needs.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      <Navigation title="Frequently Asked Questions" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/10 dark:to-blue-400/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Know
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers about community ownership, decentralized podcasting, and building your platform with Podstr.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`category-${categoryIndex}-item-${index}`} className="border-b last:border-b-0">
                            <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                              <span className="font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Benefits Highlight */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Community Ownership Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Platform Risk</h3>
              <p className="text-purple-100 text-sm">Your community can never be taken away or shut down</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Zap className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Direct Payments</h3>
              <p className="text-purple-100 text-sm">Keep 100% of listener support with zero platform fees</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">True Ownership</h3>
              <p className="text-purple-100 text-sm">You and your audience own your data and identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Take Control?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get started with our comprehensive setup guide or join the community of podcasters building on decentralized infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
              <Link to="/guide">
                <BookOpen className="mr-2 h-5 w-5" />
                Setup Guide
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2" asChild>
              <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </a>
            </Button>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Open source & free
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No platform fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Own your community
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
              <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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