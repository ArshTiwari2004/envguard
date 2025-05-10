export default function Pricing() {
    const tiers = [
      { name: 'OSS', price: 'Free', features: ['Basic Validation', 'CLI Tool'] },
      { name: 'Pro', price: '$9/mo', features: ['UI Dashboard', 'Team Support'] }
    ];
  
    return (
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-16">
        {tiers.map(tier => (
          <div key={tier.name} className="border rounded-lg p-6">
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <p className="text-3xl my-4">{tier.price}</p>
            <ul className="space-y-2">
              {tier.features.map(feat => (
                <li key={feat} className="flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  