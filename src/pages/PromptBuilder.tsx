import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navigation } from '@/components/Navigation';
import {
  CheckCircle,
  Copy,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  User,
  Mic,
  Settings,
  Zap,
  Globe,
  Users,
  ExternalLink,
} from 'lucide-react';

interface FormData {
  // Creator Identity
  creatorNpub: string;
  
  // Basic Info
  title: string;
  description: string;
  author: string;
  email: string;
  imageUrl: string;
  language: string;
  categories: string;
  explicit: boolean;
  website: string;
  copyright: string;
  
  // Podcasting 2.0
  guid: string;
  medium: string;
  publisher: string;
  podcastType: string;
  complete: boolean;
  locked: boolean;
  
  // Location
  locationName: string;
  locationGeo: string;
  locationOsm: string;
  
  // License
  licenseIdentifier: string;
  licenseUrl: string;
  
  // Value
  valueAmount: string;
  valueCurrency: string;
  valueRecipients: string;
  
  // Funding & People
  funding: string;
  person: string;
  
  // RSS & Analytics
  rssTtl: string;
  useOP3: boolean;
}

const defaultFormData: FormData = {
  creatorNpub: '',
  title: '',
  description: '',
  author: '',
  email: '',
  imageUrl: '',
  language: 'en-us',
  categories: 'Technology',
  explicit: false,
  website: '',
  copyright: '',
  guid: '',
  medium: 'podcast',
  publisher: '',
  podcastType: 'episodic',
  complete: false,
  locked: false,
  locationName: '',
  locationGeo: '',
  locationOsm: '',
  licenseIdentifier: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  valueAmount: '1000',
  valueCurrency: 'sats',
  valueRecipients: '',
  funding: '/about',
  person: '',
  rssTtl: '60',
  useOP3: false,
};

const steps = [
  { id: 'identity', title: 'Creator Identity', icon: User, description: 'Your Nostr identity' },
  { id: 'basic', title: 'Basic Info', icon: Mic, description: 'Podcast details' },
  { id: 'podcasting2', title: 'Podcasting 2.0', icon: Settings, description: 'Advanced settings' },
  { id: 'monetization', title: 'Monetization', icon: Zap, description: 'Lightning payments' },
  { id: 'extras', title: 'Extras', icon: Globe, description: 'Optional settings' },
  { id: 'generate', title: 'Generate', icon: Sparkles, description: 'Get your prompt' },
];

const languages = [
  { value: 'en-us', label: 'English (US)' },
  { value: 'en-gb', label: 'English (UK)' },
  { value: 'es-es', label: 'Spanish (Spain)' },
  { value: 'es-mx', label: 'Spanish (Mexico)' },
  { value: 'fr-fr', label: 'French' },
  { value: 'de-de', label: 'German' },
  { value: 'pt-br', label: 'Portuguese (Brazil)' },
  { value: 'it-it', label: 'Italian' },
  { value: 'ja-jp', label: 'Japanese' },
  { value: 'zh-cn', label: 'Chinese (Simplified)' },
];

const categories = [
  'Arts',
  'Business',
  'Comedy',
  'Education',
  'Fiction',
  'Government',
  'Health & Fitness',
  'History',
  'Kids & Family',
  'Leisure',
  'Music',
  'News',
  'Religion & Spirituality',
  'Science',
  'Society & Culture',
  'Sports',
  'Technology',
  'True Crime',
  'TV & Film',
];

const PromptBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [copied, setCopied] = useState(false);

  useSeoMeta({
    title: 'Prompt Builder - Podstr',
    description: 'Build your configuration prompt for Podstr with our interactive wizard. Configure your podcast settings and generate a prompt for Shakespeare.diy.',
  });

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatePrompt = () => {
    const lines: string[] = [
      '**Configure my Podstr podcast with these settings. Edit the file `src/lib/podcastConfig.ts` with these values:**',
      '',
      '**CREATOR IDENTITY**',
      `- My Nostr npub: \`${formData.creatorNpub || 'npub1...'}\``,
      '',
      '**BASIC PODCAST INFO**',
      `- Podcast title: \`${formData.title || 'My Podcast'}\``,
      `- Description: \`${formData.description || 'A description of my podcast'}\``,
      `- Author name: \`${formData.author || 'My Name'}\``,
      `- Contact email: \`${formData.email || 'me@example.com'}\``,
      `- Cover art URL: \`${formData.imageUrl || 'https://example.com/cover.jpg'}\``,
      `- Language: \`${formData.language}\``,
      `- Categories: \`${formData.categories}\``,
      `- Contains explicit content: \`${formData.explicit ? 'yes' : 'no'}\``,
      `- Website URL: \`${formData.website || 'https://mypodcast.com'}\``,
      `- Copyright notice: \`${formData.copyright || `© ${new Date().getFullYear()} ${formData.author || 'My Name'}`}\``,
      '',
      '**PODCASTING 2.0 SETTINGS**',
      `- Podcast GUID: \`${formData.guid || formData.creatorNpub || 'npub1...'}\``,
      `- Medium type: \`${formData.medium}\``,
      `- Publisher name: \`${formData.publisher || formData.author || 'My Name'}\``,
      `- Podcast type: \`${formData.podcastType}\``,
      `- Is the podcast complete/finished: \`${formData.complete ? 'yes' : 'no'}\``,
      `- Is the podcast locked/premium: \`${formData.locked ? 'yes' : 'no'}\``,
      '',
      '**LOCATION (Optional)**',
      `- Recording location name: \`${formData.locationName || ''}\``,
      `- GPS coordinates: \`${formData.locationGeo || ''}\``,
      `- OpenStreetMap ID: \`${formData.locationOsm || ''}\``,
      '',
      '**LICENSE**',
      `- License type: \`${formData.licenseIdentifier}\``,
      `- License URL: \`${formData.licenseUrl}\``,
      '',
      '**LIGHTNING VALUE-FOR-VALUE**',
      `- Suggested sats per minute: \`${formData.valueAmount}\``,
      `- Currency: \`${formData.valueCurrency}\``,
    ];

    // Add value recipients
    if (formData.valueRecipients) {
      lines.push(`- Value recipients (JSON array):`);
      lines.push('```json');
      lines.push(formData.valueRecipients);
      lines.push('```');
    } else {
      lines.push(`- Value recipients (JSON array):`);
      lines.push('```json');
      lines.push(`[
  {
    "name": "${formData.author || 'Host'}",
    "type": "lnaddress",
    "address": "${formData.email ? formData.email.replace('@', '@') : 'you@getalby.com'}",
    "split": 100,
    "fee": false
  }
]`);
      lines.push('```');
    }

    lines.push('');
    lines.push('**FUNDING LINKS (Optional)**');
    lines.push(`- Funding URLs: \`${formData.funding}\``);
    lines.push('');
    lines.push('**PODCAST PEOPLE**');
    
    if (formData.person) {
      lines.push(`- People involved (JSON array):`);
      lines.push('```json');
      lines.push(formData.person);
      lines.push('```');
    } else {
      lines.push(`- People involved (JSON array):`);
      lines.push('```json');
      lines.push(`[
  {
    "name": "${formData.author || 'Host Name'}",
    "role": "host",
    "group": "cast"
  }
]`);
      lines.push('```');
    }

    lines.push('');
    lines.push('**RSS SETTINGS**');
    lines.push(`- RSS cache time (minutes): \`${formData.rssTtl}\``);
    lines.push(`- Enable OP3 analytics: \`${formData.useOP3 ? 'yes' : 'no'}\``);

    return lines.join('\n');
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatePrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'identity':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="creatorNpub">Your Nostr npub *</Label>
              <Input
                id="creatorNpub"
                placeholder="npub1..."
                value={formData.creatorNpub}
                onChange={(e) => updateField('creatorNpub', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Your Nostr public key identifies you as the podcast creator. Get it from your Nostr client (Damus, Primal, etc.)
              </p>
            </div>
          </div>
        );

      case 'basic':
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Podcast Title *</Label>
                <Input
                  id="title"
                  placeholder="My Awesome Podcast"
                  value={formData.title}
                  onChange={(e) => updateField('title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author Name *</Label>
                <Input
                  id="author"
                  placeholder="Your Name"
                  value={formData.author}
                  onChange={(e) => updateField('author', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="A podcast about..."
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                rows={3}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  placeholder="https://mypodcast.com"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">Cover Art URL *</Label>
              <Input
                id="imageUrl"
                placeholder="https://example.com/cover.jpg"
                value={formData.imageUrl}
                onChange={(e) => updateField('imageUrl', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Minimum 1400x1400 pixels recommended. Upload to a host like nostr.build or your own server.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={formData.language} onValueChange={(v) => updateField('language', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="categories">Categories</Label>
                <Select value={formData.categories.split(',')[0]} onValueChange={(v) => updateField('categories', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="explicit"
                checked={formData.explicit}
                onCheckedChange={(v) => updateField('explicit', v)}
              />
              <Label htmlFor="explicit">Contains explicit content</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="copyright">Copyright Notice</Label>
              <Input
                id="copyright"
                placeholder={`© ${new Date().getFullYear()} Your Name`}
                value={formData.copyright}
                onChange={(e) => updateField('copyright', e.target.value)}
              />
            </div>
          </div>
        );

      case 'podcasting2':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="guid">Podcast GUID</Label>
              <Input
                id="guid"
                placeholder="Same as your npub, or a unique identifier"
                value={formData.guid}
                onChange={(e) => updateField('guid', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Leave blank to use your npub. This uniquely identifies your podcast.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="medium">Medium Type</Label>
                <Select value={formData.medium} onValueChange={(v) => updateField('medium', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="film">Film</SelectItem>
                    <SelectItem value="audiobook">Audiobook</SelectItem>
                    <SelectItem value="newsletter">Newsletter</SelectItem>
                    <SelectItem value="blog">Blog</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="podcastType">Podcast Type</Label>
                <Select value={formData.podcastType} onValueChange={(v) => updateField('podcastType', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="episodic">Episodic (standalone episodes)</SelectItem>
                    <SelectItem value="serial">Serial (sequential episodes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="publisher">Publisher Name</Label>
              <Input
                id="publisher"
                placeholder="Same as author, or your company name"
                value={formData.publisher}
                onChange={(e) => updateField('publisher', e.target.value)}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="complete"
                  checked={formData.complete}
                  onCheckedChange={(v) => updateField('complete', v)}
                />
                <Label htmlFor="complete">Podcast is complete/finished</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="locked"
                  checked={formData.locked}
                  onCheckedChange={(v) => updateField('locked', v)}
                />
                <Label htmlFor="locked">Podcast is locked/premium</Label>
              </div>
            </div>
          </div>
        );

      case 'monetization':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <Zap className="h-4 w-4 inline mr-2" />
                <strong>Value for Value:</strong> Configure Lightning payments so listeners can support you directly with zero platform fees!
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="valueAmount">Suggested sats per minute</Label>
                <Input
                  id="valueAmount"
                  type="number"
                  placeholder="1000"
                  value={formData.valueAmount}
                  onChange={(e) => updateField('valueAmount', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valueCurrency">Currency</Label>
                <Select value={formData.valueCurrency} onValueChange={(v) => updateField('valueCurrency', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sats">Sats</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="valueRecipients">Value Recipients (JSON - optional)</Label>
              <Textarea
                id="valueRecipients"
                placeholder={`Leave blank for a simple setup, or paste a JSON array like:
[
  {
    "name": "Host",
    "type": "lnaddress",
    "address": "you@getalby.com",
    "split": 100,
    "fee": false
  }
]`}
                value={formData.valueRecipients}
                onChange={(e) => updateField('valueRecipients', e.target.value)}
                rows={8}
                className="font-mono text-sm"
              />
              <p className="text-sm text-muted-foreground">
                For multiple recipients, the splits must add up to 100. Leave blank for a simple single-recipient setup.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="funding">Funding Links</Label>
              <Input
                id="funding"
                placeholder="/about, https://donate.example.com"
                value={formData.funding}
                onChange={(e) => updateField('funding', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Comma-separated list of funding/donation URLs
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="licenseIdentifier">License Type</Label>
                <Select value={formData.licenseIdentifier} onValueChange={(v) => updateField('licenseIdentifier', v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CC BY 4.0">CC BY 4.0</SelectItem>
                    <SelectItem value="CC BY-SA 4.0">CC BY-SA 4.0</SelectItem>
                    <SelectItem value="CC BY-NC 4.0">CC BY-NC 4.0</SelectItem>
                    <SelectItem value="CC0">CC0 (Public Domain)</SelectItem>
                    <SelectItem value="All Rights Reserved">All Rights Reserved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseUrl">License URL</Label>
                <Input
                  id="licenseUrl"
                  placeholder="https://creativecommons.org/licenses/by/4.0/"
                  value={formData.licenseUrl}
                  onChange={(e) => updateField('licenseUrl', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'extras':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Recording Location (Optional)</Label>
              <div className="grid gap-4 md:grid-cols-3">
                <Input
                  placeholder="City, Country"
                  value={formData.locationName}
                  onChange={(e) => updateField('locationName', e.target.value)}
                />
                <Input
                  placeholder="GPS: 30.2672,-97.7431"
                  value={formData.locationGeo}
                  onChange={(e) => updateField('locationGeo', e.target.value)}
                />
                <Input
                  placeholder="OSM ID"
                  value={formData.locationOsm}
                  onChange={(e) => updateField('locationOsm', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="person">Podcast People (JSON - optional)</Label>
              <Textarea
                id="person"
                placeholder={`Leave blank for a simple host setup, or paste a JSON array like:
[
  {
    "name": "Your Name",
    "role": "host",
    "group": "cast",
    "img": "https://your-photo.jpg",
    "href": "https://your-website.com"
  }
]`}
                value={formData.person}
                onChange={(e) => updateField('person', e.target.value)}
                rows={8}
                className="font-mono text-sm"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="rssTtl">RSS Cache Time (minutes)</Label>
                <Input
                  id="rssTtl"
                  type="number"
                  placeholder="60"
                  value={formData.rssTtl}
                  onChange={(e) => updateField('rssTtl', e.target.value)}
                />
              </div>
              <div className="space-y-2 flex items-end">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="useOP3"
                    checked={formData.useOP3}
                    onCheckedChange={(v) => updateField('useOP3', v)}
                  />
                  <Label htmlFor="useOP3">Enable OP3.dev Analytics</Label>
                </div>
              </div>
            </div>
            {formData.useOP3 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  If you enable OP3 analytics, you'll need to set the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">VITE_OP3_API_TOKEN</code> environment variable in your deployment platform.
                </p>
              </div>
            )}
          </div>
        );

      case 'generate':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Your prompt is ready!</p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Copy this prompt and paste it into Shakespeare.diy with your Podstr repository open.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={copyPrompt} className="flex-1" size="lg">
                {copied ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    Copy Prompt
                  </>
                )}
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fderekross%2Fpodstr.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open in Shakespeare
                </a>
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Generated Prompt</Label>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto max-h-96">
                <pre className="text-sm whitespace-pre-wrap font-mono">{generatePrompt()}</pre>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
                <Users className="h-4 w-4 inline mr-2" />
                Next Steps
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-purple-700 dark:text-purple-300">
                <li>Fork the <a href="https://github.com/derekross/podstr" target="_blank" rel="noopener noreferrer" className="underline">Podstr repository</a> on GitHub</li>
                <li>Click "Open in Shakespeare" above to open your fork</li>
                <li>Paste the copied prompt</li>
                <li>Shakespeare will configure your podcast automatically!</li>
                <li>Deploy to Vercel, Netlify, or GitHub Pages</li>
              </ol>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      <Navigation title="Prompt Builder" />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-purple-600/10 to-blue-600/10 dark:from-purple-400/10 dark:to-blue-400/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Assisted Setup
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Build Your Configuration Prompt
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Answer a few questions about your podcast, and we'll generate the perfect prompt for Shakespeare.diy to configure your Podstr instance.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 overflow-x-auto pb-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`flex flex-col items-center min-w-[80px] transition-all ${
                    isActive ? 'scale-110' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <span
                    className={`text-xs font-medium text-center ${
                      isActive
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step Content */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {(() => {
                  const Icon = steps[currentStep].icon;
                  return <Icon className="h-5 w-5 text-purple-500" />;
                })()}
                <span>{steps[currentStep].title}</span>
              </CardTitle>
              <CardDescription>{steps[currentStep].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button onClick={nextStep}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={copyPrompt} className="bg-gradient-to-r from-purple-600 to-blue-600">
                {copied ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Prompt
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Podstr. Open source under MIT license.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Vibed with <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">MKStack</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PromptBuilder;
