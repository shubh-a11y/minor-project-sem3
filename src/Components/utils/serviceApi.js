
export const services = [
  {
  id: 1,
  name: "DigiLocker Access",
  description: "Access your digital documents instantly through India's official digital document storage platform",
  category: "documents",
  difficulty: "easy",
  time: "5 minutes",
  popular: true,
  officialWebsite: "https://digilocker.gov.in",
  steps: [
  {
    text: "Visit the DigiLocker Website or Install the App",
    screenshot: "/images/digilocker_img/digilocker-step1.png",
    description: "Navigate to digilocker.gov.in on your web browser or download the official DigiLocker app from Google Play Store or Apple App Store"
  },
  {
    text: "Choose Your Preferred Language",
    screenshot: "/images/digilocker_img/digilocker-step2.png",
    description: "Select your preferred language from the available options (English, Hindi, or regional languages) for a better user experience"
  },
  {
    text: "If You Are a New User, Click on Get Started",
    screenshot: "/images/digilocker_img/digilocker-step3.png",
    description: "For first-time users, click on the 'Get Started' button on the homepage to begin the registration process"
  },
  {
    text: "If You Already Have an Account, Click on Sign In",
    screenshot: "/images/digilocker_img/digilocker-step4.png",
    description: "Existing users can directly click on 'Sign In' button and enter their username and password to access their account"
  },
  {
    text: "Else Click on Create Account",
    screenshot: "/images/digilocker_img/digilocker-step5.png",
    description: "New users should click on 'Create Account' or 'Sign Up' option to start creating a new DigiLocker account"
  },
  {
    text: "Enter Your Details",
    screenshot: "/images/digilocker_img/digilocker-step6.png",
    description: "Fill in your personal information including full name, date of birth, gender, and mobile number in the registration form"
  },
  {
    text: "Verify Yourself with an OTP",
    screenshot: "/images/digilocker_img/digilocker-step7.png",
    description: "Enter the 6-digit OTP (One-Time Password) sent to your registered mobile number to verify your phone number"
  },
  {
    text: "Verify Your Aadhaar",
    screenshot: "/images/digilocker_img/digilocker-step8.png",
    description: "Enter your 12-digit Aadhaar number to link your Aadhaar with DigiLocker for accessing authenticated government documents"
  },
  {
    text: "Verify Aadhaar OTP",
    screenshot: "/images/digilocker_img/digilocker-step9.png",
    description: "Enter the OTP sent to your Aadhaar-linked mobile number to complete the Aadhaar verification process"
  },
  {
    text: "The Home Page Appears",
    screenshot: "/images/digilocker_img/digilocker-step10.png",
    description: "After successful verification, you will be directed to your DigiLocker dashboard showing various sections and options"
  },
  {
    text: "Click on Verify Now Button to Verify Your Aadhaar",
    screenshot: "/images/digilocker_img/digilocker-step11.png",
    description: "To enable authentic document access, click on the 'Verify Now' or 'Complete Aadhaar Verification' button if prompted on the dashboard"
  },
  {
    text: "Enter Your Aadhaar Number",
    screenshot: "/images/digilocker_img/digilocker-step12.png",
    description: "Re-enter your Aadhaar number for full verification and to unlock access to all issued government documents"
  },
  {
    text: "Home Page with Your Verified Aadhaar Appears",
    screenshot: "/images/digilocker_img/digilocker-step13.png",
    description: "Once Aadhaar is fully verified, your dashboard will display a verification badge and grant you access to all authentic documents"
  },
  {
    text: "Go to Issued Documents Section to View All Your Issued Documents",
    screenshot: "/images/digilocker_img/digilocker-step14.png",
    description: "Click on 'Issued Documents' menu to access all your government-issued certificates like driving license, PAN card, education certificates, etc."
  }
],
  requiredDocuments: [
    {
      category: "Identity Verification",
      options: ["Aadhaar-linked Mobile Number", "Aadhaar Card Number"]
    }
  ],
  fees: {
    normal: "Free of cost"
  },
  processingTime: {
    normal: "Instant account creation"
  },
  helpline: "1800-3000-3468"
}
,
  {
  id: 2,
  name: "Aadhaar Services",
  description: "Update, download, and verify your Aadhaar through the official UIDAI portal",
  category: "identity",
  difficulty: "easy",
  time: "10 minutes",
  popular: true,
  officialWebsite: "https://uidai.gov.in",
  steps: [
    {
      text: "Visit UIDAI Official Website",
      screenshot: "/images/aadhaar_img/aadhaar-step1.png",
      description: "Go to the official UIDAI website at uidai.gov.in and select the service you need from the 'My Aadhaar' section"
    },
    {
      text: "Choose Your Service",
      screenshot: "/images/aadhaar_img/aadhaar-step2.png",
      description: "Select from available services like Download Aadhaar, Update Address, Verify Aadhaar, or Check Update Status"
    },
    {
      text: "Enter Aadhaar Details",
      screenshot: "/images/aadhaar_img/aadhaar-step3.png",
      description: "Enter your 12-digit Aadhaar number and complete the captcha verification to proceed with the selected service"
    },
    {
      text: "Verify with OTP",
      screenshot: "/images/aadhaar_img/aadhaar-step4.png",
      description: "Click 'Send OTP' and enter the verification code received on your registered mobile number"
    },
    {
      text: "Access myAadhaar Portal",
      screenshot: "/images/aadhaar_img/aadhaar-step5.png",
      description: "After OTP verification, you'll be logged into the secure myAadhaar portal to access your services"
    },
    {
      text: "Update Information (if applicable)",
      screenshot: "/images/aadhaar_img/aadhaar-step6.png",
      description: "For updates, select the field to modify (address, mobile, email), enter new information and upload supporting documents"
    },
    {
      text: "Make Payment (for updates)",
      screenshot: "/images/aadhaar_img/aadhaar-step7.png",
      description: "Pay the applicable fee of ₹50 for demographic updates using online payment methods"
    },
    {
      text: "Download or Track Status",
      screenshot: "/images/aadhaar_img/aadhaar-step8.png",
      description: "Download your Aadhaar PDF (for download service) or note the URN number to track update status"
    }
  ],
  requiredDocuments: [
    {
      category: "For Address Update",
      options: ["Proof of Address (any valid document)", "Aadhaar Number", "Registered Mobile Number"]
    },
    {
      category: "For Download",
      options: ["Aadhaar Number or Enrollment ID", "Registered Mobile Number or Email"]
    }
  ],
  fees: {
    download: "Free",
    updates: "₹50 per update"
  },
  processingTime: {
    download: "Instant",
    updates: "90 days for address update"
  },
  helpline: "1947"
}
,
  {
  id: 3,
  name: "PAN Card Application",
  description: "Apply for a new PAN card online through NSDL or UTIITSL portals",
  category: "identity",
  difficulty: "medium",
  time: "15 minutes",
  popular: true,
  officialWebsite: "https://www.onlineservices.nsdl.co.in/paam/endUserRegisterContact.html",
  steps: [
    {
      text: "Visit NSDL or UTIITSL Website",
      screenshot: "/images/pan_img/pan-step1.png",
      description: "Go to either NSDL (onlineservices.nsdl.co.in) or UTIITSL (pan.utiitsl.com) official website for PAN application"
    },
    {
      text: "Select New PAN Application",
      screenshot: "/images/pan_img/pan-step2.png",
      description: "Click on 'Apply for New PAN Card (Form 49A)' for Indian citizens or choose appropriate category"
    },
    {
      text: "Choose Application Mode",
      screenshot: "/images/pan_img/pan-step3.png",
      description: "Select either 'Digital Mode' for completely online process or 'Physical Mode' if you need to submit documents physically"
    },
    {
      text: "Fill Personal Details",
      screenshot: "/images/pan_img/pan-step4.png",
      description: "Complete Form 49A with personal information including name, father's name, date of birth, and address details"
    },
    {
      text: "Enter Communication Details",
      screenshot: "/images/pan_img/pan-step5.png",
      description: "Provide your current address, mobile number, email ID, and select the AO (Assessing Officer) code for your area"
    },
    {
      text: "Upload Required Documents",
      screenshot: "/images/pan_img/pan-step6.png",
      description: "Upload scanned copies of proof of identity, address, and date of birth documents as per the specified requirements"
    },
    {
      text: "Review and Submit",
      screenshot: "/images/pan_img/pan-step7.png",
      description: "Carefully review all entered information and uploaded documents before submitting the application form"
    },
    {
      text: "Make Payment",
      screenshot: "/images/pan_img/pan-step8.png",
      description: "Pay the application fee online using credit/debit card, net banking, or generate challan for offline payment"
    },
    {
      text: "Download Acknowledgement",
      screenshot: "/images/pan_img/pan-step9.png",
      description: "After successful payment, download the acknowledgement receipt containing your application reference number"
    },
    {
      text: "Track Application Status",
      screenshot: "/images/pan_img/pan-step10.png",
      description: "Use the acknowledgement number to track your PAN card application status on the respective portal"
    }
  ],
  requiredDocuments: [
    {
      category: "Proof of Identity",
      options: ["Aadhaar Card", "Voter ID", "Driving License", "Passport"]
    },
    {
      category: "Proof of Address",
      options: ["Aadhaar Card", "Utility Bills", "Bank Statement", "Ration Card"]
    },
    {
      category: "Proof of Date of Birth",
      options: ["Birth Certificate", "School Certificate", "Passport", "Aadhaar Card"]
    }
  ],
  fees: {
    normal: "₹117 (including GST)",
    correction: "₹117 (including GST)"
  },
  processingTime: {
    normal: "15-20 working days"
  },
  helpline: "020-27218080 (NSDL) / 020-40408080 (UTIITSL)"
}
,
  {
  id: 4,
  name: "Educational Certificates",
  description: "Access your 10th, 12th, and degree certificates through DigiLocker NAD integration",
  category: "education",
  difficulty: "medium",
  time: "15 minutes",
  popular: false,
  officialWebsite: "https://nad.gov.in",
  steps: [
    {
      text: "Register on DigiLocker",
      screenshot: "/images/education_img/education-step1.png",
      description: "Create a DigiLocker account using your Aadhaar-linked mobile number at digilocker.gov.in"
    },
    {
      text: "Complete e-KYC Verification",
      screenshot: "/images/education_img/education-step2.png",
      description: "Complete your profile with Aadhaar details for e-KYC verification to access NAD services"
    },
    {
      text: "Go to Issued Documents",
      screenshot: "/images/education_img/education-step3.png",
      description: "Navigate to the 'Issued Documents' section in your DigiLocker dashboard to find educational certificates"
    },
    {
      text: "Search Your Institution",
      screenshot: "/images/education_img/education-step4.png",
      description: "Find your school, college, or university from the list of NAD-partnered educational institutions"
    },
    {
      text: "Enter Academic Details",
      screenshot: "/images/education_img/education-step5.png",
      description: "Provide your roll number, registration number, year of passing, and course details as they appear in records"
    },
    {
      text: "Verify and Link Documents",
      screenshot: "/images/education_img/education-step6.png",
      description: "The system will verify your details with the institution's records and link your certificates to your account"
    },
    {
      text: "Access Your Certificates",
      screenshot: "/images/education_img/education-step7.png",
      description: "Once linked, your verified academic certificates will appear in the 'Issued Documents' section"
    },
    {
      text: "Download or Share",
      screenshot: "/images/education_img/education-step8.png",
      description: "Download your digitally signed certificates or share them securely using DigiLocker's sharing feature"
    }
  ],
  requiredDocuments: [
    {
      category: "For Verification",
      options: ["Aadhaar Card", "Academic Roll Number/Registration Number", "Year of Passing"]
    }
  ],
  fees: {
    normal: "Free of cost"
  },
  processingTime: {
    normal: "Instant (if institution has uploaded to NAD)"
  },
  helpline: "1800-3000-3468 (DigiLocker)"
}
,
{
  id: 5,
  name: "Health Insurance Schemes",
  description: "Apply for Ayushman Bharat PMJAY and state health insurance schemes online",
  category: "health",
  difficulty: "medium",
  time: "20 minutes",
  popular: false,
  officialWebsite: "https://pmjay.gov.in",
  steps: [
    {
      text: "Visit PMJAY Official Website",
      screenshot: "/images/health_img/health-step1.png",
      description: "Go to the official Pradhan Mantri Jan Arogya Yojana website at pmjay.gov.in"
    },
    {
      text: "Check Your Eligibility",
      screenshot: "/images/health_img/health-step2.png",
      description: "Click on 'Am I Eligible' button and enter your mobile number with captcha to check eligibility status"
    },
    {
      text: "Enter Location Details",
      screenshot: "/images/health_img/health-step3.png",
      description: "Select your state and district from the dropdown menus to search in the beneficiary database"
    },
    {
      text: "Search Your Family",
      screenshot: "/images/health_img/health-step4.png",
      description: "Search using your name, mobile number, HHID number, or ration card number to find your family details"
    },
    {
      text: "Verify Eligibility Status",
      screenshot: "/images/health_img/health-step5.png",
      description: "Check if your name appears in the eligible beneficiary list for the PMJAY scheme"
    },
    {
      text: "Get HHID Details",
      screenshot: "/images/health_img/health-step6.png",
      description: "If eligible, click 'Get Details' to receive SMS with your HHID number and RSBY URN information"
    },
    {
      text: "Visit Card Creation Center",
      screenshot: "/images/health_img/health-step7.png",
      description: "Locate and visit the nearest Card Creation Agency or empanelled hospital for beneficiary identification"
    },
    {
      text: "Submit Required Documents",
      screenshot: "/images/health_img/health-step8.png",
      description: "Provide valid photo ID proofs for all family members for beneficiary identification and verification"
    },
    {
      text: "Complete Biometric Registration",
      screenshot: "/images/health_img/health-step9.png",
      description: "Complete biometric capture (fingerprints, photo) at the registration center for all eligible family members"
    },
    {
      text: "Receive Ayushman Card",
      screenshot: "/images/health_img/health-step10.png",
      description: "After verification and approval, receive your Ayushman Bharat card for accessing healthcare benefits"
    }
  ],
  requiredDocuments: [
    {
      category: "Identity Proof",
      options: ["Aadhaar Card", "Voter ID", "Driving License", "Any Government Photo ID"]
    },
    {
      category: "Address Proof",
      options: ["Aadhaar Card", "Ration Card", "Utility Bills", "Bank Statement"]
    },
    {
      category: "Family Details",
      options: ["SECC 2011 Database Entry", "RSBY Card (if applicable)", "BPL Card"]
    }
  ],
  fees: {
    normal: "Free of cost"
  },
  processingTime: {
    normal: "Same day (subject to verification)"
  },
  helpline: "14555"
}
,
  {
  id: 6,
  name: "Passport Application",
  description: "Apply for a new passport online through the official Passport Seva Portal",
  category: "identity",
  difficulty: "hard",
  time: "45 minutes",
  popular: true,
  officialWebsite: "https://passportindia.gov.in",
  steps: [
    {
      text: "Visit Official Passport Seva Portal",
      screenshot: "/images/passport_img/passport-step1.png",
      description: "Navigate to the official government website at passportindia.gov.in and familiarize yourself with the homepage layout"
    },
    {
      text: "Register as New User",
      screenshot: "/images/passport_img/passport-step2.1.png", 
      description: "Click on 'Register' button in the navigation menu to create a new user account with your personal details"
    },
    {
      text: "Complete User Registration Form",
      screenshot: "/images/passport_img/passport-step3_1.png",
      description: "Fill in required details including full name, email ID, login ID, and password. Email confirmation is mandatory for registration"
    },
    {
      text: "Login to Your Account", 
      screenshot: "/images/passport_img/passport-step4.png",
      description: "Enter your User ID, password, and captcha characters to access the Passport Seva Portal dashboard"
    },
    {
      text: "Select Apply for Fresh Passport",
      screenshot: "/images/passport_img/passport-step5.png", 
      description: "Click on 'Apply for Fresh Passport/Reissue of Passport' link from the main menu options"
    },
    {
      text: "Choose Online Application Form",
      screenshot: "/images/passport_img/passport-step6.png",
      description: "Select the highlighted link to fill the application form online rather than downloading offline forms"
    },
    {
      text: "Fill Passport Type Information", 
      screenshot: "/images/passport_img/passport-step7.png",
      description: "Enter passport type details including booklet type (36/60 pages) and validity period preferences"
    },
    {
      text: "Complete Applicant Details",
      screenshot: "/images/passport_img/passport-step8.png", 
      description: "Fill personal information including name, date of birth, place of birth, and physical characteristics"
    },
    {
      text: "Enter Family Details",
      // screenshot: "/images/passport-step9.png",
      description: "Provide father's and mother's information including names, nationality, and passport details if applicable"
    },
    {
      text: "Fill Present Address Details",
      // screenshot: "/images/passport-step10.png",
      description: "Enter complete current address information including house number, street, city, state, and PIN code"
    },
    {
      text: "Add Emergency Contact Information", 
      // screenshot: "/images/passport-step11.png",
      description: "Provide emergency contact person details including name, address, and relationship to applicant"
    },
    {
      text: "Enter References Information",
      // screenshot: "/images/passport-step12.png", 
      description: "Fill details of two references who can verify your identity and background information"
    },
    {
      text: "Submit Application Form",
      screenshot: "/images/passport_img/passport-step13.png",
      description: "Review all entered information, select 'I Agree' checkbox, and click 'Submit Form' to proceed"
    },
    {
      text: "Schedule Appointment", 
      screenshot: "/images/passport_img/passport-step14.png",
      description: "Click 'Pay and Schedule Appointment' to book your visit to a Passport Seva Kendra"
    },
    {
      text: "Select Passport Seva Kendra",
      screenshot: "/images/passport_img/passport-step15.png",
      description: "Choose your preferred PSK location from available options and check appointment availability"
    },
    {
      text: "Choose Appointment Date",
      screenshot: "/images/passport_img/passport-step16.png", 
      description: "Select an available date and time slot from the calendar display for your PSK visit"
    },
    {
      text: "Make Online Payment",
      screenshot: "/images/passport_img/passport-step17.png",
      description: "Pay application fee using credit/debit card, internet banking, or SBI challan payment options"
    },
    {
      text: "Complete Payment Transaction", 
      screenshot: "/images/passport_img/passport-step18.png",
      description: "Follow payment gateway instructions and complete the secure transaction process"
    },
    {
      text: "Print Application Receipt",
      screenshot: "/images/passport_img/passport-step19.png",
      description: "Download and print your application receipt containing ARN number and appointment details"
    },
    {
      text: "Prepare Required Documents",
      // screenshot: "/images/passport-step20.png", 
      description: "Gather original documents including proof of identity, address, date of birth, and passport-size photographs"
    },
    {
      text: "Visit Passport Seva Kendra",
      // screenshot: "/images/passport-step21.png",
      description: "Attend your scheduled appointment with all required documents for verification and biometric capture"
    },
    {
      text: "Track Application Status",
      // screenshot: "/images/passport-step22.png",
      description: "Monitor your application progress online using the file number and track delivery status"
    }
  ],
  requiredDocuments: [
    {
      category: "Proof of Identity",
      options: ["Aadhaar Card", "Voter ID", "PAN Card", "Driving License", "Government ID"]
    },
    {
      category: "Proof of Address", 
      options: ["Aadhaar Card", "Voter ID", "Utility Bills", "Bank Statement", "Rent Agreement"]
    },
    {
      category: "Proof of Date of Birth",
      options: ["Birth Certificate", "School Certificate", "10th Marksheet", "Aadhaar Card"]
    }
  ],
  fees: {
    normal: "₹1,500 (36 pages) / ₹2,000 (60 pages)",
    tatkaal: "₹3,500 (36 pages) / ₹4,000 (60 pages)"
  },
  processingTime: {
    normal: "30-45 days",
    tatkaal: "1-3 days"
  },
  helpline: "1800-258-1800"
},

{
  id: 7,
  name: "Caste Certificate Application",
  description: "Apply online for a Caste Certificate (SC/ST/OBC) through your state's government portal.",
  category: "identity",
  difficulty: "medium",
  time: "20 minutes",
  popular: true,
  officialWebsite: "https://services.india.gov.in/service/detail/application-for-caste-certificate", // Replace with relevant state portal if needed
  steps: [
  {
    text: "Visit the State Caste Certificate Portal",
    screenshot: "/images/caste_img/caste-step1.png",
    description: "Go to your respective state's caste certificate application portal, usually available through the state e-district or service plus portal."
  },
  {
    text: "Register/Log in to Portal",
    screenshot: "/images/caste_img/caste-step2.png", 
    description: "Sign up for a new account using your email/mobile, or log in if already registered."
  },
  {
    text: "Click on New User",
    screenshot: "/images/caste_img/caste-step3.png",
    description: "Select the 'New User Registration' option if you are applying for the first time on the portal."
  },
  {
    text: "Fill Registration Details",
    screenshot: "/images/caste_img/caste-step4.png",
    description: "Complete the registration form with your personal details including name, mobile number, email ID, and create a secure password."
  },
  {
    text: "Select Caste Certificate",
    screenshot: "/images/caste_img/caste-step5.png",
    description: "Choose 'Caste Certificate' from the list of available certificate services on the dashboard."
  },
  {
    text: "Fill the Required Information",
    screenshot: "/images/caste_img/caste-step6.png",
    description: "Enter all mandatory details including applicant's name, father's/mother's name, date of birth, address, caste/community details, and purpose of certificate."
  },
  {
    text: "Photo of Aadhaar Should be Double Sided as Shown",
    screenshot: "/images/caste_img/caste-step7.png",
    description: "Upload both front and back sides of your Aadhaar card as separate documents. Ensure both sides are clearly visible and readable."
  },
  {
    text: "Review Your Information",
    screenshot: "/images/caste_img/caste-step8.png",
    description: "Carefully review all entered information and uploaded documents before proceeding to payment. Make corrections if needed."
  },
  {
    text: "Pay the Fees",
    screenshot: "/images/caste_img/caste-step9.png",
    description: "Proceed to payment section and select your preferred payment method to pay the applicable fees for the certificate."
  },
  {
    text: "Payment Gateway Looks Like This",
    screenshot: "/images/caste_img/caste-step10.png",
    description: "Complete the payment through the secure payment gateway using credit/debit card, net banking, or UPI options."
  },
  {
    text: "When Your Certificate is Ready Either You Will Receive a Mail or Message or You Can Go to the Same Portal and Click on My Applications",
    screenshot: "/images/caste_img/caste-step11.png",
    description: "After processing is complete, you will receive notification via SMS/email, or you can check the portal by logging in and clicking 'My Applications'."
  },
  {
    text: "Click on Caste Certificate",
    screenshot: "/images/caste_img/caste-step12.png",
    description: "In the 'My Applications' section, locate and click on your caste certificate application to view its status."
  },
  {
    text: "Select Your Certificate",
    screenshot: "/images/caste_img/caste-step13.png",
    description: "Click on the approved certificate entry to access the download option for your digitally signed caste certificate."
  },
  {
    text: "Make Sure Your Pop-up is Enabled in the Browser",
    screenshot: "/images/caste_img/caste-step14.png",
    description: "Enable pop-ups in your browser settings before downloading. The certificate will open in a new window for download and printing."
  }
],
  requiredDocuments: [
    {
      category: "Proof of Identity",
      options: ["Aadhaar Card", "Voter ID", "School/College Certificate"]
    },
    {
      category: "Proof of Address", 
      options: ["Aadhaar Card", "Ration Card", "Utility Bill"]
    },
    {
      category: "Proof of Caste",
      options: ["Caste/Community Certificate of parents", "School Leaving Certificate mentioning caste", "Affidavit from local authority"]
    },
    {
      category: "Photograph",
      options: ["Recent passport size color photo"]
    }
  ],
  fees: {
    normal: "Generally Free (varies by state); Nominal charges may apply in some states"
  },
  processingTime: {
    normal: "7-21 days (varies by state)"
  },
  helpline: "Contact your state e-district or local tehsil office helpline"
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
// Progress tracking utilities
export const getServiceProgress = (serviceId) => {
  const progress = localStorage.getItem(`service_progress_${serviceId}`);
  return progress ? JSON.parse(progress) : { completedSteps: [], lastAccessed: null };
};

export const updateServiceProgress = (serviceId, completedSteps) => {
  const progress = {
    completedSteps,
    lastAccessed: new Date().toISOString()
  };
  localStorage.setItem(`service_progress_${serviceId}`, JSON.stringify(progress));
};

export const toggleStepCompletion = (serviceId, stepIndex) => {
  const progress = getServiceProgress(serviceId);
  const completedSteps = [...progress.completedSteps];
  
  if (completedSteps.includes(stepIndex)) {
    const index = completedSteps.indexOf(stepIndex);
    completedSteps.splice(index, 1);
  } else {
    completedSteps.push(stepIndex);
  }
  
  updateServiceProgress(serviceId, completedSteps);
  return completedSteps;
};

// PDF generation utility
export const generateServicePDF = async (service) => {
  try {
    // Dynamic import to avoid bundling issues
    const { jsPDF } = await import('jspdf');
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 30;

    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text(service.name, margin, yPosition);
    yPosition += 15;

    // Underline
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // Service details
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    
    const details = [
      `Description: ${service.description}`,
      `Category: ${service.category.charAt(0).toUpperCase() + service.category.slice(1)}`,
      `Difficulty: ${service.difficulty.charAt(0).toUpperCase() + service.difficulty.slice(1)}`,
      `Estimated Time: ${service.time}`,
      `Official Website: ${service.officialWebsite || 'Not available'}`
    ];

    details.forEach(detail => {
      const lines = doc.splitTextToSize(detail, maxWidth);
      doc.text(lines, margin, yPosition);
      yPosition += lines.length * 6;
    });

    yPosition += 10;

    // Steps section
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Step-by-Step Instructions:', margin, yPosition);
    yPosition += 10;

    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');

    service.steps.forEach((step, index) => {
      const stepText = typeof step === 'string' ? step : step.text;
      const stepContent = `${index + 1}. ${stepText}`;
      
      // Check if we need a new page
      if (yPosition > doc.internal.pageSize.height - 30) {
        doc.addPage();
        yPosition = 30;
      }

      const lines = doc.splitTextToSize(stepContent, maxWidth);
      doc.text(lines, margin, yPosition);
      yPosition += lines.length * 6 + 5;

      // Add description if available
      if (step.description) {
        doc.setFont(undefined, 'italic');
        const descLines = doc.splitTextToSize(`   ${step.description}`, maxWidth);
        doc.text(descLines, margin, yPosition);
        yPosition += descLines.length * 5 + 3;
        doc.setFont(undefined, 'normal');
      }
    });

    // Footer
    yPosition += 15;
    if (yPosition > doc.internal.pageSize.height - 30) {
      doc.addPage();
      yPosition = 30;
    }
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.text(`Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`, margin, yPosition);

    // Save the PDF
    const fileName = `${service.name.replace(/[^a-zA-Z0-9]/g, '_')}_checklist.pdf`;
    doc.save(fileName);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback to text file
    generateServiceTextFile(service);
  }
};

// Fallback text file generation
const generateServiceTextFile = (service) => {
  const steps = service.steps.map((step, index) => {
    const stepText = typeof step === 'string' ? step : step.text;
    const description = step.description ? `\n   ${step.description}` : '';
    return `${index + 1}. ${stepText}${description}`;
  }).join('\n\n');

  const content = `${service.name}
${'='.repeat(service.name.length)}

Description: ${service.description}
Category: ${service.category}
Difficulty: ${service.difficulty}
Estimated Time: ${service.time}
Official Website: ${service.officialWebsite || 'Not available'}

Step-by-Step Instructions:
${steps}

Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${service.name.replace(/[^a-zA-Z0-9]/g, '_')}_checklist.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};