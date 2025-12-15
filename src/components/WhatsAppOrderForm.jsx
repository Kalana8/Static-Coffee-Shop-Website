import { useState } from 'react';
import { menuItems } from '../data/menuData';
import { Send } from 'lucide-react';

const WhatsAppOrderForm = () => {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !item) {
      alert('Please fill in all required fields');
      return;
    }

    // TODO: Replace with actual phone number
    const phoneNumber = "+1234567890";
    const selectedMenuItem = menuItems.find(menuItem => menuItem.id === parseInt(item));
    const itemName = selectedMenuItem ? selectedMenuItem.name : item;
    
    const message = `Hi, my name is ${name}. I would like to order ${itemName} x ${quantity}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setName('');
    setItem('');
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-card shadow-card p-6 sm:p-8">
      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-espresso mb-6">
        Place Your Order
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-espresso mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-espresso/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-espresso"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="item" className="block text-sm font-medium text-espresso mb-2">
            Select Item *
          </label>
          <select
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
            className="w-full px-4 py-3 border border-espresso/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-espresso bg-white"
          >
            <option value="">Choose an item...</option>
            {menuItems.map((menuItem) => (
              <option key={menuItem.id} value={menuItem.id}>
                {menuItem.name} - {menuItem.price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-espresso mb-2">
            Quantity *
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            required
            className="w-full px-4 py-3 border border-espresso/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-espresso"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gold hover:bg-gold/90 text-espresso font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          Order via WhatsApp
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default WhatsAppOrderForm;

