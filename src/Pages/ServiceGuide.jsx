import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../Components/utils/createPageUrl";
import { getServiceById } from "../Components/utils/serviceApi";
import { 
  ArrowLeft,
  Clock,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Shield,
  FileText,
  CreditCard,
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  Building,
  Calculator
} from "lucide-react";
import { Button } from "../Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { useLanguage } from "../Components/contexts/LanguageContext";

const categoryIcons = {
  documents: FileText,
  identity: CreditCard,
  education: GraduationCap,
  health: Heart,
  employment: Briefcase,
  welfare: Users,
  banking: Building,
  tax: Calculator
};

export default function ServiceGuidePage() {
  const { t } = useLanguage();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('id');
    if (serviceId) {
      loadService(serviceId);
    }
  }, [location.search]);

  const loadService = async (id) => {
    setLoading(true);
    try {
      const data = getServiceById(id);
      setService(data);
    } catch (error) {
      console.error("Error loading service:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-4">
            <div className="h-24 bg-gray-200 rounded-xl"></div>
            <div className="h-24 bg-gray-200 rounded-xl"></div>
            <div className="h-24 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Service not found</h2>
        <Link to={createPageUrl("Services")}>
          <Button className="mt-4">Back to Services</Button>
        </Link>
      </div>
    );
  }
  
  const CategoryIcon = categoryIcons[service.category] || FileText;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb and Back Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <Link to={createPageUrl("Home")} className="hover:text-orange-600">{t('navHome')}</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <Link to={createPageUrl("Services")} className="hover:text-orange-600">{t('navServices')}</Link>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-gray-900">{service.name}</span>
        </div>
        
        <Link to={createPageUrl("Services")}>
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
        </Link>
      </div>

      {/* Service Header */}
      <Card className="border-0 saffron-shadow bg-white/80 backdrop-blur">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center">
                <CategoryIcon className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <CardTitle>{service.name}</CardTitle>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="mb-2 bg-green-100 text-green-700 border-green-200">
                {service.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {service.time}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Step-by-Step Guide */}
      <Card className="border-0 green-shadow bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            Step-by-Step Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {service.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Service Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Difficulty:</span>
              <Badge className={
                service.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                service.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }>
                {service.difficulty}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{service.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Time:</span>
              <span className="font-medium">{service.time}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Official Website
            </Button>
            <Button variant="outline" className="w-full">
              Download Checklist
            </Button>
            <Button variant="outline" className="w-full">
              Save for Later
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Link to={createPageUrl("Services")}>
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Previous: All Services
          </Button>
        </Link>
        
        <div className="text-center text-sm text-gray-500">
          Need help? Contact our support team
        </div>
      </div>
    </div>
  );
} 