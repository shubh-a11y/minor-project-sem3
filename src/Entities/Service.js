export class Service {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.category = data.category;
    this.difficulty = data.difficulty;
    this.time = data.time;
    this.popular = data.popular;
    this.steps = data.steps || [];
  }

  static fromData(data) {
    return new Service(data);
  }

  getDifficultyColor() {
    switch (this.difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  getCategoryColor() {
    const colors = {
      documents: 'bg-blue-100 text-blue-700',
      identity: 'bg-orange-100 text-orange-700',
      education: 'bg-green-100 text-green-700',
      health: 'bg-red-100 text-red-700',
      finance: 'bg-purple-100 text-purple-700',
      transport: 'bg-indigo-100 text-indigo-700'
    };
    return colors[this.category] || 'bg-gray-100 text-gray-700';
  }
} 