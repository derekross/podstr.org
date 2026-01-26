import { useSeoMeta } from '@unhead/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Rocket, CheckCircle, AlertCircle, Copy, BookOpen, Github, MessageSquare, Users, Shield, Zap, Terminal, Sparkles, Wand2 } from 'lucide-react';
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

  const shakespeareSteps = [
    {
      title: 'Fork the Repository (Optional)',
      content: (
        <div className="space-y-4">
          <p>You can optionally fork the Podstr repository to your GitHub account first:</p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/derekross/podstr/fork" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Fork on GitHub (Optional)
              </a>
            </Button>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> Forking is optional! Shakespeare.diy will automatically clone the repository for you when you open it. You can fork later if you want your own GitHub copy.
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Build Your Configuration Prompt',
      content: (
        <div className="space-y-4">
          <p>Use our interactive Prompt Builder to create your configuration:</p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
              <Link to="/prompt-builder">
                <Wand2 className="mr-2 h-5 w-5" />
                Open Prompt Builder
              </Link>
            </Button>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Answer a few questions about your podcast and get a ready-to-use prompt.
          </p>
        </div>
      )
    },
    {
      title: 'Open in Shakespeare.diy',
      content: (
        <div className="space-y-4">
          <p>Open Podstr in Shakespeare.diy - it will automatically clone the repository for you:</p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
              <a href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fderekross%2Fpodstr.git" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-5 w-5" />
                Edit with Shakespeare
              </a>
            </Button>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 mt-4">
            <li>Click the button above - Shakespeare will automatically clone Podstr</li>
            <li>Connect your GitHub account if prompted</li>
            <li>You're ready to paste your prompt!</li>
          </ol>
        </div>
      )
    },
    {
      title: 'Paste Your Prompt',
      content: (
        <div className="space-y-4">
          <p>Paste the prompt from the Prompt Builder into Shakespeare:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Shakespeare will read your configuration request</li>
            <li>It will edit <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">src/lib/podcastConfig.ts</code> with your settings</li>
            <li>Review the changes and approve them</li>
            <li>Shakespeare will commit the changes to your repository</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200">
              <CheckCircle className="h-4 w-4 inline mr-2" />
              <strong>That's it!</strong> Your podcast configuration is complete. Now you just need to deploy!
            </p>
          </div>
        </div>
      )
    }
  ];

  const manualSteps = [
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
          <p>Clone your forked Podstr repository:</p>
          <div className="relative">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
              <code>git clone https://github.com/YOUR-USERNAME/podstr.git</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => copyToClipboard('git clone https://github.com/YOUR-USERNAME/podstr.git')}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {copiedCommand === 'git clone https://github.com/YOUR-USERNAME/podstr.git' && (
              <span className="absolute top-2 right-12 text-green-400 text-sm">Copied!</span>
            )}
          </div>
          <p>Navigate into the project:</p>
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
      title: 'Edit Configuration',
      content: (
        <div className="space-y-4">
          <p>Open <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">src/lib/podcastConfig.ts</code> in your editor:</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg max-h-80 overflow-y-auto">
            <pre className="text-sm whitespace-pre-wrap break-all">
              <code>{`export const PODCAST_CONFIG: PodcastConfig = {
  // ===========================================================================
  // CREATOR IDENTITY
  // ===========================================================================
  // Your Nostr public key in npub format
  creatorNpub: "npub1your_npub_here...",

  podcast: {
    // =========================================================================
    // BASIC PODCAST INFO
    // =========================================================================
    title: "Your Podcast Name",
    description: "Your podcast description",
    author: "Your Name",
    email: "you@example.com",
    image: "https://your-cover-art.jpg",
    language: "en-us",
    categories: ["Technology"],
    explicit: false,
    website: "https://yourpodcast.com",
    copyright: "© 2025 Your Name",
    
    // ... more settings
  }
};`}</code>
            </pre>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Key Settings:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
              <li><strong>creatorNpub:</strong> Your Nostr public key (npub1...)</li>
              <li><strong>title:</strong> Your podcast name</li>
              <li><strong>description:</strong> Podcast description</li>
              <li><strong>author:</strong> Your name as host</li>
              <li><strong>image:</strong> Cover art URL (1400x1400px min)</li>
              <li><strong>value.recipients:</strong> Lightning payment configuration</li>
            </ul>
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
        'Push your changes to GitHub',
        'Connect your GitHub repository to Vercel',
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
        'Connect your GitHub repository',
        'Set build command: npm run build',
        'Deploy automatically on push'
      ],
      command: 'npm run build',
      notes: 'Great for static sites with serverless functions'
    },
    {
      title: 'GitHub Pages',
      icon: '📄',
      description: 'Free static hosting directly from your GitHub repository',
      steps: [
        'Push your code to GitHub',
        'Go to repository Settings > Pages',
        'Select your branch (usually main)',
        'Your site will be live at https://yourusername.github.io/podstr'
      ],
      command: 'npm run build',
      notes: 'Perfect for free hosting with GitHub integration'
    },
    {
      title: 'Self-Hosted',
      icon: '🏠',
      description: 'Full control over your deployment and infrastructure',
      steps: [
        'Set up a server with Node.js',
        'Clone your repository',
        'Run npm run build',
        'Serve the dist folder with nginx or similar'
      ],
      command: 'npm run build',
      notes: 'Maximum control but requires more technical knowledge'
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
            Choose between AI-assisted configuration with Shakespeare.diy or manual setup. Either way, you'll be up and running in minutes.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              5 minute setup
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No coding required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Deploy anywhere
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start with Shakespeare */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Recommended
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Start with Shakespeare.diy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The fastest way to configure your podcast - let AI do the work!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
              <Link to="/prompt-builder">
                <Wand2 className="mr-2 h-5 w-5" />
                Start Prompt Builder
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fderekross%2Fpodstr.git" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-5 w-5" />
                Open in Shakespeare
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            {shakespeareSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
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

      {/* Detailed Guide Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <Tabs defaultValue="deployment" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deployment" className="flex items-center space-x-2">
                <Rocket className="h-4 w-4" />
                <span>Deployment</span>
              </TabsTrigger>
              <TabsTrigger value="manual" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Manual Setup</span>
              </TabsTrigger>
            </TabsList>

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
                      {/* Deploy Button for Vercel */}
                      {option.title === 'Vercel (Recommended)' && (
                        <div className="flex justify-center pb-2">
                          <a
                            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fderekross%2Fpodstr"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://vercel.com/button"
                              alt="Deploy with Vercel"
                              className="h-10"
                            />
                          </a>
                        </div>
                      )}
                      {/* Deploy Button for Netlify */}
                      {option.title === 'Netlify' && (
                        <div className="flex justify-center pb-2">
                          <a
                            href="https://app.netlify.com/start/deploy?repository=https://github.com/derekross/podstr"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://www.netlify.com/img/deploy/button.svg"
                              alt="Deploy to Netlify"
                              className="h-10"
                            />
                          </a>
                        </div>
                      )}
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

            <TabsContent value="manual" className="mt-8">
              <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <AlertCircle className="h-4 w-4 inline mr-2" />
                  <strong>Prefer the easy way?</strong> Use our <Link to="/prompt-builder" className="underline">Prompt Builder</Link> with Shakespeare.diy instead!
                </p>
              </div>
              <div className="grid gap-6">
                {manualSteps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                    <Link to="/prompt-builder">
                      <Wand2 className="mr-2 h-5 w-5" />
                      Start Prompt Builder
                    </Link>
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
