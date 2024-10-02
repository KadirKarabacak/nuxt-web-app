// data/products.ts

interface ProductTypes {
  id: number,
  name: string,
  price: number,
  image: string,
  category: string
  outOfOrder?: boolean
}

export const products : ProductTypes[] = [
    {
      id: 1,
      name: 'Popcorn',
      price: 50,
      image: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 2,
      name: 'Hamburger',
      price: 70,
      image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 3,
      name: 'Kimchi',
      price: 30,
      image: 'https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 4,
      name: 'Meat',
      price: 25,
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Meats"
    },
    {
      id: 5,
      name: 'Fried Chicken',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 6,
      name: 'Pizza',
      price: 80,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 7,
      name: 'Spagetti',
      price: 45,
      image: 'https://plus.unsplash.com/premium_photo-1691948106030-d5e76d461b14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Pasta"
    },
    {
      id: 8,
      name: 'Sushi',
      price: 60,
      image: 'https://plus.unsplash.com/premium_photo-1664472644125-f12aecccdd52?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 9,
      name: 'Kebap',
      price: 70,
      image: 'https://images.unsplash.com/photo-1672246586198-048ad2e19d74?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      outOfOrder: true,
      category: "Meats"
    },
    {
      id: 10,
      name: 'Salad',
      price: 25,
      image: 'https://plus.unsplash.com/premium_photo-1690561082029-0eb2ed65a09f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Salads"
    },
    {
      id: 11,
      name: 'Taco',
      price: 35,
      image: 'https://plus.unsplash.com/premium_photo-1678051141689-1f7a7861b3b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 12,
      name: 'Falafel',
      price: 40,
      image: 'https://plus.unsplash.com/premium_photo-1668618295153-e2d16f23b6f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 13,
      name: 'Pide',
      price: 30,
      image: 'https://images.unsplash.com/photo-1653982960203-c8361d7bed96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      outOfOrder: true,
      category: "Fast Food"
    },
    {
      id: 15,
      name: 'Simit',
      price: 5,
      image: 'https://images.unsplash.com/photo-1658740877401-d1c26165299c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 16,
      name: 'Paella',
      price: 90,
      image: 'https://plus.unsplash.com/premium_photo-1694790149322-e8f8957e01c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Fast Food"
    },
    {
      id: 17,
      name: 'Tiramisu',
      price: 45,
      image: 'https://images.unsplash.com/photo-1542326237-94b1c5a538d4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Sweet Food"
    },
    {
      id: 18,
      name: 'Cheesecake',
      price: 50,
      image: 'https://plus.unsplash.com/premium_photo-1667899298118-24a6cad326ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      outOfOrder: true,
      category: "Sweet Food"
    },
    {
      id: 19,
      name: 'Icecream',
      price: 20,
      image: 'https://plus.unsplash.com/premium_photo-1690440686714-c06a56a1511c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Sweet Food"
    },
    {
      id: 20,
      name: 'Baklava',
      price: 55,
      image: 'https://images.unsplash.com/photo-1620292760785-94e105bdaa8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Sweet Food"
    },
    {
      id: 21,
      name: 'Canada',
      price: 32,
      image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Pasta"
    },
    {
      id: 22,
      name: 'Pasta Viniyo',
      price: 32,
      image: 'https://plus.unsplash.com/premium_photo-1663851517398-9738881e5093?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Pasta"
    },
    {
      id: 23,
      name: 'Salad Coban',
      price: 32,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: "Salads"
    },
  ]
