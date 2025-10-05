import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../Components/utils/createPageUrl";
import { services } from "../Components/utils/serviceApi";
import { 
  Search as SearchIcon,
  Clock,
  ArrowRight,
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
import { Input } from "../Components/ui/input";
import { Card, CardContent } from "../Components/ui/card";
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

const popularSearches = [
  "DigiLocker",
  "Aadhaar Update",
  "PAN Card",
  "10th Marksheet",
  "12th Certificate",
  "Passport",
  "Driving License",
  "Ayushman Bharat",
  "EPF Withdrawal",
  "Income Certificate"
];

export default function SearchPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 2) {
      performSearch();
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  }, [searchTerm]);

  const performSearch = () => {
    setHasSearched(true);
    
    const results = services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by relevance (exact matches first, then partial matches)
    results.sort((a, b) => {
      const aExactMatch = a.name.toLowerCase().includes(searchTerm.toLowerCase());
      const bExactMatch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;
      
      // If both are exact matches or both are partial, sort by popularity
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      
      return 0;
    });

    setSearchResults(results);
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Search Government Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find the government service you need with our comprehensive search
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for services, documents, or procedures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
          />
        </div>
      </div>

      {/* Popular Searches */}
      {!hasSearched && (
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Popular Searches
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => handlePopularSearch(search)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors dark:bg-gray-800 dark:hover:bg-gray-500 dark:text-gray-300"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {hasSearched && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Search Results
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {searchResults.length} service{searchResults.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((service) => {
                const CategoryIcon = categoryIcons[service.category] || FileText;
                
                return (
                  <Card key={service.id} className="hover-lift cursor-pointer border-0 saffron-shadow bg-white/80 backdrop-blur dark:bg-gray-800/80 dark:hover:bg-gray-600/80">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center dark:from-orange-900 dark:to-green-900">
                          <CategoryIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        {service.popular && (
                          <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700">
                            Popular
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.time}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                          service.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {service.difficulty}
                        </div>
                      </div>

                      <Link to={createPageUrl(`ServiceGuide?id=${service.id}`)}>
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                          View Guide
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No services found matching "{searchTerm}"</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Try different keywords or browse our services</p>
              <div className="mt-6">
                <Link to={createPageUrl("Services")}>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Browse All Services
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
      {!hasSearched && (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Services")}>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Browse All Services
              </button>
            </Link>
            <Link to={createPageUrl("Home")}>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-orange-300 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:border-orange-500">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 