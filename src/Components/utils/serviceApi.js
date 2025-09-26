// Mock service data - in a real app, this would fetch from an API
export const services = [
  {
    id: 1,
    name: "DigiLocker Access",
    description: "Access your digital documents instantly",
    category: "documents",
    difficulty: "easy",
    time: "5 minutes",
    popular: true,
    steps: [
      "Visit digilocker.gov.in",
      "Sign in with your Aadhaar number",
      "Browse available documents",
      "Download or share as needed"
    ]
  },
  {
    id: 2,
    name: "Aadhaar Services",
    description: "Update, download, and verify your Aadhaar",
    category: "identity",
    difficulty: "easy",
    time: "10 minutes",
    popular: true,
    steps: [
      "Go to uidai.gov.in",
      "Select the service you need",
      "Enter your Aadhaar number",
      "Follow the verification process"
    ]
  },
  {
    id: 3,
    name: "PAN Card Application",
    description: "Apply for a new PAN card online",
    category: "identity",
    difficulty: "medium",
    time: "15 minutes",
    popular: true,
    steps: [
      "Visit nsdl.co.in or utiitsl.co.in",
      "Fill the online application form",
      "Upload required documents",
      "Pay the application fee"
    ]
  },
  {
    id: 4,
    name: "Educational Certificates",
    description: "Get your 10th, 12th, and degree certificates",
    category: "education",
    difficulty: "medium",
    time: "15 minutes",
    popular: false,
    steps: [
      "Visit the respective board website",
      "Enter your roll number and details",
      "Verify your information",
      "Download the certificate"
    ]
  },
  {
    id: 5,
    name: "Health Insurance Schemes",
    description: "Apply for Ayushman Bharat and state schemes",
    category: "health",
    difficulty: "medium",
    time: "20 minutes",
    popular: false,
    steps: [
      "Check eligibility on pmjay.gov.in",
      "Fill the application form",
      "Submit required documents",
      "Receive your health card"
    ]
  }
];

export const searchServices = (query) => {
  const searchTerm = query.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(searchTerm) ||
    service.description.toLowerCase().includes(searchTerm) ||
    service.category.toLowerCase().includes(searchTerm)
  );
};

export const getServiceById = (id) => {
  return services.find(service => service.id === parseInt(id));
};

export const getServicesByCategory = (category) => {
  return services.filter(service => service.category === category);
}; 