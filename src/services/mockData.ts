export const mockLMEHistory = [
  {
    date: "14. November 2024",
    price: 2504.00,
    change: -10.00
  },
  {
    date: "13. November 2024",
    price: 2514.00,
    change: -16.00
  },
  {
    date: "12. November 2024",
    price: 2530.00,
    change: -25.00
  },
  {
    date: "11. November 2024",
    price: 2555.00,
    change: -45.50
  }
].map(item => ({
  date: String(item.date),
  price: Number(item.price),
  change: Number(item.change)
}));