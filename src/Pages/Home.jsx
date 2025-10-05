import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../Components/utils/createPageUrl";
import {
	FileText,
	CreditCard,
	GraduationCap,
	Heart,
	Search,
	ArrowRight,
	Users,
	Shield,
	Clock,
	Star,
	Eye,
} from "lucide-react";
import { Button } from "../Components/ui/button";
import { Card, CardContent } from "../Components/ui/card";
import { Badge } from "../Components/ui/badge";
import { useLanguage } from "../Components/contexts/LanguageContext";
import { useRecentlyViewed } from "../Components/hooks/useRecentlyViewed";
import { services } from "../Components/utils/serviceApi";

const featuredServices = [
	{
		name: "DigiLocker Access",
		description: "Access your digital documents instantly",
		category: "documents",
		icon: FileText,
		difficulty: "easy",
		time: "5 minutes",
		popular: true,
	},
	{
		name: "Aadhaar Services",
		description: "Update, download, and verify your Aadhaar",
		category: "identity",
		icon: CreditCard,
		difficulty: "easy",
		time: "10 minutes",
		popular: true,
	},
	{
		name: "Educational Certificates",
		description: "Get your 10th, 12th, and degree certificates",
		category: "education",
		icon: GraduationCap,
		difficulty: "medium",
		time: "15 minutes",
		popular: true,
	},
	{
		name: "Health Insurance Schemes",
		description: "Apply for Ayushman Bharat and state schemes",
		category: "health",
		icon: Heart,
		difficulty: "medium",
		time: "20 minutes",
		popular: false,
	},
];

const categories = [
	{
		name: "Documents",
		icon: FileText,
		count: 15,
		color: "bg-blue-100 text-blue-700",
	},
	{
		name: "Identity",
		icon: CreditCard,
		count: 8,
		color: "bg-orange-100 text-orange-700",
	},
	{
		name: "Education",
		icon: GraduationCap,
		count: 12,
		color: "bg-green-100 text-green-700",
	},
	{ name: "Health", icon: Heart, count: 9, color: "bg-red-100 text-red-700" },
];

export default function HomePage() {
	const { t } = useLanguage();
	const { recentlyViewed } = useRecentlyViewed();
	const recentlyViewedServices = services.filter((service) =>
		recentlyViewed.includes(service.id)
	);

	const stats = [
		{ label: t("statsTotalServices"), value: "50+", icon: FileText },
		{ label: t("statsLanguages"), value: "8", icon: Users },
		{ label: t("statsAvgTime"), value: "10 min", icon: Clock },
		{ label: t("statsSuccessRate"), value: "95%", icon: Star },
	];

	return (
		<div className="space-y-16">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
					<div className="text-center">
						<div className="mb-8">
							<Badge className="bg-orange-100 text-orange-700 border-orange-200 px-4 py-2 text-sm font-medium dark:bg-orange-900 dark:text-orange-300 dark:border-orange-700">
								🇮🇳 {t("madeForIndia")}
							</Badge>
						</div>

						<h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
							{t("heroTitle1")}
							<br />
							<span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
								{t("heroTitle2")}
							</span>
						</h1>

						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
							{t("heroSubtitle")}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link to={createPageUrl("Services")}>
								<Button
									size="lg"
									className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl hover-lift dark:hover:from-orange-500 dark:hover:to-orange-600"
								>
									{t("exploreServices")}
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
							</Link>

							<Link to={createPageUrl("Search")}>
								<Button
									variant="outline"
									size="lg"
									className="border-2 border-gray-300 hover:border-orange-300 px-8 py-3 rounded-xl hover-lift dark:border-gray-700 dark:hover:border-orange-500 dark:text-gray-300 dark:hover:bg-gray-500"
								>
									<Search className="mr-2 w-5 h-5" />
									{t("searchServices")}
								</Button>
							</Link>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
							{stats.map((stat) => (
								<div key={stat.label} className="text-center">
									<div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-3 dark:from-orange-900 dark:to-green-900">
										<stat.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
									</div>
									<div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
										{stat.value}
									</div>
									<div className="text-sm text-gray-600 dark:text-gray-400">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Recently Viewed */}
			{recentlyViewedServices.length > 0 && (
				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
							Recently Viewed
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Pick up where you left off.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{recentlyViewedServices.map((service) => (
							<Link
								key={service.id}
								to={createPageUrl(`ServiceGuide?id=${service.id}`)}
							>
								<Card className="h-full hover-lift cursor-pointer border-0 saffron-shadow bg-white/80 backdrop-blur dark:bg-gray-800/80 dark:hover:bg-gray-500/80">
									<CardContent className="p-6 flex flex-col">
										<div className="flex items-center justify-between mb-4">
											<div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center dark:from-orange-900 dark:to-green-900">
												<Eye className="w-6 h-6 text-orange-600 dark:text-orange-400" />
											</div>
										</div>

										<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
											{service.name}
										</h3>
										<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</section>
			)}

			{/* Featured Services */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
						{t("mostPopularServices")}
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{t("popularServicesSubtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{featuredServices.map((service) => (
						<Card
							key={service.name}
							className="h-full hover-lift cursor-pointer saffron-shadow bg-white/80 backdrop-blur dark:bg-gray-800/80 dark:hover:bg-gray-500/80 "
						>
							<CardContent className="p-6 flex flex-col">
								<div className="flex items-center justify-between mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center dark:from-orange-900 dark:to-green-900">
										<service.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
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

								<div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
									<div className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										{service.time}
									</div>
									<div
										className={`px-2 py-1 rounded-full text-xs font-medium ${
											service.difficulty === "easy"
												? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
												: service.difficulty === "medium"
												? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
												: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
										}`}
									>
										{service.difficulty}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Service Categories */}
			<section className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
						{t("browseByCategory")}
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{t("browseCategorySubtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{categories.map((category) => (
						<Link key={category.name} to={createPageUrl("Services")}>
							<Card className="hover-lift cursor-pointer border-0 green-shadow bg-white/80 backdrop-blur dark:bg-gray-800/80 dark:hover:bg-gray-500/80">
								<CardContent className="p-8 text-center">
									<div
										className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 dark:bg-opacity-20`}
									>
										<category.icon className="w-8 h-8" />
									</div>
									<h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
										{category.name}
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{category.count} services available
									</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</section>

			{/* Trust Indicators */}
			<section className="bg-gradient-to-r from-orange-50 to-green-50 py-16 dark:from-gray-800 dark:to-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
						{t("whyTrust")}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="space-y-4">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto saffron-shadow dark:bg-gray-700">
								<Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								{t("trustPrivacyTitle")}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{t("trustPrivacyDesc")}
							</p>
						</div>

						<div className="space-y-4">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto saffron-shadow dark:bg-gray-700">
								<Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								{t("trustMultilingualTitle")}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{t("trustMultilingualDesc")}
							</p>
						</div>

						<div className="space-y-4">
							<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto saffron-shadow dark:bg-gray-700">
								<FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
								{t("trustUpdatedTitle")}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{t("trustUpdatedDesc")}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
