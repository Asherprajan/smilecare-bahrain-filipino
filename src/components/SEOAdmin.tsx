import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useSEO, useCreateSEO, useUpdateSEO, useDeleteSEO } from '@/hooks/useSEOSimple';
import { Save, Edit, Trash2, Plus } from 'lucide-react';

interface SEOAdminProps {
  page: string;
}

const SEOAdmin = ({ page }: SEOAdminProps) => {
  const { seo, loading, refetch } = useSEO(page);
  const { createSEO, loading: creating } = useCreateSEO();
  const { updateSEO, loading: updating } = useUpdateSEO();
  const { deleteSEO, loading: deleting } = useDeleteSEO();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    canonicalUrl: '',
    ogImage: '',
    ogType: 'website',
    noIndex: false,
    structuredData: ''
  });

  const handleEdit = () => {
    if (seo) {
      setFormData({
        title: seo.title,
        description: seo.description,
        keywords: Array.isArray(seo.keywords) ? seo.keywords.join(', ') : seo.keywords,
        canonicalUrl: seo.canonicalUrl,
        ogImage: seo.ogImage || '',
        ogType: seo.ogType || 'website',
        noIndex: seo.noIndex || false,
        structuredData: seo.structuredData ? JSON.stringify(seo.structuredData, null, 2) : ''
      });
    }
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const input = {
        ...formData,
        keywords: formData.keywords.split(',').map(k => k.trim()).filter(k => k),
        structuredData: formData.structuredData ? JSON.parse(formData.structuredData) : null
      };

      if (seo) {
        await updateSEO(seo.id, input);
      } else {
        await createSEO({ page, ...input });
      }
      
      setIsEditing(false);
      refetch();
    } catch (error) {
      console.error('Error saving SEO:', error);
    }
  };

  const handleDelete = async () => {
    if (seo && confirm('Are you sure you want to delete this SEO data?')) {
      try {
        await deleteSEO(seo.id);
        refetch();
      } catch (error) {
        console.error('Error deleting SEO:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>SEO Management - {page}</CardTitle>
          <div className="flex gap-2">
            {seo ? (
              <>
                <Button onClick={handleEdit} variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button onClick={handleDelete} variant="destructive" size="sm" disabled={deleting}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </>
            ) : (
              <Button onClick={handleEdit} size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create SEO
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Page title"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Meta description"
                rows={3}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Keywords (comma-separated)</label>
              <Input
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Canonical URL</label>
              <Input
                value={formData.canonicalUrl}
                onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                placeholder="https://smilecare-bahrain.com/page"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Open Graph Image</label>
              <Input
                value={formData.ogImage}
                onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })}
                placeholder="https://smilecare-bahrain.com/image.png"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium">Structured Data (JSON)</label>
              <Textarea
                value={formData.structuredData}
                onChange={(e) => setFormData({ ...formData, structuredData: e.target.value })}
                placeholder='{"@context": "https://schema.org", ...}'
                rows={8}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={creating || updating}>
                <Save className="w-4 h-4 mr-2" />
                {seo ? 'Update' : 'Create'}
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {seo ? (
              <>
                <div>
                  <Badge variant="outline" className="mb-2">Title</Badge>
                  <p className="text-sm">{seo.title}</p>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-2">Description</Badge>
                  <p className="text-sm">{seo.description}</p>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-2">Keywords</Badge>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {Array.isArray(seo.keywords) ? seo.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    )) : (
                      <span className="text-sm">{seo.keywords}</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-2">Canonical URL</Badge>
                  <p className="text-sm">{seo.canonicalUrl}</p>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-2">Open Graph Image</Badge>
                  <p className="text-sm">{seo.ogImage}</p>
                </div>
                
                {seo.structuredData && (
                  <div>
                    <Badge variant="outline" className="mb-2">Structured Data</Badge>
                    <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(seo.structuredData, null, 2)}
                    </pre>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-500">No SEO data found for this page. Click "Create SEO" to add some.</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SEOAdmin;
