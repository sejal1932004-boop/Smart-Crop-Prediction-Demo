const blogs = [
    {
      id: 1,
      title: "Best Crops for Organic Farming 🌱",
      date: "March 8, 2025",
      image: "/images/organic-farming.jpg",
      author: "John Doe",
      category: "Organic Farming",
      readingTime: "5 min read",
      views: 1523,  
      content: "Learn about the best crops suitable for organic farming and how they can boost yield...",
      fullContent: `Organic farming is a method of crop and livestock production that involves much more than choosing not to use pesticides, fertilizers, genetically modified organisms, antibiotics, and growth hormones. 
      Instead, it relies on ecological processes, biodiversity, and cycles adapted to local conditions rather than the use of inputs with adverse effects.
      Organic farming combines tradition, innovation, and science to benefit the shared environment and promote fair relationships and a good quality of life for all involved.`,
      keywords: ["organic farming", "sustainable agriculture", "eco-friendly farming"],
      references: ["https://organicfarming.org", "https://agriculture.com/organic"],
      faqs: [
        { question: "What are the benefits of organic farming?", answer: "It improves soil health and reduces pollution." },
        { question: "Which crops are best for organic farming?", answer: "Tomatoes, carrots, and lettuce are great choices." }
      ],
      relatedBlogs: [2, 3]
    },
    {
      id: 2,
      title: "AI in Agriculture 🤖",
      date: "March 7, 2025",
      image: "/images/ai-agriculture.jpg",
      author: "Jane Smith",
      category: "Technology",
      readingTime: "7 min read",
      views: 1128,  
      content: "Discover how artificial intelligence is transforming the agriculture industry...",
      fullContent: `Artificial Intelligence (AI) is playing a crucial role in agriculture by improving efficiency and productivity. AI-powered drones, sensors, and robots are being used to monitor crop health, detect pests, and even automate harvesting. 
      With machine learning models, farmers can predict weather conditions, soil health, and crop yields, helping them make informed decisions. AI-driven precision farming ensures optimal use of resources like water, fertilizers, and pesticides, leading to sustainable and profitable agriculture.`,
      keywords: ["AI in agriculture", "machine learning", "precision farming"],
      references: ["https://aiagriculture.com", "https://farmingtech.com/ai"],
      faqs: [
        { question: "How is AI used in farming?", answer: "AI helps with crop monitoring, pest detection, and precision irrigation." },
        { question: "What are the benefits of AI in agriculture?", answer: "It increases efficiency, reduces costs, and improves yield prediction." }
      ],
      relatedBlogs: [1, 3]
    },
    {
      id: 3,
      title: "Sustainable Farming Techniques 🌍",
      date: "March 5, 2025",
      image: "/images/sustainable-farming.jpg",
      author: "Emily Johnson",
      category: "Sustainability",
      readingTime: "6 min read",
      views: 987,  
      content: "Explore different sustainable farming methods to keep the environment safe while ensuring food security...",
      fullContent: `Sustainable farming is a holistic approach to farming that prioritizes long-term environmental health and productivity. Key practices include crop rotation, cover cropping, reduced tillage, and integrated pest management. 
      These methods help maintain soil fertility, conserve water, and reduce greenhouse gas emissions. Additionally, adopting organic farming techniques and agroforestry can further promote biodiversity and ecological balance. 
      Governments and NGOs worldwide are encouraging farmers to adopt sustainable farming methods through incentives and educational programs.`,
      keywords: ["sustainable farming", "eco-friendly agriculture", "green farming"],
      references: ["https://sustainablefarming.org", "https://environmentalfarming.com"],
      faqs: [
        { question: "What is the goal of sustainable farming?", answer: "To maintain environmental health while producing food efficiently." },
        { question: "How can farmers make their farming practices sustainable?", answer: "By using crop rotation, reducing pesticide use, and conserving water." }
      ],
      relatedBlogs: [1, 2]
    }
  ];
  
  export default blogs;
  