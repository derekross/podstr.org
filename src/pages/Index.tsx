import { useSeoMeta } from '@unhead/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';

import { ArrowRight, Github, Users, Podcast, Zap, Shield, Globe, BookOpen, MessageSquare } from 'lucide-react';

const Index = () => {


  useSeoMeta({
    title: 'Podstr - Community-Powered Podcast Platform',
    description: 'Build your podcast community with Podstr - the open source platform that combines Podcasting 2.0 and Nostr for true decentralization.',
  });







  const features = [
    {
      icon: Users,
      title: 'Community Building',
      description: 'Create engaging communities around your podcast with built-in social features and real-time interactions.'
    },
    {
      icon: Podcast,
      title: 'Podcasting 2.0 Support',
      description: 'Full support for the latest Podcasting 2.0 standards including value-for-value and streaming payments.'
    },
    {
      icon: Zap,
      title: 'Nostr Integration',
      description: 'Leverage the power of Nostr for decentralized, censorship-resistant communication and content distribution.'
    },
    {
      icon: Shield,
      title: 'Open Source',
      description: 'Completely open source with MIT license. Full control over your platform and data.'
    },
    {
      icon: Globe,
      title: 'Permissionless Payments',
      description: 'Built for the decentralized web with support for Zaps and direct listener support.'
    },
    {
      icon: BookOpen,
      title: 'Easy to Deploy',
      description: 'Simple setup and deployment process. Get your community platform running in minutes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation title="Podstr" showBackButton={false} />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Open Source
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Your Podcast
              <span className="text-blue-600 dark:text-blue-400"> Community</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Podstr combines Podcasting 2.0 and Nostr to create a decentralized platform where podcasters can build thriving communities, engage with listeners, and receive direct listener support through permissionless payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a href="/guide">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <a href="https://github.com/podstr/podstr" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Podstr?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to build a successful podcast community in one integrated platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Podcast Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the growing number of podcasters who are taking control of their communities with Podstr.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/guide">
                Installation Guide
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/faq">
                <MessageSquare className="mr-2 h-5 w-5" />
                FAQ
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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

export default Index;
