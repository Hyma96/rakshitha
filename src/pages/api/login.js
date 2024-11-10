// src/pages/api/login.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Replace this with your login logic
    console.log('Login request:', { email, password });
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
