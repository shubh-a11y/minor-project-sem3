import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "../Components/utils/createPageUrl";
import { 
  getServiceById, 
  getServiceProgress, 
  toggleStepCompletion, 
  generateServicePDF 
} from "../Components/utils/serviceApi";
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
  Calculator,
  Download,
  Check,
  Phone,
  IndianRupee,
  Hourglass,
  FolderCheck
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
  const [completedSteps, setCompletedSteps] = useState([]);
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
      
      // Load progress for this service
      const progress = getServiceProgress(id);
      setCompletedSteps(progress.completedSteps);
    } catch (error) {
      console.error("Error loading service:", error);
    }
    setLoading(false);
  };


  const handleStepToggle = (stepIndex) => {
    const updatedSteps = toggleStepCompletion(service.id, stepIndex);
    setCompletedSteps(updatedSteps);
  };


  const handleVisitWebsite = () => {
    if (service.officialWebsite) {
      window.open(service.officialWebsite, '_blank', 'noopener,noreferrer');
    }
  };


  const handleDownloadChecklist = () => {
    generateServicePDF(service);
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
              <div key={index} className="flex items-start gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStepToggle(index)}
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                      completedSteps.includes(index)
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedSteps.includes(index) && <Check className="w-4 h-4" />}
                  </button>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    completedSteps.includes(index)
                      ? 'bg-green-100 text-green-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <p className={`mb-2 ${
                    completedSteps.includes(index)
                      ? 'text-gray-500 line-through'
                      : 'text-gray-700'
                  }`}>
                    {typeof step === 'string' ? step : step.text}
                  </p>
                  {step.screenshot && (
                    <div className="mb-2">
                      <img 
                        src={step.screenshot} 
                        alt={`Step ${index + 1} screenshot`}
                        className="max-w-full h-auto rounded-lg border shadow-sm"
                      />
                    </div>
                  )}
                  {step.description && (
                    <p className="text-sm text-gray-500 italic">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>


      {/* Required Documents Card */}
      {service.requiredDocuments && service.requiredDocuments.length > 0 && (
        <Card className="border-0 saffron-shadow bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderCheck className="w-6 h-6 text-orange-600" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {service.requiredDocuments.map((docCategory, index) => (
                <div key={index} className="border-l-4 border-orange-200 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {docCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {docCategory.options.map((option, optIndex) => (
                      <Badge 
                        key={optIndex} 
                        variant="outline" 
                        className="bg-orange-50 text-orange-700 border-orange-200"
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
              <p className="text-sm text-orange-800">
                <strong>Note:</strong> Carry original documents along with self-attested photocopies for verification.
              </p>
            </div>
          </CardContent>
        </Card>
      )}


      {/* Fees and Processing Time Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fees Card */}
        {service.fees && (
          <Card className="border-0 bg-gradient-to-br from-green-50 to-white backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <IndianRupee className="w-6 h-6" />
                Application Fees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(service.fees).map(([feeType, feeAmount], index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                  <span className="text-gray-700 capitalize font-medium">
                    {feeType.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-green-700 font-bold text-lg">
                    {feeAmount}
                  </span>
                </div>
              ))}
              <div className="mt-3 p-2 bg-green-100 rounded text-center">
                <p className="text-xs text-green-800">
                  Fees are subject to change. Please verify on official website.
                </p>
              </div>
            </CardContent>
          </Card>
        )}


        {/* Processing Time Card */}
        {service.processingTime && (
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-white backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Hourglass className="w-6 h-6" />
                Processing Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(service.processingTime).map(([timeType, duration], index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-blue-100">
                  <span className="text-gray-700 capitalize font-medium">
                    {timeType.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-blue-700 font-bold">
                    {duration}
                  </span>
                </div>
              ))}
              <div className="mt-3 p-2 bg-blue-100 rounded text-center">
                <p className="text-xs text-blue-800">
                  Processing times may vary based on volume and verification.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>


      {/* Helpline Card */}
      {service.helpline && (
        <Card className="border-0 bg-gradient-to-r from-orange-50 via-white to-green-50 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <Phone className="w-6 h-6" />
              Need Help? Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-orange-200">
              <div>
                <p className="text-sm text-gray-600 mb-1">Helpline Number</p>
                <p className="text-2xl font-bold text-orange-600">{service.helpline}</p>
                <p className="text-xs text-gray-500 mt-1">Available during business hours</p>
              </div>
              <Button 
                onClick={() => window.open(`tel:${service.helpline}`, '_self')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <p className="text-xs text-gray-600">Email Support</p>
                <p className="text-sm font-medium text-orange-700">Available</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-gray-600">Chat Support</p>
                <p className="text-sm font-medium text-green-700">Online</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600">Response Time</p>
                <p className="text-sm font-medium text-blue-700">24-48 hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}


      {/* Service Details and Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 bg-white/80 backdrop-blur shadow-md">
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
              <span className="font-medium capitalize">{service.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Time:</span>
              <span className="font-medium">{service.time}</span>
            </div>
            {service.popular && (
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  Popular Service
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>


        <Card className="border-0 bg-white/80 backdrop-blur shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={handleVisitWebsite}
              disabled={!service.officialWebsite}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Official Website
            </Button>
            <Button 
              onClick={handleDownloadChecklist}
              variant="outline" 
              className="w-full border-green-200 hover:bg-green-50"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Checklist
            </Button>
            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-lg border border-orange-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Your Progress</span>
                <span className="text-sm font-bold text-orange-600">
                  {completedSteps.length}/{service.steps.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(completedSteps.length / service.steps.length) * 100}%` 
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-center">
                {completedSteps.length === service.steps.length 
                  ? '🎉 All steps completed!' 
                  : `${service.steps.length - completedSteps.length} steps remaining`}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>


      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t">
        <Link to={createPageUrl("Services")}>
          <Button variant="outline" className="gap-2 border-orange-200 hover:bg-orange-50">
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </Button>
        </Link>
        
        <div className="text-center">
          <p className="text-sm text-gray-500">Need assistance?</p>
          <p className="text-sm font-medium text-orange-600">Contact our support team</p>
        </div>

        <Button 
          onClick={handleVisitWebsite}
          disabled={!service.officialWebsite}
          className="gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
        >
          Get Started
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
