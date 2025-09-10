import { useSeoMeta } from '@unhead/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Settings, Rocket, CheckCircle, AlertCircle, Copy, BookOpen, Github, MessageSquare, Users, Shield, Zap, Play, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { useState } from 'react';

const Guide = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);


  useSeoMeta({
    title: 'Installation Guide - Podstr',
    description: 'Complete guide to installing, configuring, and deploying your own Podstr instance for podcast communities.',
  });



  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const installationSteps = [
    {
      title: 'Prerequisites',
      content: (
        <div className="space-y-4">
          <p>Before you begin, make sure you have the following installed:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Node.js (version 18 or higher)</li>
            <li>Git</li>
            <li>A code editor (VS Code recommended)</li>
            <li>A terminal or command prompt</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> You can check your Node.js version by running <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">node --version</code>
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Clone the Repository',
      content: (
        <div className="space-y-4">
          <p>First, clone the Podstr repository from GitHub:</p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
              <code>git clone https://github.com/derekross/podstr.git</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => copyToClipboard('git clone https://github.com/derekross/podstr.git')}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {copiedCommand === 'git clone https://github.com/derekross/podstr.git' && (
              <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
            )}
          </div>
          <p>Then navigate into the project directory:</p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
              <code>cd podstr</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => copyToClipboard('cd podstr')}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {copiedCommand === 'cd podstr' && (
              <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
            )}
          </div>
        </div>
      )
    },
    {
      title: 'Install Dependencies',
      content: (
        <div className="space-y-4">
          <p>Install the required Node.js dependencies:</p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
              <code>npm install</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => copyToClipboard('npm install')}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {copiedCommand === 'npm install' && (
              <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
            )}
          </div>
          <p>This command will install all the necessary packages including React, Nostrify, and other dependencies.</p>
        </div>
      )
    },
    {
      title: 'Environment Configuration',
      content: (
        <div className="space-y-4">
          <p>Create a environment configuration file:</p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
              <code>cp .env.example .env</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => copyToClipboard('cp .env.example .env')}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {copiedCommand === 'cp .env.example .env' && (
              <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
            )}
          </div>
          <p>Edit the <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.env</code> file to configure your podcast settings:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-96 overflow-y-auto">
            <pre className="text-sm whitespace-pre-wrap break-all">
              <code>{`# PODSTR Podcast Configuration
# Copy this file to .env and customize the values for your podcast

# =============================================================================
# CREATOR CONFIGURATION
# =============================================================================
# Your Nostr public key in npub format - this identifies you as the podcast creator
VITE_CREATOR_NPUB=npub1km5prrxcgt5fwgjzjpltyswsuu7u7jcj2cx9hk2rwvxyk00v2jqsgv0a3h

# =============================================================================
# BASIC PODCAST INFORMATION
# =============================================================================
# The name of your podcast
VITE_PODCAST_TITLE=PODSTR Podcast

# A description of your podcast content
VITE_PODCAST_DESCRIPTION=A Nostr-powered podcast exploring decentralized conversations

# Your name as podcast author/host
VITE_PODCAST_AUTHOR=PODSTR Creator

# Contact email for your podcast
VITE_PODCAST_EMAIL=creator@podstr.example

# URL to your podcast cover art image (minimum 1400x1400 pixels recommended)
VITE_PODCAST_IMAGE=https://example.com/podcast-artwork.jpg

# Language code for your podcast (e.g., en-us, es-es, fr-fr)
VITE_PODCAST_LANGUAGE=en-us

# Podcast categories separated by commas
VITE_PODCAST_CATEGORIES=Technology,Social Networking,Society & Culture

# Whether your podcast contains explicit content (true/false)
VITE_PODCAST_EXPLICIT=false

# Your podcast website URL
VITE_PODCAST_WEBSITE=https://podstr.example

# =============================================================================
# PODCASTING 2.0 METADATA
# =============================================================================
# Unique identifier for your podcast (can be your npub)
VITE_PODCAST_GUID=npub1km5prrxcgt5fwgjzjpltyswsuu7u7jcj2cx9hk2rwvxyk00v2jqsgv0a3h

# Type of podcast content
VITE_PODCAST_MEDIUM=podcast

# Publisher name (can be same as author)
VITE_PODCAST_PUBLISHER=PODSTR Creator

# Podcast type: episodic or serial
VITE_PODCAST_TYPE=episodic

# =============================================================================
# LIGHTNING VALUE FOR VALUE
# =============================================================================
# Suggested value amount per minute (in sats)
VITE_PODCAST_VALUE_AMOUNT=1000

# Currency type (sats, USD, EUR, BTC)
VITE_PODCAST_VALUE_CURRENCY=sats

# Value recipients as JSON array (broken into multiple lines for readability)
VITE_PODCAST_VALUE_RECIPIENTS=[
  {
    "name":"Podcast Host",
    "type":"node",
    "address":"030a58b8653d32b99200a2334cfe913e51dc7d155aa0116c176657a4f1722677a3",
    "split":80,
    "fee":false
  },
  {
    "name":"Producer",
    "type":"lightning-address",
    "address":"producer@getalby.com",
    "split":15,
    "fee":false,
    "customKey":"podcast",
    "customValue":"producer-fee"
  },
  {
    "name":"Platform Fee",
    "type":"node",
    "address":"021f2f8e1e46a48d0a9f1b7e4e8b5c8d5e4f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6",
    "split":5,
    "fee":true
  }
]`}</code>
            </pre>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Key Configuration Options:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li><strong>VITE_CREATOR_NPUB:</strong> Your Nostr public key identifier (safe to share)</li>
              <li><strong>VITE_PODCAST_TITLE:</strong> Your podcast name</li>
              <li><strong>VITE_PODCAST_DESCRIPTION:</strong> Podcast description</li>
              <li><strong>VITE_PODCAST_AUTHOR:</strong> Your name as host</li>
              <li><strong>VITE_PODCAST_IMAGE:</strong> Cover art URL (1400x1400px min)</li>
              <li><strong>VITE_PODCAST_CATEGORIES:</strong> Podcast categories</li>
              <li><strong>VITE_PODCAST_VALUE_AMOUNT:</strong> Suggested sat value per minute</li>
              <li><strong>VITE_PODCAST_VALUE_RECIPIENTS:</strong> Value split configuration</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const configurationSteps = [
    {
      title: 'Creator & Basic Info',
      content: (
        <div className="space-y-4">
          <p>Configure your creator identity and basic podcast information:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Creator NPUB:</strong> Your Nostr public key that identifies you as the podcast creator</li>
            <li><strong>Podcast Title:</strong> The name of your podcast</li>
            <li><strong>Podcast Description:</strong> A detailed description of your podcast content</li>
            <li><strong>Author:</strong> Your name as the podcast host/creator</li>
            <li><strong>Email:</strong> Contact email for your podcast</li>
            <li><strong>Cover Art:</strong> URL to your podcast artwork (1400x1400px recommended)</li>
            <li><strong>Categories:</strong> Podcast categories separated by commas</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <AlertCircle className="h-4 w-4 inline mr-2" />
              <strong>Important:</strong> Your NSEC (private key) should be kept secure and never shared. Your NPUB is your public identifier that can be safely shared.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Podcasting 2.0 Settings',
      content: (
        <div className="space-y-4">
          <p>Configure your Podcasting 2.0 and metadata settings:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>GUID:</strong> Unique identifier for your podcast (can be your NPUB)</li>
            <li><strong>Medium:</strong> Type of content (typically "podcast")</li>
            <li><strong>Publisher:</strong> Podcast publisher name</li>
            <li><strong>Type:</strong> Podcast format (episodic or serial)</li>
            <li><strong>Complete:</strong> Whether podcast is finished (true/false)</li>
            <li><strong>Locked:</strong> Whether podcast is premium content (true/false)</li>
            <li><strong>Language:</strong> Language code (e.g., en-us, es-es, fr-fr)</li>
            <li><strong>Explicit:</strong> Whether content contains explicit material</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4 inline mr-2" />
              <strong>Pro Tip:</strong> These Podcasting 2.0 settings help your podcast get discovered across the broader podcasting ecosystem.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Value for Value & Monetization',
      content: (
        <div className="space-y-4">
          <p>Configure your Lightning Network and value-for-value settings:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Value Amount:</strong> Suggested sat value per minute</li>
            <li><strong>Currency:</strong> Currency type (sats, USD, EUR, BTC)</li>
            <li><strong>Value Recipients:</strong> JSON array for splitting payments</li>
            <li><strong>Funding Links:</strong> Lightning addresses and donation links</li>
            <li><strong>License:</strong> Content license (e.g., CC BY 4.0, All Rights Reserved)</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4 inline mr-2" />
              <strong>Pro Tip:</strong> The value recipients array allows you to split payments between host, producer, and platform fees automatically.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Advanced Settings',
      content: (
        <div className="space-y-4">
          <p>Configure advanced podcast settings and metadata:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Location:</strong> Recording location (name, GPS, OpenStreetMap)</li>
            <li><strong>Person Metadata:</strong> People involved in podcast (host, guest, producer)</li>
            <li><strong>Text Metadata:</strong> Verification text and custom metadata</li>
            <li><strong>Remote Items:</strong> References to remote feed content</li>
            <li><strong>Content Blocking:</strong> Platform-specific blocking settings</li>
            <li><strong>Feed Migration:</strong> New feed URL for podcast migration</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> These advanced settings are optional but can enhance your podcast's discoverability and metadata richness.
            </p>
          </div>
        </div>
      )
    }
  ];

  const deploymentOptions = [
    {
      title: 'Vercel (Recommended)',
      icon: '🚀',
      description: 'Easy deployment with automatic SSL and CDN',
      steps: [
        'Push your code to GitHub',
        'Connect your GitHub repository to Vercel',
        'Configure environment variables in Vercel dashboard',
        'Deploy with one click'
      ],
      command: 'npm run build',
      notes: 'Vercel provides generous free tier perfect for getting started'
    },
    {
      title: 'Netlify',
      icon: '🌐',
      description: 'Simple static site deployment with continuous deployment',
      steps: [
        'Create a Netlify account',
        'Drag and drop your build folder or connect GitHub',
        'Set up build command: npm run build',
        'Configure environment variables'
      ],
      command: 'npm run build',
      notes: 'Great for static sites with serverless functions for dynamic features'
    },
    {
      title: 'Self-Hosted',
      icon: '🏠',
      description: 'Full control over your deployment and infrastructure',
      steps: [
        'Set up a server with Node.js',
        'Install PM2 for process management',
        'Configure your web server (Nginx/Apache)',
        'Set up SSL certificates with Let\'s Encrypt'
      ],
      command: 'npm run build && npm start',
      notes: 'Requires more technical knowledge but provides maximum control'
    },
    {
      title: 'GitHub Pages',
      icon: '📄',
      description: 'Free static hosting directly from your GitHub repository',
      steps: [
        'Push your code to GitHub',
        'Go to repository Settings > Pages',
        'Select your branch (usually main or gh-pages)',
        'Choose your site folder (usually /dist)',
        'Save and your site will be live at https://yourusername.github.io/podstr'
      ],
      command: 'npm run build',
      notes: 'Perfect for free hosting of static sites with GitHub integration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      <Navigation title="Installation Guide" />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/10 dark:to-blue-400/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Terminal className="h-8 w-8 text-white" />
            </div>
          </div>
          <Badge variant="secondary" className="mb-4">Setup Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Build Your Podcast Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Follow our step-by-step guide to deploy your own decentralized podcast platform. Get up and running in about 15 minutes.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              15 minute setup
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No technical expertise required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Deploy anywhere
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What You'll Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Your Own Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">A dedicated space for your audience that you fully control</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Payments</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Direct Bitcoin payments from listeners with zero fees</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Censorship Resistant</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Built on Nostr - no one can silence your voice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="installation" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Installation</span>
              </TabsTrigger>
              <TabsTrigger value="configuration" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Configuration</span>
              </TabsTrigger>
              <TabsTrigger value="deployment" className="flex items-center space-x-2">
                <Rocket className="h-4 w-4" />
                <span>Deployment</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="mt-8">
              <div className="grid gap-6">
                {installationSteps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span>{step.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {step.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="configuration" className="mt-8">
              <div className="grid gap-6">
                {configurationSteps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span>{step.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {step.content}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {deploymentOptions.map((option, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <span>{option.title}</span>
                      </CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Steps:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {option.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Build Command:</h4>
                        <div className="relative">
                          <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap break-words">
                            <code>{option.command}</code>
                          </pre>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            onClick={() => copyToClipboard(option.command)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          {copiedCommand === option.command && (
                            <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
                          )}
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Note:</strong> {option.notes}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Next Steps */}
          <div className="mt-16 text-center">
            <Card className="border-2 border-dashed border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <CardContent className="py-12">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Launch Your Community?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Once you've completed the setup, you'll have a fully functional podcast community platform with direct Lightning payments and true ownership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
                    <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-5 w-5" />
                      Get Started Now
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-2" asChild>
                    <Link to="/faq">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Need Help?
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Free & open source
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Deploy anywhere
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Full ownership
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Community of Independent Podcasters
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Connect with other podcasters who are building their communities on decentralized infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/faq">
                <BookOpen className="mr-2 h-5 w-5" />
                Read the FAQ
              </Link>
            </Button>
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

export default Guide;