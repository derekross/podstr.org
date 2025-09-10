import { useSeoMeta } from '@unhead/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/Navigation';

import {
  Github,
  Users,
  Podcast,
  Zap,
  Shield,
  Globe,
  BookOpen,
  MessageSquare,
  Play,
  Mic,
  Radio,
  Network,
  Lock,
  DollarSign,
  CheckCircle
} from 'lucide-react';

const Index = () => {


  useSeoMeta({
    title: 'Podstr - Community-Powered Podcast Platform',
    description: 'Build your podcast community with Podstr - the open source platform that combines Podcasting 2.0 and Nostr for true decentralization.',
  });







  const features = [
    {
      icon: Users,
      title: 'Own Your Community',
      description: 'Build lasting relationships with your audience on a platform you truly control. No algorithms, no shadow bans, no gatekeepers.',
      highlight: 'True Ownership'
    },
    {
      icon: Network,
      title: 'Decentralized by Design',
      description: 'Built on Nostr protocol for censorship resistance. Your content and community can never be taken away from you.',
      highlight: 'Unstoppable'
    },
    {
      icon: Zap,
      title: 'Direct Listener Support',
      description: 'Receive instant micropayments and tips through Bitcoin Lightning. No middlemen taking a cut of your earnings.',
      highlight: 'Zero Fees'
    },
    {
      icon: Podcast,
      title: 'Podcasting 2.0 Ready',
      description: 'Full support for modern podcasting features including chapters, transcripts, and value-for-value streaming.',
      highlight: 'Future-Proof'
    },
    {
      icon: Shield,
      title: 'Open Source Transparency',
      description: 'MIT licensed code you can trust, modify, and deploy anywhere. No vendor lock-in, complete transparency.',
      highlight: 'MIT License'
    },
    {
      icon: MessageSquare,
      title: 'Real-Time Engagement',
      description: 'Foster meaningful conversations with built-in comments, live chat, and community discussions.',
      highlight: 'Interactive'
    }
  ];

  const showcaseFeatures = [
    {
      title: 'Community Dashboard',
      description: 'Get insights into your audience engagement, episode performance, and community growth with comprehensive analytics.',
      image: '📊', // Placeholder for actual screenshot
      benefits: ['Audience insights', 'Growth metrics', 'Engagement tracking']
    },
    {
      title: 'Direct Listener Payments',
      description: 'Receive Bitcoin Lightning payments directly from listeners. Support value-for-value podcasting with streaming sats.',
      image: '⚡', // Placeholder for actual screenshot
      benefits: ['Lightning payments', 'Streaming sats', 'No payment processors']
    },
    {
      title: 'Interactive Comments',
      description: 'Build deeper connections with threaded comments, reactions, and real-time discussions on every episode.',
      image: '💬', // Placeholder for actual screenshot
      benefits: ['Threaded discussions', 'Real-time updates', 'Community moderation']
    }
  ];

  const ownershipBenefits = [
    {
      icon: Lock,
      title: 'No Platform Risk',
      description: 'Your audience follows you, not the platform. Build on infrastructure you control.'
    },
    {
      icon: DollarSign,
      title: 'Keep 100% of Revenue',
      description: 'Direct payments from listeners to you. No platform fees or revenue sharing.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Decentralized distribution means your content is accessible worldwide without restrictions.'
    },
    {
      icon: Users,
      title: 'Community Ownership',
      description: 'Your audience owns their identity and data. Build trust through transparency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      <Navigation title="Podstr" showBackButton={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/10 dark:to-blue-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-medium">
                  <Radio className="w-4 h-4 mr-2" />
                  Decentralized Podcasting
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Own Your
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"> Podcast</span>
                <br />Community
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Build on Nostr, the decentralized protocol that ensures your community and content can never be taken away. Receive direct support through Bitcoin Lightning with zero platform fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg" asChild>
                  <a href="/guide">
                    <Play className="mr-2 h-5 w-5" />
                    Start Building
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2" asChild>
                  <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View Source
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Kept</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">0%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Platform Fees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Censorship Resistance</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Your Podcast</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Episode #42</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Direct Support</span>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">1,337 sats</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">J</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Great episode! ⚡ 21 sats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">S</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Love this topic! ⚡ 100 sats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">M</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Thanks for sharing! ⚡ 50 sats</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Ownership Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              True Community Ownership
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Unlike traditional platforms, Podstr gives you and your audience complete control. Built on Nostr, the open protocol that can't be shut down.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-white">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-100 text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful features built specifically for independent podcasters who want to own their relationship with their audience.
            </p>
          </div>

          <div className="space-y-20">
            {showcaseFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                  <Card className="p-12 text-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-dashed border-purple-200 dark:border-purple-700">
                    <div className="text-6xl mb-4">{feature.image}</div>
                    <p className="text-gray-600 dark:text-gray-400">Screenshot placeholder</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Feature demonstration coming soon</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Independent Creators
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every feature designed to help you build, engage, and monetize your podcast community without platform restrictions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof / Community Stats */}
      <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Decentralized Podcasting Revolution
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Podcasters worldwide are choosing ownership over platform dependency
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">Open Source</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">MIT Licensed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Nostr Native</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Censorship Resistant</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Lightning Ready</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Instant Payments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Community First</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">You Own It</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-800 dark:via-blue-800 dark:to-indigo-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Take Control of Your Podcast Community
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Stop depending on platforms that can change rules, take fees, or disappear overnight. Build your community on infrastructure you own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-gray-100" asChild>
                <a href="/guide">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Setup Guide
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10" asChild>
                <a href="/faq">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Learn More
                </a>
              </Button>
            </div>
            <div className="flex justify-center space-x-8 text-sm text-purple-200">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                5 minute setup
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No monthly fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Own your data
              </div>
            </div>
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

export default Index;
