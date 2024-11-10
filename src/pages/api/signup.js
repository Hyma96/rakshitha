// src/pages/api/signup.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    // Replace this with your signup logic
    console.log('Signup request:', { name, email, password });
    res.status(200).json({ message: 'Signup successful!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
