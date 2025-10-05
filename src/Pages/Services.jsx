import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../Components/utils/createPageUrl";
import { services } from "../Components/utils/serviceApi";
import { 
  Search,
  Clock,
  Star,
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

const categoryColors = {
  documents: "bg-blue-100 text-blue-700 border-blue-200",
  identity: "bg-orange-100 text-orange-700 border-orange-200",
  education: "bg-green-100 text-green-700 border-green-200",
  health: "bg-red-100 text-red-700 border-red-200",
  employment: "bg-purple-100 text-purple-700 border-purple-200",
  welfare: "bg-pink-100 text-pink-700 border-pink-200",
  banking: "bg-indigo-100 text-indigo-700 border-indigo-200",
  tax: "bg-yellow-100 text-yellow-700 border-yellow-200"
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  useEffect(() => {
    filterServices();
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const filterServices = () => {
    let filtered = services;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(service => service.difficulty === selectedDifficulty);
    }

    setFilteredServices(filtered);
  };

  const categories = ["all", "documents", "identity", "education", "health", "employment", "welfare", "banking", "tax"];
  const difficulties = ["all", "easy", "medium", "hard"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Government Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find and access government services with step-by-step guidance
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const CategoryIcon = categoryIcons[service.category] || FileText;
          const categoryColor = categoryColors[service.category] || "bg-gray-100 text-gray-700 border-gray-200";
          
          return (
            <Card key={service.id} className="hover-lift cursor-pointer border-0 saffron-shadow bg-white/80 backdrop-blur dark:bg-gray-800/80 dark:hover:bg-gray-600/80">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${categoryColor} flex items-center justify-center dark:bg-opacity-20`}>
                    <CategoryIcon className="w-6 h-6" />
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

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No services found matching your criteria.</p>
        </div>
      )}
    </div>
  );
} 