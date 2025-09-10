import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { ArrowLeft, BookOpen, Github, MessageSquare, Moon, Sun, Monitor } from 'lucide-react';

interface NavigationProps {
  title: string;
  showBackButton?: boolean;
}

export function Navigation({ title, showBackButton = true }: NavigationProps) {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else {
      return <Monitor className="h-4 w-4" />;
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Title and Back Button */}
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            {showBackButton && !isHomePage && (
              <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                </Link>
              </Button>
            )}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
              {title}
            </h1>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end w-full sm:w-auto">
            {/* Theme Toggle - Always visible */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              title="Toggle theme"
              className="flex-shrink-0"
            >
              {getThemeIcon()}
            </Button>

            {/* Navigation Links - Hide on mobile for some items */}
            {!isHomePage && (
              <>
                {location.pathname === '/faq' ? (
                  <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                    <Link to="/guide">
                      <BookOpen className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Guide</span>
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" asChild className="flex-shrink-0">
                    <Link to="/faq">
                      <MessageSquare className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">FAQ</span>
                    </Link>
                  </Button>
                )}
              </>
            )}

            {/* GitHub Link - Always visible */}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-shrink-0"
              title="View on GitHub"
            >
              <a
                href="https://github.com/derekross/podstr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}