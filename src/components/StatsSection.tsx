const StatsSection = () => {
  const stats = [
    {
      number: "₹82,80,80,808",
      label: "Funds being Managed",
      color: "text-orange-brand"
    },
    {
      number: "8,18,28,887",
      label: "Successfully completed",
      color: "text-blue-600"
    },
    {
      number: "82,82,808",
      label: "Channel partners",
      color: "text-green-600"
    },
    {
      number: "100%",
      label: "Fully legally compliant",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-4`}>
                {stat.number}
              </div>
              <div className="text-text-light text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;