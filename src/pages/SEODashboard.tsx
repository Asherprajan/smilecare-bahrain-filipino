import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetAllSEO } from '@/hooks/useSEOSimple';
import SEOAdmin from '@/components/SEOAdmin';
import { Settings, BarChart3, FileText, Globe } from 'lucide-react';

interface SEO {
  id: string;
  page: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: any;
  createdAt: string;
  updatedAt: string;
}

interface PageSEO {
  page: string;
  seo: SEO | null;
}

interface GetAllSEOResponse {
  getAllSEO: PageSEO[];
}

const SEODashboard = () => {
  const [selectedPage, setSelectedPage] = useState('/');
  const { data, loading, error } = useGetAllSEO();

  const pages = [
    { path: '/', name: 'Home', icon: Globe },
    { path: '/plans', name: 'Plans', icon: FileText },
    { path: '/registration', name: 'Registration', icon: Settings },
    { path: '/partners', name: 'Partners', icon: BarChart3 },
    { path: '/challenges', name: 'Challenges', icon: FileText }
  ];

  if (loading) return <div className="p-8">Loading SEO dashboard...</div>;
  if (error) return <div className="p-8 text-red-500">Error loading SEO data: {error.message}</div>;

  const seoData = data?.getAllSEO || [];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Management Dashboard</h1>
          <p className="text-gray-600">Manage SEO settings for all pages using GraphQL</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pages">Page Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pages.length}</div>
                  <p className="text-xs text-muted-foreground">Pages with SEO data</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Configured Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{seoData.length}</div>
                  <p className="text-xs text-muted-foreground">Pages with SEO configured</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round((seoData.length / pages.length) * 100)}%
                  </div>
                  <p className="text-xs text-muted-foreground">SEO coverage</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Page Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pages.map((page) => {
                    const hasSEO = seoData.some(item => item.page === page.path);
                    const Icon = page.icon;
                    
                    return (
                      <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="font-medium">{page.name}</p>
                            <p className="text-sm text-gray-500">{page.path}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={hasSEO ? "default" : "secondary"}>
                            {hasSEO ? "Configured" : "Not Configured"}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedPage(page.path)}
                          >
                            {hasSEO ? "Edit" : "Configure"}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pages" className="space-y-6">
            <div className="flex space-x-4 mb-6">
              {pages.map((page) => (
                <Button
                  key={page.path}
                  variant={selectedPage === page.path ? "default" : "outline"}
                  onClick={() => setSelectedPage(page.path)}
                  className="flex items-center space-x-2"
                >
                  <page.icon className="w-4 h-4" />
                  <span>{page.name}</span>
                </Button>
              ))}
            </div>
            
            <SEOAdmin page={selectedPage} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SEO Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Analytics integration coming soon</p>
                  <p className="text-sm">Connect with Google Analytics, Search Console, or other SEO tools</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SEODashboard;
